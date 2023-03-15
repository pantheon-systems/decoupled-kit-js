import chalk from 'chalk';
import { diffLines, diffJson } from 'diff';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import path from 'path';
import { dedupeTemplates } from '../utils/dedupeTemplates';
import { isString } from '../types';
import type { QuestionCollection } from 'inquirer';
import type { Action, MergedPaths } from '../types';
import { rootDir } from '..';
/**
 * 1. dedupe the templates, favoring addons in case 2 paths collide
 * 2. check if the destination path exists or create it. (path to destination + template name minus .hbs) example: ./test/myTest.js
 * 3. check the diff against the new file and the rendered template or file to copy if source is not a handlebars template
 * 4. if the --force option is not defined, ask the user if we should overwrite this file (yes to all, yes, skip, abort) if force is true we write everything.
 * 5. skip or write the file based on input. If yes to all, set force to true.
 */
export const addWithDiff: Action = async ({
	data,
	templateData,
	handlebars,
}) => {
	if (!isString(data.outDir) || !data.outDir)
		throw new Error('outDir is not valid');
	if (!templateData || !templateData.length)
		throw new Error('templateData is missing from the call to this action.');
	if (!handlebars || !('template' in handlebars))
		throw new Error('handlebars is missing from the call to this action.');

	const outcomes: { [key: string]: string[] } = {
		written: [],
		skipped: [],
		sameContent: [],
	};

	const filesToCopyRegex =
		/(gif|jpg|jpeg|tiff|png|svg|ashx|ico|pdf|jar|eot|woff|ttf|woff2)$/;
	const templatesToRender: MergedPaths = await dedupeTemplates(templateData);
	const destinationDir = path.resolve(process.cwd(), data.outDir);

	for await (const template of Object.keys(templatesToRender)) {
		// the template directory
		const templatesBaseDir = templatesToRender[template].base;
		// set the root dir
		let root: string;
		if (isString(data?.templateRootDir)) {
			root = data.templateRootDir;
		} else {
			root = rootDir;
		}
		// the path to the template to be rendered
		const templatePath = path.join(
			root,
			'templates',
			templatesBaseDir,
			template,
		);
		// the destination of the file that is to be rendered
		let target = path.join(destinationDir, template);
		// sourceContents will be a rendered template if the source file is a handlebars template
		// otherwise we will use the contents of that file with no rendering
		let sourceContents: string;
		// rename gitignore to .gitignore.
		// to work around npm 'feature' which removes .gitignore
		// from published tarballs
		if (templatePath.endsWith('gitignore')) {
			target = target.replace(/gitignore$/, '.gitignore');
		}
		if (templatePath.endsWith('.hbs')) {
			target = target.replace(/\.hbs$/, '');
			// get the contents of the template
			const temp = handlebars.compile(fs.readFileSync(templatePath, 'utf-8'));
			sourceContents = temp(data);
		} else {
			sourceContents = fs.readFileSync(templatePath, 'utf-8');
		}
		const fileDidExist = fs.existsSync(target);
		// ensure the file exists or readFileSync errors.
		// We could swallow the error with a try/catch, but this feels a bit cleaner to me.
		!fileDidExist && fs.createFileSync(target);
		if (!data.force) {
			// get the contents of file at 'target' if there is any
			const targetContents = fs.readFileSync(target, 'utf-8');
			// if the target and source are the same, skip diffing or writing the file
			if (targetContents === sourceContents) {
				outcomes.sameContent.push(target);
				continue;
			}
			// do the diff
			const changes = target.endsWith('.json')
				? diffJson(targetContents, sourceContents)
				: filesToCopyRegex.test(templatePath)
				? []
				: diffLines(targetContents, sourceContents);
			console.log(chalk.bold(`Listing changes for ${chalk.magenta(target)}:`));
			changes.forEach((change) => {
				const color = change.added
					? chalk.green
					: change.removed
					? chalk.red
					: chalk.gray;
				const prefix = change.added ? '+' : change.removed ? '-' : '=';
				change.value.split('\n').forEach((value) => {
					if (!value) return;
					console.log(color(`${prefix} ${value}`));
				});
			});
			const q: QuestionCollection<{ writeFile: string }> = {
				type: 'list',
				name: 'writeFile',
				choices: ['yes', 'skip', 'yes to all', 'abort'],
				message: `About to overwrite ${chalk.magenta(
					target,
				)} with the changes listed above.\n${chalk.yellow(
					'Would you like to continue?',
				)}`,
			};

			const answer = await inquirer.prompt(q);

			// If the target file matches the filesToCopyRegex, the file is binary
			// and we copy it over without a diff
			switch (answer.writeFile) {
				case 'yes':
					filesToCopyRegex.test(target)
						? fs.writeFileSync(target, sourceContents)
						: fs.copyFileSync(templatePath, target);
					outcomes.written.push(target);
					break;
				case 'skip':
					// if we created the file, delete it
					// so we don't leave behind empty files
					!fileDidExist && fs.unlinkSync(target);
					outcomes.skipped.push(target);
					break;
				case 'yes to all':
					data.force = true;
					outcomes.written.push(target);
					filesToCopyRegex.test(target)
						? fs.copyFileSync(templatePath, target)
						: fs.writeFileSync(target, sourceContents, 'utf-8');
					break;
				case 'abort':
					data.silent || console.log(chalk.red('Aborting!'));
					!fileDidExist && fs.unlinkSync(target);
					return process.exit();
				default:
					break;
			}
		} else {
			// if force is true, write the file no questions asked.
			filesToCopyRegex.test(target)
				? fs.copyFileSync(templatePath, target)
				: fs.writeFileSync(target, sourceContents, 'utf-8');
			outcomes.written.push(target);
		}
	}

	data.silent ||
		console.log(`
	Written: 
	\t${chalk.green(outcomes.written.join('\n\t\t') || 'none')}
	Skipped: 
	\t${chalk.yellow(outcomes.skipped.join('\n\t\t') || 'none')}
	Skipped (same content): 
	\t${chalk.gray(outcomes.sameContent.join('\n\t\t') || 'none')}
	`);
	return `${chalk.cyan('addWithDiff:')} ${chalk.green('success')}`;
};

import chalk from 'chalk';
import { diffLines, diffJson } from 'diff';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import klaw from 'klaw';
import path from 'path';
import type { QuestionCollection } from 'inquirer';
import type { CustomActionFn, AddWithDiffActionConfig } from '../types';

export const addWithDiff: CustomActionFn<AddWithDiffActionConfig> = async (
	answers,
	config: AddWithDiffActionConfig,
	plop,
) => {
	/**
	 * 1. get path to the templates
	 * 2. klaw through templates (outputs each path in the directory given)
	 * 3. check if the destination path exists or create it. (path to destination + template name minus .hbs) example: ./test/myTest.js
	 * 4. check the diff against the new file and the rendered template or file to copy if source is not a handlebars template
	 * 5. if the --force option is not defined, ask the user if we should overwrite this file (yes to all, yes, skip, abort) if force is true we write everything.
	 * 6. skip or write the file based on input. If yes to all, set force to true.
	 */

	const filesToCopyRegex =
		/(gif|jpg|jpeg|tiff|png|svg|ashx|ico|pdf|jar|eot|woff|ttf|woff2)$/;
	const outcomes: { [key: string]: string[] } = {
		written: [],
		skipped: [],
		sameContent: [],
	};
	const templateDir: string = path.resolve(
		plop.getPlopfilePath(),
		config.templates,
	);
	const destinationDir = plop.renderString(config.path, answers);

	for await (const file of klaw(templateDir)) {
		const targetPath = file.path.replace(templateDir, '').replace(/^\//, '');
		let target = path.resolve(process.cwd(), destinationDir, targetPath);
		if (file.stats.isDirectory()) {
			fs.ensureDirSync(path.resolve(target));
			continue;
		}
		const fileName = path.basename(file.path);
		// sourceContents will be a rendered template if the source file is a handlebars template
		// otherwise we will use the contents of that file with no rendering
		let sourceContents: string;
		if (fileName.endsWith('.hbs')) {
			target = target.replace(/\.hbs$/, '');
			// get the contents of the template
			sourceContents = plop.renderString(
				fs.readFileSync(file.path, 'utf-8'),
				answers,
			);
		} else {
			sourceContents = fs.readFileSync(file.path, 'utf-8');
		}
		if (!answers.force ?? !config.force) {
			const fileDidExist = fs.existsSync(target);
			// ensure the file exists or readFileSync errors.
			// We could swallow the error with a try/catch, but this feels a bit cleaner to me.
			!fileDidExist && fs.createFileSync(target);
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
				: filesToCopyRegex.test(target)
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

			switch (answer.writeFile) {
				case 'yes':
					filesToCopyRegex.test(target)
						? fs.copyFileSync(file.path, target)
						: fs.writeFileSync(target, sourceContents);
					outcomes.written.push(target);
					break;
				case 'skip':
					// if we created the file, delete it
					// so we don't leave behind empty files
					!fileDidExist && fs.unlinkSync(target);
					outcomes.skipped.push(target);
					break;
				case 'yes to all':
					answers.force = true;
					outcomes.written.push(target);
					filesToCopyRegex.test(target)
						? fs.copyFileSync(file.path, target)
						: fs.writeFileSync(target, sourceContents, 'utf-8');
					break;
				case 'abort':
					answers.silent || console.log(chalk.red('Aborting!'));
					return process.exit();
				default:
					break;
			}
		} else {
			// if force is true, write the file no questions asked.
			filesToCopyRegex.test(target)
				? fs.copyFileSync(file.path, target)
				: fs.writeFileSync(target, sourceContents, 'utf-8');
			outcomes.written.push(target);
		}
	}

	answers.silent ||
		console.log(`
	Written: 
	\t${chalk.green(outcomes.written.join('\n\t\t') || 'none')}
	Skipped: 
	\t${chalk.yellow(outcomes.skipped.join('\n\t\t') || 'none')}
	Skipped (same content): 
	\t${chalk.gray(outcomes.sameContent.join('\n\t\t') || 'none')}
	`);
	return 'success';
};

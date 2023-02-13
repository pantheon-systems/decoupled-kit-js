/* eslint-disable @typescript-eslint/no-unused-vars */
import chalk from 'chalk';
import whichPmRuns from 'which-pm-runs';
import { execSync } from 'child_process';
import path from 'path';
import { Answers } from 'inquirer';
import type { NodePlopAPI, CustomActionConfig } from 'node-plop';

export const runESLint = async (
	answers: Answers,
	config: CustomActionConfig<'runLint'> & {
		ignorePattern: string;
		plugins: string;
	},
	_plop: NodePlopAPI,
) => {
	if (answers?.noInstall || answers?.noLint) return 'skipping linting';
	if (!answers.outDir || typeof answers?.outDir !== 'string')
		throw 'fail: outDir required';
	answers.silent || console.log(chalk.green('Linting...'));

	const getPkgManager = whichPmRuns();
	let command: string;
	if (!getPkgManager || getPkgManager.name === 'npm') {
		// fallback to npm
		command = 'npm run';
	} else {
		command = getPkgManager.name;
	}

	try {
		const pkgPath = path.resolve(`${answers.outDir}/package.json`);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const { default: pkg } = await import(pkgPath, {
			assert: { type: 'json' },
		});
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (pkg?.scripts?.lint) {
			execSync(`${command} lint`, { cwd: answers.outDir, stdio: 'inherit' });
		} else {
			execSync(
				`npx eslint ${
					config.ignorePattern ? `--ignore-pattern ${config.ignorePattern}` : ''
				} ${config.plugins ? `--plugin ${config.plugins}` : ''}`,
				{ cwd: answers.outDir, stdio: 'inherit' },
			);
		}
	} catch (error) {
		console.error(error);
		throw 'fail: there was a problem linting';
	}
	return 'success';
};

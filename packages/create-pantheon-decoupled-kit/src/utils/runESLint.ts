/* eslint-disable @typescript-eslint/no-unused-vars */
import chalk from 'chalk';
import whichPmRuns from 'which-pm-runs';
import { execSync } from 'child_process';
import path from 'path';
import { Answers } from 'inquirer';
import type { NodePlopAPI, CustomActionConfig } from 'node-plop';
import { openPackageJson } from './helpers';

type Script = {
	scripts: {
		lint: string;
	};
};

export const runESLint = (
	answers: Answers,
	config: CustomActionConfig<'runLint'> & {
		ignorePattern: string;
		plugins: string;
	},
	_plop: NodePlopAPI,
) => {
	if (typeof answers?.outDir !== 'string') throw 'fail: outDir required';
	answers.silent || console.log(chalk.green('Linting...'));

	const getPkgManager = whichPmRuns();
	let command: string;
	if (!getPkgManager || getPkgManager.name === 'npm') {
		// fallback to npm
		command = 'npm run';
	} else {
		command = getPkgManager.name;
	}

	const pkgPath = path.resolve(`${answers.outDir}/package.json`);
	const pkg = openPackageJson(pkgPath) as Script;
	if (pkg.scripts.lint) {
		try {
			execSync(`${command} lint .`, { cwd: answers.outDir, stdio: 'inherit' });
		} catch (error) {
			if (error instanceof Error) {
				throw error;
			}
		}
	} else {
		execSync(
			`npx eslint ${
				config.ignorePattern ? `--ignore-pattern ${config.ignorePattern}` : ''
			} ${config.plugins ? `--plugin ${config.plugins}` : ''}`,
			{ cwd: answers.outDir, stdio: 'inherit' },
		);
	}
	return 'success';
};

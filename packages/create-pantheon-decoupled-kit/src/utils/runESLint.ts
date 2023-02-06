/* eslint-disable @typescript-eslint/no-unused-vars */
import chalk from 'chalk';
import whichPmRuns from 'which-pm-runs';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { Answers } from 'inquirer';
import type { NodePlopAPI, CustomActionConfig } from 'node-plop';

type Script = {
	scripts: {
		lint: string;
	};
};

export const runESLint = (
	answers: Answers,
	_config: CustomActionConfig<'runLint'>,
	_plop: NodePlopAPI,
	ignorePattern?: string,
	ignorePath?: string,
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

	const filePath = path.resolve(`${answers.outDir}/package.json`);
	const script = JSON.parse(fs.readFileSync(filePath, 'utf8')) as Script;
	if (script.scripts.lint) {
		try {
			execSync(`${command} lint`, { cwd: answers.outDir, stdio: 'inherit' });
		} catch (error) {
			if (error instanceof Error) {
				throw error;
			}
		}
	} else {
		execSync(
			`npx eslint ${ignorePattern ? `--ignore-pattern ${ignorePattern}` : ''} ${
				ignorePath ? `--ignore-pattern ${ignorePath}` : ''
			}`,
			{ cwd: answers.outDir, stdio: 'inherit' },
		);
	}
	return 'success';
};

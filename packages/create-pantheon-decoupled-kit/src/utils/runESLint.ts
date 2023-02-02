/* eslint-disable @typescript-eslint/no-unused-vars */
import chalk from 'chalk';
import whichPmRuns from 'which-pm-runs';
import { execSync } from 'child_process';
import { Answers } from 'inquirer';
import type { NodePlopAPI, CustomActionConfig } from 'node-plop';

export const runESLint = (
	answers: Answers,
	_config: CustomActionConfig<'runLint'>,
	_plop: NodePlopAPI,
) => {
	if (typeof answers.outDir !== 'string') return;
	answers.silent || console.log(chalk.green('Linting...'));

	const getPkgManager = whichPmRuns();
	let command: string;
	if (!getPkgManager) {
		// fallback to npm
		command = 'npm run';
	} else {
		command = getPkgManager.name;
	}
	try {
		execSync(`${command} lint`, { cwd: answers.outDir, stdio: 'inherit' });
		return 'success';
	} catch (error) {
		try {
			execSync('npx eslint', { cwd: answers.outDir, stdio: 'inherit' });
			return 'success eslint';
		} catch (error) {
			if (error instanceof Error) {
				throw error;
			}
			throw 'fail';
		}
	}
};

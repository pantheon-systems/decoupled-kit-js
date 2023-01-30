import chalk from 'chalk';
import whichPmRuns from 'which-pm-runs';
import { execSync } from 'child_process';
import { Answers } from 'inquirer';
import { NodePlopAPI } from 'node-plop';
import { RunESLintActionConfig } from '../types';

export const runESLint = (
	answers: Answers,
	config: RunESLintActionConfig,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
		if (error instanceof Error) {
			throw error.message;
		}
		throw 'fail';
	}
};

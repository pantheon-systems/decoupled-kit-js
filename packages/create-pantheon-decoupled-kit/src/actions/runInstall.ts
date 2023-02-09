/* eslint-disable @typescript-eslint/no-unused-vars */
import chalk from 'chalk';
import whichPmRuns from 'which-pm-runs';
import { execSync } from 'child_process';
import type { Answers } from 'inquirer';
import type { CustomActionConfig, NodePlopAPI } from 'node-plop';

export const runInstall = (
	answers: Answers,
	_config: CustomActionConfig<'runInstall'>,
	_plop: NodePlopAPI,
) => {
	if (answers?.noInstall) return 'skipping install';
	if (typeof answers?.outDir !== 'string') throw 'fail: outDir required';

	const getPkgManager = whichPmRuns();
	let pkgManager: string;

	if (!getPkgManager) {
		// fallback to npm
		pkgManager = 'npm';
	} else {
		pkgManager = getPkgManager.name;
	}

	answers.silent ||
		console.log(
			chalk.green('Installing dependencies with'),
			chalk.bold.white(pkgManager),
			chalk.green('...'),
		);
	execSync(`${pkgManager} install`, {
		cwd: answers.outDir,
		encoding: 'utf8',
		stdio: 'inherit',
	});
	return 'success';
};

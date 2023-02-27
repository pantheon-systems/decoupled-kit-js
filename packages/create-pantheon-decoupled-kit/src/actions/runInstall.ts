import chalk from 'chalk';
import { execSync } from 'child_process';
import whichPmRuns from 'which-pm-runs';
import type { Action } from '../types';

export const runInstall: Action = ({ data }) => {
	if (data?.noInstall) return 'skipping install';
	if (typeof data?.outDir !== 'string')
		throw new Error('valid outDir required');

	const getPkgManager = whichPmRuns();
	let pkgManager: string;

	if (!getPkgManager) {
		// fallback to npm
		pkgManager = 'npm';
	} else {
		pkgManager = getPkgManager.name;
	}

	data.silent ||
		console.log(
			`${chalk.green('Installing dependencies with')} ${chalk.bold.white(
				pkgManager,
			)}${chalk.green('...')}`,
		);
	execSync(`${pkgManager} install`, {
		cwd: data.outDir,
		encoding: 'utf8',
		stdio: 'inherit',
	});
	return `${chalk.cyan('runInstall:')} ${chalk.green('success')}`;
};

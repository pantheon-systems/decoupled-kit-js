import chalk from 'chalk';
import { execSync } from 'child_process';
import type { CustomActionFn, RunInstallActionConfig } from '../types';

export const runInstall: CustomActionFn<RunInstallActionConfig> = (
	answers,
	config: RunInstallActionConfig,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_plop,
) => {
	if (typeof answers.outDir !== 'string') return;
	answers.silent ||
		console.log(
			chalk.green('Installing dependencies with'),
			chalk.bold.white(config.pkgManager),
			chalk.green('...'),
		);
	execSync(`${config.pkgManager} install ${answers.outDir}`, {
		cwd: answers.outDir,
		encoding: 'utf8',
		stdio: 'inherit',
	});
	return 'success';
};

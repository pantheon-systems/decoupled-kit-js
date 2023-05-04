/* eslint-disable @typescript-eslint/no-unused-vars */
import chalk from 'chalk';
import { execSync } from 'child_process';
import path from 'path';
import whichPmRuns from 'which-pm-runs';
import { Action, isString } from '../types';

export const convertCssModules: Action = async ({ data }) => {
	if (data?.noInstall || !data?.convertCssModules || !data?.tailwindcss)
		return 'skipping CSS module conversion';
	if (!data.outDir || !isString(data?.outDir))
		throw new Error('outDir is not valid');
	data.silent || console.log(chalk.green('Converting Modules...'));

	const getPkgManager = whichPmRuns();
	let command: string;
	if (!getPkgManager || getPkgManager.name === 'npm') {
		// fallback to npm
		command = 'npm run';
	} else {
		command = getPkgManager.name;
	}

	try {
		const pkgPath = path.resolve(`${data.outDir}/package.json`);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const { default: pkg } = await import(pkgPath, {
			assert: { type: 'json' },
		});
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (pkg?.scripts['translate-vars']) {
			execSync(`${command} translate-vars`, {
				cwd: data.outDir,
				stdio: 'inherit',
			});
			execSync(`${command} convert-to-tailwind`, {
				cwd: data.outDir,
				stdio: 'inherit',
			});
		}
	} catch (error) {
		console.error(
			chalk.red('There was a problem converting CSS modules to tailwind:'),
		);
		throw error;
	}
	return `${chalk.cyan('convertCssModules:')} ${chalk.green('success')}`;
};

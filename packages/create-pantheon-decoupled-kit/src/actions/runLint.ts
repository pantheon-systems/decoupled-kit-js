/* eslint-disable @typescript-eslint/no-unused-vars */
import chalk from 'chalk';
import { execSync } from 'child_process';
import path from 'path';
import whichPmRuns from 'which-pm-runs';
import { Action, isString } from '../types';

export const runLint: Action = async ({ data }) => {
	if (data?.noInstall || data?.noLint) return 'skipping linting';
	if (!data.outDir || !isString(data?.outDir))
		throw new Error('outDir is not valid');
	data.silent || console.log(chalk.green('Linting...'));

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
		if (pkg?.scripts['build-scripts']) {
			execSync(`${command}  build-scripts`, {
				cwd: data.outDir,
				stdio: 'inherit',
			});
		}
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (pkg?.scripts['lint:fix']) {
			execSync(`${command} lint:fix`, { cwd: data.outDir, stdio: 'inherit' });
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		} else if (pkg?.scripts['lint']) {
			execSync(`${command} lint`, { cwd: data.outDir, stdio: 'inherit' });
		} else {
			const plugins = isString(data.plugins) && data.plugins;
			const ignorePattern = isString(data.ignorePattern) && data.ignorePattern;
			execSync(
				`npx eslint --fix ${
					ignorePattern ? `--ignore-pattern ${ignorePattern}` : ''
				} ${plugins ? `--plugin ${plugins}` : ''}`,
				{ cwd: data.outDir, stdio: 'inherit' },
			);
		}
	} catch (error) {
		console.error(chalk.red('There was a problem linting:'));
		throw error;
	}
	return `${chalk.cyan('runLint:')} ${chalk.green('success')}`;
};

import { isString, type Action } from '@cli/types';
import chalk from 'chalk';
import { execSync } from 'child_process';
import fs from 'fs-extra';
import { globSync } from 'glob';
import path from 'node:path';

export const convertTStoJS: Action = ({ data }) => {
	if (data.ts) {
		return chalk.cyan('Using TypeScript');
	}
	if (!data.outDir || !isString(data?.outDir))
		throw new Error('outDir is not valid');
	data.silent || console.log(chalk.green('Converting ts files to js...'));
	try {
		// compile js -> ts
		execSync(`npx tsc --allowJs --jsx preserve`, {
			cwd: data.outDir,
			stdio: data.silent ? 'ignore' : 'inherit',
			encoding: 'utf-8',
		});
		// remove ts leftovers
		for (const file of globSync(path.join(data.outDir, '**/*.{ts,tsx,d.ts}'), {
			ignore: 'node_modules/**',
		})) {
			fs.unlinkSync(file);
		}
	} catch (error) {
		console.error(
			chalk.red('There was a problem converting the project to JS:'),
		);
		throw error;
	}
	return `${chalk.cyan('convertTStoJS:')} ${chalk.green('success')}`;
};

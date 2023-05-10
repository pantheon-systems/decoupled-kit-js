import chalk from 'chalk';
import { execSync } from 'child_process';
import { Action, isString } from '../types';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import fs from 'fs-extra';
import globalData from '@csstools/postcss-global-data';
import customProperties from 'postcss-custom-properties';
import { rootDir } from '..';
import { globSync } from 'glob';
import path from 'path';

export const convertCSSModules: Action = async ({ data }) => {
	if (data?.noInstall || !data?.tailwindcss)
		return 'skipping CSS module conversion';
	if (!data.outDir || !isString(data?.outDir))
		throw new Error('outDir is not valid');
	data.silent ||
		console.log(
			chalk.green('Converting CSS modules to tailwindcss classes...'),
		);

	try {
		for await (const file of globSync(
			path.join(data.outDir, '**/*.module.css'),
			{
				ignore: 'node_modules/**',
			},
		)) {
			const contents = fs.readFileSync(file, 'utf-8');
			const { css: result } = await postcss([
				autoprefixer,
				globalData({
					files: [`${rootDir}/templates/styles/variables.css`],
				}),
				customProperties({ preserve: false }),
			]).process(contents, {
				from: file,
			});
			fs.writeFileSync(file, result);
		}
		execSync(
			`npx css-modules-to-tailwind pages/**/*.jsx components/*.jsx --force`,
			{
				cwd: data.outDir,
				stdio: 'inherit',
			},
		);
	} catch (error) {
		console.error(
			chalk.red('There was a problem converting CSS modules to tailwind:'),
		);
		throw error;
	}
	return `${chalk.cyan('convertCSSModules:')} ${chalk.green('success')}`;
};

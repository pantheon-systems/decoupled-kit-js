import globalData from '@csstools/postcss-global-data';
import autoprefixer from 'autoprefixer';
import chalk from 'chalk';
import { execSync } from 'child_process';
import fs from 'fs-extra';
import { globSync } from 'glob';
import path from 'path';
import postcss from 'postcss';
import customProperties from 'postcss-custom-properties';
import { rootDir } from '..';
import { Action, isString } from '../types';

export const convertCSSModules: Action = async ({ data }) => {
	if (data.noInstall || !data?.tailwindcss)
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
		const dirs = data.gatsby
			? './src/**/*.jsx'
			: './pages/**/*.jsx ./components/*.jsx';
		execSync(
			`npx --prefer-online --yes css-modules-to-tailwind ${dirs} --force`,
			{
				cwd: data.outDir,
				stdio: data.silent ? 'ignore' : 'inherit',
				encoding: 'utf-8',
			},
		);
		return `${chalk.cyan('convertCSSModules:')} ${chalk.green('success')}`;
	} catch (error) {
		console.error(
			chalk.red('There was a problem converting CSS modules to tailwind:'),
		);
		throw error;
	}
};

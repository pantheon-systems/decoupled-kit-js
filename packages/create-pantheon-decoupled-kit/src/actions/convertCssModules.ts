/* eslint-disable @typescript-eslint/no-unused-vars */
import chalk from 'chalk';
import { execSync } from 'child_process';
import { Action, isString } from '../types';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import fs from 'fs-extra';
import klaw from 'klaw';
import globalData from '@csstools/postcss-global-data';
import customProperties from 'postcss-custom-properties';

export const getAllFiles = async (
	templateDir: string,
	outDir: string,
): Promise<string[]> => {
	const templates: string[] = [];

	// loop through each dir
	for await (const file of klaw(templateDir)) {
		if (file.stats.isDirectory()) continue;
		const templateName = file.path.split(outDir)[1];

		templates.push(templateName);
	}
	return templates;
};

export const convertCSSModules: Action = async ({ data }) => {
	if (data?.noInstall || !data?.convertCSSModules || !data?.tailwindcss)
		return 'skipping CSS module conversion';
	if (!data.outDir || !isString(data?.outDir))
		throw new Error('outDir is not valid');
	data.silent || console.log(chalk.green('Converting Modules...'));

	try {
		const allFiles: string[] = [];
		const componentFiles = await getAllFiles(
			`${data.outDir}/components`,
			data.outDir,
		);
		const pageFiles = await getAllFiles(`${data.outDir}/pages`, data.outDir);
		allFiles.push(...componentFiles);
		allFiles.push(...pageFiles);
		for (const file of allFiles) {
			if (file.includes('.module.css')) {
				const contents = fs.readFileSync(`${data.outDir}${file}`).toString();
				const { css: result } = await postcss([
					autoprefixer,
					globalData({
						files: [`${data.outDir}/styles/globals.css`],
					}),
					customProperties({ preserve: false }),
				]).process(contents, { from: `${data.outDir}${file}` });
				fs.writeFileSync(`${data.outDir}${file}`, result);
			}
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

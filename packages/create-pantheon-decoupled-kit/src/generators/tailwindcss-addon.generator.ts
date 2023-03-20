import chalk from 'chalk';
import { addWithDiff, addDependencies, runInstall } from '../actions';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';

export const tailwindcssAddon: DecoupledKitGenerator<DefaultAnswers> = {
	name: 'tailwindcss-addon',
	description: 'Adds tailwindcss dependencies and config files',
	prompts: [
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: () => `${process.cwd()}/tailwindcss-addon`,
		},
	],
	data: {
		dependencies: {
			'@tailwindcss/typography': '^0.5.9',
		},
		devDependencies: {
			autoprefixer: '^10.4.12',
			postcss: '^8.4.16',
			tailwindcss: '^3.1.8',
		},
	},
	templates: ['tailwindcss-addon'],
	actions: [addWithDiff, addDependencies, runInstall],
	nextSteps: [
		`${chalk.cyan(
			'Follow the guide at this link to complete your tailwindcss configuration:',
		)} ${chalk.bold.underline('https://tailwindcss.com/docs/installation')}`,
	],
};

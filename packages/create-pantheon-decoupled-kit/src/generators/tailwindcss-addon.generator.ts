import chalk from 'chalk';
import { addWithDiff, addDependencies, runInstall } from '../actions';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';
import { outDirPrompt } from '../utils/sharedPrompts';

const dependencies = {
	'@tailwindcss/typography': '^0.5.9',
} as const;

const devDependencies = {
	autoprefixer: '^10.4.12',
	postcss: '^8.4.16',
	tailwindcss: '^3.1.8',
} as const;

type TailwindcssAddonData<
	Dependencies = typeof dependencies,
	DevDependencies = typeof devDependencies,
> = {
	dependencies: { [Property in keyof Dependencies]: Dependencies[Property] };
	devDependencies: {
		[Property in keyof DevDependencies]: DevDependencies[Property];
	};
};

export const tailwindcssAddon: DecoupledKitGenerator<
	DefaultAnswers,
	TailwindcssAddonData
> = {
	name: 'tailwindcss-addon',
	description: 'Adds tailwindcss dependencies and config files',
	prompts: [outDirPrompt(`${process.cwd()}/tailwindcss-addon`)],
	data: {
		dependencies,
		devDependencies,
	},
	templates: ['tailwindcss-addon'],
	actions: [addWithDiff, addDependencies, runInstall],
	nextSteps: [
		`${chalk.cyan(
			'Follow the guide at this link to complete your tailwindcss configuration:',
		)} ${chalk.bold.underline('https://tailwindcss.com/docs/installation')}`,
	],
};

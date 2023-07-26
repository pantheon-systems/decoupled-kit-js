import chalk from 'chalk';
import {
	addWithDiff,
	convertCSSModules,
	runInstall,
	runLint,
} from '../actions';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';
import { outDirPrompt, tailwindcssPrompt } from '../utils/sharedPrompts';

export const nextDrupalSearchApiAddon: DecoupledKitGenerator<DefaultAnswers> = {
	name: 'next-drupal-search-api-addon',
	description:
		'Example implementation of the Drupal Search API for the next-drupal starter',
	prompts: [
		outDirPrompt(`${process.cwd()}/next-drupal-search-api-addon`),
		tailwindcssPrompt,
	],
	addon: true,
	data: {
		search: true,
	},
	templates: ['next-drupal-search-api-addon', 'tailwind-shared'],
	actions: [addWithDiff, runInstall, convertCSSModules, runLint],
	nextSteps: [
		`${chalk.cyan(
			`Run the ${chalk.white.bold(
				'update-snapshots',
			)} command to update the snapshot files with the add-on components`,
		)}`,
	],
	cmsType: 'drupal',
};

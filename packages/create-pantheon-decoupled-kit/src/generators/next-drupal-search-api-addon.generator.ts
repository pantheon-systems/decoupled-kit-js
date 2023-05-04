import {
	addWithDiff,
	runLint,
	runInstall,
	convertCssModules,
} from '../actions';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';
import chalk from 'chalk';
import { outDirPrompt, tailwindcssPrompt } from '../utils/sharedPrompts';

interface NextDrupalSearchApiAddonAnswers {
	search: true;
	convertCssModules: true;
}

export const nextDrupalSearchApiAddon: DecoupledKitGenerator<
	DefaultAnswers,
	NextDrupalSearchApiAddonAnswers
> = {
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
		convertCssModules: true,
	},
	templates: [
		'next-drupal-search-api-addon',
		'tailwindless-drupal-search-api-addon',
		'tailwind-shared',
	],
	actions: [addWithDiff, runInstall, convertCssModules, runLint],
	nextSteps: [
		`${chalk.cyan(
			`Run the ${chalk.white.bold(
				'update-snapshots',
			)} command to update the snapshot files with the add-on components`,
		)}`,
	],
	cmsType: 'drupal',
};

import { addWithDiff, runLint } from '../actions';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';
import chalk from 'chalk';

export const nextDrupalSearchApiAddon: DecoupledKitGenerator<DefaultAnswers> = {
	name: 'next-drupal-search-api-addon',
	description:
		'Example implementation of the Drupal Search API for the next-drupal starter',
	prompts: [
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: `${process.cwd()}/next-drupal-search-api-addon`,
		},
	],
	templates: ['next-drupal-search-api-addon'],
	actions: [addWithDiff, runLint],
	nextSteps: [
		`${chalk.cyan(
			`Run the ${chalk.white.bold(
				'update-snapshots',
			)} command to update the snapshot files with the add-on components`,
		)}`,
	],
};

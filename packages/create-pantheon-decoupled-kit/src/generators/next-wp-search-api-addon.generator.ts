import chalk from 'chalk';
import {
	addWithDiff,
	convertCSSModules,
	runInstall,
	runLint,
} from '../actions';
import type { BaseGeneratorData, DecoupledKitGenerator } from '../types';
import { outDirPrompt, tailwindcssPrompt } from '../utils/sharedPrompts';

interface NextWpSearchApiAddonAnswers extends BaseGeneratorData {
	search: boolean;
}

export const nextWpSearchApiAddon: DecoupledKitGenerator<NextWpSearchApiAddonAnswers> =
	{
		name: 'next-wp-search-api-addon',
		description:
			'Example implementation of the WordPress Search API for the next-wp starter',
		prompts: [
			outDirPrompt(`${process.cwd()}/next-wp-search-api-addon`),
			tailwindcssPrompt,
		],
		addon: true,
		data: {
			search: true,
		},
		templates: ['next-wp-search-api-addon', 'tailwind-shared'],
		actions: [addWithDiff, runInstall, convertCSSModules, runLint],
		nextSteps: [
			`${chalk.cyan(
				`Run the ${chalk.white.bold(
					'update-snapshots',
				)} command to update the snapshot files with the add-on components`,
			)}`,
		],
		cmsType: 'wp',
	};

import { addWithDiff, convertCSSModules, runLint } from '../actions';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';
import { outDirPrompt, tailwindcssPrompt } from '../utils/sharedPrompts';

export const nextWpAcfAddon: DecoupledKitGenerator<DefaultAnswers> = {
	name: 'next-wp-acf-addon',
	description:
		'Example implementation of the WordPress Advanced Custom Fields plugin for the next-wordpress starter',
	prompts: [
		outDirPrompt(`${process.cwd()}/next-wp-acf-addon`),
		tailwindcssPrompt,
	],
	addon: true,
	data: {
		wpAcfAddon: true,
	},
	templates: ['next-wp-acf-addon'],
	actions: [addWithDiff, convertCSSModules, runLint],
	cmsType: 'wp',
};

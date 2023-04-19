import { addWithDiff, runLint } from '../actions';
import type { DecoupledKitGenerator } from '../types';
import { outDirPrompt, tailwindcssPrompt } from '../utils/sharedPrompts';

export const nextWpAcfAddon: DecoupledKitGenerator = {
	name: 'next-wp-acf-addon',
	description:
		'Example implementation of the WordPress Advanced Custom Fields plugin for the next-wordpress starter',
	prompts: [
		outDirPrompt(`${process.cwd()}/next-wp-acf-addon`),
		tailwindcssPrompt,
	],
	templates: ['next-wp-acf-addon'],
	actions: [addWithDiff, runLint],
};

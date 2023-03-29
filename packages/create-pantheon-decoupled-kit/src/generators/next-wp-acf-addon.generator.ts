import { addWithDiff, runLint } from '../actions';
import type { DecoupledKitGenerator } from '../types';

export const nextWpAcfAddon: DecoupledKitGenerator = {
	name: 'next-wp-acf-addon',
	description:
		'Example implementation of the WordPress Advanced Custom Fields plugin for the next-wordpress starter',
	prompts: [
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: `${process.cwd()}/next-wp-acf-addon`,
		},
		{
			name: 'tailwindcss',
			message: 'Would you like to include tailwindcss?',
			type: 'confirm',
			default: true,
		},
	],
	templates: ['next-wp-acf-addon'],
	actions: [addWithDiff, runLint],
};

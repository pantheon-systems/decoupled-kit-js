import { addWithDiff, runLint } from '../actions';
import type { DecoupledKitGenerator } from '../types';

export const nextDrupalUmamiAddon: DecoupledKitGenerator = {
	name: 'next-drupal-umami-addon',
	description:
		"Drupal's Umami profile data and components add-on for the next-drupal starter",
	prompts: [
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: `${process.cwd()}/umami-demo`,
		},
	],
	addon: true,
	templates: ['next-drupal-umami-addon'],
	actions: [addWithDiff, runLint],
};

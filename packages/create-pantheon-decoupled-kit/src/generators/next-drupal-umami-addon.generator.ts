import type { CustomActionConfig } from 'node-plop';
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
	actions: (data) => {
		const addWithDiff: CustomActionConfig<'addWithDiff'> = {
			type: 'addWithDiff',
			templates: './templates/next-drupal-umami-addon',
			path: '{{outDir}}',
			force: data?.force ? Boolean(data.force) : false,
		};
		const runESLint: CustomActionConfig<'runLint'> = {
			type: 'runLint',
		};

		const actions = [addWithDiff, runESLint];

		return actions;
	},
};

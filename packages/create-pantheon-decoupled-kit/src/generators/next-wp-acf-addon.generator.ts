import type { CustomActionConfig } from 'node-plop';
import type { DecoupledKitGenerator } from '../types';

export const nextWpAcfAddon: DecoupledKitGenerator = {
	name: 'next-wp-acf-addon',
	description:
		"WordPress's advance custom field component add-on for the next-wordpress starter",
	prompts: [
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: `${process.cwd()}/acf-demo`,
		},
	],
	actions: (data) => {
		const addWithDiff: CustomActionConfig<'addWithDiff'> = {
			type: 'addWithDiff',
			templates: './templates/next-wp-acf-addon',
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

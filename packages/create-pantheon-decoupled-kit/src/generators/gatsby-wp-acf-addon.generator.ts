import type { CustomActionConfig } from 'node-plop';
import type { DecoupledKitGenerator } from '../types';

export const gatsbyWpAcfAddon: DecoupledKitGenerator = {
	name: 'gatsby-wp-acf-addon',
	description:
		'Example implementation of the WordPress Advanced Custom Fields plugin for the gatsby-wordpress starter',
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
			templates: './templates/gatsby-wp-acf-addon',
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

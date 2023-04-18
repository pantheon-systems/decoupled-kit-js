import { addWithDiff, runLint } from '../actions';
import type { DecoupledKitGenerator } from '../types';
import { outDirPrompt } from '../utils/sharedPrompts';

export const gatsbyWpAcfAddon: DecoupledKitGenerator = {
	name: 'gatsby-wp-acf-addon',
	description:
		'Example implementation of the WordPress Advanced Custom Fields plugin for the gatsby-wordpress starter',
	prompts: [outDirPrompt(`${process.cwd()}/gatsby-wp-acf-addon`)],
	templates: ['gatsby-wp-acf-addon'],
	actions: [addWithDiff, runLint],
};

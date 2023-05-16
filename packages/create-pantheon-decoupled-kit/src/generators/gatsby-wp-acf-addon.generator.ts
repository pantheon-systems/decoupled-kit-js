import { addWithDiff, convertCSSModules, runLint } from '../actions';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';
import { outDirPrompt, tailwindcssPrompt } from '../utils/sharedPrompts';

interface GatsbyWpAcfAddonAnswers extends DefaultAnswers {
	outDir: string;
	tailwindcss: boolean;
}

export const gatsbyWpAcfAddon: DecoupledKitGenerator<GatsbyWpAcfAddonAnswers> =
	{
		name: 'gatsby-wp-acf-addon',
		description:
			'Example implementation of the WordPress Advanced Custom Fields plugin for the gatsby-wordpress starter',
		prompts: [
			outDirPrompt(`${process.cwd()}/gatsby-wp-acf-addon`),
			tailwindcssPrompt,
		],
		templates: ['gatsby-wp-acf-addon'],
		actions: [addWithDiff, convertCSSModules, runLint],
		cmsType: 'wp',
	};

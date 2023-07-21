import { addWithDiff, convertCSSModules, runLint } from '../actions';
import type {
	DecoupledKitGenerator,
	DefaultAnswers,
	BaseGeneratorData,
} from '../types';
import {
	cmsEndpointPrompt,
	outDirPrompt,
	tailwindcssPrompt,
} from '../utils/sharedPrompts';

interface NextDrupalUmamiAddonAnswers extends DefaultAnswers {
	tailwindcss: boolean;
}

export const nextDrupalUmamiAddon: DecoupledKitGenerator<
	NextDrupalUmamiAddonAnswers,
	BaseGeneratorData
> = {
	name: 'next-drupal-umami-addon',
	description:
		"Drupal's Umami profile data and components add-on for the next-drupal starter",
	prompts: [
		outDirPrompt(`${process.cwd()}/umami-demo`),
		tailwindcssPrompt,
		cmsEndpointPrompt,
	],
	data: {
		drupal: true,
	},
	addon: true,
	templates: ['next-drupal-umami-addon'],
	actions: [addWithDiff, convertCSSModules, runLint],
	cmsType: 'drupal',
};

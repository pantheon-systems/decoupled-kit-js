import { addWithDiff, runLint } from '../actions';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';

interface NextDrupalUmamiAddonAnswers extends DefaultAnswers {
	tailwindcss: boolean;
}

interface NextDrupalUmamiAddonData {
	drupal: true;
}

export const nextDrupalUmamiAddon: DecoupledKitGenerator<
	NextDrupalUmamiAddonAnswers,
	NextDrupalUmamiAddonData
> = {
	name: 'next-drupal-umami-addon',
	description:
		"Drupal's Umami profile data and components add-on for the next-drupal starter",
	prompts: [
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: `${process.cwd()}/umami-demo`,
		},
		{
			name: 'tailwindcss',
			message: 'Would you like to include tailwindcss?',
			type: 'confirm',
			default: true,
		},
	],
	data: {
		drupal: true,
	},
	addon: true,
	templates: ['next-drupal-umami-addon'],
	actions: [addWithDiff, runLint],
};

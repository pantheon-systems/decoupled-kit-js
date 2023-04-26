import { addWithDiff, runInstall, runLint } from '../actions';
import versions from '../pkgVersions.json';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';
import {
	appNamePrompt,
	cmsEndpointPrompt,
	outDirPrompt,
	tailwindcssPrompt,
} from '../utils/sharedPrompts';

interface NextDrupalAnswers extends DefaultAnswers {
	appName: string;
	tailwindcss: boolean;
}

interface NextDrupalData {
	nextjsKitVersion: string;
	drupalKitVersion: string;
	drupal: true;
}

const outDirDefault = ({ appName }: NextDrupalAnswers) =>
	`${process.cwd()}/${appName.replaceAll(' ', '-').toLowerCase()}`;
export const nextDrupal: DecoupledKitGenerator<
	NextDrupalAnswers,
	NextDrupalData
> = {
	name: 'next-drupal',
	description: 'Next.js + Drupal starter kit',
	prompts: [
		appNamePrompt('Next Drupal Starter'),
		outDirPrompt(outDirDefault),
		tailwindcssPrompt,
		cmsEndpointPrompt,
	],
	data: {
		nextjsKitVersion: versions['nextjs-kit'],
		drupalKitVersion: versions['drupal-kit'],
		drupal: true,
	},
	templates: ['next-drupal', 'tailwind-shared', 'tailwindless-next'],
	actions: [addWithDiff, runInstall, runLint],
	cmsType: 'drupal',
};

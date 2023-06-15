import { addWithDiff, runInstall, runLint } from '../actions';
import versions from '../pkgVersions.json';
import type {
	DecoupledKitGenerator,
	DefaultAnswers,
	NextDrupalData,
} from '../types';
import {
	appNamePrompt,
	cmsEndpointPrompt,
	outDirPrompt,
} from '../utils/sharedPrompts';

interface NextDrupalAnswers extends DefaultAnswers {
	appName: string;
	tailwindcss: boolean;
}

const outDirDefault = ({ appName }: NextDrupalAnswers) =>
	`${process.cwd()}/${appName.replaceAll(' ', '-').toLowerCase()}`;
export const nextDrupal: DecoupledKitGenerator<
	NextDrupalAnswers,
	NextDrupalData
> = {
	name: 'next-drupal-app',
	description: 'Next.js + Drupal starter kit',
	prompts: [
		appNamePrompt('Next Drupal App Starter'),
		outDirPrompt(outDirDefault),
		cmsEndpointPrompt,
	],
	data: {
		nextjsKitVersion: versions['nextjs-kit'],
		drupalKitVersion: versions['drupal-kit'],
		drupal: true,
	},
	templates: ['next-drupal-app'],
	actions: [addWithDiff, runInstall, runLint],
	cmsType: 'drupal',
};

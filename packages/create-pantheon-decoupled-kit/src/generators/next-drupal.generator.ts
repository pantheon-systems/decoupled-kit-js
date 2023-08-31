import {
	addWithDiff,
	runInstall,
	runLint,
	convertCSSModules,
} from '../actions';
import versions from '../pkgVersions.json';
import type {
	DecoupledKitGenerator,
	DefaultAnswers,
	BaseGeneratorData,
} from '../types';
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

const outDirDefault = ({ appName }: NextDrupalAnswers) =>
	`${process.cwd()}/${appName.replaceAll(' ', '-').toLowerCase()}`;
export const nextDrupal: DecoupledKitGenerator<
	NextDrupalAnswers,
	BaseGeneratorData
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
		decoupledKitHealthCheckVersion: versions['decoupled-kit-health-check'],
		drupal: true,
	},
	templates: ['next-drupal', 'tailwind-shared', 'tailwindless-next'],
	actions: [addWithDiff, runInstall, convertCSSModules, runLint],
	cmsType: 'drupal',
};

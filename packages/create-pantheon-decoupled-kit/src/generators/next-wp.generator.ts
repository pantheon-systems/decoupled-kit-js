import {
	addWithDiff,
	convertCSSModules,
	runInstall,
	runLint,
} from '../actions';
import versions from '../pkgVersions.json';
import type {
	DecoupledKitGenerator,
	DefaultAnswers,
	NextWpData,
} from '../types';
import {
	appNamePrompt,
	cmsEndpointPrompt,
	outDirPrompt,
	tailwindcssPrompt,
} from '../utils/sharedPrompts';

interface NextWPAnswers extends DefaultAnswers {
	appName: string;
	tailwindcss: boolean;
}

const outDirDefault = ({ appName }: NextWPAnswers) =>
	`${process.cwd()}/${appName.replaceAll(' ', '-').toLowerCase()}`;

export const nextWp: DecoupledKitGenerator<NextWPAnswers, NextWpData> = {
	name: 'next-wp',
	description: 'Next.js + WordPress starter kit',
	prompts: [
		appNamePrompt('Next WordPress Starter'),
		outDirPrompt(outDirDefault),
		tailwindcssPrompt,
		cmsEndpointPrompt,
	],
	data: {
		nextjsKitVersion: versions['nextjs-kit'],
		wordpressKitVersion: versions['wordpress-kit'],
		dkHealthCheckVersion: versions['decoupled-kit-health-check'],
		wp: true,
	},
	templates: ['next-wp', 'tailwind-shared', 'tailwindless-next'],
	actions: [addWithDiff, runInstall, convertCSSModules, runLint],
	cmsType: 'wp',
};

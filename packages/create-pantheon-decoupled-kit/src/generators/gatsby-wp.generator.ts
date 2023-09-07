import whichPmRuns from 'which-pm-runs';
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
	GatsbyWPData,
} from '../types';
import {
	appNamePrompt,
	cmsEndpointPrompt,
	outDirPrompt,
	tailwindcssPrompt,
} from '../utils/sharedPrompts';

interface GatsbyWPAnswers extends DefaultAnswers {
	appName: string;
	tailwindcss: boolean;
	cmsEndpoint: string;
}

const pnpm = whichPmRuns()?.name === 'pnpm' ? true : false;

const outDirDefault = ({ appName }: GatsbyWPAnswers) =>
	`${process.cwd()}/${appName.replaceAll(' ', '-').toLowerCase()}`;

export const gatsbyWp: DecoupledKitGenerator<GatsbyWPAnswers, GatsbyWPData> = {
	name: 'gatsby-wp',
	description: 'Gatsby + WordPress starter kit',
	prompts: [
		appNamePrompt('Gatsby WordPress Starter'),
		outDirPrompt(outDirDefault),
		tailwindcssPrompt,
		cmsEndpointPrompt,
	],
	data: {
		gatsbyPnpmPlugin: pnpm,
		decoupledKitHealthCheckVersion: versions['decoupled-kit-health-check'],
		wordpressKitVersion: versions['wordpress-kit'],
		otherVersion: versions['other'],
		eslintVersion: versions['eslint'],
		wp: true,
		gatsby: true,
	},
	templates: ['gatsby-wp', 'tailwind-shared'],
	actions: [addWithDiff, runInstall, convertCSSModules, runLint],
	cmsType: 'wp',
};

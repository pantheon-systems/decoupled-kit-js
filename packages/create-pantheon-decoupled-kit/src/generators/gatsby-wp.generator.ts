import { convertTStoJS } from '@cli/actions/convertTStoJS';
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
	tsPrompt,
	outDirPrompt,
	tailwindcssPrompt,
} from '../utils/sharedPrompts';

interface GatsbyWPAnswers extends DefaultAnswers {
	appName: string;
	tailwindcss: boolean;
	cmsEndpoint: string;
	ts: boolean;
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
		tsPrompt,
		tailwindcssPrompt,
		cmsEndpointPrompt,
	],
	data: {
		gatsbyPnpmPlugin: pnpm,
		wordpressKitVersion: versions['wordpress-kit'],
		otherConfigsVersion: versions['other'],
		eslintConfigVersion: versions['eslint'],
		wp: true,
		gatsby: true,
	},
	templates: ['gatsby-wp', 'tailwind-shared'],
	actions: [addWithDiff, runInstall, convertCSSModules, convertTStoJS, runLint],
	cmsType: 'wp',
};

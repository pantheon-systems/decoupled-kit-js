import { addWithDiff, runInstall, runLint } from '../actions';
import whichPmRuns from 'which-pm-runs';
import versions from '../pkgVersions.json';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';

interface GatsbyWPAnswers extends DefaultAnswers {
	outDir: string;
}
const pnpm = whichPmRuns()?.name === 'pnpm' ? true : false;

export const gatsbyWp: DecoupledKitGenerator<GatsbyWPAnswers> = {
	name: 'gatsby-wp',
	description: 'Gatsby + WordPress starter kit',
	prompts: [
		{
			name: 'appName',
			message: 'What is the name of your project?',
			default: 'Gatsby WordPress Starter',
		},
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: ({ appName }: { [key: string]: string }) =>
				`${process.cwd()}/${appName.replaceAll(' ', '-').toLowerCase()}`,
		},
	],
	data: {
		gatsbyPnpmPlugin: pnpm,
		wordpressKitVersion: versions['wordpress-kit'],
		otherConfigsVersion: versions['other'],
		eslintConfigVersion: versions['eslint'],
	},
	templates: ['gatsby-wp'],
	actions: [addWithDiff, runInstall, runLint],
};

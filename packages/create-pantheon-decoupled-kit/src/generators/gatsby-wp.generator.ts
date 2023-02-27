import { addWithDiff, runInstall, runLint } from '../actions';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';
import whichPmRuns from 'which-pm-runs';

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
	},
	templates: ['gatsby-wp'],
	actions: [addWithDiff, runInstall, runLint],
};

import type { CustomActionConfig } from 'node-plop';
import type { DecoupledKitGenerator } from '../types';
import whichPmRuns from 'which-pm-runs';

export const gatsbyWp: DecoupledKitGenerator = {
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
	actions: (data) => {
		const pnpm = whichPmRuns()?.name === 'pnpm' ? true : false;
		if (data) {
			data.gatsbyPnpmPlugin = pnpm;
		}
		const addWithDiff: CustomActionConfig<'addWithDiff'> = {
			type: 'addWithDiff',
			templates: './templates/gatsby-wp',
			path: '{{outDir}}',
			force: data?.force ? Boolean(data.force) : false,
		};
		const runESLint: CustomActionConfig<'runLint'> = {
			type: 'runLint',
		};
		const runInstall: CustomActionConfig<'runInstall'> = {
			type: 'runInstall',
		};

		const actions = [addWithDiff, runInstall, runESLint];

		return actions;
	},
};

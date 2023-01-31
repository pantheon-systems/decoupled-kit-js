import type { CustomActionConfig } from 'node-plop';
import type { DecoupledKitGenerator } from '../types';

export const nextDrupal: DecoupledKitGenerator = {
	name: 'next-drupal',
	description: 'Next.js + WordPress starter kit',
	prompts: [
		{
			name: 'appName',
			message: 'What is the name of your project?',
			default: 'Next Drupal Starter',
		},
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: ({ appName }: { [key: string]: string }) =>
				`${process.cwd()}/${appName.replaceAll(' ', '-').toLowerCase()}`,
		},
	],
	actions: (data) => {
		const addWithDiff: CustomActionConfig<'addWithDiff'> = {
			type: 'addWithDiff',
			templates: './templates/next-drupal',
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

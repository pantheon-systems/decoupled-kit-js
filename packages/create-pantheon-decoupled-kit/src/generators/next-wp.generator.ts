import type { ActionType, CustomActionConfig } from 'node-plop';
import type {
	DecoupledKitGenerator,
	AddWithDiffActionConfig,
	RunESLintActionConfig,
} from '../types';

export const nextWp: DecoupledKitGenerator = {
	name: 'next-wp',
	description: 'Next.js + WordPress starter kit',
	prompts: [
		{
			name: 'appName',
			message: 'What is the name of your project?',
			default: 'Next WordPress Starter',
		},
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: ({ appName }: { [key: string]: string }) =>
				`${process.cwd()}/${appName.replaceAll(' ', '-').toLowerCase()}`,
		},
	],
	actions: (data) => {
		const addWithDiff: AddWithDiffActionConfig = {
			type: 'addWithDiff',
			templates: './templates/next-wp',
			path: '{{outDir}}',
			force: data?.force ? Boolean(data.force) : false,
		};
		const runESLint: RunESLintActionConfig = {
			type: 'runLint',
			plugins: 'react',
			ignorePattern: '__mocks__/*',
		};

		const actions: ActionType[] = [addWithDiff];

		console.log('data', !data?.noInstall);
		if (!data?.noInstall) {
			const runInstall: CustomActionConfig<'runInstall'> = {
				type: 'runInstall',
			};
			actions.push(runInstall, runESLint);
		} else {
			actions.push(runESLint);
		}
		return actions;
	},
};

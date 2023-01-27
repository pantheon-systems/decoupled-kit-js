import type {
	DecoupledKitGenerator,
	AddWithDiffActionConfig,
	RunInstallActionConfig,
	RunESLintActionConfig,
} from '../types';
import { pkgJsonPrompts } from '../utils/pkgJsonPrompts';

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
		...pkgJsonPrompts,
		{
			name: 'pkgManager',
			message: 'Choose a package manager',
			type: 'list',
			choices: ['npm', 'yarn'],
			default: 'npm',
		},
	],
	actions: (data) => {
		const addWithDiff: AddWithDiffActionConfig = {
			type: 'addWithDiff',
			templates: './templates/next-wp',
			path: '{{outDir}}',
			force: data?.force ? Boolean(data.force) : false,
		};
		// Omitting pnpm here for now, need to make sure it works on the platform
		const pkgManager = data?.pkgManager === 'yarn' ? 'yarn' : 'npm';
		const runInstall: RunInstallActionConfig = {
			type: 'runInstall',
			pkgManager,
		};
		const runESLint: RunESLintActionConfig = {
			type: 'runLint',
			plugins: 'react',
			ignorePattern: '__mocks__/*',
		};
		const actions = [addWithDiff, runInstall, runESLint];
		return actions;
	},
};

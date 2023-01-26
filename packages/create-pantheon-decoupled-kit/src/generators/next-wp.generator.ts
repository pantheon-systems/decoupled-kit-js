import type { DecoupledKitGenerator, AddWithDiffActionConfig } from '../types';
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
	],
	actions: (data) => {
		const addWithDiff: AddWithDiffActionConfig = {
			type: 'addWithDiff',
			templates: './templates/next-wp',
			path: '{{outDir}}',
			force: data?.force ? Boolean(data.force) : false,
		};
		const actions = [addWithDiff];
		return actions;
	},
};

import type {
	DecoupledKitGenerator,
	AddWithDiffActionConfig,
} from '@cli/src/types';

export const testDiff: DecoupledKitGenerator = {
	name: 'test-diff',
	description: 'a test addWithDiff generator',
	prompts: [
		{
			name: 'diffInput',
			message: 'Input a message',
			default: 'Hello World',
		},
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: `${process.cwd()}/test`,
		},
	],
	actions: (data) => {
		const addWithDiff: AddWithDiffActionConfig = {
			type: 'addWithDiff',
			templates: './templates/test/addWithDiff',
			path: '{{outDir}}',
			force: data?.force ? Boolean(data.force) : false,
		};
		const actions = [addWithDiff];
		return actions;
	},
};

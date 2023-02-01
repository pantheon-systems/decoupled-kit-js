import type { PlopGenerator } from 'node-plop';
import type { DecoupledKitGenerator } from '@cli/src/types';

export const testAppend: DecoupledKitGenerator = {
	name: 'test-append',
	description: 'a test append generator',
	prompts: [
		{
			name: 'message',
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
		const actions: PlopGenerator['actions'] = [
			{
				type: 'append',
				templateFile: './templates/test/testAppend/test-template.js.hbs',
				path: '{{outDir}}/test.js',
				force: data?.force ? Boolean(data.force) : false,
			},
		];
		return actions;
	},
};

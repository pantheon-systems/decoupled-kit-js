import type { PlopGenerator } from 'node-plop';
import type { Answers } from 'inquirer';
import type { DecoupledKitGenerator } from '@cli/src/types';

export const testAdd: DecoupledKitGenerator = {
	name: 'test-add',
	description: 'a test generator',
	prompts: [
		{
			name: 'input',
			message: 'Input a message',
			default: 'Hello World',
		},
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: `${process.cwd()}/test`,
		},
		{
			name: 'choice',
			type: 'list',
			message: 'determine next output',
			default: 'one',
			choices: ['one', 'two'],
		},
		{
			name: 'choice2',
			type: 'list',
			message: 'dynamic',
			default: (answers: Answers) =>
				answers.choice === 'one' ? 'three' : 'five',
			choices: (answers: Answers) =>
				answers.choice === 'one' ? ['three', 'four'] : ['five', 'six'],
		},
	],
	actions: (data) => {
		const actions: PlopGenerator['actions'] = [
			{
				type: 'add',
				templateFile: './templates/test/test-template.js.hbs',
				path: '{{outDir}}/test.js',
				force: data?.force ? Boolean(data.force) : false,
			},
		];
		return actions;
	},
};

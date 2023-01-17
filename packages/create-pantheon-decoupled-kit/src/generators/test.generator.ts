import type { DecoupledKitGenerator } from '../types';
import type { Answers } from 'inquirer';
export const test: DecoupledKitGenerator = {
	name: 'test',
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
			default: '/temp/test.js',
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
	actions: [
		{
			type: 'add',
			templateFile: './templates/test/test-template.js.hbs',
			path: '{{outDir}}.js',
			force: true,
		},
	],
};

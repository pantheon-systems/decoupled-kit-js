import type { PlopGeneratorConfig } from 'node-plop';
import type { Answers } from 'inquirer';
export const test: Partial<PlopGeneratorConfig> = {
	description: 'test/sample generator',
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
			templateFile: '../templates/test/test-template.js.hbs',
			path: '{{outDir}}.js',
			force: true,
		},
	],
};

import { PromptQuestion } from 'node-plop';

export const pkgJsonPrompts: PromptQuestion[] = [
	{
		name: 'description',
		type: 'input',
		message: 'package.json description',
	},
	{
		name: 'homepage',
		message: 'package.json homepage',
	},
	{
		name: 'bugs',
		message: 'package.json bugs',
	},
	{
		name: 'repository',
		message: 'package.json repository',
	},
	{
		name: 'author',
		message: 'package.json author',
	},
];

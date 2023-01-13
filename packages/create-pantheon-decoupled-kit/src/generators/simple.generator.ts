import type { PlopGeneratorConfig } from 'node-plop';
export const simple: Partial<PlopGeneratorConfig> = {
	description: 'simple/sample generator',
	prompts: [
		{
			name: 'message',
			message: 'Input a message',
			default: 'Hello World',
		},
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: '/temp/test.js',
		},
	],
	actions: [
		{
			type: 'append',
			templateFile: '../templates/simple/test-template.js.hbs',
			path: '{{outDir}}.js',
		},
	],
};

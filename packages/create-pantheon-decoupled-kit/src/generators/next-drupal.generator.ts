import { addWithDiff, runInstall, runLint } from '../actions';
import versions from '../pkgVersions.json';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';

interface NextDrupalAnswers extends DefaultAnswers {
	appName: string;
}
export const nextDrupal: DecoupledKitGenerator<NextDrupalAnswers> = {
	name: 'next-drupal',
	description: 'Next.js + Drupal starter kit',
	prompts: [
		{
			name: 'appName',
			message: 'What is the name of your project?',
			default: 'Next Drupal Starter',
		},
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: ({ appName }: { [key: string]: string }) =>
				`${process.cwd()}/${appName.replaceAll(' ', '-').toLowerCase()}`,
		},
	],
	data: {
		nextjsKitVersion: versions['nextjs-kit'],
		drupalKitVersion: versions['drupal-kit'],
	},
	templates: ['next-drupal'],
	actions: [addWithDiff, runInstall, runLint],
};

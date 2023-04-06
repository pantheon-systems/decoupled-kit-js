import { addWithDiff, runInstall, runLint } from '../actions';
import versions from '../pkgVersions.json';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';

interface NextDrupalAnswers extends DefaultAnswers {
	appName: string;
	tailwindcss: boolean;
}

interface NextDrupalData {
	nextjsKitVersion: string;
	drupalKitVersion: string;
	drupal: true;
}

export const nextDrupal: DecoupledKitGenerator<
	NextDrupalAnswers,
	NextDrupalData
> = {
	name: 'next-drupal',
	description: 'Next.js + Drupal starter kit',
	prompts: [
		{
			name: 'appName',
			message: 'What is the name of your project?',
			default: 'Next Drupal Starter',
		},
		{
			name: 'tailwindcss',
			message: 'Would you like to include tailwindcss?',
			type: 'confirm',
			default: true,
		},
		{
			name: 'outDir',
			message: 'Where should the output go?',
			default: ({ appName }: NextDrupalAnswers) =>
				`${process.cwd()}/${appName.replaceAll(' ', '-').toLowerCase()}`,
		},
	],
	data: {
		nextjsKitVersion: versions['nextjs-kit'],
		drupalKitVersion: versions['drupal-kit'],
		drupal: true,
	},
	templates: ['next-drupal', 'tailwind-shared', 'tailwindless-next'],
	actions: [addWithDiff, runInstall, runLint],
};

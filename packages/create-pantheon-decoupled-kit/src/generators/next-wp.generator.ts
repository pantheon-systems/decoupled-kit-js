import { addWithDiff, runInstall, runLint } from '../actions';
import versions from '../pkgVersions.json';
import type { DecoupledKitGenerator, DefaultAnswers } from '../types';
import {
	appNamePrompt,
	cmsEndpointPrompt,
	outDirPrompt,
	tailwindcssPrompt,
} from '../utils/sharedPrompts';

interface NextWPAnswers extends DefaultAnswers {
	appName: string;
	tailwindcss: boolean;
}
interface NextWpData {
	nextjsKitVersion: string;
	wordpressKitVersion: string;
	wp: true;
}

const outDirDefault = ({ appName }: NextWPAnswers) =>
	`${process.cwd()}/${appName.replaceAll(' ', '-').toLowerCase()}`;

export const nextWp: DecoupledKitGenerator<NextWPAnswers, NextWpData> = {
	name: 'next-wp',
	description: 'Next.js + WordPress starter kit',
	prompts: [
		appNamePrompt('Next WordPress Starter'),
		outDirPrompt(outDirDefault),
		tailwindcssPrompt,
		cmsEndpointPrompt,
	],
	data: {
		nextjsKitVersion: versions['nextjs-kit'],
		wordpressKitVersion: versions['wordpress-kit'],
		wp: true,
	},
	templates: ['next-wp', 'tailwind-shared', 'tailwindless-next'],
	actions: [addWithDiff, runInstall, runLint],
	cmsType: 'wp',
};

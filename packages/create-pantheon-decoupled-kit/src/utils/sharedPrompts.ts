import { ConfirmQuestion } from 'inquirer';

export const appNamePrompt = (defaultAnswer = 'My Pantheon App') => ({
	name: 'appName',
	message: 'What is the name of your project?',
	default: defaultAnswer,
});

export const outDirPrompt = <Answers>(
	defaultAnswer: string | ((answers: Answers) => string),
) => ({
	name: 'outDir',
	message: 'Where should the output go?',
	default: defaultAnswer,
});

export const tailwindcssPrompt: ConfirmQuestion = {
	name: 'tailwindcss',
	message: 'Would you like to include tailwindcss?',
	type: 'confirm',
	default: true,
};

export const cmsEndpointPrompt = {
	name: 'cmsEndpoint',
	message: 'What is your CMS endpoint?',
	validate: (answer: string) =>
		/^https:\/\//.test(answer) || 'cmsEndpoint must start with https://',
};

export const tsPrompt: ConfirmQuestion = {
	name: 'ts',
	message: 'Would you like to use TypeScript?',
	type: 'confirm',
	default: true,
};

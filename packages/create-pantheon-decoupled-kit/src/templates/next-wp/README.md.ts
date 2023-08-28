import type { TemplateFn } from '@cli/types';
import {
	commands,
	createPantheonDecoupledKitNpmPackage,
	gettingStarted,
	graphqlPostRequest,
	healthCheck,
	lando,
	readmeHeader,
	wordpressKitNpmPackage,
} from '@partials/shared/readme/sharedReadme';

const md: TemplateFn = () => /* md */ `${readmeHeader()}

${gettingStarted('Next WordPress')}

## \`@pantheon-systems\` npm Packages

${wordpressKitNpmPackage()}

${createPantheonDecoupledKitNpmPackage()}

${healthCheck('next-wp')}

## Local development

${lando('wordpress')}

${commands(false)}

## Miscellaneous

${graphqlPostRequest()}
`;

export default md;

import {
	commands,
	createPantheonDecoupledKitNpmPackage,
	gettingStarted,
	graphqlPostRequest,
	healthCheck,
	lando,
	readmeHeader,
	wordpressKitNpmPackage,
} from '@partials/readme-shared';
import type { TemplateFn } from '@cli/types';

const starterName = 'Next WordPress';

const md: TemplateFn = () => /* md */ `${readmeHeader(starterName)}

${gettingStarted(starterName)}

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

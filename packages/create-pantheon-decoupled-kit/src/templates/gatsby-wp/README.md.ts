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

const starterName = 'Gatsby WordPress';

const md: TemplateFn = () => /* md */ `${readmeHeader(starterName)}

${gettingStarted(starterName)}

## \`@pantheon-systems\` npm Packages

${wordpressKitNpmPackage()}

${createPantheonDecoupledKitNpmPackage()}

${healthCheck('gatsby-wp')}

## Local development

${lando('wordpress')}

${commands(true)}

## Miscellaneous

${graphqlPostRequest()}
`;

export default md;

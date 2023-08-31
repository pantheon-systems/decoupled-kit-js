import {
	commands,
	createPantheonDecoupledKitNpmPackage,
	drupalKitNpmPackage,
	gettingStarted,
	healthCheck,
	lando,
	readmeHeader,
} from '@partials/readme-shared';
import type { TemplateFn } from '@cli/types';

const starterName = 'Next Drupal';

const md: TemplateFn = () => /* md */ `${readmeHeader(starterName)}

${gettingStarted(starterName)}

## \`@pantheon-systems\` npm Packages

${drupalKitNpmPackage()}

${createPantheonDecoupledKitNpmPackage()}

${healthCheck('next-drupal')}

## Local development

${lando('drupal')}

${commands(false)}
`;

export default md;

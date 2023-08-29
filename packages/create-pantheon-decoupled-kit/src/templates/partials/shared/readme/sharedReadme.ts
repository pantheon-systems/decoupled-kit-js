import { taggedTemplateHelpers as utils } from '@cli/utils';

type GeneratorName = 'next-wp' | 'next-drupal' | 'gatsby-wp';
type StarterName = 'Next WordPress' | 'Next Drupal' | 'Gatsby WordPress';
type CmsType = 'drupal' | 'wordpress';

/**
 * The header section for the starter kit READMEs
 */
export const readmeHeader = (
	starterName: StarterName,
) => /* md */ `<div style="display:flex;flex-direction:column">
	<img src="https://raw.githubusercontent.com/pantheon-systems/decoupled-kit-js/canary/web/static/img/B_Fist-Tagline.png" height="120" style="background:#ffffff;border-radius:8px;margin:auto;display:flex;" alt="Pantheon.io logo featuring a fist capturing lighting. Pantheon™, The Platform for Extraordinary Websites.">
	<a href="https://decoupledkit.pantheon.io/docs#${starterName
		.split(' ')
		.join('-')
		.toLowerCase()}-starter">
		<h1 style="margin:auto;" align="center">${starterName} Starter</h1>
	</a>
</div>

For detailed documentation on the Decoupled Kit Starters, visit [the Decoupled Kit developer documentation](https://decoupledkit.pantheon.io).

For more information on using the starter on Pantheon Front-End Sites, visit [the Pantheon.io platform documentation](https://docs.pantheon.io/guides/decoupled/).`;

/**
 * The Getting Started section for the starter kit READMEs
 * @param starterName one of Next WordPress, Next Drupal, or Gatsby WordPress
 */
export const gettingStarted = (
	starterName: StarterName,
) => /* md */ `## Getting Started

The ${starterName} starter requires Node.js and is built and tested on the LTS version which can be found on the [Node.js downloads page](https://nodejs.org/en/download).

The starter kit supports npm, pnpm, and yarn. If you created the starer via the Pantheon Front-End Sites dashboard, it will use npm by default. To change this, delete the \`package-lock.json\` file and the \`node-modules\` folder, then run the install command of your preferred package manager.

If you created the starter via \`create-pantheon-decoupled-kit\`, it will detect the package manager used to run the command and use it install the starter's dependencies unless the \`--noInstall\` flag was used.`;

/**
 * The `wordpress-kit` section for the WordPress based starter kit READMEs
 */
export const wordpressKitNpmPackage =
	() => /* md */ `## \`@pantheon-systems/wordpress-kit\` npm package

The Pantheon [\`@pantheon-systems/wordpress-kit\`](https://www.npmjs.com/package/@pantheon-systems/wordpress-kit) is included as a dependency in this
project. This allows developers to make use of utility functions to simplify the
process of building and maintaining a Front-End site on Pantheon.

The \`tailwindcssPlugin\` is included in this project and is used to map WordPress
Block Editor styles to Tailwind styles.

API reference documentation can be found at https://decoupledkit.pantheon.io/docs/Packages/wordpress-kit.`;

/**
 * The `drupal-kit` section for the Drupal based starter kit READMEs
 */
export const drupalKitNpmPackage =
	() => /* md */ `## \`@pantheon-systems/drupal-kit\` npm package

The Pantheon [\`@pantheon-systems/drupal-kit\`](https://www.npmjs.com/package/@pantheon-systems/drupal-kit) is included as a dependency in this
project. This allows developers to make use of utility functions to simplify the
process of building and maintaining a Front-End site on Pantheon.

API reference documentation can be found at https://decoupledkit.pantheon.io/docs/Packages/drupal-kit.`;

/**
 * The `create-pantheon-decoupled-kit` section for the starter kit READMEs
 */
export const createPantheonDecoupledKitNpmPackage =
	() => /* md */ `### \`create-pantheon-decoupled-kit\`

The \`create-pantheon-decoupled-kit\` npm package, or "the CLI", is the single source of truth for all of the JavaScript/TypeScript starter kit templates. See [Using the CLI](https://decoupledkit.pantheon.io/docs/frontend-starters/using-the-cli) for more information.

In addition to scaffolding new projects, a number of add-ons are available which can be added to an existing project. For more detailed information on the available add-ons, see the [Decoupled Kit developer documentation](https://decoupledkit.pantheon.io/docs/frontend-starters/using-the-cli#add-ons).`;

/**
 * @param generatorName the name of the generator
 * @returns the link to the correct troubleshooting page based on the generator
 */
const disableHealthCheckLink = (generatorName: GeneratorName) => {
	const baseUrl = 'https://decoupledkit.pantheon.io/docs/frontend-starters';
	let url: string;
	switch (generatorName) {
		case 'next-wp':
			url = `${baseUrl}/nextjs/nextjs-wordpress/troubleshooting#disabling-the-decoupled-kit-health-check`;
			break;
		case 'next-drupal':
			url = `${baseUrl}/nextjs/nextjs-drupal/troubleshooting#disabling-the-decoupled-kit-health-check`;
			break;
		case 'gatsby-wp':
			url = `${baseUrl}/gatsby/gatsby-wordpress/troubleshooting#disabling-the-decoupled-kit-health-check`;
			break;
	}
	return `To disable the health check, see [Disabling the decoupled kit health check](${url})`;
};

/**
 * Explains the `@pantheon-systems/decoupled-kit-health-check`
 */
export const healthCheck = (
	generatorName: GeneratorName,
) => /* md */ `### \`@pantheon-systems/decoupled-kit-health-check\`

To ensure the Decoupled Kit starter has what it needs to source data from a [Decoupled Kit Backend](https://decoupledkit.pantheon.io/docs/backend-starters), a health-check is run as a part of the the build command and will error in case a critical component is not met.

See a [detailed description of the health-check here](https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/packages/decoupled-kit-health-check#what-does-it-do).

${disableHealthCheckLink(generatorName)}
`;

/**
 * Links to the dev docs on setting up Lando
 * @param cmsType wordpress or drupal
 */
export const lando = (cmsType: CmsType) => /* md */ `### Lando

To configure the starter for local development with Lando, see the [Decoupled Kit developer docs on Local Development](https://decoupledkit.pantheon.io/docs/backend-starters/decoupled-${cmsType}/local-development).`;

/**
 * Explains some relevant scripts in the package.json
 * @param isGatsby set to true if the framework is Gatsby
 */
export const commands = (isGatsby: boolean) => /* md */ `### Commands

The Decoupled Kit starters include a number of scripts defined in the
\`package.json\`. To list all of these scripts, \`cd\` into your starter's directory
and in a terminal use the \`npm run\` command.


Some commands include:

${utils.if(isGatsby, '### `develop`')}
${utils.if(!isGatsby, '### `dev`')}
Runs the starter in developer mode.

#### \`build\`
Runs the build step for the starter. By default, the
\`@pantheon-systems/decoupled-kit-health-check\` is run before the build. This
command is required for Pantheon Front-End Sites.

${utils.if(
	isGatsby,
	/* md */ `#### \`serve\`
Runs the starter in local production mode.`,
)}
${utils.if(
	!isGatsby,
	/* md */ `#### \`start\`
Runs the starter in production mode. This command is required for Pantheon Front-End Sites.`,
)}

### \`test\`
Runs the tests.

### \`update-snapshots\`
Updates the snapshots used for the snapshot tests. The starter comes with an
example snapshot test that may need to be updating depending on your
configuration.`;

/**
 * Explains the reason for using GET requests in GraphQL and how to change to POST
 */
export const graphqlPostRequest =
	() => /* md */ `### Use \`POST\` for GraphQL requests

This starter uses \`GET\` for GraphQL requests by default in order to utilize the [WPGraphQL Smart Cache Network Cache](https://github.com/wp-graphql/wp-graphql-smart-cache/blob/main/docs/network-cache.md#network-cache). Editing this
configuration to use \`POST\` requests can be done in \`/lib/WordPressClient.js\`.

To achieve this, set each \`GraphQLClientFactory\` constructor's \`method\` parameter
to equal \`POST\`.

${utils.md.codeFence({
	lang: 'js',
	value: /* js */ `export const client = new GraphQLClientFactory(process.env.backendUrl, {
	method: 'POST',
}).create();`,
})}`;

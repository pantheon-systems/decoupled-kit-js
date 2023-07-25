import { type TemplateFn } from '@cli/types';

const ts: TemplateFn = ({
	data,
	utils,
}) => /* ts */ `import { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';
import path from 'node:path';

// initialize .env.development.local vars
dotenv.config({
	path: path.resolve(process.cwd(), '.env.development.local'),
});

if (
	process.env.WPGRAPHQL_URL === undefined &&
	process.env.PANTHEON_CMS_ENDPOINT === undefined
) {
	let message;
	if (process.env.NODE_ENV === 'development') {
		message = ${utils.backticks`No WPGRAPHQL_URL found.
See the README.md for information on setting this variable locally.`};
	} else if (process.env.NODE_ENV === 'production') {
		message = ${utils.backticks`No CMS Endpoint found.
Link a CMS or set the WPGRAPHQL_URL environment variable in the settings tab in the dashboard.
If your site does not require a backend to build, remove this check from the gatsby-config.js.`};
	}
	throw new Error(message);
}

const injectedOptions: {
	[key: string]: string | undefined;
	pathPrefix?: string;
} = {};
if (process.env.PANTHEON_UPLOAD_PATH) {
	injectedOptions['pathPrefix'] = process.env.PANTHEON_UPLOAD_PATH;
}

const cmsEndpoint = process.env.PANTHEON_CMS_ENDPOINT || '';

// Need the ternary here because the config will run multiple times per plugin
process.env.PANTHEON_CMS_ENDPOINT =
	cmsEndpoint && cmsEndpoint.startsWith('https://')
		? process.env.PANTHEON_CMS_ENDPOINT
		: ${utils.backticks('https://${cmsEndpoint}/wp/graphql')};

// Use URL from .env if it exists, otherwise fall back on the
// Pantheon CMS endpoint
const url = process.env.WPGRAPHQL_URL || process.env.PANTHEON_CMS_ENDPOINT;

const config: GatsbyConfig = {
	...(injectedOptions && injectedOptions),
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	jsxRuntime: 'automatic',
	trailingSlash: 'ignore',
	// Adding plugins to this array adds them to your Gatsby site.
	// Gatsby has a rich ecosystem of plugins.
	// If you need any more you can search here: https://www.gatsbyjs.com/plugins/
	plugins: [
		{
			resolve: 'gatsby-plugin-typescript',
		},
		{
			// See https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md for more info
			resolve: 'gatsby-source-wordpress',
			options: {
				// the only required plugin option for WordPress is the GraphQL url.
				url,
				// If your WordPress server is overloaded during a build,
				// try the following settings to reduce concurrency.
				// see https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/plugin-options.md#schemarequestconcurrency
				// schema: {
				//   perPage: 20, // default 100
				//   requestConcurrency: 5, // default 15
				//   previewRequestConcurrency: 2, // default 5
				// },
			},
		},
		// We need this plugin so that it adds the "File.publicURL" to our site
		// It will allow us to access static url's for assets like PDF's
		// See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'assets',
				path: path.resolve(process.cwd(), 'content', 'assets'),
			},
		},
		// See https://www.gatsbyjs.com/plugins/gatsby-plugin-image/?=plugin-image for more info
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-image',
		'gatsby-plugin-postcss',
		'gatsby-plugin-dts-css-modules',
		${utils.if(data.gatsbyPnpmPlugin, `'gatsby-plugin-pnpm',`)}
	],
};

export default config;
`;
export default ts;

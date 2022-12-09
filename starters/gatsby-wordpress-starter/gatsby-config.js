const path = require('path')
require('dotenv').config({
	path: path.resolve(process.cwd(), '.env.development.local'),
})

if (
	process.env.WPGRAPHQL_URL === undefined &&
	process.env.PANTHEON_CMS_ENDPOINT === undefined
) {
	let message
	if (process.env.NODE_ENV === 'development') {
		message = `No WPGRAPHQL_URL found.\nSee the README.md for information on setting this variable locally.`
	} else if (process.env.NODE_ENV === 'production') {
		message = `No CMS Endpoint found.\nLink a CMS or set the WPGRAPHQL_URL environment variable in the settings tab in the dashboard\nIf your site does not require a backend to build, remove this check from the gatsby-config.js.`
	}
	throw new Error(message)
}

const injectedOptions = {}
if (process.env.PANTHEON_UPLOAD_PATH) {
	injectedOptions['pathPrefix'] = process.env.PANTHEON_UPLOAD_PATH
}

// Need the ternary here because the config will run multiple times per plugin
process.env.PANTHEON_CMS_ENDPOINT =
	process.env.PANTHEON_CMS_ENDPOINT &&
	process.env.PANTHEON_CMS_ENDPOINT.startsWith('https://')
		? process.env.PANTHEON_CMS_ENDPOINT
		: `https://${process.env.PANTHEON_CMS_ENDPOINT}/wp/graphql`

// Use URL from .env if it exists, otherwise fall back on the
// Pantheon CMS endpoint
let url = process.env.WPGRAPHQL_URL || process.env.PANTHEON_CMS_ENDPOINT

if (process.env.PANTHEON_ENVIRONMENT_URL) {
	if (process.env.PANTHEON_ENVIRONMENT_URL.startsWith('live')) {
		process.env.IS_LIVE_ENVIRONMENT = true
	}
}

module.exports = {
	...(injectedOptions && injectedOptions),
	/**
	 * Adding plugins to this array adds them to your Gatsby site.
	 *
	 * Gatsby has a rich ecosystem of plugins.
	 * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
	 */
	plugins: [
		{
			/**
			 * First up is the WordPress source plugin that connects Gatsby
			 * to your WordPress site.
			 *
			 * visit the plugin docs to learn more
			 * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
			 *
			 */
			resolve: `gatsby-source-wordpress`,
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

		/**
		 * We need this plugin so that it adds the "File.publicURL" to our site
		 * It will allow us to access static url's for assets like PDF's
		 *
		 * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
		 */
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/content/assets`,
			},
		},
		/**
		 * Gatsby v4 replaces the gatsby-image module with the gatsby-plugin-image.
		 * See https://www.gatsbyjs.com/plugins/gatsby-plugin-image/?=plugin-image for more info
		 */
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-image`,
		`gatsby-plugin-postcss`,
		{
			// See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter WordPress`,
				short_name: `GatsbyJS & WP`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `static/favicon.ico`,
			},
		},

		/**
		 * this (optional) plugin enables Progressive Web App + Offline functionality
		 * To learn more, visit: https://gatsby.dev/offline
		 */
		// `gatsby-plugin-offline`,
		'gatsby-plugin-pnpm',
	],
}

const path = require("path")
const dotenv = require("dotenv")

// Register envars for dev, test, live or local if available
switch (process.env.BACKEND_ENV) {
  case "dev":
    dotenv.config({ path: path.resolve(process.cwd(), ".env.dev") })
  case "test":
    dotenv.config({ path: path.resolve(process.cwd(), ".env.test") })
  case "live":
    dotenv.config({ path: path.resolve(process.cwd(), ".env.live") })
  default:
    dotenv.config({
      path: path.resolve(process.cwd(), ".env.local"),
    })
}

const env = process.env.BACKEND_ENV
const site = process.env.BACKEND_SITE
// Use URL from .env if it exists, otherwise fall back on constructing
// Pantheon site URL
const url =
  process.env.WPGRAPHQL_URL || `https://${env}-${site}.pantheonsite.io/graphql`

/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
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
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
  ],
}

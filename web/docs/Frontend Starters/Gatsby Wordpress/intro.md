---
id: "gatsby-wordpress-intro"
title: "Introduction And "
slug: "/Frontend Starters/Gatsby Wordpress/Introduction"
---

## Before You Begin

The Pantheon `gatsby-wordpress-starter` uses Gatsby v4 and has been tested using nodejs v16 with npm v8.
You may want to install the gatsby cli globally, or [use `npx`](https://www.npmjs.com/package/npx)

## Why Use The Gatsby WordPress Starter?

The `gatsby-wordpress-starter` is designed as a starting point to for a Gatsby site that consumes data from
a WordPress backend - specifically a WordPress backend on Pantheon configured with the `decoupled_wordpress`
and `wordpress_graphql` plugins installed.

The starter has a dependency on the `@pantheon-systems/wordpress-kit`, which
includes some helpers that maximize any available features of the WordPress backend.

## Creating A New Project With The Template

There are two methods to creating a new project based on the `gatsby-wordpress-starter`:`

1. Clone the starter repo directly
2. Use the `gatsby-cli`

To clone the starter directly from GitHub, Visit the repo link https://github.com/pantheon-systems/gatsby-wordpress-starter and click on the **Code** button to open the clone dropdown and select your preferred method.

To create a new project using the `gatsby-wordpress-starter` as a template, [use the `gatsby new` command](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#creating-a-site-from-a-starter).

```shell
# if gatsby-cli is installed locally...
gatsby new my-gatsby-wordpress-starter https://github.com/pantheon-systems/gatsby-wordpress-starter
# or use npx
npx gatsby new my-gatsby-wordpress-starter https://github.com/pantheon-systems/gatsby-wordpress-starter
```

If you have a package manager preference between npm and yarn, you may need to set it in the `gatsby-cli` options before
initiating your new project.

```shell
# set your preferred package manager with the following command
# for npm
gatsby options set pm npm
# for yarn
gatsby options set pm yarn
```

## Next Steps

See the rest of the Gatsby WordPress documentation for more information on setting environment variables and
customizing your new project!

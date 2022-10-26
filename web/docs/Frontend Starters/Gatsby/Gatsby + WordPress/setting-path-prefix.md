---
id: 'gatsby-wordpress-path-prefix'
title: 'Setting Path Prefix For Testing Locally'
sidebar_position: 3
slug: '/Frontend Starters/Gatsby WordPress/Setting Path Prefix'
---
## Before You Begin

This guide assumes you are testing a Gatsby + WordPress site locally which is to be hosted at a subpath of the root, for example `/docs`, by using [Gatsby's `pathPrefix` feature](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/).

## Setting The Path Prefix
See Gatsby's guide on [Adding a Path Prefix](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/) for information on setting the `pathPrefix` if you are not using the starter kit.

If you are using the `@pantheon-systems/gatsby-wordpress-starter`, the environment variable `process.env.PANTHEON_UPLOAD_PATH` will be automatically set as the `pathPrefix` in the `gatsby-config.js`. To test this locally, set the `PANTHEON_UPLOAD_PATH` in your `.env.development.local` to the path you would like to test.

## Updating The Build Command
In order to serve your site at the given path, the build and serve commands will need an extra flag, `--prefix-paths`. For example, here is the `package.json` scripts after updating the commands with the flag:

```json
	"scripts": {
		"build": "gatsby build --prefix-paths",
		"serve": "gatsby serve --prefix-paths"
    }
```

You may also set the `PREFIX_PATHS`  environment variable before your build, for example:

```shell
PREFIX_PATHS=true gatsby build
```

## Verify Links And Assets
If you are adding the pathPrefix to an app that did not previously use it, you may need to refactor some in app links. Verify all assets and links are still working. See [Gatsby's guide on in-app linking](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/#in-app-linking) for more information. The starter kit should work with or without a pathPrefix out of the box.
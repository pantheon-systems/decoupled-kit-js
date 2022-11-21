---
slug: /decoupled-kit-repo-walk-through
sidebar_position: 1
---
## Frontend
### `decoupled-kit-js` Monorepo
The `decoupled-kit-js` monorepo is home to all of the open source starter kits and [npm packages](https://www.npmjs.com/search?q=@pantheon-systems/*-kit) which provide a starting point for developers who want an out-of-the-box experience for headless WordPress and Drupal powered by modern JavaScript/TypeScript tools.

### Starter Kits
All starter kits are mirrored to standalone GitHub repos available for consumption via your favorite tool that uses GitHub repositories as templates, like `gatsby new` or `create-next-app`. You will find the standalone repo for each starter at `https://github.com/pantheon-systems/{name of starter}`.

For example, the following command uses the `next-wordpress-starter` as a template with `create-next-app`:

 ```bash
npx create-next-app -e https://github.com/pantheon-systems/next-wordpress-starter

```
Read on for a brief overview of each starter. Check each starter's `README.md` for more detailed information.

#### Gatsby WordPress Starter

The [`gastby-wordpress-starter`](https://github.com/pantheon-systems/gatsby-wordpress-starter) is a [Gatsby](https://v4.gatsbyjs.com/docs/) app which consumes data from a WordPress backend with the [WPGraphQL](https://wordpress.org/plugins/wp-graphql/) and [WPGatsby](https://wordpress.org/plugins/wp-gatsby/) plugins, and uses Gatsby as a Static Site Generator. 

This starter implements:
- [`wordpress-kit`](#wordpress-kit)

#### [Next.js Drupal Starter](#next-drupal-starter)

The [`next-drupal-starter`](https://github.com/pantheon-systems/next-drupal-starter) is a [Next.js](https://nextjs.org/docs) app which consumes data from Drupal with the [JSON:API](https://www.drupal.org/project/jsonapi) module, as well as some Pantheon managed modules \<Insert link to the modules docs below here when they're written \>, and uses Next's Server Side Rendering.

This starter implements:
- [`nextjs-kit`](#nextjs-kit)
- [`drupal-kit`](#drupal-kit)

#### [Next.js WordPress Starter](#next-wordpress-starter)

The [`next-wordpress-starter`](https://github.com/pantheon-systems/next-wordpress-starter) is a [Next.js](https://nextjs.org/docs) app which consumes data from a WordPress backend with the [WPGraphQL](https://wordpress.org/plugins/wp-graphql/) plugin, and uses Next's Server Side Rendering.

This starter implements:
- [`nextjs-kit`](#nextjs-kit)
- [`wordpress-kit`](#wordpress-kit)

### npm Packages

To help fetch data, set headers, or style markup from the CMS, we have developed a set of tools that are published to npm. These tools are used in the starter kits, and can be imported into your projects if you'd rather start from your own template, but you still want to utilize some of the headless CMS helpers we have developed.

Packages can be installed with your node package manager of choice. The following example uses `npm` to install `drupal-kit` and `nextjs-kit` as production dependencies in a node project:

```bash
npm i @pantheon-systems/drupal-kit @pantheon-systems/nextjs-kit
```

Read on for a brief overview of each npm package. Please see the `README.md` in each package's repo for more detailed information.
#### `cms-kit`

The [`cms-kit`](https://www.npmjs.com/package/@pantheon-systems/cms-kit) exports utilities used in both [`drupal-kit`](#drupal-kit) and [`wordpress-kit`](#wordpress-kit). Those utilities are re-exported from the CMS specific packages for use in the starters.

#### `drupal-kit`
The [`drupal-kit`](https://www.npmjs.com/package/@pantheon-systems/drupal-kit) utilizes [`@gdwc/drupal-state`](https://www.drupal.org/project/drupal_state), a TypeScript library for fetching and storing data from Drupal's JSON:API.  `@gdwc/drupal-state` lives on https://drupal.org, and is maintained by the Decoupled Kit team along with members of the Drupal community. Please visit https://www.drupal.org/project/drupal_state for more information on DrupalState.

`drupal-kit` exports a `PantheonDrupalState` class that utilizes some methods from [`cms-kit`](#cms-kit) to efficiently fetch and cache data from Drupal on Pantheon.

#### `wordpress-kit`

The [`wordpress-kit`](https://www.npmjs.com/package/@pantheon-systems/wordpress-kit) exports a light wrapper around `graphql-request` which is used to make GraphQL requests to a WordPress instances using the [WPGraphQL](https://wordpress.org/plugins/wp-graphql/) plugin.

It also exports a [`tailwindcss`](https://tailwindcss.com/) plugin which maps WordPress Block Editor styles to tailwindcss classes. Import the plugin into your tailwindcss config to see the Block Editor styles on your content sourced from WordPress.


#### `nextjs-kit`

The [`nextjs-kit`](https://www.npmjs.com/package/@pantheon-systems/nextjs-kit) exports shared components used in the Next.js based starter kits, as well as some shared helpers.

## Backend

To facilitate the Frontend Starter Kits, we also maintain WordPress and Drupal projects as starting points for the CMS side of things. These templates are open source and include community and Decoupled Kit managed WordPress plugins and Drupal modules.

Read on for a brief overview of each project. Please see the `README.md` in each project's repo for more detailed information.

### WordPress
#### Decoupled WordPress Composer Managed

[Decoupled WordPress Composer Managed](https://github.com/pantheon-upstreams/decoupled-wordpress-composer-managed) is a WordPress template designed to get you started with a headless WordPress instance. It includes a number of both community and Decoupled Kit maintained plugins including  [WPGraphQL](https://wordpress.org/plugins/wp-graphql/), [WPGatsby](https://wordpress.org/plugins/wp-gatsby/), and [Pantheon Decoupled](#WordPress Pantheon Decoupled).

#### WordPress Pantheon Decoupled

The [WordPress Pantheon Decoupled](https://github.com/pantheon-systems/wp-pantheon-decoupled) helps to enable headless WordPress without any extra configuration needed by the user. The required plugins are installed and some sample content is included, like a post with an image and an example menu.

#### WordPress Pantheon Decoupled Gatsby

[WordPress Pantheon Decoupled Gatsby](https://github.com/pantheon-systems/wp-pantheon-decoupled-gatsby) includes necessary configuration for using WordPress with Gatsby on Pantheon.

#### WordPress Pantheon Decoupled Preview
[WordPress Pantheon Decoupled Preview](https://github.com/pantheon-systems/wp-decoupled-preview) enables preview of content on the frontend site with minimal configuration when used with our [Next.js WordPress Starter](#next-wordpress-starter).

### Drupal
#### Drupal Composer Managed
[Drupal Composer Managed](https://github.com/pantheon-systems/drupal-composer-managed) is a Drupal project meant to work with Pantheon's Integrated Composer build process.


#### Drupal Decoupled Preview
[Drupal Decoupled Preview](https://github.com/pantheon-systems/decoupled_preview) enables preview of content on the frontend site with minimal configuration when used with our [Next.js Drupal Starter](#next-drupal-starter).

#### Decoupled Drupal Tool


[Decoupled Drupal Tools](https://github.com/pantheon-systems/decoupled-drupal-tools) include the `pantheon_decoupled` module and the `pantheon_decoupled` and `pantheon_decoupled_umami_demo` install profiles.


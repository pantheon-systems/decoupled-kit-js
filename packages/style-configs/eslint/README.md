# @pantheon-systems/eslint-config

ESLint configs for `@pantheon-systems` npm packages.

The configs are currently unpublished.

## How To Add A New ESLint config

1. Add a \*.js file to the root of this directory with the name of the config,
   for example `vue.js`
1. Extend the base plugin from your plugin unless it is meant to be standalone
1. If a new parser is used, add it to the `dependencies` in the `package.json`
1. If new plugins are used, add them to the `peerDependencies` in the
   `package.json`
1. From your .js file, export your config
1. Add the config to the `files` array in the `package.json`

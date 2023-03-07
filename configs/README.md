# @pantheon-systems/workspace-configs

Configuration files for the `decoupled-kit-js` monorepo. The configs are
currently unpublished.

## Adding a new config

To add a config,

1. use a `*.config.js` file
1. in the package.json, add this file to the `files` array.
1. add the path to exports for example:

```json
"exports": {
  ...
  "./my-new-config": "./my-new-config.config.js"
}
```

Note: To add a new ESLint config, see [configs/eslint](./eslint/README.md)

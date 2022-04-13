# Pantheon Systems Decoupled Kits

[![CircleCI](https://circleci.com/gh/pantheon-systems/decoupled-kit-js/tree/canary.svg?style=svg)](https://circleci.com/gh/pantheon-systems/decoupled-kit-js/tree/canary)

## Prerequisites

To setup the monorepo for development the following should be installed locally:

1. Nodejs version 16 LTS. We reccomend using [nvm](https://github.com/nvm-sh/nvm)
1. npm version 8.x.x
1. The latest version of [pnpm](https://pnpm.io/installation)

We recommend using npm

```bash
npm install -g pnpm@6.32.6
```

## Getting started

1. Fork this repo
1. Clone your fork to your local machine
1. Run `pnpm install` to install dependencies for all packages and starters
1. Run `pnpm husky install` to install the [husky pre-commit hooks](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/.husky/pre-commit) 

There are several scripts available

- to test all projects in the monorepo that have a test script, run `pnpm test`
- to build all packages in the monorepo, run `pnpm build:pkgs`
- to build all starters in the monorepo, run `pnpm build:starters`
- to build all projects in the monorepo, run `pnpm build:all`

To run commands in targeted projects, folders, or workspaces, pnpm offers [a filter flag](https://pnpm.io/filtering).

For example, to start the Gatsby starter from the root of the monorepo (filter by namespace):

```bash
pnpm --filter ./starters/gatsby-wordpress-starter' develop
```

To run lint in the starters (filter by directory):

```bash
pnpm --filter ./starters lint
```

To run documentation:

```bash
pnpm --filter ./web start
```

## Bug Reports and Feature Requests

[Open a bug report here](https://github.com/pantheon-systems/decoupled-kit-js/issues/new?template=bug-report-template.yml)

[Open a feature request here](https://github.com/pantheon-systems/decoupled-kit-js/issues/new?template=feature-request-template.yml)

## Versions and Releases

### Generating a changeset

To generate a new changeset, run `pnpm changeset` in the root of the repository. The generated markdown files in the `.changeset` directory should be committed to the repository.

### Creating a new version

- Run `pnpm changeset version`. This will bump the versions of the packages previously specified with pnpm changeset (and any dependents of those) and update the changelog files.
- Run `pnpm install`. This will update the lockfile and rebuild packages.
- Commit the changes.

### Publishing a new version

- Confirm your publishing scope by running `pnpm config get scope` this should be `@pantheon-systems`. If not, it can be changed with `pnpm config set scope @pantheon-systems`.
- To publish, run `pnpm publish -r --access public`. This command will publish all public packages that have bumped versions not yet present in the registry.

### Further reading

For more information on contributing to this project, see [CONTRIBUTING.md](./CONTRIBUTING.md)
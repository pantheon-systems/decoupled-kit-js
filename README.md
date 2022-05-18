# Pantheon Systems Decoupled Kits

[![CircleCI](https://circleci.com/gh/pantheon-systems/decoupled-kit-js/tree/canary.svg?style=svg)](https://circleci.com/gh/pantheon-systems/decoupled-kit-js/tree/canary)

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Versions and Releases](#versions-and-releases)
- [Reporting](#bug-reports-and-feature-requests)
- [Further Reading](#further-reading)


## Prerequisites

To configure the monorepo for development, the following should be installed locally:

- Nodejs version 16 LTS. We recomemnd using [nvm](https://github.com/nvm-sh/nvm)
- [npm](https://docs.npmjs.com/cli/v8/commands/npm) version 8.x.x
- [pnpm](https://pnpm.io/installation) version 7.1.0

   We recommend using npm. Run the following command to install:

   ```bash
   npm install -g pnpm@7.1.0
   ```

## Getting Started

1. Fork [this](https://github.com/pantheon-systems/decoupled-kit-js/fork) repo.
1. Clone your fork to your local machine.
1. Install dependencies for all packages and starters using the following command:
   ```
   pnpm install
   ```
1. Install the [husky pre-commit hooks](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/.husky/pre-commit). Run the following command:
   ```
   pnpm husky install
   ```

### Useful Scripts

There are several scripts you can use on your monorepo.


- Test all projects in the monorepo that have a test script:
  ```bash
  pnpm test
  ```
- Build all packages in the monorepo:
  ```bash
  pnpm build:pkgs
  ```
- Build all starters in the monorepo:
  ```bash
  pnpm build:starters
  ```
- Build all projects in the monorepo:
  ```bash
  pnpm build:all
  ```

- Run commands in a targeted project, folder, or workspace, using the `pnpm` [filter flag](https://pnpm.io/filtering).

  For example, to start the Gatsby starter from the root of the monorepo (filter by namespace):
   
   ```bash
   pnpm --filter './starters/gatsby-wordpress-starter' develop
   ```


 - Lint in the starters and filter by directory:
 
    ```bash
    pnpm --filter './starters/**' lint
    ```

-  Run documentation:

    ```bash
    pnpm --filter './web start'
    ```
------------------

## Versions and Releases

### Generating a Changeset

To generate a new changeset, run `pnpm changeset` in the root of the repository. The generated Markdown files in the `.changeset` directory should be committed to the repository.

### Creating a New Version

- To increase the versions of the packages and dependencies previously specified with `pnpm changeset` and update the changelog files, run the following command:
  ```
  pnpm changeset version
  ```
  
- Run `pnpm install`. This will update the lockfile and rebuild packages.
- Commit the changes.

### Publishing a New Version

- Confirm your publishing scope by running the following command in `pantheon-systems`:
  ```
  pnpm config get scope
  ``` 
  Alternatively, you can use the command `pnpm config set scope @pantheon-systems`.
  
- To publish all public packages that have versions that are not currently in the registry, use the following command:
  ```
  pnpm publish -r --access public
  ```
---------------------------
## Bug Reports and Feature Requests

 - Is the code in this repository not working as expected? Open a bug report [here](https://github.com/pantheon-systems/decoupled-kit-js/issues/new?template=bug-report-template.yml)

 - Is there something you would like to see added to this project? Open a feature request [here](https://github.com/pantheon-systems/decoupled-kit-js/issues/new?template=feature-request-template.yml)

## Further Reading

For more information on contributing to this project, see [CONTRIBUTING.md](./CONTRIBUTING.md)

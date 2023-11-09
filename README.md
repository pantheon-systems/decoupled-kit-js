# Pantheon Systems Decoupled Kits

Tests:
[![CircleCI](https://circleci.com/gh/pantheon-systems/decoupled-kit-js/tree/canary.svg?style=svg)](https://circleci.com/gh/pantheon-systems/decoupled-kit-js/tree/canary)

![Headless regression testing](https://github.com/pantheon-systems/decoupled-kit-js/actions/workflows/cli-addon-tests.yml/badge.svg)
![Canary Release](https://github.com/pantheon-systems/decoupled-kit-js/actions/workflows/canary-release.yml/badge.svg)
![Split Canary Sites](https://github.com/pantheon-systems/decoupled-kit-js/actions/workflows/canary-sites-split.yml/badge.svg)
![Starter Split and Changesets](https://github.com/pantheon-systems/decoupled-kit-js/actions/workflows/release-and-split.yml/badge.svg)

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Versions and Releases](#versions-and-releases)
- [Reporting](#bug-reports-and-feature-requests)
- [Further Reading](#further-reading)

## Prerequisites

Welcome to the Pantheon Systems Decoupled Kit Monorepo

This repo is a collection of multiple projects, organized by `pnpm` workspaces.

### Workspaces

There are two main workspaces in the monorepo, `starters`, and `packages`, along
with a `configs` workspace and `web` which houses the documentation.

#### Starters

Each directory in this workspace represents a starter kit that is mirrored to a
standalone repo at release time. Please use the monorepo to develop against the
starters.

#### Packages

The starters have a dependency on one or more of our npm packages, which live in
this workspace. Each directory in this workspace represents a library to be
published on `npm`, and to be consumed by the public, and our starter kits.

### Setup the Monorepo

To configure the monorepo for development, the following should be installed
locally:

- Node.js version 18 LTS. We recommend using
  [nvm](https://github.com/nvm-sh/nvm)
- [npm](https://docs.npmjs.com/cli/v8/commands/npm) version 9.x.x
- [pnpm](https://pnpm.io/installation) version 8.x.x

  We recommend using npm. Run the following command to install:

  ```bash
  npm install -g pnpm@8
  ```

---

## Configure the Monorepo

To contribute to this project, follow the directions below. Also see
[CONTRIBUTING.md](./CONTRIBUTING.md) for more information.

1. [Fork this repo](https://github.com/pantheon-systems/decoupled-kit-js/fork)
1. Clone your fork to your local machine.
1. Install dependencies for all packages and starters using the following
   command. A postinstall script will build the packages:
   ```bash
   pnpm install
   ```
1. Install the
   [husky pre-commit hooks](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/.husky/pre-commit).
   Run the following command:
   ```bash
   pnpm husky install
   ```

### Useful Scripts

There are several scripts you can use in the monorepo.

- To see all available scripts:
  ```bash
  pnpm run
  ```
- Test all projects in the monorepo that have a test script:
  ```bash
  pnpm test
  ```
- Build all packages in the monorepo:
  ```bash
  pnpm build:pkgs
  ```
- Start the `nextjs-kit` in watch mode:
  ```bash
  pnpm watch:nextjs-kit
  ```
- Build and run the documentation:

  ```bash
  pnpm generate-docs && pnpm start:docs
  ```

- Run commands in a targeted project, folder, or workspace, using the
  [`pnpm` filter flag](https://pnpm.io/filtering).

  For example, to start the Gatsby starter (filter by namespace):

  ```bash
  pnpm --filter gatsby-wordpress-starter develop
  ```

- Lint the starters (filter by directory):

  ```bash
  pnpm --filter './starters/**' lint
  ```

If you need to run a command in a specific project, use the alias in the ROOT
`package.json` scripts (`pnpm run` to see the full list in your terminal), or
use a filter. Please do not `cd` into the project directory and use `npm` or
`yarn`.

---

## Versions and Releases

### Generating a Changeset

To generate a new changeset, run `pnpm changeset` in the root of the repository.
The generated Markdown files in the `.changeset` directory should be committed
to the repository.

### Creating and Publishing New Versions

Versions and releases are created as part of our CI process and typically should
not be created manually.

#### Canary Releases

Each push to the `canary` (default) branch triggers the `canary-release.yml`
GitHub Action workflow which will open a PR back to the repo, and on merge it
will release any package with a changeset to the `canary` tag on GitHub and npm.

---

## Bug Reports and Feature Requests

- Is the code in this repository not working as expected?
  [Open a bug report here](https://github.com/pantheon-systems/decoupled-kit-js/issues/new?template=bug-report-template.yml)

- Is there something you would like to see added to this project?
  [Open a feature request here](https://github.com/pantheon-systems/decoupled-kit-js/issues/new?template=feature-request-template.yml)

---

## Further Reading

For more information on contributing to this project, see
[CONTRIBUTING.md](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/CONTRIBUTING.md)

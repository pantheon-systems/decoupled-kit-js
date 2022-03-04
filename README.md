# Pantheon Systems Decoupled Kits


## Prerequisites

To setup the monorepo for development the following should be installed locally:

1. Nodejs version 14 LTS. We reccomend using [nvm](https://github.com/nvm-sh/nvm)
1. npm version 8.5.x
1. The latest version of [pnpm](https://pnpm.io/installation)

## Getting started

1. Fork this repo
1. clone your fork to you local machine
1. run `pnpm install` to install dependencies for all packages and starters

From here the workflow depends on what you're doing.

- to test all projects in the monorepo with a test script, run `pnpm test`
- to build all packages in the monorepo, run `pnpm build:pkgs`
- to build all starters in the monorepo, run `pnpm build:starters`
- to build all projects in the monorepo, run `pnpm build:all`

To run commands in targeted projects, folders, or workspaces, pnpm offers a filter flag.

For example, to start the Gatsby starter from the root of the monorepo:

```bash
$ pnpm --filter '*/gatsby*' run develop
```
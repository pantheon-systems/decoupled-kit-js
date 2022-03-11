---
id: "index"
title: "decoupled-kit-js"
slug: "/Packages/"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

# Pantheon Systems Decoupled Kits

## Prerequisites

To setup the monorepo for development the following should be installed locally:

1. Nodejs version 16 LTS. We reccomend using [nvm](https://github.com/nvm-sh/nvm)
1. npm version 8.x.x
1. The latest version of [pnpm](https://pnpm.io/installation) (6.32.3 at time of writing) - You can set pnpm as your package manager using corepack with the following command:

```bash
corepack prepare pnpm@6.32.3 --activate
```

## Getting started

1. Fork this repo
1. clone your fork to your local machine
1. run `pnpm install` to install dependencies for all packages and starters

From here the workflow depends on what you're doing.

- to test all projects in the monorepo that have a test script, run `pnpm test`
- to build all packages in the monorepo, run `pnpm build:pkgs`
- to build all starters in the monorepo, run `pnpm build:starters`
- to build all projects in the monorepo, run `pnpm build:all`

To run commands in targeted projects, folders, or workspaces, pnpm offers [a filter flag](https://pnpm.io/filtering).

For example, to start the Gatsby starter from the root of the monorepo (filter by namespace):

```bash
pnpm --filter '*/gatsby*' run develop
```

To run lint in the starters (filter by directory):

```bash
pnpm --filter ./starters lint
```

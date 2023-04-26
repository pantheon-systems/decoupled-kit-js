---
id: 'cli-docs'
title: 'Using the `create-pantheon-decoupled-kit` CLI'
sidebar_position: 0
slug: '/frontend-starters/using-the-cli'
---

`create-pantheon-decoupled-kit`, or the "CLI" is an npm package based on
[npm init](https://docs.npmjs.com/cli/v8/commands/npm-init). It is an executable
JavaScript file that can be invoked via `npm init pantheon-decoupled-kit`,
`npx create-pantheon-decoupled-kit` or similar commands from other package
managers.

## Before You Begin

To run `create-pantheon-decoupled-kit`, you will need
[`Nodejs`](https://nodejs.org/en/download/) installed. We recommend the latest
LTS version. You can install the CLI globally, or use
[`npx`](https://docs.npmjs.com/cli/v8/commands/npx),
[`npm init`](https://docs.npmjs.com/cli/v8/commands/npm-init), or the analogous
commands from yor preferred package manager i.e.
[`pnpm create`](https://pnpm.io/cli/create) to run the CLI.

To use the latest canary version, use the `@canary` tag when invoking the CLI.
For example:

```shell
pnpm create pantheon-decoupled-kit@canary
```

## Creating a Starter Kit

To generate a starter kit with the CLI, you can run the command with no
arguments and follow the prompts.

The `--help` flag will show the help menu.

The terminal will show a diff for each file to be written. Skipping the file
means it will not be written. `Yes to all` will force `yes` to all subsequent
diffs, so be sure to avoid overwriting non-empty files when using this option.

If you know which generators you would like to run ahead of time, you can pass
in generator names as space-separated positional arguments. For example:

```shell
npm init pantheon-decoupled-kit -- next-wp next-wp-acf-addon
```

The above command will generate a project with the `next-wp` generator, and the
`next-wp-acf-addon`.

:::danger

The CLI will not stop you from running any generators in any combination, but be
aware that not all combination will result in a working application. If you run
the CLI with multiple _project_ generators, you may end up with some unexpected
results. These `project` generators should be used only in conjunction with
`add-on` generators to avoid broken output.

:::

### Add-ons

There are some utility add-ons that are available to any project. These add-ons
are:

- tailwindcss-addon

  This add-on will bootstrap a project with dependencies and config files
  necessary to start using [tailwindcss](https://tailwindcss.com). Minimal
  additional setup may be required, such as importing the css file or changing
  the paths in the `tailwind.config.cjs`

Available add-ons per project generator are as follows:

| Project Generator | Available Add-ons       |
| ----------------- | ----------------------- |
| next-drupal       | next-drupal-umami-addon |
| next-wp           | next-wp-acf-addon       |
| gatsby-wp         | gatsby-wp-acf-addon     |

For more detail on the available add-ons and their functionality, see the
following docs:

- [Gatsby + WordPress Add-ons](./gatsby/gatsby-wordpress/add-ons)
- [Next + WordPress Add-ons](./nextjs/nextjs-wordpress/add-ons)
- [Next + Drupal Add-ons](./nextjs/nextjs-drupal/add-ons)

### Skipping Prompts and Automating Starter Kit Creation

To skip any prompts, use a double-dash argument when running the command. For
example:

```shell
  # include generators as space separated positional arguments. npm init requires a double dash to allow forwarding options to the command
npm init pantheon-decoupled-kit -- next-drupal next-drupal-umami-addon \
  # path to the project. This directory will be created if it does not exist
  --outDir ./my-new-project-dir \
  # package.json compatible name for the project
  --appName @my-org/my-project \
  # CMS from which data is sourced
  --cmsEndpoint 'https://my-cms.pantheonsite.io' \
  # skip all diff prompts -
  # ⚠️ be careful using --force on non-empty directories
  --force \
  # squelch console output except for errors and return value from actions
  --silent \
  # prevent the package manager from running
  # `install` after the project is created
  --noInstall
  # CMS you are developing for. This flag is used to filter suggested generators by compatibility. As of now, `wp` or `drupal` are valid arguments
  --cmsType drupal
```

The `outDir` argument is required for each generator. `appName` is only required
for project generators. Generators may have their own prompts. If all arguments
passed in do not fulfil all of the prompts needed to generate the output, the
prompt will be asked in the terminal. Be sure to have all necessary arguments
defined if you are using this pattern in a CI context.

Use the `--help` command to see available generators and some globally available
flags.

## Contributing

See
[CONTRIBUTING.md](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/CONTRIBUTING.md#working-with-create-pantheon-decoupled-kit)
for more information regarding development with and contributing to the CLI.

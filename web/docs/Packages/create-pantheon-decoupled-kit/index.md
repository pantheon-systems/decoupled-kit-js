---
id: "index"
title: "decoupled-kit-js"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

# Create Pantheon Decoupled Kit

Pantheon's command line interface for creating and adding on to new projects.

A `node-plop` based cli, heavily inspired by various `create-` apps including
[`create-sitecore-jss`](https://github.com/Sitecore/jss/tree/dev/packages/create-sitecore-jss),
[`create-astro`](https://github.com/withastro/astro/tree/main/packages/create-astro),
and [`create-create-app`](https://github.com/uetchy/create-create-app).

## Installation

To install this package locally, run the following commands from the root of the
monorepo.

```bash
  # build the package
  pnpm build:cli
  # run the bin script
  pnpm create-pantheon-decoupled-kit
```

## Usage

Use the create command to initiate the cli with no arguments and follow the
prompts in your terminal

```bash
  pnpm create pantheon-decoupled-kit
```

Or, pass in arguments up front to skip those prompts

```bash
  pnpm create pantheon-decoupled-kit next-wp --appName my-app --outDir ./my-app-dir --force
```

### `watch` script

To run the `watch` script, ensure there is a `watch.{ts,js}` file at the root of
this package. The watch file should export a named `watchOptions` object of type
`minimist.ParsedArgs`. Positional arguments in the `_` array will correspond to
Generators to run. Named arguments correspond to answers to the Generator
prompts. Generators will be run in the order they are given. Any number of
generators may be run at a given time. See `watch.example.ts` for an example of
`watchOptions`.

<!-- TODO: Link to the doc on decoupledkit.pantheon.io for the create-app usage -->

## API Reference

<!-- TODO: link to API reference -->

## Contributing

Please see the
[Contributing guide in our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/CONTRIBUTING.md)
to contribute to the project.

<!-- TODO: Write details for contributing to this package -->

### Before You Begin

`create-pantheon-decoupled-kit` or "the cli" is meant to be a new way to develop and consume the starter kits. We would like to support an ever growing matrix of frameworks, with or without certain features or add-ons like tailwindcss or TypeScript to name a few. In order to support this while reducing friction to new frameworks and add-ons, we have taken inspiration from other `create-` apps in similar open source spaces, including [`create-sitecore-jss`](https://github.com/Sitecore/jss/tree/dev/packages/create-sitecore-jss), [`create-astro`](https://github.com/withastro/astro/tree/main/packages/create-astro), and [`create-create-app`](https://github.com/uetchy/create-create-app). The cli uses [`node-plop`](https://github.com/plopjs/plop/tree/master/packages/node-plop) under the hood, so if you are comfortable writing [plop generators and templates](https://plopjs.com/documentation/#your-first-plopfile), this should be very familiar. 

#### Types Of Generators

There are theoretically two types of generators: base generators and add-ons. A base generator bootstraps a project, and add-ons are runnable on top of an already generated project. Add-ons should be callable while bootstrapping a new project as well.
### Creating A Generator

Templates are written in the [handlebars templating language](https://handlebarsjs.com/). See https://plopjs.com/documentation/#your-first-plopfile for instructions on creating generators. There are a few differences between vanilla plop generators and Decoupled Kit Generators:

1. the export must be written in TypeScript.
1. it must be `typeof DecoupledKitGenerator` which is a `PlopGenerator` with an added `name` field.
1. it must export an object instead of a function.
1. it must allow prompts to be skipped by passing in named command line arguments.
1. it should use the `addWithDiff` action to write new files.

### Adding Partials
Partials should be used when possible. Partials must be added to the `create-pantheon-decoupled-kit/src/templates/partials` directory in order to be automatically registered to plop's handlebars compiler.

### Adding Custom Actions
Actions should be exported from their own file under `create-pantheon-decoupled-kit/src/utils`. The actions should use the [CustomActionConfig interface from `node-plop`](https://github.com/plopjs/plop/blob/main/packages/node-plop/types/index.d.ts#L175). If needed, extend the `config` object inline like so:

```typescript
import type { Answers } from 'inquirer';
import type { CustomActionConfig, NodePlopAPI } from 'node-plop';

export const exampleAction = (
	answers: Answers,
	config: CustomActionConfig<'exampleAction'> & {
		requiredString: string,
		requiredBoolean: boolean,
		etc.
	},
	plop: NodePlopAPI
) => { ... }
```

Be aware of the existing actions as names must be unique. You will need to add your action to the actions array inside the `setGenerators` function in `create-pantheon-decoupled-kit/src/index.ts`. Add your action as an object with a `name` key, with a value equal to the action name using `camelCase`, and an `action` key with a value equal to your action which should be imported into the file. 

```typescript
[{ name: 'exampleAction', action: exampleAction }, ...]
```
The new action will be registered and callable from any generator.

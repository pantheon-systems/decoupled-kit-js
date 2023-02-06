# Contributing to this project

Thank you for your interest in contributing to Pantheon's Decoupled Kit ⚡️!

## Getting Started and Prerequisites

Check the
[prerequisites](https://github.com/pantheon-systems/decoupled-kit-js/#prerequisites-start-here!)
and
[getting started](https://github.com/pantheon-systems/decoupled-kit-js/#setup-the-monorepo)
to get set up for development.

If you find a bug or have a feature request, please open an issue or a start a
discussion.

## Packages

You should be able to get started developing on the packages right away. They
have a vite powered server built in to test changes made to the package, you can
use the `src/main.ts` file within the package you want to contribute to.

### Adding New Modules

CMS specific modules should be created in `packages/drupal-kit` or
`packages/wordpress-kit` respectively.

Framework/library specific modules should be created in
`packages/{framework/library name}-kit`. For example, `packages/nextjs-kit`

Exports for any modules that are intended to be available within the distributed
package should be added to `index.ts`.

All module code should be written in TypeScript. Use [TSDoc](https://tsdoc.org/)
comments on all exported code. The TSDoc comments are used for API reference
generation, so please include an example and remarks when appropriate.

### Running A Local Development Server

####

The can be run for local development. It will watch for changes and launch
`index.html` at http://localhost:3000. `index.html` loads `src/main.ts` which
can be used for demonstration purposes and local development.

### Formatting and Linting

Linting and formatting will run for all staged files as a pre-commit hook.

VS Code users can format code on save using the
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
and
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
extensions. These extensions will be suggested when loading the project if they
have not already been installed. A settings file is included in
`.vscode/settings.json`.

Formatting on save is highly recommended as it should resolve most formatting
issues before the pre-commit hook runs.

Formatting and linting can also be run manually using the following commands:

- `pnpm --filter './packages/**' lint-staged` - Runs lint-staged for packages
- `pnpm --filter './starters/**' lint` - Runs lint for starters
- `pnpm prettier -r` - Runs prettier for each package and starter
- `pnpm prettier:fix -r` - Attempts to fix any formatting issues

## Testing

This project is configured to run [Jest](https://facebook.github.io/jest/) and
[Vitest](https://vitest.dev) tests via `pnpm --filter './packages/**' test`. All
new code is expected to be covered by tests and these tests will run as part of
our CI process and will also be run locally as a pre-commit hook.

Tests should be added in a `__tests__` directory adjacent to the file they are
testing and the files should be named `<fileName>.test.ts`.

## Documentation

All new code written in packages should include [TypeDoc](https://typedoc.org/)
style comments. These comments are used to generate the API reference in
`web/docs`

Some docs in this folder are manually authored. If you believe a feature or
change warrants documentation of this kind, for example a new feature in a
starter please provide it in the appropriate place in `web/docs`

To generate documentation run `pnpm generate-docs` The result will be in the
`web/docs` folder.

The docs site can be run locally with `pnpm --filter './web' start`.

View the site at `http://localhost:3000`

TODOS:

- Confirm that this package provides types for all exported functions when used
  as an NPM package.
- Allow individual import of modules rather than requiring imports from the main
  bundle.

To contribute to the starters, you will need a backend to develop against.

## Working With `create-pantheon-decoupled-kit`

`create-pantheon-decoupled-kit` or "the cli" is meant to be a new way to develop
and consume the starter kits. We would like to support an ever growing matrix of
frameworks, with or without certain features or add-ons like tailwindcss or
TypeScript to name a few. In order to support this while reducing friction to
new frameworks and add-ons, we have taken inspiration from other `create-` apps
in similar open source spaces, including
[`create-sitecore-jss`](https://github.com/Sitecore/jss/tree/dev/packages/create-sitecore-jss),
[`create-astro`](https://github.com/withastro/astro/tree/main/packages/create-astro),
and [`create-create-app`](https://github.com/uetchy/create-create-app). The cli
uses
[`node-plop`](https://github.com/plopjs/plop/tree/master/packages/node-plop)
under the hood, so if you are comfortable writing
[plop generators and templates](https://plopjs.com/documentation/#your-first-plopfile),
this should be very familiar.

### Types Of Generators

There are theoretically two types of generators: base generators and add-ons. A
base generator bootstraps a project, and add-ons are runnable on top of an
already generated project. Add-ons should be callable while bootstrapping a new
project as well.

## Creating A Generator

Templates are written in the
[handlebars templating language](https://handlebarsjs.com/). See
https://plopjs.com/documentation/#your-first-plopfile for instructions on
creating generators. There are a few differences between vanilla plop generators
and Decoupled Kit Generators:

1. the export must be written in TypeScript.
1. it must be `typeof DecoupledKitGenerator` which is a `PlopGenerator` with an
   added `name` field.
1. it must export an object instead of a function.
1. it must allow prompts to be skipped by passing in named command line
   arguments.
1. it should use the `addWithDiff` action to write new files.

## Adding Partials

Partials should be used when possible. Partials must be added to the
`create-pantheon-decoupled-kit/src/templates/partials` directory in order to be
automatically registered to plop's handlebars compiler.

## Adding Custom Actions

Actions should be exported from their own file under
`create-pantheon-decoupled-kit/src/utils`. The actions should use the
[CustomActionConfig interface from `node-plop`](https://github.com/plopjs/plop/blob/main/packages/node-plop/types/index.d.ts#L175).
If needed, extend the `config` object inline like so:

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

Be aware of the existing actions as names must be unique. You will need to add
your action to the actions array inside the `setGenerators` function in
`create-pantheon-decoupled-kit/src/index.ts`. Add your action as an object with
a `name` key, with a value equal to the action name using `camelCase`, and an
`action` key with a value equal to your action which should be imported into the
file.

```typescript
[{ name: 'exampleAction', action: exampleAction }, ...]
```

The new action will be registered and callable from any generator.

## The `watch` Script

The `watch` script enables a generator to run and watch for changes to the
template files. If a template of the given generator changes, the generator
reruns and outputs the new changes in the configured directory. Thanks to Hot
Module Reloading (HMR), which is enabled by most modern frontend frameworks,
this feature unlocks the following workflow:

1. Generate a project in the `starters` workspace of the monorepo
1. Start the result in dev mode e.g. `pnpm dev:next-wp` and visit the page in a
   web browser
1. Make changes to a template file of the given generator
1. Changes to the template are reflected in the browser

In order to use the `watch` script, configure a `watch.js/ts` file at the root
of the `./packages/create-pantheon-decoupled-kit` directory. It should export a
JSON object named `watchOptions` in the shape of
[minimist `ParsedArgs`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f834dd47e704fe7c65a87664864e78332e63bee7/types/minimist/index.d.ts#L80).
The `watch` script will pick up this file and execute the generators listed in
order in the `_` array. See the `watch.example.ts` for an example.

:::note It is not possible to `watch` with multiple project generators in the
`_` array. Subsequent generators must be add-ons. :::

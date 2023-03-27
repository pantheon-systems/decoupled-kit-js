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

### Running a Local Development Server

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

<!--
TODOS:
- Confirm that this package provides types for all exported functions when used
  as an npm package.
- Allow individual import of modules rather than requiring imports from the main
  bundle.
-->

To contribute to the starters, you will need a backend to develop against.

## Working With `create-pantheon-decoupled-kit`

`create-pantheon-decoupled-kit` or the "CLI" is meant to be a new way to develop
and consume the starter kits. We would like to support an ever growing matrix of
frameworks, with or without certain features or add-ons like tailwindcss or
TypeScript to name a few. In order to support this while reducing friction to
new frameworks and add-ons, we have taken inspiration from other `create-` apps
in similar open source spaces, including [`plopjs`](https://plopjs.com),
[`create-sitecore-jss`](https://github.com/Sitecore/jss/tree/dev/packages/create-sitecore-jss),
[`create-astro`](https://github.com/withastro/astro/tree/main/packages/create-astro),
and [`create-create-app`](https://github.com/uetchy/create-create-app). The cli
was previously written with
[`node-plop`](https://github.com/plopjs/plop/tree/master/packages/node-plop) and
writing generators still somewhat resembles the plop.js generator + templates
pattern.

### Types of Generators

There are theoretically two types of generators: project generators and add-ons.
A project generator bootstraps a project, and add-ons are runnable on top of an
already generated project, or as additions to a project generator. Add-ons
should be callable while bootstrapping a new project as well.

For example, the following will create a `next-drupal` project:

```shell
pnpm create pantheon-decoupled-kit next-drupal --appName my-next-drupal --outDir ./next-drupal
```

To create the project with the `next-drupal-umami` demo data, use the
`next-drupal-umami-addon` when generating the project:

```shell
pnpm create pantheon-decoupled-kit next-drupal next-drupal-umami-addon --appName my-next-drupal-umami --outDir ./next-drupal-umami
```

### Creating a Generator

Templates are written in the
[handlebars templating language](https://handlebarsjs.com/). A template does not
need to be dynamic. Static templates should not use the handlebars file
extension `.hbs`, but instead should be included in the template directory as
is.

A custom generator should satisfy the `DecoupledKitGenerator` type, as well as
the following criteria:

- The export must be written in TypeScript.
- The `DecoupledKitGenerator` type takes in a generic which should extend
  `DefaultAnswers`.
  - If the generator uses a custom answer type, define it in the generator and
    name it `{PascalCaseGeneratorName}Answers`
- It must allow prompts to be skipped by passing in named command line
  arguments. This should be handled by `main()` automatically.
- It should use the `addWithDiff` action to write new files.
- Arbitrary data required for the generator that is not user provided is defined
  in the `data` object in the generator
- The filename should be `{skewer-case-generator-name}.generator.ts`.
- The generator is imported to `/src/generators/index.ts` and added to the
  `decoupledKitGenerators` array.

### Adding Partials

[Handlebars Partials](https://handlebarsjs.com/guide/#partials) should be used
when possible. Partials must be added to the
`create-pantheon-decoupled-kit/src/templates/partials` directory in order to be
automatically registered to the handlebars instance.

### Adding Custom Actions

Actions should be exported from their own file under
`create-pantheon-decoupled-kit/src/actions`. The actions should use the
[Action interface from `./src/types`](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/packages/create-pantheon-decoupled-kit/src/types.ts#L51).
Actions can be be async if necessary.

```typescript
import type { Action } from '../types';

export const exampleAction: Action = ({ data, templateData, handlebars }) => { ... }
```

The `templateData` and `handlebars` parameters are optional and are only
required if the action needs to render templates with handlebars.

To use the action in a generator, add it to that generator's `actions` array in
the order in which the action should be called. In other words, if an action is
to be called first, put it first.

### Return and Error Values

Actions should throw a `new Error()` if there is an error with a message
explaining what went wrong and if there is any remediation to take to fix it.

Successful actions should return a string `'success'`. If the action can be
skipped with a flag, like `--noInstall` or `--noLint`, return `'skipped'`. This
way, the action runner can log clear output on which actions succeeded, which
ones were skipped, and which ones threw errors.

Note: Actions will be pooled together in the `actionRunner` and de-duped to run
only once. So if multiple generators include the same action in the array, it
will only be run once with the data from all prompts and generators. If for some
reason this is not desireable, please open an issue or discussion topic with
your use-case for further discussion.

### The `watch` Script

The `watch` script enables a sort of "developer mode" for a generator's
templates. The script watches for changes to the watch options and the template
files of the given generator or generators. If a template of the given generator
changes, the generator reruns and outputs any new changes to the configured
`outDir` directory. Thanks to Hot Module Reloading (HMR), which is enabled by
most modern frontend frameworks, this feature unlocks the following workflow:

1. Generate a project in a directory outside of the monorepo
1. In a new terminal or terminal tab, `cd` into the new project
1. Install dependencies with your preferred package manager and start the dev
   server
1. Open the browser and navigate to the running application
1. Make changes to a template file of the watched generator or generators
1. Observe that changes to the template are reflected in the browser

In order to use the `watch` script, configure a `watch.js/ts` file at the root
of the `./packages/create-pantheon-decoupled-kit` directory. It should export a
JSON object named `watchOptions` in the shape of
[minimist `ParsedArgs`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f834dd47e704fe7c65a87664864e78332e63bee7/types/minimist/index.d.ts#L80).
The `watch` script will pick up this file and execute the generators listed in
order in the `_` array. See the `watch.example.ts` for an example.

We recommended using the watch script with the `noInstall` and `noLint` flags
set to `true`. After the project is generated, `cd` into the `outDir` and run
the install command of the package manager of your choice

If the watch script reloads the templates too often, you can increase the
`debounce` value (in milliseconds) to allow for more time between applying
changes made to the templates.

Note: It is not possible to `watch` with multiple _project_ generators in the
`_` array. Subsequent generators must be add-ons.

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
  pnpm create pantheon-decoupled-kit next-wp --appName my-app --outDir ./my-app-dir
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

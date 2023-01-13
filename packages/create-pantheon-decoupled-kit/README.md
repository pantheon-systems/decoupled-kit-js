# Create Pantheon Decoupled Kit

Pantheon's command line interface for creating and adding on to new projects.

A `node-plop` based cli, heavily inspired by various `create-` apps including
[`create-sitecore-jss`](https://github.com/Sitecore/jss/tree/dev/packages/create-sitecore-jss),
[`create-astro`](https://github.com/withastro/astro/tree/main/packages/create-astro),
and [`create-create-app`](https://github.com/uetchy/create-create-app).

## Installation

<!-- TODO -->

## Usage

Use the create command to initiate the cli with no arguments and follow the
prompts in your terminal

```bash
  pnpm create pantheon-decoupled-kit
```

g Or, pass in arguments up front to skip those prompts

```bash
  pnpm create pantheon-decoupled-kit --appName my-app --dir ./my-app-dir --framework nextjs
```

<!-- Link to the doc on decoupledkit.pantheon.io for the create-app usage -->

## API Reference

## Contributing

Please see the
[Contributing guide in our monorepo](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/CONTRIBUTING.md)
to contribute to the project.

- Components should be created in the `src/components`.
- Utilities for use in a Next.js app should be created in the `src/lib`
  directory.
- Utilities for use in this Library that are not exposed as part of the API
  should be created in the `utils` directory
- Follow the established export pattern to maintain proper module resolution.

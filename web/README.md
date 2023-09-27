# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

All commands listed below should be run from the root of the monorepo
(decoupled-kit-js). You may also run individual scripts from the root of the
monorepo with a pnpm filter and the name of the command:

```shell
pnpm -F web clear
```

### Installation

```shell
pnpm i
```

### Local Development

```shell
pnpm start:docs
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```shell
pnpm generate-docs
```

This command generates static content into the `build` directory including the
API reference from our packages workspace via `typedoc` and can be served using
any static contents hosting service.

## Search

The docs site now includes search powered by this Docusaurus plugin:
https://github.com/praveenn77/docusaurus-lunr-search It only works in
production. To try it locally (from the root of the monorepo):

```shell
# set this env var to prevent typedoc API reference from being generated
PANTHEON_ENVIRONMENT_URL=true pnpm -F web build && pnpm -F web serve
```

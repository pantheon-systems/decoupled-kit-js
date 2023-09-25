---
id: 'terminus-plugin-docs'
title: 'Using the `terminus-decoupled-kit` Plugin'
sidebar_position: 0
slug: '/backend-starters/terminus-decoupled-kit'
---

# Terminus Decoupled Kit Plugin

:::pantheon

The Terminus Decoupled Kit Plugin provides commands useful for creating
decoupled projects on [Pantheon](https://pantheon.io) using pre-configured
starter kits.

The `decoupled-kit:create` command guides you through the following tasks:

- Creating a new site on Pantheon for the CMS backend of your choice.
- Optionally installing your CMS.
- Creating a frontend codebase that sources data from your newly created CMS
  project. This codebase will be automatically configured for local development,
  and can later be deployed to Pantheon using the
  [import repository workflow](https://docs.pantheon.io/guides/decoupled/no-starter-kit/import-repo).

:::

## Requirements

- [Terminus](https://docs.pantheon.io/terminus/install)
- [NodeJS](https://nodejs.org/en/download/)

## Installation

```
terminus self:plugin:install pantheon-systems/terminus-decoupled-kit-plugin
```

## Commands

### decoupled-kit:create

Creates a backend CMS site on Pantheon and a frontend codebase that sources data
from the CMS site.

To run interactively:

```
terminus decoupled-kit:create
```

#### Command Arguments

The following arguments can be provided to the decoupled-kit:create command:

```
decoupled-kit:create [options] [--] <site_name> <label> [<upstream_id>]
```

| Argument    | Description                                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| site_name   | Site name                                                                                                                                 |
| label       | Site label                                                                                                                                |
| upstream_id | Upstream name or UUID. If you don't provide an Upstream ID, the value of the --cms option will be used to determine the default Upstream. |

Example:

```
decoupled-kit:create <site> <label> <upstream>
```

Creates a new site named `site`, human-readably labeled `label`, using code from
`upstream`.

#### Command Options

Additional options are available to further customize the decoupled-kit:create
command:

| Option                      | Description                                                                                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --org[=ORG]                 | Organization name, label, or ID                                                                                                                                                 |
| --region[=REGION]           | The region to create the site in. See [the Pantheon regions documentation](https://pantheon.io/docs/regions#create-a-new-site-in-a-specific-region-using-terminus) for details. |
| --cms[=CMS]                 | The CMS to use. Currently supported: drupal, wordpress                                                                                                                          |
| --install-cms[=INSTALL-CMS] | Whether to install the CMS. Defaults to true.                                                                                                                                   |

Example:

```
decoupled-kit:create <site> <label> <upstream> --org=<org> --cms<cms> --install-cms<install-cms> --region<region>
```

Creates a new site named `site`, human-readably labeled `label`, associated with
`organization`, for the specified `cms`.

## Related Projects

- [Create Pantheon Decoupled Kit](https://www.npmjs.com/package/create-pantheon-decoupled-kit) -
  NodeJS CLI used to create and upgrade frontend codebases based on Pantheon
  starter kits. Used by this terminus plugin and can also be used independently.

## Known Limitations

- Currently this terminus plugin creates your frontend codebase, but does not
  automatically deploy it to Pantheon. You can deploy your frontend codebase to
  Pantheon using the
  [import repository workflow](https://docs.pantheon.io/guides/decoupled/no-starter-kit/import-repo).

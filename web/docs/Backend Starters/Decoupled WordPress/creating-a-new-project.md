---
id: 'creating-new-wordpress-project'
title: 'Creating a New WordPress Project'
slug: '/backend-starters/decoupled-wordpress/creating-a-new-project'
sidebar_position: 0
---

## Installing using Upstream

Clone the repo to start using our decoupled WordPress template:

```bash
git clone git@github.com:pantheon-upstreams/decoupled-wordpress-composer-managed.git
```

:::pantheon

The following options are available when using the
[Pantheon Platform](https://pantheon.io):

:::

If you are deploying to pantheon, you may also choose one of the following
options:

- Create from Decoupled WordPress Composer Managed upstream:

  - Via the Pantheon Dashboard at this link:

    - [Decoupled WordPress Composer Managed](https://dashboard.pantheon.io/sites/create?upstream_id=c9f5e5c0-248f-4205-b63a-d2729572dd1f)

  - Or Alternatively via Terminus:

    ```bash
    terminus site:create my-new-site "Describe Site" --org='My Team Name' c9f5e5c0-248f-4205-b63a-d2729572dd1f
    ```

  :::note

  - Replace `'{My Team Name}'` with your team name - for example `My Agency`.
    This can also be omitted.
  - `c9f5e5c0-248f-4205-b63a-d2729572dd1f` is upstream_id for Decoupled
    WordPress Composer Managed.

  :::

## Install WordPress:

Visit the Site by clicking on the **Visit Development Site** button to Install
via the UI—selecting. The same can be done via
[`terminus remote:wp`](https://pantheon.io/docs/terminus/commands/remote-wp).

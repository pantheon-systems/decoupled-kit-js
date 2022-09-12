---
id: 'creating-new-wordpress-project'
title: 'Creating a New WordPress Project'
slug: '/Backend Starters/Decoupled WordPress/Creating a New Project'
sidebar_position: 2
---

### Installing using Upstream

- Create from Decoupled WordPress Composer Managed upstream:

  - Via the Pantheon Dashboard at this link:

    - [Decoupled WordPress Composer Managed](https://dashboard.pantheon.io/sites/create?upstream_id=c9f5e5c0-248f-4205-b63a-d2729572dd1f)

  - Or Alternatively via Terminus:

    ```
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

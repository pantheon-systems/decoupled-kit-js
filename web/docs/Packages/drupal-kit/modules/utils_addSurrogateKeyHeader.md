---
id: 'utils_addSurrogateKeyHeader'
title: 'Module: utils/addSurrogateKeyHeader'
sidebar_label: 'utils/addSurrogateKeyHeader'
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`keys`, `res`): `string`

Adds an aggregated list of surrogate keys in the working response.

#### Parameters

| Name   | Type               | Description                                     |
| :----- | :----------------- | :---------------------------------------------- |
| `keys` | `null` \| `string` | Value for surrogate-key header in API response. |
| `res`  | `ServerResponse`   | The active http.ServerResponse object.          |

#### Returns

`string`

The current known unique set of surrogate keys.

#### Defined in

[utils/addSurrogateKeyHeader.ts:9](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/drupal-kit/src/utils/addSurrogateKeyHeader.ts#L9)

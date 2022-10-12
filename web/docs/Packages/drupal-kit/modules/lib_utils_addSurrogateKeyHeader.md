---
id: "lib_utils_addSurrogateKeyHeader"
title: "Module: lib/utils/addSurrogateKeyHeader"
sidebar_label: "lib/utils/addSurrogateKeyHeader"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`keys`, `res`): `string`

Adds an aggregated list of surrogate keys in the working response.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | ``null`` \| `string` | Value for surrogate-key header in API response. |
| `res` | `ServerResponse` | The active http.ServerResponse object. |

#### Returns

`string`

The current known unique set of surrogate keys.

#### Defined in

[lib/utils/addSurrogateKeyHeader.ts:9](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/drupal-kit/src/lib/utils/addSurrogateKeyHeader.ts#L9)

---
id: "utils_updateMaxAge"
title: "Module: utils/updateMaxAge"
sidebar_label: "utils/updateMaxAge"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`cacheControlHeader`, `res`): `string`

Adds Cache control header in the working response.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheControlHeader` | `string` | - |
| `res` | `ServerResponse` | The active http.ServerResponse object. |

#### Returns

`string`

The shortest cache-control header found in JSON:API responses.

#### Defined in

[src/utils/updateMaxAge.ts:9](https://github.com/pantheon-systems/sdk-docs-poc/blob/7e32f05/packages/drupal-kit/src/utils/updateMaxAge.ts#L9)

---
id: "modules"
title: "decoupled-kit-js"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Functions

### setSurrogateKeyHeader

▸ **setSurrogateKeyHeader**(`keys`, `res`): `string` \| `void`

Adds an aggregated list of surrogate keys in the working response.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | ``null`` \| `string` | Value for surrogate-key header in API response. |
| `res` | `ServerResponse`<`IncomingMessage`\> | The active http.ServerResponse object. |

#### Returns

`string` \| `void`

The current known unique set of surrogate keys.

#### Defined in

[src/utils/setSurrogateKeyHeader.ts:17](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/cms-kit/src/utils/setSurrogateKeyHeader.ts#L17)

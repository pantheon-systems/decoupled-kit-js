---
id: 'modules'
title: '@pantheon-systems/cms-kit'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Functions

### setSurrogateKeyHeader

▸ **setSurrogateKeyHeader**(`keys`, `res`): `string` \| `void`

Adds an aggregated list of surrogate keys in the working response.

#### Parameters

| Name   | Type                                 | Description                                     |
| :----- | :----------------------------------- | :---------------------------------------------- |
| `keys` | `null` \| `string`                   | Value for surrogate-key header in API response. |
| `res`  | `ServerResponse`<`IncomingMessage`\> | The active http.ServerResponse object.          |

#### Returns

`string` \| `void`

The current known unique set of surrogate keys.

#### Defined in

[lib/setSurrogateKeyHeader.ts:17](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/cms-kit/src/lib/setSurrogateKeyHeader.ts#L17)

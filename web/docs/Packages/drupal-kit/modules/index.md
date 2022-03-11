---
id: "index"
title: "Module: index"
sidebar_label: "index"
sidebar_position: 0
custom_edit_url: null
---

## References

### DrupalState

Renames and re-exports [default](../classes/src_PantheonDrupalState.default.md)

___

### addSurrogateKeyHeader

Renames and re-exports [default](src_utils_addSurrogateKeyHeader.md#default)

___

### defaultFetch

Renames and re-exports [default](src_fetch_defaultFetch.md#default)

___

### updateMaxAge

Renames and re-exports [default](src_utils_updateMaxAge.md#default)

## Functions

### fetchJsonapiEndpoint

▸ **fetchJsonapiEndpoint**(`apiUrl`, `requestInit?`, `_res?`, `fetch?`): `Promise`<`void` \| `Response`\>

fetch data from a JSON:API endpoint

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiUrl` | `string` | the api url for the JSON:API endpoint |
| `requestInit?` | `Object` | fetch initialization object |
| `_res?` | `boolean` \| `ServerResponse` | response object |
| `fetch?` | `fetchAdapter` | fetch compatible function |

#### Returns

`Promise`<`void` \| `Response`\>

a promise containing the data for the JSON:API response

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/fetch/fetchJsonapiEndpoint.d.ts:12

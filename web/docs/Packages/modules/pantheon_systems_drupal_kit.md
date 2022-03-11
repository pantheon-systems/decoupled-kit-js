---
id: "pantheon_systems_drupal_kit"
title: "Module: @pantheon-systems/drupal-kit"
sidebar_label: "@pantheon-systems/drupal-kit"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [DrupalState](../classes/pantheon_systems_drupal_kit.DrupalState.md)

## Functions

### addSurrogateKeyHeader

▸ **addSurrogateKeyHeader**(`keys`, `res`): `string`

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

[packages/drupal-kit/src/utils/addSurrogateKeyHeader.ts:9](https://github.com/CobyPear/decoupled-kit-js/blob/8d34568/packages/drupal-kit/src/utils/addSurrogateKeyHeader.ts#L9)

___

### defaultFetch

▸ **defaultFetch**(`apiUrl`, `requestInit?`, `res?`): `Promise`<`Response`\>

fetch data from a JSON:API endpoint, bubbling up surrogate keys if possible

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiUrl` | `RequestInfo` | the api url for the JSON:API endpoint |
| `requestInit` | `RequestInit` | fetch initialization object |
| `res?` | `boolean` \| `ServerResponse` | response object |

#### Returns

`Promise`<`Response`\>

a promise containing the data for the JSON:API response

#### Defined in

[packages/drupal-kit/src/fetch/defaultFetch.ts:13](https://github.com/CobyPear/decoupled-kit-js/blob/8d34568/packages/drupal-kit/src/fetch/defaultFetch.ts#L13)

___

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

___

### updateMaxAge

▸ **updateMaxAge**(`cacheControlHeader`, `res`): `string`

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

[packages/drupal-kit/src/utils/updateMaxAge.ts:9](https://github.com/CobyPear/decoupled-kit-js/blob/8d34568/packages/drupal-kit/src/utils/updateMaxAge.ts#L9)

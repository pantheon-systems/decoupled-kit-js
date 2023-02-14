---
id: 'modules'
title: 'decoupled-kit-js'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [DrupalState](classes/DrupalState.md)

## Interfaces

- [authInit](interfaces/authInit.md)

## Functions

### defaultFetch

▸ **defaultFetch**(`apiUrl`, `requestInit?`, `res?`, `cacheControl?`):
`Promise`<`Response`\>

fetch data from a JSON:API endpoint, bubbling up surrogate keys if possible

#### Parameters

| Name           | Type                                              | Default value              | Description                                                                         |
| :------------- | :------------------------------------------------ | :------------------------- | :---------------------------------------------------------------------------------- |
| `apiUrl`       | `RequestInfo`                                     | `undefined`                | the api url for the JSON:API endpoint                                               |
| `requestInit`  | `RequestInit`                                     | `{}`                       | fetch initialization object                                                         |
| `res?`         | `boolean` \| `ServerResponse`<`IncomingMessage`\> | `undefined`                | response object                                                                     |
| `cacheControl` | `string`                                          | `defaultCacheControlValue` | optional value to override cache control header, defaults to 'public, s-maxage=600' |

#### Returns

`Promise`<`Response`\>

a promise containing the data for the JSON:API response

#### Defined in

[drupal-kit/src/lib/defaultFetch.ts:17](https://github.com/pantheon-systems/decoupled-kit-js/blob/b8ccc359/packages/drupal-kit/src/lib/defaultFetch.ts#L17)

---

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

cms-kit/dist/src/utils/setSurrogateKeyHeader.d.ts:8

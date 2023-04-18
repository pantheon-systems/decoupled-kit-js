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

[drupal-kit/src/lib/defaultFetch.ts:16](https://github.com/pantheon-systems/decoupled-kit-js/blob/5ccd9d50b/packages/drupal-kit/src/lib/defaultFetch.ts#L16)

---

### getDrupalSearchResults

▸ **getDrupalSearchResults**(`«destructured»`): `Promise`<`TJsonApiBody`\>

Helper function to query the Drupal Search API.

**`See`**

[https://www.drupal.org/docs/contributed-modules/search-api](https://www.drupal.org/docs/contributed-modules/search-api)
for more information about the Drupal Search API.

#### Parameters

| Name             | Type                           |
| :--------------- | :----------------------------- |
| `«destructured»` | `GetDrupalSearchResultsParams` |

#### Returns

`Promise`<`TJsonApiBody`\>

An array of search results matching the query.

#### Defined in

[drupal-kit/src/lib/getDrupalSearchResults.ts:23](https://github.com/pantheon-systems/decoupled-kit-js/blob/5ccd9d50b/packages/drupal-kit/src/lib/getDrupalSearchResults.ts#L23)

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

[cms-kit/src/utils/setSurrogateKeyHeader.ts:17](https://github.com/pantheon-systems/decoupled-kit-js/blob/5ccd9d50b/packages/cms-kit/src/utils/setSurrogateKeyHeader.ts#L17)

---
id: 'modules'
title: '@pantheon-systems/drupal-kit'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [DrupalState](classes/DrupalState.md)

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

[packages/drupal-kit/src/lib/defaultFetch.ts:16](https://github.com/pantheon-systems/decoupled-kit-js/blob/32b3f2995/packages/drupal-kit/src/lib/defaultFetch.ts#L16)

---

### fetchJsonapiEndpoint

▸ **fetchJsonapiEndpoint**(`apiUrl`, `requestInit?`, `onError?`, `res?`,
`fetch?`): `Promise`<`void` \| `Response`\>

fetch data from a JSON:API endpoint

#### Parameters

| Name           | Type                                              | Description                                  |
| :------------- | :------------------------------------------------ | :------------------------------------------- |
| `apiUrl`       | `string`                                          | the api url for the JSON:API endpoint        |
| `requestInit?` | `Object`                                          | fetch initialization object                  |
| `onError?`     | (`err`: `Error`) => `void`                        | custom error handler defaults to throw error |
| `res?`         | `boolean` \| `ServerResponse`<`IncomingMessage`\> | response object                              |
| `fetch?`       | `fetchAdapter`                                    | fetch compatible function                    |

#### Returns

`Promise`<`void` \| `Response`\>

a promise containing the data for the JSON:API response

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/fetch/fetchJsonapiEndpoint.d.ts:18

---

### getDrupalSearchResults

▸ **getDrupalSearchResults**(`«destructured»`): `Promise`<`TJsonApiBody`\>

Helper function to query the Drupal Search API.

#### Parameters

| Name             | Type                           |
| :--------------- | :----------------------------- |
| `«destructured»` | `GetDrupalSearchResultsParams` |

#### Returns

`Promise`<`TJsonApiBody`\>

An array of search results matching the query.

**`See`**

[https://www.drupal.org/docs/contributed-modules/search-api](https://www.drupal.org/docs/contributed-modules/search-api)
for more information about the Drupal Search API.

#### Defined in

[packages/drupal-kit/src/lib/getDrupalSearchResults.ts:23](https://github.com/pantheon-systems/decoupled-kit-js/blob/32b3f2995/packages/drupal-kit/src/lib/getDrupalSearchResults.ts#L23)

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

packages/cms-kit/dist/lib/setSurrogateKeyHeader.d.ts:9

---

### translatePath

▸ **translatePath**(`apiUrl`, `path`, `requestInit?`, `res?`, `fetch?`,
`onError?`): `Promise`<`void` \| `TJsonApiBody`\>

helper function to make it easier to resolve a path to an entity ID

#### Parameters

| Name           | Type                                              | Description                          |
| :------------- | :------------------------------------------------ | :----------------------------------- |
| `apiUrl`       | `string`                                          | the api url for the JON:API endpoint |
| `path`         | `string`                                          | the path to the node                 |
| `requestInit?` | `Object`                                          | fetch initialization object          |
| `res?`         | `boolean` \| `ServerResponse`<`IncomingMessage`\> | response object                      |
| `fetch?`       | `fetchAdapter`                                    | fetch compatible function            |
| `onError?`     | (`err`: `Error`) => `void`                        | -                                    |

#### Returns

`Promise`<`void` \| `TJsonApiBody`\>

a promise containing the data for the JSON:API response

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/fetch/translatePath.d.ts:17

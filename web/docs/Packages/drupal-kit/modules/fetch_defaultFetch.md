---
id: "fetch_defaultFetch"
title: "Module: fetch/defaultFetch"
sidebar_label: "fetch/defaultFetch"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`apiUrl`, `requestInit?`, `res?`, `cacheControl?`): `Promise`<`Response`\>

fetch data from a JSON:API endpoint, bubbling up surrogate keys if possible

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `apiUrl` | `RequestInfo` | `undefined` | the api url for the JSON:API endpoint |
| `requestInit` | `RequestInit` | `{}` | fetch initialization object |
| `res?` | `boolean` \| `ServerResponse` | `undefined` | response object |
| `cacheControl` | `string` | `defaultCacheControlValue` | optional value to override cache control header, defaults to 'public, s-maxage=10, stale-while-revalidate=600' |

#### Returns

`Promise`<`Response`\>

a promise containing the data for the JSON:API response

#### Defined in

[fetch/defaultFetch.ts:17](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/drupal-kit/src/fetch/defaultFetch.ts#L17)

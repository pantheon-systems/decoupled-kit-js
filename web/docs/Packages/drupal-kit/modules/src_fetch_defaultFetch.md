---
id: "src_fetch_defaultFetch"
title: "Module: src/fetch/defaultFetch"
sidebar_label: "src/fetch/defaultFetch"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`apiUrl`, `requestInit?`, `res?`): `Promise`<`Response`\>

fetch data from a JSON:API endpoint, bubbling up surrogate keys if possible

#### Parameters

| Name          | Type                          | Description                           |
| :------------ | :---------------------------- | :------------------------------------ |
| `apiUrl`      | `RequestInfo`                 | the api url for the JSON:API endpoint |
| `requestInit` | `RequestInit`                 | fetch initialization object           |
| `res?`        | `boolean` \| `ServerResponse` | response object                       |

#### Returns

`Promise`<`Response`\>

a promise containing the data for the JSON:API response

#### Defined in

[src/fetch/defaultFetch.ts:13](https://github.com/pantheon-systems/decoupled-kit-js/blob/fa1ceead/packages/drupal-kit/src/fetch/defaultFetch.ts#L13)

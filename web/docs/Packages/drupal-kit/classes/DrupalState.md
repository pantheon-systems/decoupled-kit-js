---
id: 'DrupalState'
title: 'Class: DrupalState'
sidebar_label: 'DrupalState'
sidebar_position: 0
custom_edit_url: null
---

Configures DrupalState to integrate with a Decoupled Drupal CMS on Pantheon

**`See`**

DrupalStateConfig for the full list parameters

## Hierarchy

- `DrupalState`

  ↳ **`DrupalState`**

## Constructors

### constructor

• **new DrupalState**(`«destructured»`)

#### Parameters

| Name             | Type                |
| :--------------- | :------------------ |
| `«destructured»` | `DrupalStateConfig` |

#### Overrides

DrupalState.constructor

#### Defined in

[packages/drupal-kit/src/lib/PantheonDrupalState.ts:18](https://github.com/pantheon-systems/decoupled-kit-js/blob/32b3f2995/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L18)

## Properties

### apiBase

• **apiBase**: `string`

#### Inherited from

DrupalState.apiBase

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:8

---

### apiPrefix

• **apiPrefix**: `string`

#### Inherited from

DrupalState.apiPrefix

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:9

---

### apiRoot

• **apiRoot**: `string`

#### Inherited from

DrupalState.apiRoot

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:11

---

### auth

• **auth**: `boolean`

#### Inherited from

DrupalState.auth

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:15

---

### debug

• **debug**: `boolean`

#### Inherited from

DrupalState.debug

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:17

---

### defaultLocale

• `Optional` **defaultLocale**: `string`

#### Inherited from

DrupalState.defaultLocale

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:10

---

### destroy

• **destroy**: `Destroy`

#### Inherited from

DrupalState.destroy

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:22

---

### fetchAdapter

• `Optional` **fetchAdapter**: `fetchAdapter`

#### Inherited from

DrupalState.fetchAdapter

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:14

---

### getState

• **getState**: `GetState`<`object`\>

#### Inherited from

DrupalState.getState

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:19

---

### noStore

• **noStore**: `boolean`

#### Inherited from

DrupalState.noStore

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:25

---

### onError

• **onError**: (`err`: `Error`) => `void`

#### Type declaration

▸ (`err`): `void`

##### Parameters

| Name  | Type    |
| :---- | :------ |
| `err` | `Error` |

##### Returns

`void`

#### Inherited from

DrupalState.onError

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:24

---

### setState

• **setState**: `SetState`<`object`\>

#### Inherited from

DrupalState.setState

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:20

---

### store

• **store**: `StoreApi`<`object`\>

#### Inherited from

DrupalState.store

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:18

---

### subscribe

• **subscribe**: `Subscribe`<`object`\>

#### Inherited from

DrupalState.subscribe

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:21

## Methods

### assembleApiRoot

▸ **assembleApiRoot**(): `string`

Format apiBase, apiPrefix, and combine into apiRoot.

#### Returns

`string`

a fully qualified JSON:API root endpoint URL

#### Inherited from

DrupalState.assembleApiRoot

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:31

---

### assembleEndpoint

▸ **assembleEndpoint**(`indexHref`, `id?`, `params?`): `string`

Assembles a correctly formatted JSON:API endpoint URL.

#### Parameters

| Name        | Type                              | Description                                                           |
| :---------- | :-------------------------------- | :-------------------------------------------------------------------- |
| `indexHref` | `string`                          | a JSON:API resource endpoint                                          |
| `id?`       | `string`                          | id of an individual resource                                          |
| `params?`   | `string` \| `DrupalJsonApiParams` | user provided JSON:API parameter string or DrupalJsonApiParams object |

#### Returns

`string`

a full endpoint URL

#### Inherited from

DrupalState.assembleEndpoint

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:39

---

### fetchApiIndex

▸ **fetchApiIndex**(`apiRoot`): `Promise`<`void` \| `GenericIndex`\>

Wraps fetch/fetchApiIndex function so it can be overridden.

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `apiRoot` | `string` |

#### Returns

`Promise`<`void` \| `GenericIndex`\>

#### Inherited from

DrupalState.fetchApiIndex

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:49

---

### fetchData

▸ **fetchData**(`endpoint`, `res?`, `anon?`): `Promise`<`void` \|
`TJsonApiBody`\>

If a query is provided, fetches data using apollo-link-json-api, otherwise uses
out fetch method.

#### Parameters

| Name       | Type                                              | Default value | Description                     |
| :--------- | :------------------------------------------------ | :------------ | :------------------------------ |
| `endpoint` | `string`                                          | `undefined`   | the assembled JSON:API endpoint |
| `res`      | `boolean` \| `ServerResponse`<`IncomingMessage`\> | `false`       | response object                 |
| `anon`     | `boolean`                                         | `false`       | -                               |

#### Returns

`Promise`<`void` \| `TJsonApiBody`\>

data fetched from JSON:API endpoint

#### Overrides

DrupalState.fetchData

#### Defined in

[packages/drupal-kit/src/lib/PantheonDrupalState.ts:46](https://github.com/pantheon-systems/decoupled-kit-js/blob/32b3f2995/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L46)

---

### fetchJsonapiEndpoint

▸ **fetchJsonapiEndpoint**(`endpoint`, `requestInit`, `onError`, `res`):
`Promise`<`void` \| `Response`\>

Wraps fetch/fetchJsonapiEndpoint function so it can be overridden.

#### Parameters

| Name          | Type                                              |
| :------------ | :------------------------------------------------ |
| `endpoint`    | `string`                                          |
| `requestInit` | `undefined` \| {}                                 |
| `onError`     | (`err`: `Error`) => `void`                        |
| `res`         | `boolean` \| `ServerResponse`<`IncomingMessage`\> |

#### Returns

`Promise`<`void` \| `Response`\>

#### Inherited from

DrupalState.fetchJsonapiEndpoint

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:54

---

### getAuthHeader

▸ **getAuthHeader**(): `Promise`<`string`\>

Assembles an authorization header using an existing token if valid, or by
fetching a new token if necessary.

#### Returns

`Promise`<`string`\>

a string containing an authorization header value

#### Inherited from

DrupalState.getAuthHeader

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@4.2.3_react@18.2.0/node_modules/@gdwc/drupal-state/dist/src/DrupalState.d.ts:45

---

### getObject

▸ **getObject**<`ReturnedData`\>(`args`): `Promise`<`void` \| `ReturnedData`\>

#### Type parameters

| Name           |
| :------------- |
| `ReturnedData` |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `args` | `GetObjectParams` |

#### Returns

`Promise`<`void` \| `ReturnedData`\>

#### Overrides

DrupalState.getObject

#### Defined in

[packages/drupal-kit/src/lib/PantheonDrupalState.ts:70](https://github.com/pantheon-systems/decoupled-kit-js/blob/32b3f2995/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L70)

---

### getObjectByPath

▸ **getObjectByPath**<`ReturnedData`\>(`args`): `Promise`<`void` \|
`ReturnedData`\>

#### Type parameters

| Name           |
| :------------- |
| `ReturnedData` |

#### Parameters

| Name   | Type                    |
| :----- | :---------------------- |
| `args` | `GetObjectByPathParams` |

#### Returns

`Promise`<`void` \| `ReturnedData`\>

#### Overrides

DrupalState.getObjectByPath

#### Defined in

[packages/drupal-kit/src/lib/PantheonDrupalState.ts:75](https://github.com/pantheon-systems/decoupled-kit-js/blob/32b3f2995/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L75)

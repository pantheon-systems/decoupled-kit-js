---
id: "src_PantheonDrupalState.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
---

[src/PantheonDrupalState](../modules/src_PantheonDrupalState.md).default

## Hierarchy

- `DrupalState`

  ↳ **`default`**

## Constructors

### constructor

• **new default**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `DrupalStateConfig` |

#### Overrides

DrupalState.constructor

#### Defined in

[packages/drupal-kit/src/PantheonDrupalState.ts:16](https://github.com/CobyPear/decoupled-kit-js/blob/879269b/packages/drupal-kit/src/PantheonDrupalState.ts#L16)

## Properties

### apiBase

• **apiBase**: `string`

#### Inherited from

DrupalState.apiBase

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:8

___

### apiPrefix

• **apiPrefix**: `string`

#### Inherited from

DrupalState.apiPrefix

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:9

___

### apiRoot

• **apiRoot**: `string`

#### Inherited from

DrupalState.apiRoot

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:11

___

### auth

• **auth**: `boolean`

#### Inherited from

DrupalState.auth

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:15

___

### client

• **client**: `ApolloClientWithHeaders`

#### Inherited from

DrupalState.client

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:23

___

### debug

• **debug**: `boolean`

#### Inherited from

DrupalState.debug

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:17

___

### defaultLocale

• `Optional` **defaultLocale**: `string`

#### Inherited from

DrupalState.defaultLocale

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:10

___

### destroy

• **destroy**: `Destroy`

#### Inherited from

DrupalState.destroy

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:22

___

### fetchAdapter

• `Optional` **fetchAdapter**: `fetchAdapter`

#### Inherited from

DrupalState.fetchAdapter

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:14

___

### getState

• **getState**: `GetState`<`object`\>

#### Inherited from

DrupalState.getState

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:19

___

### params

• **params**: `DrupalJsonApiParams`

DrupalJsonApiParams - see [https://www.npmjs.com/package/drupal-jsonapi-params](https://www.npmjs.com/package/drupal-jsonapi-params)

#### Inherited from

DrupalState.params

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:28

___

### setState

• **setState**: `SetState`<`object`\>

#### Inherited from

DrupalState.setState

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:20

___

### store

• **store**: `StoreApi`<`object`\>

#### Inherited from

DrupalState.store

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:18

___

### subscribe

• **subscribe**: `Subscribe`<`object`\>

#### Inherited from

DrupalState.subscribe

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:21

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

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:34

___

### assembleEndpoint

▸ **assembleEndpoint**(`objectName`, `index`, `id?`, `query?`): `string`

Assembles a correctly formatted JSON:API endpoint URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectName` | `string` | The resource type we're fetching. |
| `index` | `string` \| `GenericIndex` | a JSON:API resource endpoint |
| `id?` | `string` | id of an individual resource |
| `query?` | `string` \| `boolean` | user provided GraphQL query |

#### Returns

`string`

a full endpoint URL or a relative endpoint URL is a query is provided

#### Inherited from

DrupalState.assembleEndpoint

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:43

___

### conditionalFetch

▸ **conditionalFetch**(`endpoint`, `query?`, `objectName?`, `res?`): `Promise`<`TJsonApiBody`\>

If a query is provided, fetches data using apollo-link-json-api, otherwise uses out fetch method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` | the assembled JSON:API endpoint |
| `query` | `string` \| `boolean` | `false` | the specified GraphQL query |
| `objectName` | `string` \| `boolean` | `false` | Name of object to retrieve. Ex: node--article |
| `res` | `boolean` \| `ServerResponse` | `false` | response object |

#### Returns

`Promise`<`TJsonApiBody`\>

data fetched from JSON:API endpoint

#### Overrides

DrupalState.conditionalFetch

#### Defined in

[packages/drupal-kit/src/PantheonDrupalState.ts:44](https://github.com/CobyPear/decoupled-kit-js/blob/879269b/packages/drupal-kit/src/PantheonDrupalState.ts#L44)

___

### fetchApiIndex

▸ **fetchApiIndex**(`apiRoot`): `Promise`<`void` \| `GenericIndex`\>

Wraps {@link fetch/fetchApiIndex} function so it can be overridden.

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiRoot` | `string` |

#### Returns

`Promise`<`void` \| `GenericIndex`\>

#### Inherited from

DrupalState.fetchApiIndex

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:53

___

### fetchJsonapiEndpoint

▸ **fetchJsonapiEndpoint**(`endpoint`, `requestInit`, `res`): `Promise`<`void` \| `Response`\>

Wraps {@link fetch/fetchJsonapiEndpoint} function so it can be overridden.

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `requestInit` | `undefined` \| {} |
| `res` | `boolean` \| `ServerResponse` |

#### Returns

`Promise`<`void` \| `Response`\>

#### Inherited from

DrupalState.fetchJsonapiEndpoint

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:58

___

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

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:49

___

### getObject

▸ **getObject**(`__namedParameters`): `Promise`<`PartialState`<`object`, `never`, `never`, `never`, `never`\>\>

Get an object from local state if it exists, or fetch it from Drupal if
it doesn't exist in local state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `GetObjectParams` |

#### Returns

`Promise`<`PartialState`<`object`, `never`, `never`, `never`, `never`\>\>

a promise containing deserialized JSON:API data for the requested
object

#### Inherited from

DrupalState.getObject

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:96

___

### getObjectByPath

▸ **getObjectByPath**(`__namedParameters`): `Promise`<`PartialState`<`object`, `never`, `never`, `never`, `never`\>\>

Get an object by path alias from local state if it exists, or fetch it from Drupal if
it doesn't exist in local state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `GetObjectByPathParams` |

#### Returns

`Promise`<`PartialState`<`object`, `never`, `never`, `never`, `never`\>\>

a promise containing deserialized JSON:API data for the requested
object

#### Inherited from

DrupalState.getObjectByPath

#### Defined in

node_modules/.pnpm/@gdwc+drupal-state@2.5.2_react@17.0.2+typescript@4.5.5/node_modules/@gdwc/drupal-state/dist/declarations/src/DrupalState.d.ts:84

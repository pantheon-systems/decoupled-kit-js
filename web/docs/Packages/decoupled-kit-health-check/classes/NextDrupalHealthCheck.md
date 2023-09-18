---
id: "NextDrupalHealthCheck"
title: "Class: NextDrupalHealthCheck"
sidebar_label: "NextDrupalHealthCheck"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `DrupalHealthCheck`

  ↳ **`NextDrupalHealthCheck`**

## Constructors

### constructor

• **new NextDrupalHealthCheck**(`env`)

Resolves .env file if it exists and check for
required environment variables, and sets the endpoint

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `env` | `Object` | process.env |
| `env.env` | `ProcessEnv` | - |

#### Overrides

DrupalHealthCheck.constructor

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:26](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L26)

## Properties

### #access\_token

• `Private` **#access\_token**: `undefined` \| `string` = `undefined`

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:20](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L20)

___

### #clientSecret

• `Private` **#clientSecret**: `undefined` \| `string`

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:16](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L16)

___

### #previewSecret

• `Private` **#previewSecret**: `undefined` \| `string`

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:17](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L17)

___

### clientID

• **clientID**: `undefined` \| `string`

#### Overrides

DrupalHealthCheck.clientID

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:15](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L15)

___

### endpoint

• **endpoint**: `string`

#### Overrides

DrupalHealthCheck.endpoint

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:13](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L13)

___

### envVar

• **envVar**: `string`

#### Overrides

DrupalHealthCheck.envVar

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:14](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L14)

___

### hasUmami

• **hasUmami**: `boolean` = `false`

#### Overrides

DrupalHealthCheck.hasUmami

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:19](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L19)

___

### log

• **log**: `Object` = `logger`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `success` | (`message`: `string`) => `void` |
| `suggest` | (`message`: `string`) => `void` |
| `warn` | (`message`: `string`) => `void` |

#### Overrides

DrupalHealthCheck.log

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:18](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L18)

## Methods

### checkFor200

▸ **checkFor200**(`url`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`Promise`<`boolean`\>

#### Overrides

DrupalHealthCheck.checkFor200

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:87](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L87)

___

### checkForUmami

▸ **checkForUmami**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

DrupalHealthCheck.checkForUmami

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:99](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L99)

___

### getURL

▸ **getURL**(): `URL`

#### Returns

`URL`

#### Overrides

DrupalHealthCheck.getURL

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:84](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L84)

___

### validateAuth

▸ **validateAuth**(): `Promise`<[`NextDrupalHealthCheck`](NextDrupalHealthCheck.md)\>

#### Returns

`Promise`<[`NextDrupalHealthCheck`](NextDrupalHealthCheck.md)\>

#### Overrides

DrupalHealthCheck.validateAuth

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:158](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L158)

___

### validateEndpoint

▸ **validateEndpoint**(): `Promise`<[`NextDrupalHealthCheck`](NextDrupalHealthCheck.md)\>

#### Returns

`Promise`<[`NextDrupalHealthCheck`](NextDrupalHealthCheck.md)\>

#### Overrides

DrupalHealthCheck.validateEndpoint

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:105](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L105)

___

### validateMenu

▸ **validateMenu**(): `Promise`<[`NextDrupalHealthCheck`](NextDrupalHealthCheck.md)\>

#### Returns

`Promise`<[`NextDrupalHealthCheck`](NextDrupalHealthCheck.md)\>

#### Overrides

DrupalHealthCheck.validateMenu

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:119](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L119)

___

### validatePreview

▸ **validatePreview**(): `Promise`<[`NextDrupalHealthCheck`](NextDrupalHealthCheck.md)\>

#### Returns

`Promise`<[`NextDrupalHealthCheck`](NextDrupalHealthCheck.md)\>

#### Overrides

DrupalHealthCheck.validatePreview

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:207](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L207)

___

### validateRouter

▸ **validateRouter**(): `Promise`<[`NextDrupalHealthCheck`](NextDrupalHealthCheck.md)\>

#### Returns

`Promise`<[`NextDrupalHealthCheck`](NextDrupalHealthCheck.md)\>

#### Overrides

DrupalHealthCheck.validateRouter

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts:133](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextDrupalHealthCheck.ts#L133)

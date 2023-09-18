---
id: "NextWordPressHealthCheck"
title: "Class: NextWordPressHealthCheck"
sidebar_label: "NextWordPressHealthCheck"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `WordPressHealthCheck`

  ↳ **`NextWordPressHealthCheck`**

## Constructors

### constructor

• **new NextWordPressHealthCheck**(`env`)

Resolves .env file if it exists and check for
required environment variables, and sets the endpoint

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `env` | `Object` | process.env |
| `env.env` | `ProcessEnv` | - |

#### Overrides

WordPressHealthCheck.constructor

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:24](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L24)

## Properties

### #appPassword

• `Private` **#appPassword**: `undefined` \| `string`

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:15](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L15)

___

### #credentials

• `Private` **#credentials**: `undefined` \| `string` = `undefined`

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:18](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L18)

___

### #previewSecret

• `Private` **#previewSecret**: `undefined` \| `string`

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:16](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L16)

___

### appUsername

• **appUsername**: `undefined` \| `string`

#### Overrides

WordPressHealthCheck.appUsername

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:14](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L14)

___

### endpoint

• **endpoint**: `string`

#### Overrides

WordPressHealthCheck.endpoint

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:12](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L12)

___

### envVar

• **envVar**: `string`

#### Overrides

WordPressHealthCheck.envVar

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:13](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L13)

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

WordPressHealthCheck.log

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:17](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L17)

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

WordPressHealthCheck.checkFor200

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:88](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L88)

___

### getURL

▸ **getURL**(): `URL`

#### Returns

`URL`

#### Overrides

WordPressHealthCheck.getURL

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:83](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L83)

___

### validateAuth

▸ **validateAuth**(): `Promise`<[`NextWordPressHealthCheck`](NextWordPressHealthCheck.md)\>

#### Returns

`Promise`<[`NextWordPressHealthCheck`](NextWordPressHealthCheck.md)\>

#### Overrides

WordPressHealthCheck.validateAuth

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:146](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L146)

___

### validateEndpoint

▸ **validateEndpoint**(): `Promise`<[`NextWordPressHealthCheck`](NextWordPressHealthCheck.md)\>

#### Returns

`Promise`<[`NextWordPressHealthCheck`](NextWordPressHealthCheck.md)\>

#### Overrides

WordPressHealthCheck.validateEndpoint

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:105](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L105)

___

### validateMenu

▸ **validateMenu**(): `Promise`<[`NextWordPressHealthCheck`](NextWordPressHealthCheck.md)\>

#### Returns

`Promise`<[`NextWordPressHealthCheck`](NextWordPressHealthCheck.md)\>

#### Overrides

WordPressHealthCheck.validateMenu

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:119](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L119)

___

### validatePreview

▸ **validatePreview**(): `Promise`<[`NextWordPressHealthCheck`](NextWordPressHealthCheck.md)\>

#### Returns

`Promise`<[`NextWordPressHealthCheck`](NextWordPressHealthCheck.md)\>

#### Overrides

WordPressHealthCheck.validatePreview

#### Defined in

[packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts:204](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/NextWordPressHealthCheck.ts#L204)

---
id: 'GatsbyWordPressHealthCheck'
title: 'Class: GatsbyWordPressHealthCheck'
sidebar_label: 'GatsbyWordPressHealthCheck'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `WordPressHealthCheck`

  ↳ **`GatsbyWordPressHealthCheck`**

## Constructors

### constructor

• **new GatsbyWordPressHealthCheck**(`env`)

Resolves .env file if it exists and check for required environment variables,
and sets the endpoint

#### Parameters

| Name      | Type         | Description |
| :-------- | :----------- | :---------- |
| `env`     | `Object`     | process.env |
| `env.env` | `ProcessEnv` | -           |

#### Overrides

WordPressHealthCheck.constructor

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:23](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L23)

## Properties

### #appPassword

• `Private` **#appPassword**: `undefined` \| `string`

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:16](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L16)

---

### appUsername

• **appUsername**: `undefined` \| `string`

#### Overrides

WordPressHealthCheck.appUsername

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:15](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L15)

---

### endpoint

• **endpoint**: `string`

#### Overrides

WordPressHealthCheck.endpoint

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:13](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L13)

---

### envVar

• **envVar**: `string`

#### Overrides

WordPressHealthCheck.envVar

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:14](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L14)

---

### log

• **log**: `Object` = `logger`

#### Type declaration

| Name      | Type                            |
| :-------- | :------------------------------ |
| `success` | (`message`: `string`) => `void` |
| `suggest` | (`message`: `string`) => `void` |
| `warn`    | (`message`: `string`) => `void` |

#### Overrides

WordPressHealthCheck.log

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:17](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L17)

## Methods

### checkFor200

▸ **checkFor200**(`url`): `Promise`<`boolean`\>

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `url` | `URL` |

#### Returns

`Promise`<`boolean`\>

#### Overrides

WordPressHealthCheck.checkFor200

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:86](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L86)

---

### getURL

▸ **getURL**(): `URL`

#### Returns

`URL`

#### Overrides

WordPressHealthCheck.getURL

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:81](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L81)

---

### validateAuth

▸ **validateAuth**():
`Promise`<[`GatsbyWordPressHealthCheck`](GatsbyWordPressHealthCheck.md)\>

#### Returns

`Promise`<[`GatsbyWordPressHealthCheck`](GatsbyWordPressHealthCheck.md)\>

#### Overrides

WordPressHealthCheck.validateAuth

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:144](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L144)

---

### validateEndpoint

▸ **validateEndpoint**():
`Promise`<[`GatsbyWordPressHealthCheck`](GatsbyWordPressHealthCheck.md)\>

#### Returns

`Promise`<[`GatsbyWordPressHealthCheck`](GatsbyWordPressHealthCheck.md)\>

#### Overrides

WordPressHealthCheck.validateEndpoint

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:103](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L103)

---

### validateMenu

▸ **validateMenu**():
`Promise`<[`GatsbyWordPressHealthCheck`](GatsbyWordPressHealthCheck.md)\>

#### Returns

`Promise`<[`GatsbyWordPressHealthCheck`](GatsbyWordPressHealthCheck.md)\>

#### Overrides

WordPressHealthCheck.validateMenu

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:117](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L117)

---

### validatePreview

▸ **validatePreview**():
`Promise`<[`GatsbyWordPressHealthCheck`](GatsbyWordPressHealthCheck.md)\>

#### Returns

`Promise`<[`GatsbyWordPressHealthCheck`](GatsbyWordPressHealthCheck.md)\>

#### Overrides

WordPressHealthCheck.validatePreview

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:223](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L223)

---

### validateWPGatsbyPlugin

▸ **validateWPGatsbyPlugin**():
`Promise`<[`GatsbyWordPressHealthCheck`](GatsbyWordPressHealthCheck.md)\>

#### Returns

`Promise`<[`GatsbyWordPressHealthCheck`](GatsbyWordPressHealthCheck.md)\>

#### Defined in

[packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts:200](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/GatsbyWordPressHealthCheck.ts#L200)

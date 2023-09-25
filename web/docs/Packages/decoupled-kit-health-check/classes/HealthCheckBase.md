---
id: 'HealthCheckBase'
title: 'Class: HealthCheckBase'
sidebar_label: 'HealthCheckBase'
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new HealthCheckBase**()

## Properties

### endpoint

• `Abstract` **endpoint**: `string`

#### Defined in

[packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts:9](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts#L9)

---

### envVar

• `Abstract` **envVar**: `string`

#### Defined in

[packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts:10](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts#L10)

---

### log

• `Abstract` **log**: `Object`

#### Type declaration

| Name      | Type                            |
| :-------- | :------------------------------ |
| `success` | (`message`: `string`) => `void` |
| `suggest` | (`message`: `string`) => `void` |
| `warn`    | (`message`: `string`) => `void` |

#### Defined in

[packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts:11](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts#L11)

## Methods

### checkFor200

▸ `Abstract` **checkFor200**(`url`): `Promise`<`boolean`\>

Check the url for a 200 response

#### Parameters

| Name  | Type  | Description                                      |
| :---- | :---- | :----------------------------------------------- |
| `url` | `URL` | a URL with defined pathname and/or search params |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts:24](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts#L24)

---

### getURL

▸ `Abstract` **getURL**(): `URL`

Uses `this.endpoint` to return a new URL

#### Returns

`URL`

#### Defined in

[packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts:19](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts#L19)

---

### validateAuth

▸ `Abstract` **validateAuth**():
`Promise`<[`HealthCheckBase`](HealthCheckBase.md)\>

Validate the provided credentials

#### Returns

`Promise`<[`HealthCheckBase`](HealthCheckBase.md)\>

#### Defined in

[packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts:32](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts#L32)

---

### validateEndpoint

▸ `Abstract` **validateEndpoint**():
`Promise`<[`InvalidCMSEndpointError`](InvalidCMSEndpointError.md) \|
[`HealthCheckBase`](HealthCheckBase.md)\>

Validate the set endpoint

#### Returns

`Promise`<[`InvalidCMSEndpointError`](InvalidCMSEndpointError.md) \|
[`HealthCheckBase`](HealthCheckBase.md)\>

#### Defined in

[packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts:15](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts#L15)

---

### validateMenu

▸ `Abstract` **validateMenu**():
`Promise`<[`DecoupledMenuError`](DecoupledMenuError.md) \|
[`HealthCheckBase`](HealthCheckBase.md)\>

Validate the menu query or endpoint

#### Returns

`Promise`<[`DecoupledMenuError`](DecoupledMenuError.md) \|
[`HealthCheckBase`](HealthCheckBase.md)\>

#### Defined in

[packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts:28](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts#L28)

---

### validatePreview

▸ `Abstract` **validatePreview**():
`Promise`<[`HealthCheckBase`](HealthCheckBase.md)\>

Validate the preview secret is set and preview is configured at the endpoint by
fetching preview content. Should be skipped if credentials are not validated in
`this.validateAuth()`.

#### Returns

`Promise`<[`HealthCheckBase`](HealthCheckBase.md)\>

#### Defined in

[packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts:37](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/classes/HealthCheckBase.ts#L37)

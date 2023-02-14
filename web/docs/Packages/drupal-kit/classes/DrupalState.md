---
id: "DrupalState"
title: "Class: DrupalState"
sidebar_label: "DrupalState"
sidebar_position: 0
custom_edit_url: null
---

Configures DrupalState to integrate
with a Decoupled Drupal CMS on Pantheon

**`See`**

DrupalStateConfig for the full list parameters

## Hierarchy

- `DrupalState`

  ↳ **`DrupalState`**

## Constructors

### constructor

• **new DrupalState**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `DrupalStateConfig` |

#### Overrides

DrupalState.constructor

#### Defined in

[drupal-kit/src/lib/PantheonDrupalState.ts:14](https://github.com/pantheon-systems/decoupled-kit-js/blob/b8ccc359/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L14)

## Methods

### fetchData

▸ **fetchData**(`endpoint`, `res?`, `anon?`): `Promise`<`void` \| `TJsonApiBody`\>

If a query is provided, fetches data using apollo-link-json-api, otherwise uses out fetch method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` | the assembled JSON:API endpoint |
| `res` | `boolean` \| `ServerResponse`<`IncomingMessage`\> | `false` | response object |
| `anon` | `boolean` | `false` | - |

#### Returns

`Promise`<`void` \| `TJsonApiBody`\>

data fetched from JSON:API endpoint

#### Overrides

DrupalState.fetchData

#### Defined in

[drupal-kit/src/lib/PantheonDrupalState.ts:42](https://github.com/pantheon-systems/decoupled-kit-js/blob/b8ccc359/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L42)

---
id: "lib_PantheonDrupalState.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
---

[lib/PantheonDrupalState](../modules/lib_PantheonDrupalState.md).default

Configures DrupalState to integrate
with a Decoupled Drupal CMS on Pantheon

**`See`**

DrupalStateConfig for the full list parameters

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

[lib/PantheonDrupalState.ts:15](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L15)

## Methods

### fetchData

▸ **fetchData**(`endpoint`, `res?`): `Promise`<`TJsonApiBody`\>

If a query is provided, fetches data using apollo-link-json-api, otherwise uses out fetch method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` | the assembled JSON:API endpoint |
| `res` | `boolean` \| `ServerResponse` | `false` | response object |

#### Returns

`Promise`<`TJsonApiBody`\>

data fetched from JSON:API endpoint

#### Overrides

DrupalState.fetchData

#### Defined in

[lib/PantheonDrupalState.ts:43](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L43)

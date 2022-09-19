---
id: 'PantheonDrupalState.default'
title: 'Class: default'
sidebar_label: 'default'
custom_edit_url: null
---

[PantheonDrupalState](../modules/PantheonDrupalState.md).default

## Hierarchy

- `DrupalState`

  ↳ **`default`**

## Constructors

### constructor

• **new default**(`__namedParameters`)

#### Parameters

| Name                | Type                |
| :------------------ | :------------------ |
| `__namedParameters` | `DrupalStateConfig` |

#### Overrides

DrupalState.constructor

#### Defined in

[PantheonDrupalState.ts:10](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/drupal-kit/src/PantheonDrupalState.ts#L10)

## Methods

### fetchData

▸ **fetchData**(`endpoint`, `res?`): `Promise`<`TJsonApiBody`\>

If a query is provided, fetches data using apollo-link-json-api, otherwise uses
out fetch method.

#### Parameters

| Name       | Type                          | Default value | Description                     |
| :--------- | :---------------------------- | :------------ | :------------------------------ |
| `endpoint` | `string`                      | `undefined`   | the assembled JSON:API endpoint |
| `res`      | `boolean` \| `ServerResponse` | `false`       | response object                 |

#### Returns

`Promise`<`TJsonApiBody`\>

data fetched from JSON:API endpoint

#### Overrides

DrupalState.fetchData

#### Defined in

[PantheonDrupalState.ts:38](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/drupal-kit/src/PantheonDrupalState.ts#L38)

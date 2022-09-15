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

[PantheonDrupalState.ts:16](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/drupal-kit/src/PantheonDrupalState.ts#L16)

## Methods

### conditionalFetch

▸ **conditionalFetch**(`endpoint`, `query?`, `objectName?`, `res?`):
`Promise`<`TJsonApiBody`\>

If a query is provided, fetches data using apollo-link-json-api, otherwise uses
out fetch method.

#### Parameters

| Name         | Type                          | Default value | Description                                   |
| :----------- | :---------------------------- | :------------ | :-------------------------------------------- |
| `endpoint`   | `string`                      | `undefined`   | the assembled JSON:API endpoint               |
| `query`      | `string` \| `boolean`         | `false`       | the specified GraphQL query                   |
| `objectName` | `string` \| `boolean`         | `false`       | Name of object to retrieve. Ex: node--article |
| `res`        | `boolean` \| `ServerResponse` | `false`       | response object                               |

#### Returns

`Promise`<`TJsonApiBody`\>

data fetched from JSON:API endpoint

#### Overrides

DrupalState.conditionalFetch

#### Defined in

[PantheonDrupalState.ts:46](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/drupal-kit/src/PantheonDrupalState.ts#L46)

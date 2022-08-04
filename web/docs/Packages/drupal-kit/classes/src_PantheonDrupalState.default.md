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

| Name                | Type                |
| :------------------ | :------------------ |
| `__namedParameters` | `DrupalStateConfig` |

#### Overrides

DrupalState.constructor

#### Defined in

[src/PantheonDrupalState.ts:16](https://github.com/pantheon-systems/decoupled-kit-js/blob/3caad45/packages/drupal-kit/src/PantheonDrupalState.ts#L16)

## Methods

### conditionalFetch

▸ **conditionalFetch**(`endpoint`, `query?`, `objectName?`, `res?`): `Promise`<`TJsonApiBody`\>

If a query is provided, fetches data using apollo-link-json-api, otherwise uses out fetch method.

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

[src/PantheonDrupalState.ts:46](https://github.com/pantheon-systems/decoupled-kit-js/blob/3caad45/packages/drupal-kit/src/PantheonDrupalState.ts#L46)

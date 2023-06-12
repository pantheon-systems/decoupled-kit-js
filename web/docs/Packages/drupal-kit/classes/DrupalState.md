---
id: 'DrupalState'
title: 'Class: DrupalState'
sidebar_label: 'DrupalState'
sidebar_position: 0
custom_edit_url: null
---

Configures DrupalState to integrate with a Decoupled Drupal CMS on Pantheon

**`See`**

DrupalStateConfig for the full list parameters

## Hierarchy

- `DrupalState`

  ↳ **`DrupalState`**

## Constructors

### constructor

• **new DrupalState**(`«destructured»`)

#### Parameters

| Name             | Type                |
| :--------------- | :------------------ |
| `«destructured»` | `DrupalStateConfig` |

#### Overrides

DrupalState.constructor

#### Defined in

[drupal-kit/src/lib/PantheonDrupalState.ts:18](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L18)

## Methods

### fetchData

▸ **fetchData**(`endpoint`, `res?`, `anon?`): `Promise`<`void` \|
`TJsonApiBody`\>

If a query is provided, fetches data using apollo-link-json-api, otherwise uses
out fetch method.

#### Parameters

| Name       | Type                                              | Default value | Description                     |
| :--------- | :------------------------------------------------ | :------------ | :------------------------------ |
| `endpoint` | `string`                                          | `undefined`   | the assembled JSON:API endpoint |
| `res`      | `boolean` \| `ServerResponse`<`IncomingMessage`\> | `false`       | response object                 |
| `anon`     | `boolean`                                         | `false`       | -                               |

#### Returns

`Promise`<`void` \| `TJsonApiBody`\>

data fetched from JSON:API endpoint

#### Overrides

DrupalState.fetchData

#### Defined in

[drupal-kit/src/lib/PantheonDrupalState.ts:46](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L46)

---

### getObject

▸ **getObject**<`ReturnedData`\>(`args`): `Promise`<`void` \| `ReturnedData`\>

#### Type parameters

| Name           |
| :------------- |
| `ReturnedData` |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `args` | `GetObjectParams` |

#### Returns

`Promise`<`void` \| `ReturnedData`\>

#### Overrides

DrupalState.getObject

#### Defined in

[drupal-kit/src/lib/PantheonDrupalState.ts:70](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L70)

---

### getObjectByPath

▸ **getObjectByPath**<`ReturnedData`\>(`args`): `Promise`<`void` \|
`ReturnedData`\>

#### Type parameters

| Name           |
| :------------- |
| `ReturnedData` |

#### Parameters

| Name   | Type                    |
| :----- | :---------------------- |
| `args` | `GetObjectByPathParams` |

#### Returns

`Promise`<`void` \| `ReturnedData`\>

#### Overrides

DrupalState.getObjectByPath

#### Defined in

[drupal-kit/src/lib/PantheonDrupalState.ts:75](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/drupal-kit/src/lib/PantheonDrupalState.ts#L75)

---
id: 'modules'
title: '@pantheon-systems/decoupled-kit-health-check'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [BackendNotSetError](classes/BackendNotSetError.md)
- [DecoupledMenuError](classes/DecoupledMenuError.md)
- [DecoupledRouterError](classes/DecoupledRouterError.md)
- [GatsbyWordPressHealthCheck](classes/GatsbyWordPressHealthCheck.md)
- [HealthCheckBase](classes/HealthCheckBase.md)
- [InvalidCMSEndpointError](classes/InvalidCMSEndpointError.md)
- [NextDrupalHealthCheck](classes/NextDrupalHealthCheck.md)
- [NextWordPressHealthCheck](classes/NextWordPressHealthCheck.md)
- [WPGatsbyPluginError](classes/WPGatsbyPluginError.md)

## Variables

### logger

• `Const` **logger**: `Object`

#### Type declaration

| Name      | Type                            |
| :-------- | :------------------------------ |
| `success` | (`message`: `string`) => `void` |
| `suggest` | (`message`: `string`) => `void` |
| `warn`    | (`message`: `string`) => `void` |

#### Defined in

[packages/decoupled-kit-health-check/src/utils/logger.ts:1](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/utils/logger.ts#L1)

## Functions

### getFramework

▸ **getFramework**(): `"none"` \| `"next"` \| `"gatsby"`

#### Returns

`"none"` \| `"next"` \| `"gatsby"`

#### Defined in

[packages/decoupled-kit-health-check/src/utils/getFramework.ts:4](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/utils/getFramework.ts#L4)

---

### resolveDotenvFile

▸ **resolveDotenvFile**(): `undefined` \| `string`

Resolves the path to a .env or .env.development.local file in the current
directory (where the health-check script was called)

#### Returns

`undefined` \| `string`

the path to a .env file or undefined

#### Defined in

[packages/decoupled-kit-health-check/src/utils/resolveDotenvFile.ts:20](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/decoupled-kit-health-check/src/utils/resolveDotenvFile.ts#L20)

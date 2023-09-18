---
id: "BackendNotSetError"
title: "Class: BackendNotSetError"
sidebar_label: "BackendNotSetError"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `HealthCheckError`

  ↳ **`BackendNotSetError`**

## Constructors

### constructor

• **new BackendNotSetError**(`«destructured»`, `message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `envVar` | `string` |
| `message` | `string` |

#### Overrides

HealthCheckError.constructor

#### Defined in

[packages/decoupled-kit-health-check/src/classes/errors.ts:10](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/decoupled-kit-health-check/src/classes/errors.ts#L10)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

HealthCheckError.cause

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

HealthCheckError.message

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

HealthCheckError.name

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

HealthCheckError.stack

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

HealthCheckError.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@18.16.14/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

HealthCheckError.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@18.16.14/node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

HealthCheckError.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@18.16.14/node_modules/@types/node/globals.d.ts:4

---
id: "modules"
title: "decoupled-kit-js"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Functions

### main

▸ **main**(`args`, `DecoupledKitGenerators`): `Promise`<`void`\>

Initializes the CLI prompts based on parsed arguments

**`See`**

DecoupledKitGenerator.

**`Remarks`**

positional args are assumed to be generator names. Multiple generators can be queued up this way. Any number of prompts may be skipped by passing in the prompt name via flag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `ParsedArgs` | typeof ParsedArgs |
| `DecoupledKitGenerators` | `DecoupledKitGenerator`[] | An array of plop Generators with an added name field. |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Defined in

[index.ts:59](https://github.com/CobyPear/decoupled-kit-js/blob/3f82da72/packages/create-pantheon-decoupled-kit/src/index.ts#L59)

___

### parseArgs

▸ **parseArgs**(`cliArgs?`): `ParsedArgs`

Parses CLI arguments using `minimist`

**`See`**

[https://www.npmjs.com/package/minimist#var-argv--parseargsargs-opts](https://www.npmjs.com/package/minimist#var-argv--parseargsargs-opts)

**`Default Value`**

`process.argv.slice(2)`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cliArgs` | `string`[] | an array of strings. |

#### Returns

`ParsedArgs`

minimist parsed args

#### Defined in

[index.ts:33](https://github.com/CobyPear/decoupled-kit-js/blob/3f82da72/packages/create-pantheon-decoupled-kit/src/index.ts#L33)

___

### setGenerators

▸ **setGenerators**(`generators`): `Promise`<`NodePlopAPI`\>

Set generator based on exports from src/generators

**`See`**

DecoupledKitGenerator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generators` | `DecoupledKitGenerator`[] | An array of plop Generators with an added name field. |

#### Returns

`Promise`<`NodePlopAPI`\>

plop

#### Defined in

[index.ts:16](https://github.com/CobyPear/decoupled-kit-js/blob/3f82da72/packages/create-pantheon-decoupled-kit/src/index.ts#L16)

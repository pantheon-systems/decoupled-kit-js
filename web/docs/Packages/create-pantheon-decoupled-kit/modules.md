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
| `args` | `ParsedArgs` | minimist.ParsedArgs |
| `DecoupledKitGenerators` | `DecoupledKitGenerator`[] | An array of plop Generators with an added name field. |

#### Returns

`Promise`<`void`\>

Runs the actions for the generators given as positional params or if none are found, prompts user to select valid generator from list of DecoupledKitGenerators

#### Defined in

[index.ts:58](https://github.com/CobyPear/decoupled-kit-js/blob/0c623b70/packages/create-pantheon-decoupled-kit/src/index.ts#L58)

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

#### Defined in

[index.ts:32](https://github.com/CobyPear/decoupled-kit-js/blob/0c623b70/packages/create-pantheon-decoupled-kit/src/index.ts#L32)

___

### setGenerators

▸ **setGenerators**(`generators`): `Promise`<`NodePlopAPI`\>

Set generator based on exports from src/generators

**`See`**

 - DecoupledKitGenerator.
 - NodePlopAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generators` | `DecoupledKitGenerator`[] | An array of plop Generators with an added name field. |

#### Returns

`Promise`<`NodePlopAPI`\>

An instance of plop

#### Defined in

[index.ts:16](https://github.com/CobyPear/decoupled-kit-js/blob/0c623b70/packages/create-pantheon-decoupled-kit/src/index.ts#L16)

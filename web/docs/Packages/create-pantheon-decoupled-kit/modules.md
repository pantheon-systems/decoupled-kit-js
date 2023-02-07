---
id: "modules"
title: "decoupled-kit-js"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Interfaces

- [DecoupledKitGenerator](interfaces/DecoupledKitGenerator.md)

## Functions

### addWithDiff

▸ **addWithDiff**(`answers`, `config`, `plop`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `answers` | `Answers` |
| `config` | `CustomActionConfig`<``"addWithDiff"``\> & { `path`: `string` ; `templates`: `string`  } |
| `plop` | `NodePlopAPI` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/utils/addWithDiff.ts:10](https://github.com/pantheon-systems/decoupled-kit-js/blob/622f2895a/packages/create-pantheon-decoupled-kit/src/utils/addWithDiff.ts#L10)

___

### getPartials

▸ **getPartials**(`rootDir`): `Promise`<{ `name`: `string` ; `partial`: `string`  }[]\>

Gets all handlebars templates in `${rootDir}/templates/partials`

**`Remarks`**

a single partial:
```
{
	name: 'myPartial',
	partial: '...(a handlebars template here)'
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rootDir` | `string` | dir to look for the partials dir from |

#### Returns

`Promise`<{ `name`: `string` ; `partial`: `string`  }[]\>

an array of partials

#### Defined in

[src/utils/getPartials.ts:18](https://github.com/pantheon-systems/decoupled-kit-js/blob/622f2895a/packages/create-pantheon-decoupled-kit/src/utils/getPartials.ts#L18)

___

### main

▸ **main**(`args`, `DecoupledKitGenerators`): `Promise`<`void`\>

Initializes the CLI prompts based on parsed arguments

**`See`**

[DecoupledKitGenerator](interfaces/DecoupledKitGenerator.md).

**`Remarks`**

positional args are assumed to be generator names. Multiple generators can be queued up this way. Any number of prompts may be skipped by passing in the prompt name via flag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `ParsedArgs` | minimist.ParsedArgs |
| `DecoupledKitGenerators` | [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)[] | An array of plop Generators with an added name field. |

#### Returns

`Promise`<`void`\>

Runs the actions for the generators given as positional params or if none are found, prompts user to select valid generator from list of DecoupledKitGenerators

#### Defined in

[src/index.ts:73](https://github.com/pantheon-systems/decoupled-kit-js/blob/622f2895a/packages/create-pantheon-decoupled-kit/src/index.ts#L73)

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

[src/index.ts:49](https://github.com/pantheon-systems/decoupled-kit-js/blob/622f2895a/packages/create-pantheon-decoupled-kit/src/index.ts#L49)

___

### runESLint

▸ **runESLint**(`answers`, `_config`, `_plop`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `answers` | `Answers` |
| `_config` | `CustomActionConfig`<``"runLint"``\> |
| `_plop` | `NodePlopAPI` |

#### Returns

`string`

#### Defined in

[src/utils/runESLint.ts:8](https://github.com/pantheon-systems/decoupled-kit-js/blob/622f2895a/packages/create-pantheon-decoupled-kit/src/utils/runESLint.ts#L8)

___

### runInstall

▸ **runInstall**(`answers`, `_config`, `_plop`): ``"success"`` \| ``"skipping install"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `answers` | `Answers` |
| `_config` | `CustomActionConfig`<``"runInstall"``\> |
| `_plop` | `NodePlopAPI` |

#### Returns

``"success"`` \| ``"skipping install"``

#### Defined in

[src/utils/runInstall.ts:8](https://github.com/pantheon-systems/decoupled-kit-js/blob/622f2895a/packages/create-pantheon-decoupled-kit/src/utils/runInstall.ts#L8)

___

### setGenerators

▸ **setGenerators**(`generators`): `Promise`<`NodePlopAPI`\>

Set generator based on exports from src/generators

**`See`**

 - [DecoupledKitGenerator](interfaces/DecoupledKitGenerator.md).
 - NodePlopAPI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generators` | [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)[] | An array of plop Generators with an added name field. |

#### Returns

`Promise`<`NodePlopAPI`\>

An instance of plop

#### Defined in

[src/index.ts:19](https://github.com/pantheon-systems/decoupled-kit-js/blob/622f2895a/packages/create-pantheon-decoupled-kit/src/index.ts#L19)

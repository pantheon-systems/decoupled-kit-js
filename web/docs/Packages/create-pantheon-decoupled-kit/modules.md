---
id: 'modules'
title: 'decoupled-kit-js'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Interfaces

- [DecoupledKitGenerator](interfaces/DecoupledKitGenerator.md)

## Functions

### addWithDiff

▸ **addWithDiff**(`answers`, `config`, `plop`): `Promise`<`string`\>

#### Parameters

| Name      | Type                                                                                  |
| :-------- | :------------------------------------------------------------------------------------ |
| `answers` | `Answers`                                                                             |
| `config`  | `CustomActionConfig`<`"addWithDiff"`\> & { `path`: `string` ; `templates`: `string` } |
| `plop`    | `NodePlopAPI`                                                                         |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/actions/addWithDiff.ts:10](https://github.com/pantheon-systems/decoupled-kit-js/blob/279d2df12/packages/create-pantheon-decoupled-kit/src/actions/addWithDiff.ts#L10)

---

### getPartials

▸ **getPartials**(`rootDir`): `Promise`<{ `name`: `string` ; `partial`: `string`
}[]\>

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

| Name      | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `rootDir` | `string` | dir to look for the partials dir from |

#### Returns

`Promise`<{ `name`: `string` ; `partial`: `string` }[]\>

an array of partials

#### Defined in

[src/utils/getPartials.ts:18](https://github.com/pantheon-systems/decoupled-kit-js/blob/279d2df12/packages/create-pantheon-decoupled-kit/src/utils/getPartials.ts#L18)

---

### main

▸ **main**(`args`, `DecoupledKitGenerators`): `Promise`<`void`\>

Initializes the CLI prompts based on parsed arguments

**`See`**

[DecoupledKitGenerator](interfaces/DecoupledKitGenerator.md).

**`Remarks`**

positional args are assumed to be generator names. Multiple generators can be
queued up this way. Any number of prompts may be skipped by passing in the
prompt name via flag.

#### Parameters

| Name                     | Type                                                             | Description                                           |
| :----------------------- | :--------------------------------------------------------------- | :---------------------------------------------------- |
| `args`                   | `ParsedArgs`                                                     | minimist.ParsedArgs                                   |
| `DecoupledKitGenerators` | [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)[] | An array of plop Generators with an added name field. |

#### Returns

`Promise`<`void`\>

Runs the actions for the generators given as positional params or if none are
found, prompts user to select valid generator from list of
DecoupledKitGenerators

#### Defined in

[src/index.ts:79](https://github.com/pantheon-systems/decoupled-kit-js/blob/279d2df12/packages/create-pantheon-decoupled-kit/src/index.ts#L79)

---

### parseArgs

▸ **parseArgs**(`cliArgs?`): `ParsedArgs`

Parses CLI arguments using `minimist`

**`See`**

[https://www.npmjs.com/package/minimist#var-argv--parseargsargs-opts](https://www.npmjs.com/package/minimist#var-argv--parseargsargs-opts)

**`Default Value`**

`process.argv.slice(2)`

#### Parameters

| Name      | Type       | Description          |
| :-------- | :--------- | :------------------- |
| `cliArgs` | `string`[] | an array of strings. |

#### Returns

`ParsedArgs`

#### Defined in

[src/index.ts:55](https://github.com/pantheon-systems/decoupled-kit-js/blob/279d2df12/packages/create-pantheon-decoupled-kit/src/index.ts#L55)

---

### pkgNameHelper

▸ **pkgNameHelper**(`txt`): `string`

Transforms input into a valid package.json `name`

#### Parameters

| Name  | Type     | Description                |
| :---- | :------- | :------------------------- |
| `txt` | `string` | handlebars rendered string |

#### Returns

`string`

a valid package.json name

#### Defined in

[src/utils/handlebarsHelpers.ts:6](https://github.com/pantheon-systems/decoupled-kit-js/blob/279d2df12/packages/create-pantheon-decoupled-kit/src/utils/handlebarsHelpers.ts#L6)

---

### runESLint

▸ **runESLint**(`answers`, `config`, `_plop`): `Promise`<`"success"` \|
`"skipping linting"`\>

#### Parameters

| Name      | Type                                                                                     |
| :-------- | :--------------------------------------------------------------------------------------- |
| `answers` | `Answers`                                                                                |
| `config`  | `CustomActionConfig`<`"runLint"`\> & { `ignorePattern`: `string` ; `plugins`: `string` } |
| `_plop`   | `NodePlopAPI`                                                                            |

#### Returns

`Promise`<`"success"` \| `"skipping linting"`\>

#### Defined in

[src/actions/runESLint.ts:9](https://github.com/pantheon-systems/decoupled-kit-js/blob/279d2df12/packages/create-pantheon-decoupled-kit/src/actions/runESLint.ts#L9)

---

### runInstall

▸ **runInstall**(`answers`, `_config`, `_plop`): `"success"` \|
`"skipping install"`

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `answers` | `Answers`                             |
| `_config` | `CustomActionConfig`<`"runInstall"`\> |
| `_plop`   | `NodePlopAPI`                         |

#### Returns

`"success"` \| `"skipping install"`

#### Defined in

[src/actions/runInstall.ts:8](https://github.com/pantheon-systems/decoupled-kit-js/blob/279d2df12/packages/create-pantheon-decoupled-kit/src/actions/runInstall.ts#L8)

---

### setGenerators

▸ **setGenerators**(`generators`): `Promise`<`NodePlopAPI`\>

Set generator based on exports from src/generators

**`See`**

- [DecoupledKitGenerator](interfaces/DecoupledKitGenerator.md).
- NodePlopAPI

#### Parameters

| Name         | Type                                                             | Description                                           |
| :----------- | :--------------------------------------------------------------- | :---------------------------------------------------- |
| `generators` | [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)[] | An array of plop Generators with an added name field. |

#### Returns

`Promise`<`NodePlopAPI`\>

An instance of plop

#### Defined in

[src/index.ts:20](https://github.com/pantheon-systems/decoupled-kit-js/blob/279d2df12/packages/create-pantheon-decoupled-kit/src/index.ts#L20)

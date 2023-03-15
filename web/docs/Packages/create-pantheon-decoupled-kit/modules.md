---
id: "modules"
title: "decoupled-kit-js"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Interfaces

- [DecoupledKitGenerator](interfaces/DecoupledKitGenerator.md)
- [DefaultAnswers](interfaces/DefaultAnswers.md)
- [MergedPaths](interfaces/MergedPaths.md)
- [TemplateData](interfaces/TemplateData.md)

## Type Aliases

### Action

Ƭ **Action**: (`config`: `ActionConfig`) => `Promise`<`string`\> \| `string`

#### Type declaration

▸ (`config`): `Promise`<`string`\> \| `string`

An action that takes in the data, templates, and an instance of handlebars
and does an action, like installing dependencies or formatting generated code

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ActionConfig` |

##### Returns

`Promise`<`string`\> \| `string`

#### Defined in

[src/types.ts:51](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L51)

___

### ActionRunner

Ƭ **ActionRunner**: (`config`: `ActionRunnerConfig`) => `Promise`<`string`\>

#### Type declaration

▸ (`config`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ActionRunnerConfig` |

##### Returns

`Promise`<`string`\>

#### Defined in

[src/types.ts:53](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L53)

___

### Input

Ƭ **Input**: `ParsedArgs` & `Answers`

Input from command line arguments and/or prompts

#### Defined in

[src/types.ts:58](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L58)

## Variables

### hbsHelpers

• `Const` **hbsHelpers**: `Object`

Handlebars HelperDelegate

#### Index signature

▪ [key: `string`]: `HelperDelegate`

#### Defined in

[src/utils/handlebars.ts:10](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/utils/handlebars.ts#L10)

## Functions

### actionRunner

▸ **actionRunner**(`config`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ActionRunnerConfig` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types.ts:53](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L53)

___

### addWithDiff

▸ **addWithDiff**(`config`): `string` \| `Promise`<`string`\>

1. dedupe the templates, favoring addons in case 2 paths collide
2. check if the destination path exists or create it. (path to destination + template name minus .hbs) example: ./test/myTest.js
3. check the diff against the new file and the rendered template or file to copy if source is not a handlebars template
4. if the --force option is not defined, ask the user if we should overwrite this file (yes to all, yes, skip, abort) if force is true we write everything.
5. skip or write the file based on input. If yes to all, set force to true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ActionConfig` |

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[src/types.ts:51](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L51)

___

### dedupeTemplates

▸ **dedupeTemplates**(`templateData`): `Promise`<[`MergedPaths`](interfaces/MergedPaths.md)\>

In case there is a template path that exists in two or more generators,
we want to favor the addon. This way, we avoid writing to a
file multiple times

**`See`**

 - Template
 - [MergedPaths](interfaces/MergedPaths.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `templateData` | [`TemplateData`](interfaces/TemplateData.md)[] | An array of Templates |

#### Returns

`Promise`<[`MergedPaths`](interfaces/MergedPaths.md)\>

MergedPaths

#### Defined in

[src/utils/dedupeTemplates.ts:71](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/utils/dedupeTemplates.ts#L71)

___

### getHandlebarsInstance

▸ **getHandlebarsInstance**(`rootDir`): `Promise`<typeof `Handlebars`\>

**`Example`**

```ts
resolves to {rootDir}/templates/partials
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rootDir` | `string` | dir to look for the partials dir from |

#### Returns

`Promise`<typeof `Handlebars`\>

an instance of handlebars our with helpers and partials registered

#### Defined in

[src/utils/handlebars.ts:107](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/utils/handlebars.ts#L107)

___

### helpMenu

▸ **helpMenu**(`generators`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `generators` | readonly [[`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<`NextWPAnswers`\>, [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<`GatsbyWPAnswers`\>, [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<`NextDrupalAnswers`\>, [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<[`DefaultAnswers`](interfaces/DefaultAnswers.md)\>, [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<[`DefaultAnswers`](interfaces/DefaultAnswers.md)\>, [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<[`DefaultAnswers`](interfaces/DefaultAnswers.md)\>] |

#### Returns

`string`

#### Defined in

[src/utils/helpMenu.ts:3](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/utils/helpMenu.ts#L3)

___

### isString

▸ **isString**(`arg`): arg is string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `unknown` | a variable |

#### Returns

arg is string

true if the variable is a string, false otherwise

#### Defined in

[src/types.ts:94](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L94)

___

### main

▸ **main**(`args`, `DecoupledKitGenerators`): `Promise`<`void`\>

Initializes the CLI prompts based on parsed arguments

**`See`**

decoupledKitGenerators.

**`Remarks`**

positional args are assumed to be generator names. Multiple generators can be queued up this way. Any number of prompts may be skipped by passing in the prompt name via flag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `ParsedArgs` | ParsedArgs |
| `DecoupledKitGenerators` | readonly [[`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<`NextWPAnswers`\>, [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<`GatsbyWPAnswers`\>, [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<`NextDrupalAnswers`\>, [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<[`DefaultAnswers`](interfaces/DefaultAnswers.md)\>, [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<[`DefaultAnswers`](interfaces/DefaultAnswers.md)\>, [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<[`DefaultAnswers`](interfaces/DefaultAnswers.md)\>] | An array of decoupledKitGenerators. |

#### Returns

`Promise`<`void`\>

Runs the actions for the generators given as positional params or if none are found, prompts user to select valid generator from list of DecoupledKitGenerators

#### Defined in

[src/index.ts:49](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/index.ts#L49)

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

[src/index.ts:21](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/index.ts#L21)

___

### runInstall

▸ **runInstall**(`config`): `string` \| `Promise`<`string`\>

An action that takes in the data, templates, and an instance of handlebars
and does an action, like installing dependencies or formatting generated code

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ActionConfig` |

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[src/types.ts:51](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L51)

___

### runLint

▸ **runLint**(`config`): `string` \| `Promise`<`string`\>

An action that takes in the data, templates, and an instance of handlebars
and does an action, like installing dependencies or formatting generated code

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ActionConfig` |

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[src/types.ts:51](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L51)

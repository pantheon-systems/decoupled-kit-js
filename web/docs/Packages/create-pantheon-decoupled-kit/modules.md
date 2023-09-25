---
id: 'modules'
title: 'create-pantheon-decoupled-kit'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Interfaces

- [DecoupledKitGenerator](interfaces/DecoupledKitGenerator.md)
- [DefaultAnswers](interfaces/DefaultAnswers.md)
- [GatsbyWPData](interfaces/GatsbyWPData.md)
- [MergedPaths](interfaces/MergedPaths.md)
- [TemplateData](interfaces/TemplateData.md)
- [TemplateImport](interfaces/TemplateImport.md)

## Type Aliases

### Action

Ƭ **Action**: (`config`: `ActionConfig`) => `Promise`<`string`\> \| `string`

#### Type declaration

▸ (`config`): `Promise`<`string`\> \| `string`

An action that takes in the data, templates, and an instance of handlebars and
does an action, like installing dependencies or formatting generated code

##### Parameters

| Name     | Type           |
| :------- | :------------- |
| `config` | `ActionConfig` |

##### Returns

`Promise`<`string`\> \| `string`

#### Defined in

[src/types.ts:111](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L111)

---

### ActionRunner

Ƭ **ActionRunner**: (`config`: `ActionRunnerConfig`) => `Promise`<`string`\>

#### Type declaration

▸ (`config`): `Promise`<`string`\>

##### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `config` | `ActionRunnerConfig` |

##### Returns

`Promise`<`string`\>

#### Defined in

[src/types.ts:113](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L113)

---

### BaseGeneratorData

Ƭ **BaseGeneratorData**: `Partial`<`PackageVersionData`\> & `DrupalOrWP`

Base data that is passed to all generators

**`Example`**

```
{
	drupalKitVersion: versions['drupal-kit'],
	drupal: true
}
```

#### Defined in

[src/types.ts:38](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L38)

---

### Input

Ƭ **Input**: { [Property in keyof InputIndex]: InputIndex[Property] }

Input from command line arguments, prompts, and generator data

#### Defined in

[src/types.ts:142](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L142)

---

### TemplateFn

Ƭ **TemplateFn**: <Data\>(`{ 	data, 	utils, }`: `TemplateFnArgs`<`Data`\>) =>
`string`

#### Type declaration

▸ <`Data`\>(`{ 	data, 	utils, }`): `string`

A tagged template literal function with data and utils context

##### Type parameters

| Name   | Type                                |
| :----- | :---------------------------------- |
| `Data` | extends [`Input`](modules.md#input) |

##### Parameters

| Name | Type |
| :--- | :--- |

| `{ 	data, 	utils, }` | `TemplateFnArgs`<`Data`\> |

##### Returns

`string`

#### Defined in

[src/types.ts:185](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L185)

## Variables

### TAGGED_TEMPLATE_REGEX

• `Const` **TAGGED_TEMPLATE_REGEX**: `RegExp`

**`Remarks`**

`env\.[a-z.]*` - matches `.env.*.ts` such as `.env.development.local.ts`

#### Defined in

[src/utils/constants.ts:5](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/utils/constants.ts#L5)

---

### hbsHelpers

• `Const` **hbsHelpers**: `Object`

Handlebars HelperDelegate

#### Index signature

▪ [key: `string`]: `HelperDelegate`

#### Defined in

[src/utils/handlebars.ts:10](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/utils/handlebars.ts#L10)

---

### rootDir

• `Const` **rootDir**: `string`

#### Defined in

[src/index.ts:15](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/index.ts#L15)

---

### taggedTemplateHelpers

• `Const` **taggedTemplateHelpers**: `Object`

#### Type declaration

| Name           | Type                                                                                       |
| :------------- | :----------------------------------------------------------------------------------------- |
| `backticks`    | (`value`: `string` \| `TemplateStringsArray`) => `string`                                  |
| `if`           | (`condition`: `unknown`, `value`: `string`) => `string`                                    |
| `md`           | { `codeFence`: (`__namedParameters`: { `lang`: `Lang` ; `value`: `string` }) => `string` } |
| `md.codeFence` | (`__namedParameters`: { `lang`: `Lang` ; `value`: `string` }) => `string`                  |
| `pkgName`      | (`value`: `unknown`) => `string`                                                           |
| `wpGraphql`    | (`value`: `string`) => `string`                                                            |

#### Defined in

[src/utils/taggedTemplateHelpers.ts:8](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/utils/taggedTemplateHelpers.ts#L8)

## Functions

### actionRunner

▸ **actionRunner**(`config`): `Promise`<`string`\>

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `config` | `ActionRunnerConfig` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types.ts:113](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L113)

---

### addDependencies

▸ **addDependencies**(`config`): `string` \| `Promise`<`string`\>

Adds any dependencies and/or devDependencies from the data field

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `config` | `ActionConfig` |

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[src/types.ts:111](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L111)

---

### addWithDiff

▸ **addWithDiff**(`config`): `string` \| `Promise`<`string`\>

1. dedupe the templates, favoring addons in case 2 paths collide
2. check if the destination path exists or create it. (path to destination +
   template name minus .hbs) example: ./test/myTest.js
3. check the diff against the new file and the rendered template or file to copy
   if source is not a handlebars template
4. if the --force option is not defined, ask the user if we should overwrite
   this file (yes to all, yes, skip, abort) if force is true we write
   everything.
5. skip or write the file based on input. If yes to all, set force to true.

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `config` | `ActionConfig` |

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[src/types.ts:111](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L111)

---

### convertCSSModules

▸ **convertCSSModules**(`config`): `string` \| `Promise`<`string`\>

An action that takes in the data, templates, and an instance of handlebars and
does an action, like installing dependencies or formatting generated code

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `config` | `ActionConfig` |

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[src/types.ts:111](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L111)

---

### dedupeTemplates

▸ **dedupeTemplates**(`templateData`):
`Promise`<[`MergedPaths`](interfaces/MergedPaths.md)\>

In case there is a template path that exists in two or more generators, we want
to favor the addon. This way, we avoid writing to a file multiple times

#### Parameters

| Name           | Type                                           | Description           |
| :------------- | :--------------------------------------------- | :-------------------- |
| `templateData` | [`TemplateData`](interfaces/TemplateData.md)[] | An array of Templates |

#### Returns

`Promise`<[`MergedPaths`](interfaces/MergedPaths.md)\>

MergedPaths

**`See`**

- Template
- [MergedPaths](interfaces/MergedPaths.md)

#### Defined in

[src/utils/dedupeTemplates.ts:70](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/utils/dedupeTemplates.ts#L70)

---

### getHandlebarsInstance

▸ **getHandlebarsInstance**(`rootDir`): `Promise`<typeof `Handlebars`\>

#### Parameters

| Name      | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `rootDir` | `string` | dir to look for the partials dir from |

#### Returns

`Promise`<typeof `Handlebars`\>

an instance of handlebars our with helpers and partials registered

**`Example`**

```ts
resolves to {rootDir}/templates/partials
```

#### Defined in

[src/utils/handlebars.ts:119](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/utils/handlebars.ts#L119)

---

### helpMenu

▸ **helpMenu**(`generators`): `string`

#### Parameters

| Name         | Type                                                                                                                           |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `generators` | [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<[`DefaultAnswers`](interfaces/DefaultAnswers.md), `unknown`\>[] |

#### Returns

`string`

#### Defined in

[src/utils/helpMenu.ts:3](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/utils/helpMenu.ts#L3)

---

### isDrupalCms

▸ **isDrupalCms**(`value`): value is "drupal" \| "d9" \| "d10"

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `value` | `string` | a string    |

#### Returns

value is "drupal" \| "d9" \| "d10"

true if the variable matches a Drupal alias in CMSType['Drupal'], false
otherwise

#### Defined in

[src/types.ts:206](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L206)

---

### isString

▸ **isString**(`arg`): arg is string

#### Parameters

| Name  | Type      | Description |
| :---- | :-------- | :---------- |
| `arg` | `unknown` | a variable  |

#### Returns

arg is string

true if the variable is a string, false otherwise

#### Defined in

[src/types.ts:198](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L198)

---

### isWpCms

▸ **isWpCms**(`value`): value is "wp" \| "wordpress"

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `value` | `string` | a string    |

#### Returns

value is "wp" \| "wordpress"

true if the variable matches a WordPress alias in CMSType['WordPress'], false
otherwise

#### Defined in

[src/types.ts:214](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L214)

---

### main

▸ **main**(`args`, `DecoupledKitGenerators`): `Promise`<`void`\>

Initializes the CLI prompts based on parsed arguments

#### Parameters

| Name                     | Type                                                                                                                           | Description                         |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :---------------------------------- |
| `args`                   | `ParsedArgs`                                                                                                                   | ParsedArgs                          |
| `DecoupledKitGenerators` | [`DecoupledKitGenerator`](interfaces/DecoupledKitGenerator.md)<[`DefaultAnswers`](interfaces/DefaultAnswers.md), `unknown`\>[] | An array of decoupledKitGenerators. |

#### Returns

`Promise`<`void`\>

Runs the actions for the generators given as positional params or if none are
found, prompts user to select valid generator from list of
DecoupledKitGenerators

**`See`**

decoupledKitGenerators.

**`Remarks`**

positional args are assumed to be generator names. Multiple generators can be
queued up this way. Any number of prompts may be skipped by passing in the
prompt name via flag.

#### Defined in

[src/index.ts:51](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/index.ts#L51)

---

### parseArgs

▸ **parseArgs**(`cliArgs?`): `ParsedArgs`

Parses CLI arguments using `minimist`

#### Parameters

| Name      | Type       | Description          |
| :-------- | :--------- | :------------------- |
| `cliArgs` | `string`[] | an array of strings. |

#### Returns

`ParsedArgs`

**`See`**

[https://www.npmjs.com/package/minimist#var-argv--parseargsargs-opts](https://www.npmjs.com/package/minimist#var-argv--parseargsargs-opts)

**`Default Value`**

`process.argv.slice(2)`

#### Defined in

[src/index.ts:23](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/index.ts#L23)

---

### runInstall

▸ **runInstall**(`config`): `string` \| `Promise`<`string`\>

An action that takes in the data, templates, and an instance of handlebars and
does an action, like installing dependencies or formatting generated code

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `config` | `ActionConfig` |

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[src/types.ts:111](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L111)

---

### runLint

▸ **runLint**(`config`): `string` \| `Promise`<`string`\>

An action that takes in the data, templates, and an instance of handlebars and
does an action, like installing dependencies or formatting generated code

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `config` | `ActionConfig` |

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[src/types.ts:111](https://github.com/pantheon-systems/decoupled-kit-js/blob/c3dc8b3da/packages/create-pantheon-decoupled-kit/src/types.ts#L111)

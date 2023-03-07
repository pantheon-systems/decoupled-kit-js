---
id: 'DecoupledKitGenerator'
title: 'Interface: DecoupledKitGenerator<Prompts>'
sidebar_label: 'DecoupledKitGenerator'
sidebar_position: 0
custom_edit_url: null
---

Generators need prompts to get user data not provided by CLI arguments

## Type parameters

| Name      | Type              |
| :-------- | :---------------- |
| `Prompts` | extends `Answers` |

## Properties

### actions

• **actions**: [`Action`](../modules.md#action)[]

An array of actions to run with the prompts and templates

#### Defined in

[src/types.ts:35](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L35)

---

### addon

• `Optional` **addon**: `boolean`

Set to true if the generator is considered an addon. This will give priority to
the templates when de-duping.

#### Defined in

[src/types.ts:44](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L44)

---

### data

• `Optional` **data**: `DataRecord`

Any extra data that should be passed from the generator to the actions

#### Defined in

[src/types.ts:39](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L39)

---

### description

• **description**: `string`

Description of the generator

#### Defined in

[src/types.ts:22](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L22)

---

### name

• **name**: `string`

Generator's name. This should be kebab case.

#### Defined in

[src/types.ts:18](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L18)

---

### prompts

• **prompts**: `QuestionCollection`<`Prompts`\>[]

An array of inquirer prompts

#### Defined in

[src/types.ts:26](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L26)

---

### templates

• **templates**: `string`[]

An array of paths to the generator's templates. This should be empty if the
generator does not have templates.

#### Defined in

[src/types.ts:31](https://github.com/pantheon-systems/decoupled-kit-js/blob/89c6e8b8e/packages/create-pantheon-decoupled-kit/src/types.ts#L31)

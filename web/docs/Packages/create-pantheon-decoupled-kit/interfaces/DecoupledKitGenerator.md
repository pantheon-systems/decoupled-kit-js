---
id: 'DecoupledKitGenerator'
title: 'Interface: DecoupledKitGenerator<Prompts, Data>'
sidebar_label: 'DecoupledKitGenerator'
sidebar_position: 0
custom_edit_url: null
---

Generators need prompts to get user data not provided by CLI arguments

## Type parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `Prompts` | [`DefaultAnswers`](DefaultAnswers.md) |
| `Data`    | `unknown`                             |

## Properties

### actions

• **actions**: [`Action`](../modules.md#action)[]

An array of actions to run with the prompts and templates

#### Defined in

[src/types.ts:42](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/create-pantheon-decoupled-kit/src/types.ts#L42)

---

### addon

• `Optional` **addon**: `boolean`

Set to true if the generator is considered an addon. This will give priority to
the templates when de-duping.

#### Defined in

[src/types.ts:51](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/create-pantheon-decoupled-kit/src/types.ts#L51)

---

### cmsType

• **cmsType**: `"d9"` \| `"d10"` \| `"drupal"` \| `"wp"` \| `"wordpress"` \|
`"any"`

Identifies a generators compatible CMS(s).

#### Defined in

[src/types.ts:59](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/create-pantheon-decoupled-kit/src/types.ts#L59)

---

### data

• `Optional` **data**: `Data`

Any extra data that should be passed from the generator to the actions

#### Defined in

[src/types.ts:46](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/create-pantheon-decoupled-kit/src/types.ts#L46)

---

### description

• **description**: `string`

Description of the generator

#### Defined in

[src/types.ts:25](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/create-pantheon-decoupled-kit/src/types.ts#L25)

---

### name

• **name**: `string`

Generator's name. This should be kebab case.

#### Defined in

[src/types.ts:21](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/create-pantheon-decoupled-kit/src/types.ts#L21)

---

### nextSteps

• `Optional` **nextSteps**: `string`[]

Any message(s) to be rendered after actions are successfully completed.

#### Defined in

[src/types.ts:55](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/create-pantheon-decoupled-kit/src/types.ts#L55)

---

### prompts

• **prompts**: `QuestionCollection`<[`DefaultAnswers`](DefaultAnswers.md)\>[]

An array of inquirer prompts

**`Template`**

the type of the required user input

**`Default`**

DefaultAnswers - { outDir: string }

#### Defined in

[src/types.ts:31](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/create-pantheon-decoupled-kit/src/types.ts#L31)

---

### templates

• **templates**: `string`[]

An array of paths to the generator's templates. This should be empty if the
generator does not have templates.

#### Defined in

[src/types.ts:38](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/create-pantheon-decoupled-kit/src/types.ts#L38)

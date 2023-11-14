---
id: 'Button'
title: 'Module: Button'
sidebar_label: 'Button'
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### BaseButtonElement

Ƭ **BaseButtonElement**: `React.ElementRef`<`"button"`\> &
`React.ElementRef`<typeof `Slot`\>

#### Defined in

[packages/react-kit/src/components/Button/props.ts:47](https://github.com/pantheon-systems/decoupled-kit-js/blob/9ff365d0/packages/react-kit/src/components/Button/props.ts#L47)

---

### BaseButtonProps

Ƭ **BaseButtonProps**: `Readonly`<{ `[key: string]`: `unknown`; `asChild?`:
`boolean` ; `children?`: `React.ReactNode` ; `className?`: `string` }\>

#### Defined in

[packages/react-kit/src/components/Button/props.ts:3](https://github.com/pantheon-systems/decoupled-kit-js/blob/9ff365d0/packages/react-kit/src/components/Button/props.ts#L3)

---

### ButtonElement

Ƭ **ButtonElement**: [`BaseButtonElement`](Button.md#basebuttonelement) &
`React.ElementRef`<`"a"`\>

#### Defined in

[packages/react-kit/src/components/Button/props.ts:50](https://github.com/pantheon-systems/decoupled-kit-js/blob/9ff365d0/packages/react-kit/src/components/Button/props.ts#L50)

---

### ButtonProps

Ƭ **ButtonProps**: [`BaseButtonProps`](Button.md#basebuttonprops) & `Readonly`<{
`Element?`: `"button"` \| `"a"` ; `size?`: `"small"` \| `"large"` ; `type?`:
`"primary"` \| `"secondary"` }\>

#### Defined in

[packages/react-kit/src/components/Button/props.ts:30](https://github.com/pantheon-systems/decoupled-kit-js/blob/9ff365d0/packages/react-kit/src/components/Button/props.ts#L30)

## Functions

### Button

▸ **Button**(`props`): `ReactNode`

#### Parameters

| Name    | Type                                                                                                                    |
| :------ | :---------------------------------------------------------------------------------------------------------------------- |
| `props` | `Omit`<[`ButtonProps`](Button.md#buttonprops), `"ref"`\> & `RefAttributes`<[`ButtonElement`](Button.md#buttonelement)\> |

#### Returns

`ReactNode`

**`See`**

[https://live-storybook-react-kit.appa.pantheon.site/?path=/docs/button--docs](https://live-storybook-react-kit.appa.pantheon.site/?path=/docs/button--docs)

#### Defined in

node_modules/.pnpm/@types+react@18.2.28/node_modules/@types/react/index.d.ts:427

---

### IconButton

▸ **IconButton**(`props`): `ReactNode`

#### Parameters

| Name    | Type                                                                                                                                                                                                            |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `props` | `Omit`<`Readonly`<{ `[key: string]`: `unknown`; `asChild?`: `boolean` ; `children?`: `ReactNode` ; `className?`: `string` }\>, `"ref"`\> & `RefAttributes`<[`BaseButtonElement`](Button.md#basebuttonelement)\> |

#### Returns

`ReactNode`

**`See`**

[https://live-storybook-react-kit.appa.pantheon.site/?path=/docs/button--docs](https://live-storybook-react-kit.appa.pantheon.site/?path=/docs/button--docs)

#### Defined in

node_modules/.pnpm/@types+react@18.2.28/node_modules/@types/react/index.d.ts:427

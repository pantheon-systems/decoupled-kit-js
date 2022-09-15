---
id: 'types_TailwindcssPlugin'
title: 'Module: types/TailwindcssPlugin'
sidebar_label: 'types/TailwindcssPlugin'
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### Color

Ƭ **Color**: `Object`

#### Type declaration

| Name              | Type     |
| :---------------- | :------- |
| `hexDefault`      | `string` |
| `name`            | `string` |
| `tailwindDefault` | `string` |
| `themeName`       | `string` |

#### Defined in

[packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts:220](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts#L220)

---

### ColorConfig

Ƭ **ColorConfig**: `Object`

#### Type declaration

| Name                   | Type     |
| :--------------------- | :------- |
| `cyanBluishGray?`      | `string` |
| `darkGray?`            | `string` |
| `foreground?`          | `string` |
| `lightGray?`           | `string` |
| `lightGreenCyan?`      | `string` |
| `luminousVividAmber?`  | `string` |
| `luminousVividOrange?` | `string` |
| `paleCyanBlue?`        | `string` |
| `palePink?`            | `string` |
| `primary?`             | `string` |
| `secondary?`           | `string` |
| `stripes?`             | `string` |
| `tertiary?`            | `string` |
| `vividCyanBlue?`       | `string` |
| `vividGreenCyan?`      | `string` |
| `vividPurple?`         | `string` |
| `vividRed?`            | `string` |
| `white?`               | `string` |

#### Defined in

[packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts:4](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts#L4)

---

### FontSize

Ƭ **FontSize**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `default`  | `string` |
| `name`     | `string` |
| `tailwind` | `string` |

#### Defined in

[packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts:227](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts#L227)

---

### FontSizeConfig

Ƭ **FontSizeConfig**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `4xl?` | `string` |
| `7xl?` | `string` |
| `sm?`  | `string` |
| `xl?`  | `string` |

#### Defined in

[packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts:30](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts#L30)

---

### GradientColors

Ƭ **GradientColors**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `color`    | `string` |
| `position` | `string` |

#### Defined in

[packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts:233](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts#L233)

---

### PaddingConfig

Ƭ **PaddingConfig**: `Object`

#### Type declaration

| Name           | Type     |
| :------------- | :------- |
| `backgroundX?` | `string` |
| `backgroundY?` | `string` |

#### Defined in

[packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts:25](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts#L25)

---

### PartialThemeConfig

Ƭ **PartialThemeConfig**: `Partial`<`ThemeConfig` & { `extend`:
`Partial`<`ThemeConfig`\> }\>

#### Defined in

[packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts:240](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts#L240)

---

### TailwindcssConfig

Ƭ **TailwindcssConfig**: `Config` &
[`WordPressMapConfig`](types_TailwindcssPlugin.md#wordpressmapconfig)

#### Defined in

[packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts:238](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts#L238)

---

### ThemeType

Ƭ **ThemeType**: <T\>(`path?`: `string`, `defaultValue?`: `T`) => `T`

#### Type declaration

▸ <`T`\>(`path?`, `defaultValue?`): `T`

##### Type parameters

| Name | Type                                                                                 |
| :--- | :----------------------------------------------------------------------------------- |
| `T`  | [`PartialThemeConfig`](types_TailwindcssPlugin.md#partialthemeconfig) \| `undefined` |

##### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `path?`         | `string` |
| `defaultValue?` | `T`      |

##### Returns

`T`

#### Defined in

[packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts:246](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts#L246)

---

### WordPressMapConfig

Ƭ **WordPressMapConfig**: `Object`

#### Type declaration

| Name                     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme?`                 | { `colors?`: [`ColorConfig`](types_TailwindcssPlugin.md#colorconfig) ; `extend?`: { `colors?`: [`ColorConfig`](types_TailwindcssPlugin.md#colorconfig) ; `fontSize?`: [`FontSizeConfig`](types_TailwindcssPlugin.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](types_TailwindcssPlugin.md#paddingconfig) } ; `fontSize?`: [`FontSizeConfig`](types_TailwindcssPlugin.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](types_TailwindcssPlugin.md#paddingconfig) } |
| `theme.colors?`          | [`ColorConfig`](types_TailwindcssPlugin.md#colorconfig)                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `theme.extend?`          | { `colors?`: [`ColorConfig`](types_TailwindcssPlugin.md#colorconfig) ; `fontSize?`: [`FontSizeConfig`](types_TailwindcssPlugin.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](types_TailwindcssPlugin.md#paddingconfig) }                                                                                                                                                                                                                                            |
| `theme.extend.colors?`   | [`ColorConfig`](types_TailwindcssPlugin.md#colorconfig)                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `theme.extend.fontSize?` | [`FontSizeConfig`](types_TailwindcssPlugin.md#fontsizeconfig)                                                                                                                                                                                                                                                                                                                                                                                                            |
| `theme.extend.padding?`  | [`PaddingConfig`](types_TailwindcssPlugin.md#paddingconfig)                                                                                                                                                                                                                                                                                                                                                                                                              |
| `theme.fontSize?`        | [`FontSizeConfig`](types_TailwindcssPlugin.md#fontsizeconfig)                                                                                                                                                                                                                                                                                                                                                                                                            |
| `theme.padding?`         | [`PaddingConfig`](types_TailwindcssPlugin.md#paddingconfig)                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Defined in

[packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts:37](https://github.com/pantheon-systems/decoupled-kit-js/blob/4f3ee4f/packages/wordpress-kit/src/types/TailwindcssPlugin.d.ts#L37)

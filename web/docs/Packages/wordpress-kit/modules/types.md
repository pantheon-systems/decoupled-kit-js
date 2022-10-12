---
id: "types"
title: "Module: types"
sidebar_label: "types"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### Color

Ƭ **Color**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hexDefault` | `string` |
| `name` | `string` |
| `tailwindDefault` | `string` |
| `themeName` | `string` |

#### Defined in

[packages/wordpress-kit/src/types/index.ts:220](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/types/index.ts#L220)

___

### ColorConfig

Ƭ **ColorConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cyanBluishGray?` | `string` |
| `darkGray?` | `string` |
| `foreground?` | `string` |
| `lightGray?` | `string` |
| `lightGreenCyan?` | `string` |
| `luminousVividAmber?` | `string` |
| `luminousVividOrange?` | `string` |
| `paleCyanBlue?` | `string` |
| `palePink?` | `string` |
| `primary?` | `string` |
| `secondary?` | `string` |
| `stripes?` | `string` |
| `tertiary?` | `string` |
| `vividCyanBlue?` | `string` |
| `vividGreenCyan?` | `string` |
| `vividPurple?` | `string` |
| `vividRed?` | `string` |
| `white?` | `string` |

#### Defined in

[packages/wordpress-kit/src/types/index.ts:4](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/types/index.ts#L4)

___

### FontSize

Ƭ **FontSize**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default` | `string` |
| `name` | `string` |
| `tailwind` | `string` |

#### Defined in

[packages/wordpress-kit/src/types/index.ts:227](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/types/index.ts#L227)

___

### FontSizeConfig

Ƭ **FontSizeConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `4xl?` | `string` |
| `7xl?` | `string` |
| `sm?` | `string` |
| `xl?` | `string` |

#### Defined in

[packages/wordpress-kit/src/types/index.ts:30](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/types/index.ts#L30)

___

### GradientColors

Ƭ **GradientColors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `position` | `string` |

#### Defined in

[packages/wordpress-kit/src/types/index.ts:233](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/types/index.ts#L233)

___

### PaddingConfig

Ƭ **PaddingConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backgroundX?` | `string` |
| `backgroundY?` | `string` |

#### Defined in

[packages/wordpress-kit/src/types/index.ts:25](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/types/index.ts#L25)

___

### TailwindcssConfig

Ƭ **TailwindcssConfig**: `Config` & [`WordPressMapConfig`](types.md#wordpressmapconfig)

#### Defined in

[packages/wordpress-kit/src/types/index.ts:238](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/types/index.ts#L238)

___

### ThemeType

Ƭ **ThemeType**: <T\>(`path?`: `string`, `defaultValue?`: `T`) => `T`

#### Type declaration

▸ <`T`\>(`path?`, `defaultValue?`): `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `PartialThemeConfig` \| `undefined` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `string` |
| `defaultValue?` | `T` |

##### Returns

`T`

#### Defined in

[packages/wordpress-kit/src/types/index.ts:246](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/types/index.ts#L246)

___

### WordPressMapConfig

Ƭ **WordPressMapConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `theme?` | { `colors?`: [`ColorConfig`](types.md#colorconfig) ; `extend?`: { `colors?`: [`ColorConfig`](types.md#colorconfig) ; `fontSize?`: [`FontSizeConfig`](types.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](types.md#paddingconfig)  } ; `fontSize?`: [`FontSizeConfig`](types.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](types.md#paddingconfig)  } |
| `theme.colors?` | [`ColorConfig`](types.md#colorconfig) |
| `theme.extend?` | { `colors?`: [`ColorConfig`](types.md#colorconfig) ; `fontSize?`: [`FontSizeConfig`](types.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](types.md#paddingconfig)  } |
| `theme.extend.colors?` | [`ColorConfig`](types.md#colorconfig) |
| `theme.extend.fontSize?` | [`FontSizeConfig`](types.md#fontsizeconfig) |
| `theme.extend.padding?` | [`PaddingConfig`](types.md#paddingconfig) |
| `theme.fontSize?` | [`FontSizeConfig`](types.md#fontsizeconfig) |
| `theme.padding?` | [`PaddingConfig`](types.md#paddingconfig) |

#### Defined in

[packages/wordpress-kit/src/types/index.ts:37](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/types/index.ts#L37)

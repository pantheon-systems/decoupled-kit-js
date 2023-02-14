---
id: "modules"
title: "decoupled-kit-js"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [GraphqlClientFactory](classes/GraphqlClientFactory.md)

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

[packages/wordpress-kit/src/types/index.ts:220](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/wordpress-kit/src/types/index.ts#L220)

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

[packages/wordpress-kit/src/types/index.ts:4](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/wordpress-kit/src/types/index.ts#L4)

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

[packages/wordpress-kit/src/types/index.ts:227](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/wordpress-kit/src/types/index.ts#L227)

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

[packages/wordpress-kit/src/types/index.ts:30](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/wordpress-kit/src/types/index.ts#L30)

___

### GradientColors

Ƭ **GradientColors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `position` | `string` |

#### Defined in

[packages/wordpress-kit/src/types/index.ts:233](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/wordpress-kit/src/types/index.ts#L233)

___

### PaddingConfig

Ƭ **PaddingConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backgroundX?` | `string` |
| `backgroundY?` | `string` |

#### Defined in

[packages/wordpress-kit/src/types/index.ts:25](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/wordpress-kit/src/types/index.ts#L25)

___

### TailwindcssConfig

Ƭ **TailwindcssConfig**: `Config` & [`WordPressMapConfig`](modules.md#wordpressmapconfig)

#### Defined in

[packages/wordpress-kit/src/types/index.ts:238](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/wordpress-kit/src/types/index.ts#L238)

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

[packages/wordpress-kit/src/types/index.ts:246](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/wordpress-kit/src/types/index.ts#L246)

___

### WordPressMapConfig

Ƭ **WordPressMapConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `theme?` | { `colors?`: [`ColorConfig`](modules.md#colorconfig) ; `extend?`: { `colors?`: [`ColorConfig`](modules.md#colorconfig) ; `fontSize?`: [`FontSizeConfig`](modules.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](modules.md#paddingconfig)  } ; `fontSize?`: [`FontSizeConfig`](modules.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](modules.md#paddingconfig)  } |
| `theme.colors?` | [`ColorConfig`](modules.md#colorconfig) |
| `theme.extend?` | { `colors?`: [`ColorConfig`](modules.md#colorconfig) ; `fontSize?`: [`FontSizeConfig`](modules.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](modules.md#paddingconfig)  } |
| `theme.extend.colors?` | [`ColorConfig`](modules.md#colorconfig) |
| `theme.extend.fontSize?` | [`FontSizeConfig`](modules.md#fontsizeconfig) |
| `theme.extend.padding?` | [`PaddingConfig`](modules.md#paddingconfig) |
| `theme.fontSize?` | [`FontSizeConfig`](modules.md#fontsizeconfig) |
| `theme.padding?` | [`PaddingConfig`](modules.md#paddingconfig) |

#### Defined in

[packages/wordpress-kit/src/types/index.ts:37](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/wordpress-kit/src/types/index.ts#L37)

## Variables

### tailwindcssPlugin

• **tailwindcssPlugin**: `Object`

Tailwindcss plugin that maps WordPress block editor styles to tailwindcss classes.

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/index.ts:24](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/wordpress-kit/src/lib/tailwindcssPlugin/index.ts#L24)

## Functions

### setEdgeHeader

▸ **setEdgeHeader**(`«destructured»`): `void`

Sets response headers for edge caching.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `cacheControl?` | `string` |
| › `res` | `ServerResponse`<`IncomingMessage`\> |

#### Returns

`void`

#### Defined in

[packages/wordpress-kit/src/lib/setEdgeHeader.ts:11](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/wordpress-kit/src/lib/setEdgeHeader.ts#L11)

___

### setSurrogateKeyHeader

▸ **setSurrogateKeyHeader**(`keys`, `res`): `string` \| `void`

Adds an aggregated list of surrogate keys in the working response.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | ``null`` \| `string` | Value for surrogate-key header in API response. |
| `res` | `ServerResponse`<`IncomingMessage`\> | The active http.ServerResponse object. |

#### Returns

`string` \| `void`

The current known unique set of surrogate keys.

#### Defined in

[packages/cms-kit/src/utils/setSurrogateKeyHeader.ts:17](https://github.com/backlineint/decoupled-kit-js/blob/fa402d782/packages/cms-kit/src/utils/setSurrogateKeyHeader.ts#L17)

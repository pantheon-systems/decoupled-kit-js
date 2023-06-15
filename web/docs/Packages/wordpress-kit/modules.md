---
id: 'modules'
title: 'decoupled-kit-js'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [GraphQLClientFactory](classes/GraphQLClientFactory.md)

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

[packages/wordpress-kit/src/tailwindcssPlugin/types.ts:220](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/wordpress-kit/src/tailwindcssPlugin/types.ts#L220)

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

[packages/wordpress-kit/src/tailwindcssPlugin/types.ts:4](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/wordpress-kit/src/tailwindcssPlugin/types.ts#L4)

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

[packages/wordpress-kit/src/tailwindcssPlugin/types.ts:227](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/wordpress-kit/src/tailwindcssPlugin/types.ts#L227)

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

[packages/wordpress-kit/src/tailwindcssPlugin/types.ts:30](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/wordpress-kit/src/tailwindcssPlugin/types.ts#L30)

---

### GradientColors

Ƭ **GradientColors**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `color`    | `string` |
| `position` | `string` |

#### Defined in

[packages/wordpress-kit/src/tailwindcssPlugin/types.ts:233](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/wordpress-kit/src/tailwindcssPlugin/types.ts#L233)

---

### PaddingConfig

Ƭ **PaddingConfig**: `Object`

#### Type declaration

| Name           | Type     |
| :------------- | :------- |
| `backgroundX?` | `string` |
| `backgroundY?` | `string` |

#### Defined in

[packages/wordpress-kit/src/tailwindcssPlugin/types.ts:25](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/wordpress-kit/src/tailwindcssPlugin/types.ts#L25)

---

### TailwindcssConfig

Ƭ **TailwindcssConfig**: `Config` &
[`WordPressMapConfig`](modules.md#wordpressmapconfig)

#### Defined in

[packages/wordpress-kit/src/tailwindcssPlugin/types.ts:238](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/wordpress-kit/src/tailwindcssPlugin/types.ts#L238)

---

### ThemeType

Ƭ **ThemeType**: <T\>(`path?`: `string`, `defaultValue?`: `T`) => `T`

#### Type declaration

▸ <`T`\>(`path?`, `defaultValue?`): `T`

##### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | `PartialThemeConfig` \| `undefined` |

##### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `path?`         | `string` |
| `defaultValue?` | `T`      |

##### Returns

`T`

#### Defined in

[packages/wordpress-kit/src/tailwindcssPlugin/types.ts:246](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/wordpress-kit/src/tailwindcssPlugin/types.ts#L246)

---

### WordPressMapConfig

Ƭ **WordPressMapConfig**: `Object`

#### Type declaration

| Name                     | Type                                                                                                                                                                                                                                                                                                                                                                     |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme?`                 | { `colors?`: [`ColorConfig`](modules.md#colorconfig) ; `extend?`: { `colors?`: [`ColorConfig`](modules.md#colorconfig) ; `fontSize?`: [`FontSizeConfig`](modules.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](modules.md#paddingconfig) } ; `fontSize?`: [`FontSizeConfig`](modules.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](modules.md#paddingconfig) } |
| `theme.colors?`          | [`ColorConfig`](modules.md#colorconfig)                                                                                                                                                                                                                                                                                                                                  |
| `theme.extend?`          | { `colors?`: [`ColorConfig`](modules.md#colorconfig) ; `fontSize?`: [`FontSizeConfig`](modules.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](modules.md#paddingconfig) }                                                                                                                                                                                            |
| `theme.extend.colors?`   | [`ColorConfig`](modules.md#colorconfig)                                                                                                                                                                                                                                                                                                                                  |
| `theme.extend.fontSize?` | [`FontSizeConfig`](modules.md#fontsizeconfig)                                                                                                                                                                                                                                                                                                                            |
| `theme.extend.padding?`  | [`PaddingConfig`](modules.md#paddingconfig)                                                                                                                                                                                                                                                                                                                              |
| `theme.fontSize?`        | [`FontSizeConfig`](modules.md#fontsizeconfig)                                                                                                                                                                                                                                                                                                                            |
| `theme.padding?`         | [`PaddingConfig`](modules.md#paddingconfig)                                                                                                                                                                                                                                                                                                                              |

#### Defined in

[packages/wordpress-kit/src/tailwindcssPlugin/types.ts:37](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/wordpress-kit/src/tailwindcssPlugin/types.ts#L37)

## Variables

### tailwindcssPlugin

• `Const` **tailwindcssPlugin**: `Object`

Tailwindcss plugin that maps WordPress block editor styles to tailwindcss
classes.

#### Defined in

[packages/wordpress-kit/src/tailwindcssPlugin/index.ts:24](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/wordpress-kit/src/tailwindcssPlugin/index.ts#L24)

## Functions

### setEdgeHeader

▸ **setEdgeHeader**(`«destructured»`): `void`

Sets response headers for edge caching.

#### Parameters

| Name              | Type                                 |
| :---------------- | :----------------------------------- |
| `«destructured»`  | `Object`                             |
| › `cacheControl?` | `string`                             |
| › `res`           | `ServerResponse`<`IncomingMessage`\> |

#### Returns

`void`

#### Defined in

[packages/wordpress-kit/src/lib/setEdgeHeader.ts:10](https://github.com/pantheon-systems/decoupled-kit-js/blob/ddd6c3538/packages/wordpress-kit/src/lib/setEdgeHeader.ts#L10)

---

### setSurrogateKeyHeader

▸ **setSurrogateKeyHeader**(`keys`, `res`): `string` \| `void`

Adds an aggregated list of surrogate keys in the working response.

#### Parameters

| Name   | Type                                 | Description                                     |
| :----- | :----------------------------------- | :---------------------------------------------- |
| `keys` | `null` \| `string`                   | Value for surrogate-key header in API response. |
| `res`  | `ServerResponse`<`IncomingMessage`\> | The active http.ServerResponse object.          |

#### Returns

`string` \| `void`

The current known unique set of surrogate keys.

#### Defined in

packages/cms-kit/dist/lib/setSurrogateKeyHeader.d.ts:9

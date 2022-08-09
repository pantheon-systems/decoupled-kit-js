---
id: "src_types_tailwindcssPlugin"
title: "Module: src/types/tailwindcssPlugin"
sidebar_label: "src/types/tailwindcssPlugin"
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

[src/types/tailwindcssPlugin.d.ts:167](https://github.com/pantheon-systems/decoupled-kit-js/blob/3caad45/packages/wordpress-kit/src/types/tailwindcssPlugin.d.ts#L167)

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

[src/types/tailwindcssPlugin.d.ts:3](https://github.com/pantheon-systems/decoupled-kit-js/blob/3caad45/packages/wordpress-kit/src/types/tailwindcssPlugin.d.ts#L3)

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

[src/types/tailwindcssPlugin.d.ts:174](https://github.com/pantheon-systems/decoupled-kit-js/blob/3caad45/packages/wordpress-kit/src/types/tailwindcssPlugin.d.ts#L174)

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

[src/types/tailwindcssPlugin.d.ts:29](https://github.com/pantheon-systems/decoupled-kit-js/blob/3caad45/packages/wordpress-kit/src/types/tailwindcssPlugin.d.ts#L29)

---

### PaddingConfig

Ƭ **PaddingConfig**: `Object`

#### Type declaration

| Name           | Type     |
| :------------- | :------- |
| `backgroundX?` | `string` |
| `backgroundY?` | `string` |

#### Defined in

[src/types/tailwindcssPlugin.d.ts:24](https://github.com/pantheon-systems/decoupled-kit-js/blob/3caad45/packages/wordpress-kit/src/types/tailwindcssPlugin.d.ts#L24)

---

### TailwindcssConfig

Ƭ **TailwindcssConfig**: `Config` & [`WordpressMapConfig`](src_types_tailwindcssPlugin.md#wordpressmapconfig)

#### Defined in

[src/types/tailwindcssPlugin.d.ts:180](https://github.com/pantheon-systems/decoupled-kit-js/blob/3caad45/packages/wordpress-kit/src/types/tailwindcssPlugin.d.ts#L180)

---

### WordpressMapConfig

Ƭ **WordpressMapConfig**: `Object`

#### Type declaration

| Name                     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme?`                 | { `colors?`: [`ColorConfig`](src_types_tailwindcssPlugin.md#colorconfig) ; `extend?`: { `colors?`: [`ColorConfig`](src_types_tailwindcssPlugin.md#colorconfig) ; `fontSize?`: [`FontSizeConfig`](src_types_tailwindcssPlugin.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](src_types_tailwindcssPlugin.md#paddingconfig) } ; `fontSize?`: [`FontSizeConfig`](src_types_tailwindcssPlugin.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](src_types_tailwindcssPlugin.md#paddingconfig) } |
| `theme.colors?`          | [`ColorConfig`](src_types_tailwindcssPlugin.md#colorconfig)                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `theme.extend?`          | { `colors?`: [`ColorConfig`](src_types_tailwindcssPlugin.md#colorconfig) ; `fontSize?`: [`FontSizeConfig`](src_types_tailwindcssPlugin.md#fontsizeconfig) ; `padding?`: [`PaddingConfig`](src_types_tailwindcssPlugin.md#paddingconfig) }                                                                                                                                                                                                                                                        |
| `theme.extend.colors?`   | [`ColorConfig`](src_types_tailwindcssPlugin.md#colorconfig)                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `theme.extend.fontSize?` | [`FontSizeConfig`](src_types_tailwindcssPlugin.md#fontsizeconfig)                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `theme.extend.padding?`  | [`PaddingConfig`](src_types_tailwindcssPlugin.md#paddingconfig)                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `theme.fontSize?`        | [`FontSizeConfig`](src_types_tailwindcssPlugin.md#fontsizeconfig)                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `theme.padding?`         | [`PaddingConfig`](src_types_tailwindcssPlugin.md#paddingconfig)                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Defined in

[src/types/tailwindcssPlugin.d.ts:36](https://github.com/pantheon-systems/decoupled-kit-js/blob/3caad45/packages/wordpress-kit/src/types/tailwindcssPlugin.d.ts#L36)

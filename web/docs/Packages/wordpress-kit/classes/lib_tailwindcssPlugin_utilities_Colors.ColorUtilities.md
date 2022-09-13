---
id: "lib_tailwindcssPlugin_utilities_Colors.ColorUtilities"
title: "Class: ColorUtilities"
sidebar_label: "ColorUtilities"
custom_edit_url: null
---

[lib/tailwindcssPlugin/utilities/Colors](../modules/lib_tailwindcssPlugin_utilities_Colors.md).ColorUtilities

Class to generate all the color related utilities

**`Param`**

The theme object from tailwindcss plugin

**`Example`**

```
const color = new ColorUtilities(theme);

color.getBackgroundUtilities() // returns the background utilities
color.getBorderColorUtilities() // returns the border color utilities
```

## Constructors

### constructor

• **new ColorUtilities**(`theme`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`ThemeType`](../modules/types_TailwindcssPlugin.md#themetype) |

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:25](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L25)

## Properties

### theme

• `Private` **theme**: [`ThemeType`](../modules/types_TailwindcssPlugin.md#themetype)

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:23](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L23)

## Methods

### findColor

▸ `Private` **findColor**(`colorName`): [`Color`](../modules/types_TailwindcssPlugin.md#color)

Finds a color by themeName

**`Throws`**

Error(`Color ${colorName} not found`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorName` | `string` |

#### Returns

[`Color`](../modules/types_TailwindcssPlugin.md#color)

Color

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:49](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L49)

___

### formatGradientColors

▸ `Private` **formatGradientColors**(`colors`): `string`

Formats color gradients from a list of colors.

**`Remarks`**

to be used in the linear-gradient css function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`GradientColors`](../modules/types_TailwindcssPlugin.md#gradientcolors)[] | Array of gradient colors i.e  ``` [{ color: 'primary', position: '0%' }, ...] ``` |

#### Returns

`string`

A string to be used as a css gradient. Example: '#000000 50%, #ffffff 100%'

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:71](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L71)

___

### getBackgroundUtilities

▸ **getBackgroundUtilities**(): `Object`

Takes the colors from the colorList constant to
build an object with the background colors and a padding.

**`Example`**

const backgroundUtilities = getBackgroundUtilities();
```
{
 '.has-primary-background-color': {
   backgroundColor: '#0070f3',
 },
 '.has-background': {
   padding: '1.25rem 2.35rem',
 }
 ...
},
```

#### Returns

`Object`

```
{[`.has-${colorName}-background-color`]: {
  backgroundColor: 'colorValue' },
  ...
}
```

| Name | Type |
| :------ | :------ |
| `.has-background` | { `padding`: `string` = backgroundPadding } |
| `.has-background.padding` | `string` |

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:139](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L139)

___

### getBorderColorUtilities

▸ **getBorderColorUtilities**(): `Object`

Takes the colors from the colorList constant to
build the borderColor utilities object

**`Example`**

const backgroundUtilities = getBackgroundUtilities();
```
{
 '.has-primary-background-color': {
   borderColor: '#0070f3 !important',
 },
 ...
},
```

#### Returns

`Object`

```
{[`.has-${colorName}-border-color`]: {
   borderColor: 'colorValue' !important },
   ...
}
```

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:183](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L183)

___

### getColor

▸ `Private` **getColor**(`color`): `string`

Checks if the color is in the theme colors list
is a tailwind default color. If not, returns a hex color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](../modules/types_TailwindcssPlugin.md#color) | A color object |

#### Returns

`string`

string - A string with the color value

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:36](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L36)

___

### getColorUtilities

▸ **getColorUtilities**(): `Object`

Takes the colors from the colorList constant and
build an object with the following structure:

**`Example`**

const colorUtilities = getColorUtilities();
```
{
 '.has-primary-color': {
  color: '#0070f3',
 },
 ...
},
```

#### Returns

`Object`

```{[`.has-${colorName}-color`]: { color: 'colorValue' }, ... }``` - color utilities.

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:102](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L102)

___

### getGradientUtilities

▸ **getGradientUtilities**(): `Object`

Takes the gradients from the gradientList constant to
build the gradient utilities object.

**`Example`**

const backgroundUtilities = getBackgroundUtilities();
```
{
 '.has-diagonal-primary-to-foreground-gradient': {
   background: 'linear-gradient(to bottom right, #1a4548 50%, #000000 100%)',
 },
 ...
},
```

#### Returns

`Object`

```{[`.has-${gradientName}-gradient`]: { background: linear-gradient(direction , color colorPosition, color colorPosition) }, ... }``` - gradient utilities.

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:212](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L212)

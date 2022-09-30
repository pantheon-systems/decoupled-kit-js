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
| `theme` | [`ThemeType`](../modules/types.md#themetype) |

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:21](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L21)

## Properties

### theme

• `Private` **theme**: [`ThemeType`](../modules/types.md#themetype)

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:19](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L19)

## Methods

### findColor

▸ `Private` **findColor**(`colorName`): [`Color`](../modules/types.md#color)

Finds a color by themeName

**`Throws`**

Error(`Color ${colorName} not found`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorName` | `string` |

#### Returns

[`Color`](../modules/types.md#color)

Color

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:45](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L45)

___

### formatGradientColors

▸ `Private` **formatGradientColors**(`colors`): `string`

Formats color gradients from a list of colors.

**`Remarks`**

to be used in the linear-gradient css function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`GradientColors`](../modules/types.md#gradientcolors)[] | Array of gradient colors i.e  ``` [{ color: 'primary', position: '0%' }, ...] ``` |

#### Returns

`string`

A string to be used as a css gradient. Example: '#000000 50%, #ffffff 100%'

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:67](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L67)

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

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:141](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L141)

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

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:185](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L185)

___

### getColor

▸ `Private` **getColor**(`color`): `string`

Checks if the color is in the theme colors list
is a tailwind default color. If not, returns a hex color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](../modules/types.md#color) | A color object |

#### Returns

`string`

string - A string with the color value

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:32](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L32)

___

### getColorByName

▸ **getColorByName**(`colorName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorName` | `string` |

#### Returns

`string`

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:226](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L226)

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

| Name | Type |
| :------ | :------ |
| `.has-text-color` | { `strong`: { `color`: `string` = 'inherit !important' }  } |
| `.has-text-color.strong` | { `color`: `string` = 'inherit !important' } |
| `.has-text-color.strong.color` | `string` |

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:98](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L98)

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

[packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts:214](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L214)

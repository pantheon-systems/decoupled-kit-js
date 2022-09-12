---
id: "src_lib_tailwindcssPlugin_utilities_Colors.ColorUtilities"
title: "Class: ColorUtilities"
sidebar_label: "ColorUtilities"
custom_edit_url: null
---

[src/lib/tailwindcssPlugin/utilities/Colors](../modules/src_lib_tailwindcssPlugin_utilities_Colors.md).ColorUtilities

Class to generate all the color related utilities

**`param`** The theme object from tailwindcss plugin

**`example`**

```
const color = new ColorUtilities(theme);

color.getBackgroundUtilities() // returns the background utilities
color.getBorderColorUtilities() // returns the border color utilities
```

## Constructors

### constructor

• **new ColorUtilities**(`theme`)

#### Parameters

| Name    | Type                                                               |
| :------ | :----------------------------------------------------------------- |
| `theme` | [`ThemeType`](../modules/src_types_TailwindcssPlugin.md#themetype) |

#### Defined in

[src/lib/tailwindcssPlugin/utilities/Colors.ts:25](https://github.com/pantheon-systems/decoupled-kit-js/blob/fe58c2b6/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L25)

## Properties

### theme

• `Private` **theme**: [`ThemeType`](../modules/src_types_TailwindcssPlugin.md#themetype)

#### Defined in

[src/lib/tailwindcssPlugin/utilities/Colors.ts:23](https://github.com/pantheon-systems/decoupled-kit-js/blob/fe58c2b6/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L23)

## Methods

### findColor

▸ `Private` **findColor**(`colorName`): [`Color`](../modules/src_types_TailwindcssPlugin.md#color)

Finds a color by themeName

**`throws`** Error(`Color ${colorName} not found`)

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `colorName` | `string` |

#### Returns

[`Color`](../modules/src_types_TailwindcssPlugin.md#color)

Color

#### Defined in

[src/lib/tailwindcssPlugin/utilities/Colors.ts:49](https://github.com/pantheon-systems/decoupled-kit-js/blob/fe58c2b6/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L49)

---

### formatGradientColors

▸ `Private` **formatGradientColors**(`colors`): `string`

**`remarks`**
to be used in the linear-gradient css function.

#### Parameters

| Name     | Type                                                                           | Description                                                                |
| :------- | :----------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| `colors` | [`GradientColors`](../modules/src_types_TailwindcssPlugin.md#gradientcolors)[] | Array of gradient colors i.e `[{ color: 'primary', position: '0%' }, ...]` |

#### Returns

`string`

A string to be used as a css gradient. Example: '#000000 50%, #ffffff 100%'

#### Defined in

[src/lib/tailwindcssPlugin/utilities/Colors.ts:71](https://github.com/pantheon-systems/decoupled-kit-js/blob/fe58c2b6/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L71)

---

### getBackgroundUtilities

▸ **getBackgroundUtilities**(): `Object`

Takes the colors from the colorList constant to
build an object with the background colors and a padding.

#### Returns

`Object`

```
{[`.has-${colorName}-background-color`]: {
  backgroundColor: 'colorValue' },
  ...
}
```

@example
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

| Name                      | Type                                        |
| :------------------------ | :------------------------------------------ |
| `.has-background`         | { `padding`: `string` = backgroundPadding } |
| `.has-background.padding` | `string`                                    |

#### Defined in

[src/lib/tailwindcssPlugin/utilities/Colors.ts:139](https://github.com/pantheon-systems/decoupled-kit-js/blob/fe58c2b6/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L139)

---

### getBorderColorUtilities

▸ **getBorderColorUtilities**(): `Object`

Takes the colors from the colorList constant to
build the borderColor utilities object

#### Returns

`Object`

```
{[`.has-${colorName}-border-color`]: {
   borderColor: 'colorValue' !important },
   ...
}
```

@example
const backgroundUtilities = getBackgroundUtilities();

```
{
 '.has-primary-background-color': {
   borderColor: '#0070f3 !important',
 },
 ...
},
```

#### Defined in

[src/lib/tailwindcssPlugin/utilities/Colors.ts:183](https://github.com/pantheon-systems/decoupled-kit-js/blob/fe58c2b6/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L183)

---

### getColor

▸ `Private` **getColor**(`color`): `string`

Checks if the color is in the theme colors list
is a tailwind default color. If not, returns a hex color.

#### Parameters

| Name    | Type                                                       | Description    |
| :------ | :--------------------------------------------------------- | :------------- |
| `color` | [`Color`](../modules/src_types_TailwindcssPlugin.md#color) | A color object |

#### Returns

`string`

string - A string with the color value

#### Defined in

[src/lib/tailwindcssPlugin/utilities/Colors.ts:36](https://github.com/pantheon-systems/decoupled-kit-js/blob/fe58c2b6/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L36)

---

### getColorUtilities

▸ **getColorUtilities**(): `Object`

Takes the colors from the colorList constant and
build an object with the following structure:

**`example`**
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

`` {[`.has-${colorName}-color`]: { color: 'colorValue' }, ... } `` - color utilities.

#### Defined in

[src/lib/tailwindcssPlugin/utilities/Colors.ts:102](https://github.com/pantheon-systems/decoupled-kit-js/blob/fe58c2b6/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L102)

---

### getGradientUtilities

▸ **getGradientUtilities**(): `Object`

Takes the gradients from the gradientList constant to
build the gradient utilities object.

**`example`**
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

`` {[`.has-${gradientName}-gradient`]: { background: linear-gradient(direction , color colorPosition, color colorPosition) }, ... } `` - gradient utilities.

#### Defined in

[src/lib/tailwindcssPlugin/utilities/Colors.ts:212](https://github.com/pantheon-systems/decoupled-kit-js/blob/fe58c2b6/packages/wordpress-kit/src/lib/tailwindcssPlugin/utilities/Colors.ts#L212)

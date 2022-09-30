---
id: "lib_tailwindcssPlugin_components_MediaAndText"
title: "Module: lib/tailwindcssPlugin/components/MediaAndText"
sidebar_label: "lib/tailwindcssPlugin/components/MediaAndText"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### mediaAndText

• `Const` **mediaAndText**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `.wp-block-media-text` | { `&.alignfull`: { `@media (min-width:720px)`: { `marginLeft`: `string` = 'calc(-1 * max(1rem, 10vw))'; `marginRight`: `string` = 'calc(-1 * max(1rem, 10vw))'; `maxWidth`: `string` = 'unset' }  } ; `&.alignwide`: { `maxWidth`: `string` = '850px' } ; `&.has-background`: { `padding`: `string` = 'unset' } ; `&.has-media-on-the-right`: { `.wp-block-media-text__content`: { `gridColumn`: `string` = '1' } ; `.wp-block-media-text__media`: { `gridColumn`: `string` = '2' } ; `gridTemplateColumns`: `string` = '1fr 50%' } ; `&.is-image-fill`: { `.wp-block-media-text__media`: { `>img`: { `border`: `string` = '0'; `clip`: `string` = 'rect(0, 0, 0, 0)'; `height`: `string` = '1px'; `margin`: `string` = '-1px'; `overflow`: `string` = 'hidden'; `padding`: `string` = '0'; `position`: `string` = 'absolute'; `width`: `string` = '1px' } ; `backgroundSize`: `string` = 'cover'; `height`: `string` = '100%'; `minHeight`: `string` = '250px' }  } ; `&.is-stacked-on-mobile`: { `@media (max-width: 600px)`: { `.wp-block-media-text__content`: { `gridColumn`: `string` = '1'; `gridRow`: `string` = '2' } ; `.wp-block-media-text__media`: { `gridColumn`: `string` = '1' } ; `gridTemplateColumns`: `string` = '100% !important' }  } ; `&.is-vertically-aligned-bottom`: { `.wp-block-media-text__content`: { `alignSelf`: `string` = 'end' }  } ; `&.is-vertically-aligned-center`: { `.wp-block-media-text__content`: { `alignSelf`: `string` = 'center' }  } ; `&.is-vertically-aligned-top`: { `.wp-block-media-text__content`: { `alignSelf`: `string` = 'start' }  } ; `.wp-block-media-text__content`: { `alignSelf`: `string` = 'center'; `gridColumn`: `string` = '2'; `gridRow`: `string` = '1'; `padding`: `string` = '0 8%'; `wordBreak`: `string` = 'break-word' } ; `.wp-block-media-text__media`: { `alignSelf`: `string` = 'center'; `gridColumn`: `string` = '1'; `gridRow`: `string` = '1'; `img`: { `height`: `string` = 'auto'; `maxWidth`: `string` = 'unset'; `width`: `string` = '100%' } ; `margin`: `string` = '0' } ; `display`: `string` = 'grid'; `gridTemplateColumns`: `string` = '50% 1fr'; `gridTemplateRows`: `string` = 'auto'; `margin`: `string` = '1rem auto'; `maxWidth`: `string` = '650px' } |
| `.wp-block-media-text.&.alignfull` | { `@media (min-width:720px)`: { `marginLeft`: `string` = 'calc(-1 * max(1rem, 10vw))'; `marginRight`: `string` = 'calc(-1 * max(1rem, 10vw))'; `maxWidth`: `string` = 'unset' }  } |
| `.wp-block-media-text.&.alignfull.@media (min-width:720px)` | { `marginLeft`: `string` = 'calc(-1 * max(1rem, 10vw))'; `marginRight`: `string` = 'calc(-1 * max(1rem, 10vw))'; `maxWidth`: `string` = 'unset' } |
| `.wp-block-media-text.&.alignfull.@media (min-width:720px).marginLeft` | `string` |
| `.wp-block-media-text.&.alignfull.@media (min-width:720px).marginRight` | `string` |
| `.wp-block-media-text.&.alignfull.@media (min-width:720px).maxWidth` | `string` |
| `.wp-block-media-text.&.alignwide` | { `maxWidth`: `string` = '850px' } |
| `.wp-block-media-text.&.alignwide.maxWidth` | `string` |
| `.wp-block-media-text.&.has-background` | { `padding`: `string` = 'unset' } |
| `.wp-block-media-text.&.has-background.padding` | `string` |
| `.wp-block-media-text.&.has-media-on-the-right` | { `.wp-block-media-text__content`: { `gridColumn`: `string` = '1' } ; `.wp-block-media-text__media`: { `gridColumn`: `string` = '2' } ; `gridTemplateColumns`: `string` = '1fr 50%' } |
| `.wp-block-media-text.&.has-media-on-the-right..wp-block-media-text__content` | { `gridColumn`: `string` = '1' } |
| `.wp-block-media-text.&.has-media-on-the-right..wp-block-media-text__content.gridColumn` | `string` |
| `.wp-block-media-text.&.has-media-on-the-right..wp-block-media-text__media` | { `gridColumn`: `string` = '2' } |
| `.wp-block-media-text.&.has-media-on-the-right..wp-block-media-text__media.gridColumn` | `string` |
| `.wp-block-media-text.&.has-media-on-the-right.gridTemplateColumns` | `string` |
| `.wp-block-media-text.&.is-image-fill` | { `.wp-block-media-text__media`: { `>img`: { `border`: `string` = '0'; `clip`: `string` = 'rect(0, 0, 0, 0)'; `height`: `string` = '1px'; `margin`: `string` = '-1px'; `overflow`: `string` = 'hidden'; `padding`: `string` = '0'; `position`: `string` = 'absolute'; `width`: `string` = '1px' } ; `backgroundSize`: `string` = 'cover'; `height`: `string` = '100%'; `minHeight`: `string` = '250px' }  } |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media` | { `>img`: { `border`: `string` = '0'; `clip`: `string` = 'rect(0, 0, 0, 0)'; `height`: `string` = '1px'; `margin`: `string` = '-1px'; `overflow`: `string` = 'hidden'; `padding`: `string` = '0'; `position`: `string` = 'absolute'; `width`: `string` = '1px' } ; `backgroundSize`: `string` = 'cover'; `height`: `string` = '100%'; `minHeight`: `string` = '250px' } |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.>img` | { `border`: `string` = '0'; `clip`: `string` = 'rect(0, 0, 0, 0)'; `height`: `string` = '1px'; `margin`: `string` = '-1px'; `overflow`: `string` = 'hidden'; `padding`: `string` = '0'; `position`: `string` = 'absolute'; `width`: `string` = '1px' } |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.>img.border` | `string` |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.>img.clip` | `string` |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.>img.height` | `string` |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.>img.margin` | `string` |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.>img.overflow` | `string` |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.>img.padding` | `string` |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.>img.position` | `string` |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.>img.width` | `string` |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.backgroundSize` | `string` |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.height` | `string` |
| `.wp-block-media-text.&.is-image-fill..wp-block-media-text__media.minHeight` | `string` |
| `.wp-block-media-text.&.is-stacked-on-mobile` | { `@media (max-width: 600px)`: { `.wp-block-media-text__content`: { `gridColumn`: `string` = '1'; `gridRow`: `string` = '2' } ; `.wp-block-media-text__media`: { `gridColumn`: `string` = '1' } ; `gridTemplateColumns`: `string` = '100% !important' }  } |
| `.wp-block-media-text.&.is-stacked-on-mobile.@media (max-width: 600px)` | { `.wp-block-media-text__content`: { `gridColumn`: `string` = '1'; `gridRow`: `string` = '2' } ; `.wp-block-media-text__media`: { `gridColumn`: `string` = '1' } ; `gridTemplateColumns`: `string` = '100% !important' } |
| `.wp-block-media-text.&.is-stacked-on-mobile.@media (max-width: 600px)..wp-block-media-text__content` | { `gridColumn`: `string` = '1'; `gridRow`: `string` = '2' } |
| `.wp-block-media-text.&.is-stacked-on-mobile.@media (max-width: 600px)..wp-block-media-text__content.gridColumn` | `string` |
| `.wp-block-media-text.&.is-stacked-on-mobile.@media (max-width: 600px)..wp-block-media-text__content.gridRow` | `string` |
| `.wp-block-media-text.&.is-stacked-on-mobile.@media (max-width: 600px)..wp-block-media-text__media` | { `gridColumn`: `string` = '1' } |
| `.wp-block-media-text.&.is-stacked-on-mobile.@media (max-width: 600px)..wp-block-media-text__media.gridColumn` | `string` |
| `.wp-block-media-text.&.is-stacked-on-mobile.@media (max-width: 600px).gridTemplateColumns` | `string` |
| `.wp-block-media-text.&.is-vertically-aligned-bottom` | { `.wp-block-media-text__content`: { `alignSelf`: `string` = 'end' }  } |
| `.wp-block-media-text.&.is-vertically-aligned-bottom..wp-block-media-text__content` | { `alignSelf`: `string` = 'end' } |
| `.wp-block-media-text.&.is-vertically-aligned-bottom..wp-block-media-text__content.alignSelf` | `string` |
| `.wp-block-media-text.&.is-vertically-aligned-center` | { `.wp-block-media-text__content`: { `alignSelf`: `string` = 'center' }  } |
| `.wp-block-media-text.&.is-vertically-aligned-center..wp-block-media-text__content` | { `alignSelf`: `string` = 'center' } |
| `.wp-block-media-text.&.is-vertically-aligned-center..wp-block-media-text__content.alignSelf` | `string` |
| `.wp-block-media-text.&.is-vertically-aligned-top` | { `.wp-block-media-text__content`: { `alignSelf`: `string` = 'start' }  } |
| `.wp-block-media-text.&.is-vertically-aligned-top..wp-block-media-text__content` | { `alignSelf`: `string` = 'start' } |
| `.wp-block-media-text.&.is-vertically-aligned-top..wp-block-media-text__content.alignSelf` | `string` |
| `.wp-block-media-text..wp-block-media-text__content` | { `alignSelf`: `string` = 'center'; `gridColumn`: `string` = '2'; `gridRow`: `string` = '1'; `padding`: `string` = '0 8%'; `wordBreak`: `string` = 'break-word' } |
| `.wp-block-media-text..wp-block-media-text__content.alignSelf` | `string` |
| `.wp-block-media-text..wp-block-media-text__content.gridColumn` | `string` |
| `.wp-block-media-text..wp-block-media-text__content.gridRow` | `string` |
| `.wp-block-media-text..wp-block-media-text__content.padding` | `string` |
| `.wp-block-media-text..wp-block-media-text__content.wordBreak` | `string` |
| `.wp-block-media-text..wp-block-media-text__media` | { `alignSelf`: `string` = 'center'; `gridColumn`: `string` = '1'; `gridRow`: `string` = '1'; `img`: { `height`: `string` = 'auto'; `maxWidth`: `string` = 'unset'; `width`: `string` = '100%' } ; `margin`: `string` = '0' } |
| `.wp-block-media-text..wp-block-media-text__media.alignSelf` | `string` |
| `.wp-block-media-text..wp-block-media-text__media.gridColumn` | `string` |
| `.wp-block-media-text..wp-block-media-text__media.gridRow` | `string` |
| `.wp-block-media-text..wp-block-media-text__media.img` | { `height`: `string` = 'auto'; `maxWidth`: `string` = 'unset'; `width`: `string` = '100%' } |
| `.wp-block-media-text..wp-block-media-text__media.img.height` | `string` |
| `.wp-block-media-text..wp-block-media-text__media.img.maxWidth` | `string` |
| `.wp-block-media-text..wp-block-media-text__media.img.width` | `string` |
| `.wp-block-media-text..wp-block-media-text__media.margin` | `string` |
| `.wp-block-media-text.display` | `string` |
| `.wp-block-media-text.gridTemplateColumns` | `string` |
| `.wp-block-media-text.gridTemplateRows` | `string` |
| `.wp-block-media-text.margin` | `string` |
| `.wp-block-media-text.maxWidth` | `string` |

#### Defined in

[packages/wordpress-kit/src/lib/tailwindcssPlugin/components/MediaAndText.ts:79](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/tailwindcssPlugin/components/MediaAndText.ts#L79)

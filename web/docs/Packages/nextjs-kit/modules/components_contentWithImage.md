---
id: "components_contentWithImage"
title: "Module: components/contentWithImage"
sidebar_label: "components/contentWithImage"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

**`See`**

[https://nextjs.org/docs/api-reference/next/image](https://nextjs.org/docs/api-reference/next/image) for more information.

**`Remarks`**

`imageProps` is an optional prop to be used if there is an image associated with the content.
If `imageProps.src` is a supplied as a prop. Alt text is not required; however,
it is strongly recommended to add alt text to all images for accessibility and SEO.
If alt text is not supplied, the title of the content will be used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `PropsWithChildren`<`ContentProps`\> | The props needed for the ContentWithImage component |
| `context?` | `any` | - |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

A component with a featured image and content passed by the user

#### Defined in

node_modules/.pnpm/@types+react@17.0.40/node_modules/@types/react/index.d.ts:550

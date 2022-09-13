---
id: "components_footer"
title: "Module: components/footer"
sidebar_label: "components/footer"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### default

▸ **default**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

This is a Footer component.

**`Example`**

```
const footerMenuItems = [
 {
  href: '/',
  title: 'Home',
 },
{
 href: '/articles',
 title: 'Articles',
 parent: 'home',
},
...
 ]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `PropsWithChildren`<`FooterMenuProps`\> | The props needed for the footer component |
| `context?` | `any` | - |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

A footer component with a nav menu

#### Defined in

node_modules/.pnpm/@types+react@17.0.40/node_modules/@types/react/index.d.ts:550

---
id: "modules"
title: "decoupled-kit-js"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Interfaces

- [ContentProps](interfaces/ContentProps.md)
- [FooterMenuProps](interfaces/FooterMenuProps.md)
- [HeaderProps](interfaces/HeaderProps.md)
- [LinkProps](interfaces/LinkProps.md)
- [PaginationProps](interfaces/PaginationProps.md)
- [PreviewRibbonProps](interfaces/PreviewRibbonProps.md)
- [RecipeProps](interfaces/RecipeProps.md)
- [SortOptions](interfaces/SortOptions.md)

## Type Aliases

### FooterMenuItem

Ƭ **FooterMenuItem**: [`LinkProps`](interfaces/LinkProps.md) & { [key in Parent]?: string \| null }

An item in a footer menu.

**`Remarks`**

This should account for Drupal and WordPress menus

#### Defined in

[packages/nextjs-kit/src/types/index.ts:39](https://github.com/pantheon-systems/decoupled-kit-js/blob/b8ccc359/packages/nextjs-kit/src/types/index.ts#L39)

___

### Parent

Ƭ **Parent**: ``"parent"`` \| ``"parentId"``

#### Defined in

[packages/nextjs-kit/src/types/index.ts:33](https://github.com/pantheon-systems/decoupled-kit-js/blob/b8ccc359/packages/nextjs-kit/src/types/index.ts#L33)

## Functions

### ContentWithImage

▸ **ContentWithImage**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

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
| `props` | `PropsWithChildren`<[`ContentProps`](interfaces/ContentProps.md)\> | The props needed for the ContentWithImage component |
| `context?` | `any` | - |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

A component with a featured image and content passed by the user

#### Defined in

node_modules/.pnpm/@types+react@17.0.40/node_modules/@types/react/index.d.ts:550

___

### Footer

▸ **Footer**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

This is a Footer component.

**`Example`**

```
const footerMenuItems = [
 {
  href: '/',
  linkText: 'Home',
 },
{
 href: '/articles',
 linkText: 'Articles',
 parent: 'home',
},
...
 ]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `PropsWithChildren`<[`FooterMenuProps`](interfaces/FooterMenuProps.md)\> | The props needed for the footer component |
| `context?` | `any` | - |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

A footer component with a nav menu

#### Defined in

node_modules/.pnpm/@types+react@17.0.40/node_modules/@types/react/index.d.ts:550

___

### Grid

▸ **Grid**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children?` | `Element`[] |
| `__namedParameters.cols?` | `number` |

#### Returns

`Element`

A style and positioning helper grid component that can be used with the withGrid HOC component

#### Defined in

[packages/nextjs-kit/src/components/grid.tsx:10](https://github.com/pantheon-systems/decoupled-kit-js/blob/b8ccc359/packages/nextjs-kit/src/components/grid.tsx#L10)

___

### Header

▸ **Header**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

This is a Header component.

**`Example`**

```
const navItems = [
{
  linkText: 'Home',
  href: '/',
},
{
  linkText: 'Posts',
  href: '/posts',
},
...
 ]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `PropsWithChildren`<[`HeaderProps`](interfaces/HeaderProps.md)\> | The props needed for the header component |
| `context?` | `any` | - |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

A header component with a nav menu

#### Defined in

node_modules/.pnpm/@types+react@17.0.40/node_modules/@types/react/index.d.ts:550

___

### Paginator

▸ **Paginator**<`Type`\>(`props`): `Element`

**`See`**

[https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/starters/next-drupal-starter/pages/examples/pagination/[[...page]].js](https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/starters/next-drupal-starter/pages/examples/pagination/[[...page]].js) for a full example implementation

**`Example`**

```
<Paginator
  data={data}
  itemsPerPage={itemsPerPage}
  breakpoints={{ start: 6, end: 12, add: 6 }}
  routing
  Component={MyComponent}
/>
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`PaginationProps`](interfaces/PaginationProps.md)<`Type`\> | The props needed for the paginator component |

#### Returns

`Element`

Component with data rendered by the passed in Component and page buttons

#### Defined in

[packages/nextjs-kit/src/components/paginator.tsx:82](https://github.com/pantheon-systems/decoupled-kit-js/blob/b8ccc359/packages/nextjs-kit/src/components/paginator.tsx#L82)

___

### PreviewRibbon

▸ **PreviewRibbon**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<[`PreviewRibbonProps`](interfaces/PreviewRibbonProps.md)\> |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/.pnpm/@types+react@17.0.40/node_modules/@types/react/index.d.ts:550

___

### Recipe

▸ **Recipe**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

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
| `props` | `PropsWithChildren`<[`RecipeProps`](interfaces/RecipeProps.md)\> | The props needed for the Recipe component |
| `context?` | `any` | - |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

A recipe component with content and an optional image passed by the user

#### Defined in

node_modules/.pnpm/@types+react@17.0.40/node_modules/@types/react/index.d.ts:550

___

### sortChar

▸ **sortChar**(`sortObj`): `Record`<`string`, `string` \| `number`\>[]

Sorts any character object on a specific key in a direction of the users choice.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sortObj` | [`SortOptions`](interfaces/SortOptions.md) |

#### Returns

`Record`<`string`, `string` \| `number`\>[]

An array of data sorted by the given key and direction

#### Defined in

[packages/nextjs-kit/src/lib/sortChar.ts:12](https://github.com/pantheon-systems/decoupled-kit-js/blob/b8ccc359/packages/nextjs-kit/src/lib/sortChar.ts#L12)

___

### sortDate

▸ **sortDate**(`sortObj`): `Record`<`string`, `string` \| `number`\>[]

Sorts any date field of an object on a specific key in a direction of the users choice.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sortObj` | [`SortOptions`](interfaces/SortOptions.md) |

#### Returns

`Record`<`string`, `string` \| `number`\>[]

An array of data sorted by the given key and direction

#### Defined in

[packages/nextjs-kit/src/lib/sortDate.ts:11](https://github.com/pantheon-systems/decoupled-kit-js/blob/b8ccc359/packages/nextjs-kit/src/lib/sortDate.ts#L11)

___

### withGrid

▸ **withGrid**(`Component`): <Type\>(`__namedParameters`: { `FallbackComponent?`: `ElementType`<`any`\> ; `cols?`: `number` ; `data?`: `Type`[]  }) => `Element`

**`Remarks`**

The Component used must accept the data to be displayed as `content` to function properly

**`Example`**

```
const ArticleCard= ({ content }) => {
	return (
		<div>
			<h2>{content.title}</h2>
			<div>{content.excerpt}</div>
		</div>
	)
}
```

**`Example`**

```
const MyPage = ({ myArticles }) => {
 const ArticleGrid = withGrid(ArticleCard)
	 return (
		 <>
			 <ArticleGrid
				 data={myArticles}
				 cols={4}
				 FallbackComponent={<span>No Data Found</span>}
			 />
		 </>
	 )
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Component` | `ElementType`<`any`\> | A component that takes in content that is to be displayed on the grid |

#### Returns

`fn`

A Higher Order Component that returns the data mapped to the Component in a grid

▸ <`Type`\>(`__namedParameters`): `Element`

**`Default`**

3

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `object` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.FallbackComponent?` | `ElementType`<`any`\> |
| `__namedParameters.cols?` | `number` |
| `__namedParameters.data?` | `Type`[] |

##### Returns

`Element`

The component passed to withGrid in a grid with the given number of columns

#### Defined in

[packages/nextjs-kit/src/components/grid.tsx:61](https://github.com/pantheon-systems/decoupled-kit-js/blob/b8ccc359/packages/nextjs-kit/src/components/grid.tsx#L61)

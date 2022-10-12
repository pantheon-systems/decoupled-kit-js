---
id: "components_grid"
title: "Module: components/grid"
sidebar_label: "components/grid"
sidebar_position: 0
custom_edit_url: null
---

## Functions

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

[packages/nextjs-kit/src/components/grid.tsx:10](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/nextjs-kit/src/components/grid.tsx#L10)

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

[packages/nextjs-kit/src/components/grid.tsx:61](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/nextjs-kit/src/components/grid.tsx#L61)

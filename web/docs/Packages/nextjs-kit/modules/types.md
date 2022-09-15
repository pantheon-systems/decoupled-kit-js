---
id: 'types'
title: 'Module: types'
sidebar_label: 'types'
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [LinkProps](../interfaces/types.LinkProps.md)
- [SortOptions](../interfaces/types.SortOptions.md)

## Type Aliases

### FooterMenuItem

Ƭ **FooterMenuItem**: [`LinkProps`](../interfaces/types.LinkProps.md) & { [key
in Parent]?: string \| null }

An item in a footer menu.

**`Remarks`**

This should account for Drupal and WordPress menus

#### Defined in

[packages/nextjs-kit/src/types/index.ts:39](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/nextjs-kit/src/types/index.ts#L39)

## Functions

### hasParent

▸ **hasParent**(`item`): item is FooterMenuItem

Type predicate to determine if a FooterMenuItem has a parent or parentId

#### Parameters

| Name   | Type                                        | Description        |
| :----- | :------------------------------------------ | :----------------- |
| `item` | [`FooterMenuItem`](types.md#footermenuitem) | a `FooterMenuItem` |

#### Returns

item is FooterMenuItem

true if `parentId` or `parent` properties are found on the `FooterMenuItem`

#### Defined in

[packages/nextjs-kit/src/types/index.ts:48](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/nextjs-kit/src/types/index.ts#L48)

---

### isHTMLElement

▸ **isHTMLElement**(`element`): element is HTMLElement

Type predicate to determine if an item is a number

#### Parameters

| Name      | Type      | Description              |
| :-------- | :-------- | :----------------------- |
| `element` | `unknown` | some type of HTMLElement |

#### Returns

element is HTMLElement

true if the element is an HTMLElement

#### Defined in

[packages/nextjs-kit/src/types/index.ts:64](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/nextjs-kit/src/types/index.ts#L64)

---

### isNumber

▸ **isNumber**(`item`): item is number

Type predicate to determine if an item is a number

#### Parameters

| Name   | Type                              | Description |
| :----- | :-------------------------------- | :---------- |
| `item` | `undefined` \| `null` \| `number` | an item     |

#### Returns

item is number

true if the item is a number

#### Defined in

[packages/nextjs-kit/src/types/index.ts:56](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/nextjs-kit/src/types/index.ts#L56)

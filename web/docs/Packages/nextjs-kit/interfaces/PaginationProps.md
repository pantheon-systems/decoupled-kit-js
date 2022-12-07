---
id: "PaginationProps"
title: "Interface: PaginationProps<Type>"
sidebar_label: "PaginationProps"
sidebar_position: 0
custom_edit_url: null
---

Options type for [Paginator](../modules.md#paginator)

## Type parameters

| Name | Description |
| :------ | :------ |
| `Type` | type to use for the data passed in to be paginated |

## Properties

### Component

• **Component**: `ElementType`<`any`\>

The React component to render for each datum

#### Defined in

[packages/nextjs-kit/src/components/paginator.tsx:39](https://github.com/pantheon-systems/decoupled-kit-js/blob/3cc8708/packages/nextjs-kit/src/components/paginator.tsx#L39)

___

### breakpoints

• **breakpoints**: `Object`

* start: where to start the breakpoint

end: where to end the breakpoint

add: how many buttons to add when the breakpoint is clicked

(`add` * x) + `start` = `end` where x is a number of clicks it takes to fill in all of the buttons
For example: If there are 25 buttons and the start = 5 and end = 25, then add should be 5 or 10.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `add` | `number` |
| `end` | `number` |
| `start` | `number` |

#### Defined in

[packages/nextjs-kit/src/components/paginator.tsx:27](https://github.com/pantheon-systems/decoupled-kit-js/blob/3cc8708/packages/nextjs-kit/src/components/paginator.tsx#L27)

___

### data

• **data**: `Type`[]

The type of data to paginate

#### Defined in

[packages/nextjs-kit/src/components/paginator.tsx:12](https://github.com/pantheon-systems/decoupled-kit-js/blob/3cc8708/packages/nextjs-kit/src/components/paginator.tsx#L12)

___

### itemsPerPage

• **itemsPerPage**: `number`

Number of items per page

#### Defined in

[packages/nextjs-kit/src/components/paginator.tsx:16](https://github.com/pantheon-systems/decoupled-kit-js/blob/3cc8708/packages/nextjs-kit/src/components/paginator.tsx#L16)

___

### routing

• **routing**: `boolean`

If true, uses Next.js shallow routing [https://nextjs.org/docs/routing/shallow-routing](https://nextjs.org/docs/routing/shallow-routing)

#### Defined in

[packages/nextjs-kit/src/components/paginator.tsx:35](https://github.com/pantheon-systems/decoupled-kit-js/blob/3cc8708/packages/nextjs-kit/src/components/paginator.tsx#L35)

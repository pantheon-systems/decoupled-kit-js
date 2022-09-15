---
id: 'components_paginator'
title: 'Module: components/paginator'
sidebar_label: 'components/paginator'
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [PaginationProps](../interfaces/components_paginator.PaginationProps.md)

## Functions

### default

▸ **default**<`Type`\>(`props`): `Element`

**`Remarks`**

start: where to start the breakpoint

end: where to end the breakpoint

add: how many buttons to add when the breakpoint is clicked

(`add` \* x) + `start` = `end` where x is a number of clicks it takes to fill in
all of the buttons For example: If there are 25 buttons and the start = 5 and
end = 25, then add should be 5 or 10.

**`See`**

[https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/starters/next-drupal-starter/pages/examples/pagination/[[...page]].js](https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/starters/next-drupal-starter/pages/examples/pagination/[[...page]].js)
for an example implementation

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

| Name   | Type             |
| :----- | :--------------- |
| `Type` | extends `object` |

#### Parameters

| Name    | Type                                                                                | Description                                  |
| :------ | :---------------------------------------------------------------------------------- | :------------------------------------------- |
| `props` | [`PaginationProps`](../interfaces/components_paginator.PaginationProps.md)<`Type`\> | The props needed for the paginator component |

#### Returns

`Element`

Component with data rendered by the passed in Component and page buttons

#### Defined in

[packages/nextjs-kit/src/components/paginator.tsx:48](https://github.com/CobyPear/decoupled-kit-js/blob/1d4dd35e/packages/nextjs-kit/src/components/paginator.tsx#L48)

---
id: "GraphqlClientFactory"
title: "Class: GraphqlClientFactory"
sidebar_label: "GraphqlClientFactory"
sidebar_position: 0
custom_edit_url: null
---

Creates instances of `graphql-request` GraphQLClient with the given options

**`Params`**

endpoint - A WordPress GraphQL endpoint

**`Params`**

options - A RequestInit object. PatchedRequestInit

## Constructors

### constructor

• **new GraphqlClientFactory**(`endpoint`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options` | `PatchedRequestInit` |

#### Defined in

[packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts:18](https://github.com/pantheon-systems/decoupled-kit-js/blob/3cc8708/packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts#L18)

## Properties

### endpoint

• **endpoint**: `string`

A WordPress GraphQL endpoint

#### Defined in

[packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts:12](https://github.com/pantheon-systems/decoupled-kit-js/blob/3cc8708/packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts#L12)

___

### options

• **options**: `PatchedRequestInit`

PatchedRequestInit

#### Defined in

[packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts:16](https://github.com/pantheon-systems/decoupled-kit-js/blob/3cc8708/packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts#L16)

## Methods

### create

▸ **create**(): `GraphQLClient`

Creates an instance of `graphql-request` GraphQLClient based on the endpoint and options

#### Returns

`GraphQLClient`

#### Defined in

[packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts:31](https://github.com/pantheon-systems/decoupled-kit-js/blob/3cc8708/packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts#L31)

---
id: 'GraphqlClientFactory'
title: 'Class: GraphqlClientFactory'
sidebar_label: 'GraphqlClientFactory'
sidebar_position: 0
custom_edit_url: null
---

Creates instances of `graphql-request` GraphQLClient with the given options.

**`Params`**

endpoint - A WordPress GraphQL endpoint.

**`Params`**

options - A RequestConfig object.

## Constructors

### constructor

• **new GraphqlClientFactory**(`endpoint`, `options`)

#### Parameters

| Name       | Type            |
| :--------- | :-------------- |
| `endpoint` | `string`        |
| `options`  | `RequestConfig` |

#### Defined in

[packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts:18](https://github.com/pantheon-systems/decoupled-kit-js/blob/4c02f3b62/packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts#L18)

## Properties

### endpoint

• **endpoint**: `string`

A WordPress GraphQL endpoint

#### Defined in

[packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts:12](https://github.com/pantheon-systems/decoupled-kit-js/blob/4c02f3b62/packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts#L12)

---

### options

• **options**: `RequestConfig`

RequestOptions

#### Defined in

[packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts:16](https://github.com/pantheon-systems/decoupled-kit-js/blob/4c02f3b62/packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts#L16)

## Methods

### create

▸ **create**(): `GraphQLClient`

Creates an instance of `graphql-request` GraphQLClient based on the endpoint and
options

#### Returns

`GraphQLClient`

#### Defined in

[packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts:34](https://github.com/pantheon-systems/decoupled-kit-js/blob/4c02f3b62/packages/wordpress-kit/src/lib/graphqlClient/GraphqlClientFactory.ts#L34)

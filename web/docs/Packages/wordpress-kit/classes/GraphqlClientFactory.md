---
id: 'GraphQLClientFactory'
title: 'Class: GraphQLClientFactory'
sidebar_label: 'GraphQLClientFactory'
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

• **new GraphQLClientFactory**(`endpoint`, `options?`)

#### Parameters

| Name       | Type            |
| :--------- | :-------------- |
| `endpoint` | `string`        |
| `options?` | `RequestConfig` |

#### Defined in

[packages/wordpress-kit/src/lib/GraphQLClientFactory.ts:18](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/wordpress-kit/src/lib/GraphQLClientFactory.ts#L18)

## Properties

### endpoint

• **endpoint**: `string`

A WordPress GraphQL endpoint

#### Defined in

[packages/wordpress-kit/src/lib/GraphQLClientFactory.ts:12](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/wordpress-kit/src/lib/GraphQLClientFactory.ts#L12)

---

### options

• **options**: `RequestConfig`

RequestOptions

#### Defined in

[packages/wordpress-kit/src/lib/GraphQLClientFactory.ts:16](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/wordpress-kit/src/lib/GraphQLClientFactory.ts#L16)

## Methods

### create

▸ **create**(): `GraphQLClient`

Creates an instance of `graphql-request` GraphQLClient based on the endpoint and
options

#### Returns

`GraphQLClient`

#### Defined in

[packages/wordpress-kit/src/lib/GraphQLClientFactory.ts:34](https://github.com/pantheon-systems/decoupled-kit-js/blob/5049fc03/packages/wordpress-kit/src/lib/GraphQLClientFactory.ts#L34)

---
id: "lib_GraphqlClientFactory.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
---

[lib/GraphqlClientFactory](../modules/lib_GraphqlClientFactory.md).default

Creates instances of `graphql-request` GraphQLClient with the given options

**`Params`**

endpoint - A WordPress GraphQL endpoint

**`Params`**

options - A RequestInit object. PatchedRequestInit

## Constructors

### constructor

• **new default**(`endpoint`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options` | `PatchedRequestInit` |

#### Defined in

[packages/wordpress-kit/src/lib/GraphqlClientFactory.ts:19](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/GraphqlClientFactory.ts#L19)

## Properties

### endpoint

• **endpoint**: `string`

A WordPress GraphQL endpoint

#### Defined in

[packages/wordpress-kit/src/lib/GraphqlClientFactory.ts:13](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/GraphqlClientFactory.ts#L13)

___

### options

• **options**: `PatchedRequestInit`

PatchedRequestInit

#### Defined in

[packages/wordpress-kit/src/lib/GraphqlClientFactory.ts:17](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/GraphqlClientFactory.ts#L17)

## Methods

### create

▸ **create**(): `GraphQLClient`

Creates an instance of `graphql-request` GraphQLClient based on the endpoint and options

#### Returns

`GraphQLClient`

#### Defined in

[packages/wordpress-kit/src/lib/GraphqlClientFactory.ts:27](https://github.com/pantheon-systems/decoupled-kit-js/blob/e10f27e/packages/wordpress-kit/src/lib/GraphqlClientFactory.ts#L27)

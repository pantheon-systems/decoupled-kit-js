---
id: "src_lib_ApolloClientFactory.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
---

[src/lib/ApolloClientFactory](../modules/src_lib_ApolloClientFactory.md).default

## Constructors

### constructor

• **new default**(`uri`, `cache?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `cache?` | `InMemoryCache` |

#### Defined in

[src/lib/ApolloClientFactory.ts:15](https://github.com/CobyPear/decoupled-kit-js/blob/7a7ddb2d/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L15)

## Properties

### cache

• **cache**: `InMemoryCache`

#### Defined in

[src/lib/ApolloClientFactory.ts:13](https://github.com/CobyPear/decoupled-kit-js/blob/7a7ddb2d/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L13)

___

### link

• **link**: `HttpLink`

#### Defined in

[src/lib/ApolloClientFactory.ts:12](https://github.com/CobyPear/decoupled-kit-js/blob/7a7ddb2d/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L12)

## Methods

### create

▸ **create**(): `ApolloClient`<`NormalizedCacheObject`\>

Creates an instance of ApolloClient using the specified uri and cache.

#### Returns

`ApolloClient`<`NormalizedCacheObject`\>

#### Defined in

[src/lib/ApolloClientFactory.ts:26](https://github.com/CobyPear/decoupled-kit-js/blob/7a7ddb2d/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L26)

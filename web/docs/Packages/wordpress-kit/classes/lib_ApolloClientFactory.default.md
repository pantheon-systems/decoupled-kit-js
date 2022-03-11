---
id: "lib_ApolloClientFactory.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
---

[lib/ApolloClientFactory](../modules/lib_ApolloClientFactory.md).default

## Constructors

### constructor

• **new default**(`uri`, `cache?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `cache?` | `InMemoryCache` |

#### Defined in

[ApolloClientFactory.ts:15](https://github.com/pantheon-systems/sdk-docs-poc/blob/7e32f05/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L15)

## Properties

### cache

• **cache**: `InMemoryCache`

#### Defined in

[ApolloClientFactory.ts:13](https://github.com/pantheon-systems/sdk-docs-poc/blob/7e32f05/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L13)

___

### link

• **link**: `HttpLink`

#### Defined in

[ApolloClientFactory.ts:12](https://github.com/pantheon-systems/sdk-docs-poc/blob/7e32f05/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L12)

## Methods

### create

▸ **create**(): `ApolloClient`<`NormalizedCacheObject`\>

Creates an instance of ApolloClient using the specified uri and cache.

#### Returns

`ApolloClient`<`NormalizedCacheObject`\>

#### Defined in

[ApolloClientFactory.ts:26](https://github.com/pantheon-systems/sdk-docs-poc/blob/7e32f05/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L26)

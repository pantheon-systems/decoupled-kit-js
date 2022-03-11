---
id: "pantheon_systems_wordpress_kit.ApolloClientFactory"
title: "Class: ApolloClientFactory"
sidebar_label: "@pantheon-systems/wordpress-kit.ApolloClientFactory"
custom_edit_url: null
---

[@pantheon-systems/wordpress-kit](../modules/pantheon_systems_wordpress_kit.md).ApolloClientFactory

## Constructors

### constructor

• **new ApolloClientFactory**(`uri`, `cache?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `cache?` | `InMemoryCache` |

#### Defined in

[packages/wordpress-kit/src/lib/ApolloClientFactory.ts:15](https://github.com/CobyPear/decoupled-kit-js/blob/8d34568/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L15)

## Properties

### cache

• **cache**: `InMemoryCache`

#### Defined in

[packages/wordpress-kit/src/lib/ApolloClientFactory.ts:13](https://github.com/CobyPear/decoupled-kit-js/blob/8d34568/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L13)

___

### link

• **link**: `HttpLink`

#### Defined in

[packages/wordpress-kit/src/lib/ApolloClientFactory.ts:12](https://github.com/CobyPear/decoupled-kit-js/blob/8d34568/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L12)

## Methods

### create

▸ **create**(): `ApolloClient`<`NormalizedCacheObject`\>

Creates an instance of ApolloClient using the specified uri and cache.

#### Returns

`ApolloClient`<`NormalizedCacheObject`\>

#### Defined in

[packages/wordpress-kit/src/lib/ApolloClientFactory.ts:26](https://github.com/CobyPear/decoupled-kit-js/blob/8d34568/packages/wordpress-kit/src/lib/ApolloClientFactory.ts#L26)

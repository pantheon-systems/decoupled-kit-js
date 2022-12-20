---
id: 'next-wordpress-cache-control-headers'
title: 'Setting Cache-Control Headers'
slug: '/frontend-starters/nextjs/nextjs-wordpress/setting-cache-control-headers'
sidebar_position: 4
---

## Before You Begin

This guide explains the how to set Cache-Control headers using
`@pantheon-systems/wordpress-kit` in the `next-wordpress-starter`, or any
Next.js application using the `wordpress-kit`.

## Setting Cache-Control Headers with WordPress Kit

The `@pantheon-systems/wordpress-kit` npm package exports a function,
`setEdgeHeaders`, which takes in a response object and a cache-control header
value. The value is then set to the response object's headers so that when the
request is sent along it will be cached at the edge.

The default cache-control header is the following:

```http
Cache-Control: public, s-maxage=10, stale-while-revalidate=600
```

To override the default, you may pass in your own cache-control header:

```jsx title=pages/example/index.js
import { setEdgeHeaders } from '@pantheon-systems/wordpress-kit';

export default function MyPage(props) {
	// Page component here...
}

export async function getServerSideProps(context) {
	// the response object from the server context
	const { res } = context;

	// setEdgeHeaders accepts an optional string which is a cache-control header
	const myCacheControlHeader = 'public, max-age=604800, must-revalidate';

	// Call setEdgeHeaders with the res object and your desired cache-control header
	setEdgeHeaders({ res, cacheControl: myCacheControlHeader });

	// Fetch data and return props...
}
```

## In Production

Depending on where you deploy, these headers may or may not be respected with
regards to caching at the edge. See your platform's documentation to verify.

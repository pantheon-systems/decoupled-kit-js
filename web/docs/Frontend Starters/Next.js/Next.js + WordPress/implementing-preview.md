---
id: 'next-wordpress-preview'
title: 'Implementing Decoupled Preview'
slug: '/frontend-starters/nextjs/nextjs-wordpress/implementing-preview'
sidebar_position: 2
---

## Before You Begin

Make sure a `PREVIEW_SECRET` and valid credentials are properly configured on
your WordPress instance. To do so, follow these instructions:

1. Log in to your WordPress instance.
1. Navigate to **Users**
1. Create a new user or use an existing one. This username is your
   `WP_APPLICATION_USERNAME`

   :::info This user must have at least the `Editor` role.

   This is necessary in order for this user to be able to access revisions and
   private posts.

   :::

1. Hover over the username and click **Edit** to bring up the user's profile
   page.
1. Scroll down to the Application Passwords section and name your application
   password.
1. Your new `WP_APPLICATION_PASSWORD` will be shown on screen. Copy this value
   somewhere safe.
1. We now have a client that can use our preview site. To configure the preview
   site, navigate to **Settings** > **Preview Sites** and click the **ADD
   PREVIEW SITE** button. Note: You will need the Pantheon Decoupled WordPress
   Preview Plugin installed and activated on your instance.
1. Set the URL to point to http(s)://{YOUR_SITE_URL}/api/preview replacing
   `{YOUR_SITE_URL}` with the URL of your frontend site, or `localhost:3000` for
   testing preview locally.
1. Set a secret for the Preview Site and note this value down as your
   `PREVIEW_SECRET`.

Now you have all of the credentials needed to make authenticated requests to the
WordPress instance, including the ability to preview content!

See [Setting Environment Variables](./setting-environment-variables.md) for more
information on how to set these variables in your local development environment
or on the Pantheon Dashboard.

## Fetching Preview Content

Now that we are set up, the `wordpress-kit` GraphQL Client can make
authenticated requests. Below is a snippet that exports a function that gets
private posts.

```js
const client = new GraphqlClientFactory(process.env.backendUrl).create();

// Encodes the WordPress credentials in a useable format for the auth header
const getAuthCredentials = () => {
	const credentials = `${process.env.WP_APPLICATION_USERNAME}:${process.env.WP_APPLICATION_PASSWORD}`;
	const encodedCredentials = Buffer.from(credentials, 'binary').toString(
		'base64',
	);
	return encodedCredentials;
};

// Gets a private post revision
export async function getPostPreview(id) {
	const credentials = getAuthCredentials();
	client.setHeaders({ Authorization: `Basic ${credentials}` });

	const query = gql`
		query PostPreviewQuery($id: ID!) {
			post(id: $id, idType: DATABASE_ID, asPreview: true) {
				title
				date
				featuredImage {
					node {
						altText
						sourceUrl
					}
				}
				content
			}
		}
	`;

	const { post } = await client.request(query, { id });

	return { post };
}
```

To use `getPostPreview` in a Next.js page:

```js
// import the helper function
import { getPostPreview } from '../lib/getPostPreview';

// Your Next.js page component here

export async function getServerSideProps(context) {
	if (context.previewData) {
		const id = context.previewData.key;
		// using the previewData, we have the id of the unpublished post
		const { post } = getPostPreview(id);

		return {
			props: { post },
		};
	}
	// ...
}
```

See the
[posts page from the next-wordpress-starter](https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/starters/next-wordpress-starter/pages/posts/%5B...slug%5D.jsx#L44)
for a full example.

## Clearing Current Preview

If you'd like to view another revision or edit, you may need to clear the
current previewData cookie. This can be done by going to
{YOUR_SITE_URL}/api/clear-preview. On successful clear, you will be redirected
to the homepage.

Our `nextjs-kit` includes a preview ribbon component that can be implemented to
show a ribbon at the top of the screen when preview mode is true.

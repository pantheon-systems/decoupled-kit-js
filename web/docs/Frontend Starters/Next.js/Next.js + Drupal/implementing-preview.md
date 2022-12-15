---
id: 'next-drupal-preview'
title: 'Implementing Decoupled Preview'
slug: '/frontend-starters/nextjs/nextjs-drupal/implementing-preview'
sidebar_position: 2
---

## Before You Begin

Make sure a preview site and client secret is properly configured on your Drupal
instance.

1. Log in to your Drupal instance.
1. Navigate to **Configuration** > **SimpleOAuth** > **Clients**
1. Create a new consumer or use the default. Copy the UUID of the consumer you
   would like to use.
1. Click **Edit** on the consumer you are using and add a new secret. Note this
   value down as well.
1. We now have a client that can use our preview site. To configure the preview
   site, navigate to **Structure** > **Preview Sites**
1. Set the URL to point to http(s)://{YOUR_SITE_URL}/api/preview replacing
   `{YOUR_SITE_URL}` with the URL of your frontend site, or `localhost:3000` for
   testing preview locally.
1. Set a secret for the Preview Site and note this value down.

Now you have all of the credentials needed to make authenticated requests to the
Drupal instance, including the ability to preview content!

See [Setting Environment Variables](./setting-environment-variables.md) for more
information on how to set these variables in your local development environment
or on the Pantheon Dashboard.

## Using `getPreview`

Now that we are set up, we can implement the `getPreview` helper, which can be
found in the `lib` directory of the `next-drupal-starter`. This helper takes in
two arguments, the current server context as well as the name of the node to be
previewed.

```js
// Import some helpers
import { getPreview } from '../../lib/get-preview';
import { isMultiLanguage } from '../../lib/isMultiLanguage';
import {
	getCurrentLocaleStore,
	globalDrupalStateStores,
} from '../../lib/stores';

// your React component here

export async function getStaticProps(context) {
	// Returns a boolean if the site is multilingual
	const multilanguage = isMultilanguage(context.locales);
	// Sets our current language. If preview, use the previewLang,
	// otherwise use the current locale.
	const lang = context.preview
		? context.previewData.previewLang
		: context.locale;
	// set the store based on the language
	const store = getCurrentLocaleStore(lang, globalDrupalStateStores);
	// gets preview data from the Drupal instance, or in the case of a revision,
	// sets the proper jsonapi param to fetch the revision from Drupal.
	context.preview && getPreview(context, 'node--article');

	// this variable will depend on your route
	const slug = `/articles/${context.params.slug[0]}`;
	// Now we can use the store to get the data we need to render our component
	const article = await store.getObjectByPath('node--article', {
		path: `${multiLanguage ? lang : ''}${slug}`,
	});

	// From here, you can do anything else needed before
	// returning the data to the component.

	return {
		props: { article },
		revalidate: 60,
	};
}
```

See the
[articles page from the next-drupal-starter](https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/starters/next-drupal-starter/pages/articles/[...slug].js#L64)
for a full example on using the `getPreview` helper.

## Clearing Current Preview

If you'd like to view another revision or edit, you may need to clear the
current previewData cookie. This can be done by going to
{YOUR_SITE_URL}/api/clear-preview. On successful clear, you will be redirected
to the homepage.

## Limitations

Content that is saved as a draft can not be previewed. Currently, preview
content must be published or a published revision.

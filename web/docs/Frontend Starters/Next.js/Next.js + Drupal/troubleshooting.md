---
id: 'next-drupal-troubleshooting'
title: 'Troubleshooting' 
sidebar_position: 5
slug: '/Frontend Starters/Next.js/Next.js + Drupal/Troubleshooting Local Development'
---

## Before You Begin

This document is meant to aid when troubleshooting common issues that arise when using the `@pantheon-systems/next-drupal-starter`. For additional troubleshooting information related to the Pantheon platform, see [Pantheon Front-End Sites Frequently Asked Questions](https://pantheon.io/docs/guides/decoupled-sites/faq/).


## Images Are Not Working

Local Development:
1. Check that the `IMAGE_DOMAIN` environment variable is set in the `.env.development.local` file.
1. Ensure the `IMAGE_DOMAIN` environment only contains the hostname. For example:
    ```.env
      IMAGE_DOMAIN=example.com
    ```
1. Ensure that you are using the `next/image` component and that you set the src by constructing the `IMAGE_DOMAIN` and the image source. For example:
    ```jsx
    // in the starter kit, the IMAGE_URL is available
    // as a constant which is exported from lib/constants.js
    import { IMAGE_URL } from '../../lib/constants';

    import Image from 'next/image';

    const MyPage = (props) => {
      // ensure the sourceUrl is a relative path, not an absolute URL
      // because we will append this to the IMAGE_URL
      const sourceUrl = props.url;
      const altText = props.alt;
      return (
        <>
          <Image
            src={IMAGE_URL + sourceUrl}
            alt={altText}
            // remaining Image props...
          />
        </>
      );
    };

    ```
See [The docs on the `next/image` component for more information](https://nextjs.org/docs/api-reference/next/image#src).

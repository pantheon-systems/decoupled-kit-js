---
id: "next-drupal-customization"
title: "Your First Next Drupal Customization"
slug: "/Frontend Starters/Next Drupal/Your First Drupal Customization"
---

## Before You Begin

This guide assumes the reader has working knowledge of [React](https://reactjs.org/), and little to no knowledge of [Next.js](https://nextjs.org/).

## Data Fetching in Next.js

Next.js offers various ways to fetch data and render content. Please see the Next.js [Data Fetching Overview](https://nextjs.org/docs/basic-features/data-fetching/overview) for an in depth look at each.
For the purposes of this guide, we will cover creating a page with SSR and SSG.

:::info
If you're not sure when to use SSR vs SSG, check out these articles: [When Should I Use `getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#when-should-i-use-getserversideprops) and [When Should I Use `getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props#when-should-i-use-getstaticprops)
:::

### Fetching Drupal Content with DrupalState

The `next-drupal-starter` has a dependency on `@pantheon-systems/drupal-kit`, which implements [Drupal State](https://project.pages.drupalcode.org/drupal_state/en/introduction/) - a tool that helps fetch and store data from Drupal into the local app state.
With Pantheon's powerful infrastructure, we can choose to render pages server side or statically on a per-page basis.

### SSR Example

To render a page with Server Side Rendering (SSR) in Next.js, export an async function called [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) from that page. Inside of this function, we can use Drupal State to fetch data from Drupal and pass it to the component as props.

```jsx title=pages/articles/index.js
import { DrupalState } from "@pantheon-systems/drupal-kit";

export default function Articles({ articles }) {
  return <pre>{JSON.stringify(articles, null, 4)}</pre>;
}

export async function getServerSideProps(context) {
  const { locale } = context; // use the current locale in order to fetch correct translation

  const store = new DrupalState({
    apiBase: process.env.BACKEND_URL,
    defaultLocale: locale,
  });

  const articles = await store.getObject({
    objectName: "node--article",
    // Drupal State allows us to use a graphql query to get the data we need and nothing extra
    query: `
      {
        title
        body
        created
        path {
          alias
        }
      }
    `,
  });

  return {
    props: {
      articles,
    },
  };
}
```

### SSG Example

If we want to use SSG, use [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) to generate these pages at _build_ time instead of _request_ time.

Let's build a page using `getStaticProps` that lists recipes from our Drupal instance.

```jsx title=pages/recipes/index.js
import { DrupalState } from "@pantheon-systems/drupal-kit";

export default function Recipes({ recipes }) {
  return <pre>{JSON.stringify(recipes, null, 4)}</pre>;
}

export async function getStaticProps(context) {
  const { locale } = context; // use the current locale in order to fetch correct translation

  const store = new DrupalState({
    apiBase: process.env.BACKEND_URL,
    defaultLocale: locale,
  });

  const recipes = await store.getObject({
    objectName: "node--recipe",
    query: `
      {
        title
        field_ingredients
        field_number_of_servings
        field_preperation_time
        field_recipe_instruction
        field_summary
        created
        path {
          alias
        }
      }
    `,
  });

  return {
    props: {
      recipes,
    },
  };
}
```

Notice the only real difference for this page - besides the fact we are fetching recipes instead of articles - is the use of `getStaticProps` instead of `getServerSideProps`.

## Next Steps

From this point, you may want to style the `Articles` and `Recipes` components, or move on to another custom page.

## Conclusion

In this guide we created a new page using SSR and SSG utilizing Drupal State to fetch data from our Drupal instance.

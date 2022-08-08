import { DrupalClient } from "next-drupal"

import { isMultiLanguage } from "../../../../lib/isMultiLanguage.js";

import Layout from "../../../../components/layout";
import PageHeader from "../../../../components/page-header.js";
import Link from "next/link";

export default function LandingSSRExample({
  menues,
  articles,
  multiLanguage,
}) {
  return (
    
    <Layout footerMenu={menues}>
      <PageHeader title="Drupalcon Prague 2022" />
      <div className="mt-12 mx-auto max-w-[50vw]">

      <ul><strong>Pages:</strong>
          {articles ? (
            articles?.map((node) => (
              <li className="prose justify-items-start" key={node.id}>
                <h2>{node.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: node.body?.summary }} />
                <Link
                  passHref
                  href={`${
                    multiLanguage ? `/${node.path?.langcode || locale}` : ""
                  }${node.path.alias.includes("/articles") ? "" : "/articles"}${
                    node.path.alias
                  }`}
                >
                  <a className="font-normal underline">Read more →</a>
                </Link>
              </li>
            ))
          ) : (
            <h2 className="text-xl text-center mt-14">No pages found 🏜</h2>
          )}
        </ul>
        </div>

    </Layout>
  )
}

export async function getServerSideProps(context) {
  const origin = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const { locales, locale } = context;
  // if there is more than one language in context.locales,
  // assume multilanguage is enabled.
  const multiLanguage = isMultiLanguage(locales);

  try {
    const drupal = new DrupalClient(process.env.BACKEND_URL)

    // Fetch articles.
    const articles = await drupal.getResourceCollectionFromContext(
      "node--article",
      context
    );

    // Fetch menues.
    const menues = await drupal.getMenu("main");

    return {
      props: {
        menues,
        articles,
        multiLanguage,
      },
    };
  } catch (error) {
    console.error("Unable to fetch data: ", error);
    return {
      notFound: true,
    };
  }
}

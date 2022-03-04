import React from "react"
import parse from "html-react-parser"
import Layout from "../components/layout"
import { client, gql } from "../lib/apollo-client"

const SSRPage = ({
  serverData: {
    data: { page },
  },
}) => {
  /**
   * serverData is fetched on the server by the query executed inside getServerData()
   * @apollo/client is used to query the WPGraphQL layer directly.
   */
  const featuredImage = {
    src: page?.featuredImage?.node?.sourceUrl,
    alt: page?.featuredImage?.node?.altText || "",
  }

  return (
    <Layout>
      <article className="page" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{page?.title}</h1>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.src && (
            <img
              itemProp="image"
              src={featuredImage.src}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {page?.content ? (
          <section className="prose lg:prose-xl" itemProp="articleBody">
            {parse(page.content)}
          </section>
        ) : (
          <p>Sorry, no page data was found at this route.</p>
        )}

        <hr className="mt-10" />
      </article>
    </Layout>
  )
}

export default SSRPage

/**
 * Gatsby's SSR API
 * see https://v4.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/
 * also see https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/#creating-client-only-routes
 * for more information on the filename
 */
export const getServerData = async context => {
  /**
   * find page by uri since we can't query by slug
   * and the page's id is not available
   */
  const id = context.params.pageUri
  try {
    const PAGE_QUERY = gql`
      query PageQuery($id: ID = "") {
        page(idType: URI, id: $id) {
          id
          slug
          title
          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    `

    const { data } = await client.query({
      query: PAGE_QUERY,
      variables: { id },
    })

    return {
      props: {
        data,
      },
    }
  } catch (error) {
    /**
     * TODO?: handle 500 errors
     * currently 500 errors result in a blank page with no info
     * even with a 500.js page defined under src/pages, because we
     * are going around Gatsby's graphql layer, it doesn't serve
     * the 500 page.
     */
    console.log(error.graphQLErrors)
  }
}

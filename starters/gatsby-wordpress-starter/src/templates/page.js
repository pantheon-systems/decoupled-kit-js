import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PageTemplate = ({ data: { page }, pageContext: { next, previous } }) => {
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
      {/* Todo - add truncated content as description */}
      <Seo title={page.title} />
      <article
        className="min-w-[600px] max-w-full"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{page?.title}</h1>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.src && (
            <GatsbyImage
              itemProp="image"
              image={featuredImage.src}
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
        <nav>
          <ul className="flex flex-wrap justify-between p-0 list-none">
            <li>
              {previous && (
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={next.uri} rel="next">
                  {parse(next.title)} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </article>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  }
`

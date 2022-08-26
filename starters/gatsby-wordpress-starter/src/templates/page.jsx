import React from "react"
import { graphql } from "gatsby"
// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Page from "../components/page"

const PageTemplate = ({ data: { page }, pageContext: { next, previous } }) => {
  /**
   * serverData is fetched on the server by the query executed inside getServerData()
   * @apollo/client is used to query the WPGraphQL layer directly.
   */

  return (
    <Layout>
      {/* Todo - add truncated content as description */}
      <Seo title={page.title} />
      <Page page={page} next={next} previous={previous} />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
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

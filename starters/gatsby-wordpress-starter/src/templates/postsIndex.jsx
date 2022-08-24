import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { withGrid, PostGridItem } from "../components/grid"

const PostIndexTemplate = ({ data }) => {
  const posts = data.allWpPost.nodes

  const PostGrid = withGrid(PostGridItem)

  return (
    <Layout>
      <Seo title="All posts" />
      <header className="prose text-2xl mx-auto mt-20">
        <h1 className="text-center mx-auto">Posts</h1>
      </header>
      <section>
        <PostGrid data={posts} />
      </section>
    </Layout>
  )
}

export default PostIndexTemplate

export const pageQuery = graphql`
  query PostArchive {
    allWpPost(sort: { fields: [date], order: DESC }) {
      nodes {
        excerpt
        uri
        featuredImage {
          node {
            sourceUrl
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`

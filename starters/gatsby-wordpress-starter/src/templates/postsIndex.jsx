import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { withGrid, PostGridItem } from "../components/grid"

const PostIndexTemplate = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
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

      <nav className="flex max-w-5xl mx-auto mt-8">
        {previousPagePath && (
          <Link className="underline font-medium" to={previousPagePath}>
            {" "}
            ← Previous page
          </Link>
        )}
        {nextPagePath && (
          <Link className="underline font-medium ml-auto" to={nextPagePath}>
            Next page →
          </Link>
        )}
      </nav>
    </Layout>
  )
}

export default PostIndexTemplate

export const pageQuery = graphql`
  query PostList($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
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

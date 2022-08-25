import React from "react"

import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

const Post = ({
  post: { title, date, content, featuredImage },
  previous,
  next,
}) => {
  const imageData = {
    gatsbyImage:
      featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData,
    altText: featuredImage?.node?.altText || title,
  }

  return (
    <article className="prose lg:prose-xl mt-10 mx-auto">
      <h1>{title}</h1>
      <p className="text-sm text-gray-600">{new Date(date).toDateString()}</p>

      <Link className="font-normal" to="/posts">
        Posts &rarr;
      </Link>

      <div className="mt-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
        {imageData.gatsbyImage && (
          <div className="relative w-full rounded-lg shadow-lg overflow-hidden mb-10">
            <GatsbyImage
              priority
              image={imageData.gatsbyImage}
              layout="fill"
              objectFit="cover"
              alt={imageData.altText}
            />
          </div>
        )}
      </div>

      {content ? (
        <section className="prose lg:prose-xl" itemProp="articleBody">
          {parse(content)}
        </section>
      ) : (
        <p>Sorry, no page data was found at this route.</p>
      )}

      <hr className="mt-10" />

      <nav>
        <ul className="flex flex-wrap justify-between p-0 list-none">
          <li>
            {previous && (
              <Link to={`/posts${previous.uri}`} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={`/posts${next.uri}`} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </article>
  )
}

export default Post

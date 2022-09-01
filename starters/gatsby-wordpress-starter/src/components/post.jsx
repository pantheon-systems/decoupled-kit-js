import React from "react"

import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

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
    <article className="prose lg:prose-xl mt-10 mx-auto max-w-screen-lg p-4">
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
        <div
          className="break-words mt-12"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p>Sorry, no page data was found at this route.</p>
      )}

      <hr className="mt-10" />

      <nav className="flex flex-wrap px-6">
        {previous && (
          <Link className="underline font-medium" to={`/posts${previous.uri}`}>
            ← {previous.title}
          </Link>
        )}
        {next && (
          <Link
            className="underline font-medium ml-auto"
            to={`/posts${next.uri}`}
          >
            {next.title} →
          </Link>
        )}
      </nav>
    </article>
  )
}

export default Post

import React from "react"
import parse from "html-react-parser"
import Layout from "../components/layout"
import { Link } from "gatsby"

const PageIndexTemplate = ({ pageContext: { pages } }) => {
  /**
   * there is no excerpt field available for
   * pages, let's make our own
   */
  const getExcerpt = (content, slug) => {
    content = parse(content)
    const [
      {
        props: { children },
      },
    ] = content.filter(({ type }) => {
      switch (type) {
        case "a":
        case "p":
        case "em":
        case "strong":
          return true
        default:
          return false
      }
    })
    /**
     *
     * @param {Array} content an array of HTML parsed content
     * @param {Array} textArr array for holding the output text
     * @returns Extracted text from p, strong, and em tags
     * in content parsed by html-react-parser
     */
    const getChildren = (content, textArr = []) => {
      if (Array.isArray(content)) {
        content.forEach(c => {
          /**
           * Check for more nested tags and wrap the text
           * in it's proper tag.
           */
          const helper = tag => {
            Array.isArray(c.props.children) ||
            typeof c.props.children === "object"
              ? getChildren(c.props.children, textArr) // if there are more nested children, extract their text
              : textArr.push(
                  `<${tag}${tag === "a" ? ` href=${c.props.children}` : ""}>${
                    c.props.children
                  }</${tag}>`
                )
          }
          if (typeof c === "string") {
            textArr.push(c)
          }
          switch (c.type) {
            case "a":
              helper("a")
              break
            case "p":
              helper("p")
              break
            case "em":
              helper("em")
              break
            case "strong":
              helper("strong")
              break
            default:
              return
          }
        })

        return textArr.join("")
      } else {
        return content
      }
    }

    const text = getChildren(children)

    const excerpt = text.substring(0, 250)
    const getMarkup = () => ({
      __html: `${excerpt}... <a href="${slug}">Contiune Reading</a>`,
    })
    return (
      <section className="prose lg:prose-xl pt-2">
        <div className="inline" dangerouslySetInnerHTML={getMarkup()}></div>
      </section>
    )
  }

  return (
    <Layout>
      <h1>Pages</h1>
      <ul>
        {pages.length ? (
          pages.map(({ page: { title, date, content, slug } }) => (
            <li key={slug}>
              <article className="post-list-item">
                <header>
                  <h2>
                    <Link to={`/${slug}`}>
                      <span>{parse(title)}</span>
                    </Link>
                  </h2>
                  <small>{new Date(date).toDateString()}</small>
                  {getExcerpt(content, slug)}
                </header>
              </article>
            </li>
          ))
        ) : (
          <p>
            No pages found. Add pages to your WordPress site and they'll appear
            here!
          </p>
        )}
      </ul>
    </Layout>
  )
}

export default PageIndexTemplate

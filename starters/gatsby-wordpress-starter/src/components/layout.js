import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Footer from "./footer"
const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="min-h-screen flex flex-col min-w-fit">
      <div
        className="my-0 mx-auto py-10 px-5 max-w-screen-sm"
        data-is-root-path={isHomePage}
      >
        <header className="text-lg mb-4">
          <nav>
            <ul className="flex flex-row flex-wrap sm:flex-nowrap list-none justify-between">
              {[
                ["🏠 Home", "/"],
                ["📑 Pages", "/pages"],
              ].map(([link, to], i) => (
                <li className="my-auto" key={`key-${i}`}>
                  {/* if we're on the homepage, render site title */}
                  {to === "/" && isHomePage ? (
                    <h1 className="my-auto">
                      <Link className="font-bold text-black text-4xl" to="/">
                        {parse(title)}
                      </Link>
                    </h1>
                  ) : (
                    <Link className="text-lg font-sans" to={to}>
                      {link}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

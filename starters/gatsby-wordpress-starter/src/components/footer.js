import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const {
    wpMenu: {
      menuItems: { nodes },
    },
  } = useStaticQuery(graphql`
    query MenuQuery {
      wpMenu(name: { eq: "Example Menu" }) {
        id
        menuItems {
          nodes {
            id
            path
            label
          }
        }
      }
    }
  `)

  return (
    <div className="mt-auto m-w-screen">
      <footer className="text-white rounded-t sticky bottom-0 bg-black p-4 mt-4">
        <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {nodes.map(({ id, label, path }, i) => {
            return (
              <Link
                key={id + i}
                className="text-blue-300 hover:text-blue-100 focus:text-purple-600 active:text-purple-300 mx-2 p-3"
                to={`${path}`}
              >
                ↪ {label}
              </Link>
            )
          })}
        </nav>
        <div className="flex mt-4 p-2">
          <span className="mx-auto">
            © {new Date().getFullYear()} Built with{" "}
            <a
              className="text-purple-300 hover:text-blue-100"
              href="https://www.gatsbyjs.com"
            >
              Gatsby
            </a>{" "}
            and{" "}
            <a
              className="text-blue-200 hover:text-blue-100"
              href="https://wordpress.org/"
            >
              WordPress
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer

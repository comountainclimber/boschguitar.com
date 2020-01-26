/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

// import { useStaticQuery, graphql } from "gatsby"

import Footer from "./Footer"
import Navigation from "./Navigation"
// import Header from "./header"
import "./layout.scss"
import "../index.css"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"
      />
    </Helmet>
    <div className="content">
      <Navigation />
      <div className="router-content">{children}</div>
    </div>
    <Footer />
  </>
)
// const data = useStaticQuery(graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)

// return (
//   <>
//     <Header siteTitle={data.site.siteMetadata.title} />
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `0 1.0875rem 1.45rem`,
//       }}
//     >
//       <main>{children}</main>
//       <footer>
//         © {new Date().getFullYear()}, Built with
//         {` `}
//         <a href="https://www.gatsbyjs.org">Gatsby</a>
//       </footer>
//     </div>
//   </>
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

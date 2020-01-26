// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage

import React from "react"
import { navigate } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import logo from "../images/jumbo.svg"
import Arrow from "-!svg-react-loader!../images/arrow_right.svg"

function LandingPage() {
  return (
    <Layout>
      <SEO
        title="Mark Bosch - Lead guitarist for Garland Jeffreys and Ian Hunter."
        description="Official website of Mark Bosch, world renown guitar player and studio musician. | boschguitar.com"
      />
      <div id="LandingPageContainer">
        <div className="LandingPage">
          <div className="jumbo-bosch" />
        </div>

        <div id="vg-mag-quote">
          <p>
            "As the longtime lead guitarist for Garland Jeffreys and Ian Hunter,
            Mark Bosch’s resumé reads like a who’s who of the rock and roll
            world."
          </p>
          <div>
            -{" "}
            <a
              href="https://www.vintageguitar.com/29106/mark-bosch/"
              target="_blank"
            >
              Vintage Guitar Magazine
            </a>
          </div>
          <div id="call-to-action-link" onClick={() => navigate("/contact")}>
            Reach out now for studio work or lessons <Arrow />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage

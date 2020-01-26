import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import twentyOne from "../images/gallery/21.jpg"

const About = () => (
  <Layout>
    <SEO title="Mark Bosch - About" />
    <div className="About">
      <img id="mobile-about-image" src={twentyOne} alt="bosch-and-ian-hunter" />
      <p>
        <img
          id="desktop-about-image"
          src={twentyOne}
          alt="bosch-and-ian-hunter"
        />
        As the longtime lead guitarist for Garland Jeffreys and{" "}
        <a
          href="https://www.ianhunter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ian Hunter
        </a>
        , Mark Bosch’s resume reads like a who’s who of the rock and roll world.
        {/* <h3> MARK BOSCH</h3> dolor sit amet, consectetur adipiscing elit. Nunc
        in pharetra justo, id luctus ipsum. Duis urna nunc, ultrices id
        dignissim ornare, sagittis vel lacus. Nunc libero libero, semper sit
        amet ex non, egestas iaculis massa. Etiam vitae pretium massa.
        Vestibulum vestibulum elementum sem. Morbi eget pulvinar purus, sit amet
        porta sem. Fusce commodo nibh quis tempor volutpat.{" "}
        <a
          href="http://www.hunter-mott.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mott the hoople
        </a>{" "}
        at leo Ian Hunter Band. Praesent dapibus et nunc sit amet cursus. In in
        lacus tincidunt, bibendum nunc at, suscipit turpis.Praesent dapibus et
        nunc sit amet cursus. In in lacus tincidunt, bibendum nunc at, suscipit
        turpis. */}
        <br />
        <br />
        Mark has made a name as a fiery yet tasty player supporting{" "}
        <a
          href="http://www.hunter-mott.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mott the Hoople
        </a>
        , Louise Goffin, Nena, Benny Mardones, Elliot Easton, Carole King and a
        host of other top-notch talent.
        {/* Vestibulum vestibulum elementum sem. Morbi eget pulvinar purus, sit amet
        porta sem. Fusce commodo nibh quis tempor volutpat. Aliquam blandit at
        leo{" "}
        <a
          href="https://www.ianhunter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ian hunter band
        </a>
        . Praesent dapibus et nunc sit amet cursus. In in lacus tincidunt,
        bibendum nunc at, suscipit turpis.Praesent dapibus et nunc sit amet
        cursus. In in lacus tincidunt, bibendum nunc at, suscipit turpis. */}
        <br />
        <br />
        Mark has lent his talents to the likes of Idina Menzel, Denis Leary,
        Jake La Motta, Michael Des Barres, Jules Shear, Robert Gordon, Pal
        Shazar, Paul Hipp, Danielle Evin, Jeff Slate, Ricky Byrd, Dina Regine,
        Jimmy Vivino, Andy York, Johnny Pisano and Rich Pagano.
        <br />
        <br />
        He’s shared the stage with greats like Brian May, Johnny Depp, Bruce
        Springsteen and Paul McCartney.
        <br />
        <br />
        The quintessential NY axman Mark can be counted on to deliver the goods
        with a soulful flare.
      </p>
    </div>
  </Layout>
)

export default About

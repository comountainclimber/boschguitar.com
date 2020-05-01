import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import twentyOne from "../images/gallery/21.jpg"
import jumbo from "../images/jumbo.png"

const About = () => (
  <Layout>
    <SEO title="Mark Bosch - About" />
    <div className="About">
      <img id="mobile-about-image" src={jumbo} alt="bosch-and-ian-hunter" />
      <p>
        <img id="desktop-about-image" src={jumbo} alt="bosch-and-ian-hunter" />
        <h1 style={{ display: "inline-block", margin: "0  0 -4px 0" }}>
          Mark Bosch
        </h1>
        ,
        <div style={{ marginLeft: 4, width: 4, display: "inline-block" }} />
        long-time lead guitarist for{" "}
        <a
          href="https://www.ianhunter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ian Hunter
        </a>{" "}
        (
        <a
          href="http://www.hunter-mott.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mott the Hoople
        </a>
        ) and{" "}
        <a
          href="http://garlandjeffreys.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Garland Jeffreys
        </a>{" "}
        (“Wild in the Streets”) has a resume that reads like a who’s who of the
        rock and roll world.
        <br />
        <br />
        Mark has a wealth of touring experience that spans over three decades.
        With travels throughout the US, Europe and Asia, he’s performed at world
        class festivals such as Montreux Jazz, Fuji Rock, Isle of Wight, Farm
        Aid and Montreal Jazz, and played iconic venues including Carnegie Hall
        and San Francisco’s The Fillmore.
        <br />
        <br />
        Mark has lent his talents to Elliott Easton (The Cars), Benny Mardones
        (“Into the Night”) and Broken Homes, and toured with the legendary
        Stevie Ray Vaughan in the ‘80s. The ‘90s took him from Jules Shear (“All
        Through the Night”) to Germany, where he played with Nena (“99 Red
        Balloons”).
        <br />
        <br />
        Some of the others who have sought him out on stage or in the studio are
        Denis Leary, Idina Menzel, Louise Goffin, Michael Des Barres, Robert
        Gordon, Pal Shazar, Paul Hipp, Danielle Evin, Jeff Slate, Ricky Byrd,
        Diane Gentile, Jimmy Vivino, Andy York, Johnny Pisano and Rich Pagano
        among many others. He’s also shared stages with some of the greats,
        including Brian May, Johnny Depp, Bruce Springsteen and yes, even Paul
        McCartney. He actually stepped into the ring to accompany the Raging
        Bull, Jake LaMotta—don’t ask!
        <br />
        <br />
        Television appearances include late nights like David Letterman and the
        early shows too, CBS This Morning and Good Day New York; and in the UK,
        The Andrew Marr Show and in France, Le Grand Journal.
        <br />
        <br />A soulful, fiery and tasteful player known for his lyrical solos,
        Mark has also provided guitar instruction and mentoring to well over one
        hundred players. He coached Billy Crudup for his role in the hit movie
        Almost Famous and was sought out by Lou Reed (yes that Lou Reed) to
        learn the technique of Travis Picking. Many of his students have gone on
        to become successful singer-songwriters and teachers themselves. Mark
        will often customize lessons to accompany students’ goals and doesn’t
        follow a preset curriculum. He teaches rhythm/lead for both acoustic and
        electric and excels in music theory which one can apply to any
        instrument.
        <br />
        <br />
        This feature article about Mark in Vintage Guitar Magazine is entitled
        “New York State of Mind.”{" "}
        <a
          href="https://www.vintageguitar.com/29106/mark-bosch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.vintageguitar.com/29106/mark-bosch/
        </a>{" "}
        <br />
        <br />
        With Facetime, Zoom and Skype, his reach to teach is now worldwide…
        let’s start playing!
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
      </p>
    </div>
  </Layout>
)

export default About

import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.png"

const active = {
  fontWeight: "600",
  color: "var(--green)",
}

export const NavigationLinks = ({ isMobile = false, closeMenu }) => (
  <div className="inner-links-container">
    <Link to="/gallery" activeStyle={active}>
      GALLERY
    </Link>
    <Link to="/music" activeStyle={active}>
      MUSIC
    </Link>
    <Link to="/contact" activeStyle={active}>
      CONTACT
    </Link>

    <Link to="/about" activeStyle={active}>
      ABOUT
    </Link>
  </div>
)

const Navigation = props => {
  return (
    <React.Fragment>
      <nav id="navigation">
        <div id="desktop-nav-links">
          <Link id="bosch-guitar-logo" to="/">
            <img alt="logo" src={logo}></img>
          </Link>
          <NavigationLinks />
        </div>
      </nav>
      <div id="nav-bottom-border" />
    </React.Fragment>
  )
}

export default Navigation

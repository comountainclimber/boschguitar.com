import React from "react";
import { NavLink, Link } from "react-router-dom";
// import { slide as Menu } from 'react-burger-menu'
// import noScroll from 'no-scroll'

import logo from "../images/logo.png";
// import cozLogo from '../../images/coz-logo.svg'
// import cozLogoMobile from '../../images/coz-logo-mobile.png'
// import menuIcon from '../../images/menu.svg'
// import Search from '../search/Search'

// import "./Navigation.scss";

// const activeStyle = {
//   fontWeight: 'bold',
//   color: 'var(--green)',
// }

// export const PreviewLogo = () => (
//   <React.Fragment>
//     <div id="desktop-coz-logo" className="logo-sub-text" to="/">
//       <h3> Neo3 Preview Explorer</h3>
//       <p>
//         Brought to you by: <img alt="coz-logo" src={cozLogo}></img>
//       </p>
//     </div>
//     <div id="mobile-coz-logo" to="/">
//       <img alt="coz-logo" src={cozLogoMobile}></img>
//     </div>
//   </React.Fragment>
// )

const active = {
  fontWeight: "600",
  color: "var(--green)"
};

export const NavigationLinks = ({ isMobile = false, closeMenu }) => (
  <div className="inner-links-container">
    <NavLink to="/gallery" activeStyle={active}>
      GALLERY
    </NavLink>

    <NavLink to="/contact" activeStyle={active}>
      CONTACT
    </NavLink>

    <NavLink to="/about" activeStyle={active}>
      ABOUT
    </NavLink>
  </div>
);

const Navigation = props => {
  // Prevent the background from scrolling if mobile nav is open
  // React.useEffect(() => {
  //   if (mobileMenuIsOpen) {
  //     noScroll.on();
  //   } else {
  //     noScroll.off();
  //   }
  // }, [mobileMenuIsOpen]);

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
  );
};

export default Navigation;

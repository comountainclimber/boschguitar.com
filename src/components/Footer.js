import React from "react"

import facebookIcon from "../images/facebook-social.svg"
import youtubeIcon from "../images/youtube-social.svg"

export default () => {
  return (
    <footer className="footer">
      <div className="footer-flex-container">
        <div id="left-footer-content">© 2020 boschguitar.com</div>

        <div id="right-footer-content">
          <a href="mailto:mark@boschguitar.com">
            <span>mark@boschguitar.com</span>
          </a>

          <div id="footer-social-icons">
            <a
              href="https://www.facebook.com/boschguitar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="facebook-icon" src={facebookIcon} />
            </a>

            <a
              href="https://www.youtube.com/results?search_query=mark+bosch+guitarist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="facebook-icon" src={youtubeIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

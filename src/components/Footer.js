import React from "react";

// import { PreviewLogo } from "../navigation/Navigation";
// import twitterIcon from "../../images/social-icons/twitter-social.svg";
// import githubIcon from "../../images/social-icons/github-social.svg";
import facebookIcon from "../images/facebook-social.svg";
import youtubeIcon from "../images/youtube-social.svg";
// import "./Footer.scss";

export default () => {
  return (
    <footer className="footer">
      <div className="footer-flex-container">
        <div id="left-footer-content">© 2019 boschguitar.com</div>

        <div id="right-footer-content">
          <a href="mailto:mark@boschguitar.com">
            <span>mark@boschguitar.com</span>
          </a>

          <div id="footer-social-icons">
            <a
              href="https://facebook.com"
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
        {/* <PreviewLogo />
      </div>
      <span className="footer-flex-container">© 2019 City Of Zion</span>
      <div id="footer-social-icons" className="footer-flex-container">
        <a
          href="https://twitter.com/coz_official"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="twitter-icon" src={twitterIcon} />
        </a>
        <a
          href="https://github.com/CityOfZion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="github-icon" src={githubIcon} />
        </a>
        <a
          href="https://join.slack.com/t/cityofzion/shared_invite/enQtMjcwOTUxNDc1ODU5LWFhNzY1NWEyZTgyNWUyMTJiY2UwZTI3ZjlmMmI1ZDI1NDU1M2U0N2NkYjc2MjhhZGEyY2Q5YjJlZjQyYTkxMzU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="slack-icon" src={slackIcon} />
        </a> */}
      </div>
    </footer>
  );
};

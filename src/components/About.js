import React from "react";
import twentyOne from "../images/gallery/21.jpg";

const About = () => (
  <div className="About">
    <img id="mobile-about-image" src={twentyOne} alt="bosch-and-ian-hunter" />
    <p>
      <img
        id="desktop-about-image"
        src={twentyOne}
        alt="bosch-and-ian-hunter"
      />
      <h3> MARK BOSCH</h3> dolor sit amet, consectetur adipiscing elit. Nunc in
      pharetra justo, id luctus ipsum. Duis urna nunc, ultrices id dignissim
      ornare, sagittis vel lacus. Nunc libero libero, semper sit amet ex non,
      egestas iaculis massa. Etiam vitae pretium massa. Vestibulum vestibulum
      elementum sem. Morbi eget pulvinar purus, sit amet porta sem. Fusce
      commodo nibh quis tempor volutpat.{" "}
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
      turpis.
      <br />
      <br />
      Vestibulum vestibulum elementum sem. Morbi eget pulvinar purus, sit amet
      porta sem. Fusce commodo nibh quis tempor volutpat. Aliquam blandit at leo{" "}
      <a
        href="https://www.ianhunter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ian hunter band
      </a>
      . Praesent dapibus et nunc sit amet cursus. In in lacus tincidunt,
      bibendum nunc at, suscipit turpis.Praesent dapibus et nunc sit amet
      cursus. In in lacus tincidunt, bibendum nunc at, suscipit turpis.
      <br />
      <br />
      Nunc libero libero, semper sit amet ex non, egestas iaculis massa. Etiam
      vitae pretium massa. Vestibulum vestibulum elementum sem. Morbi eget
      pulvinar purus, sit amet porta sem. Fusce commodo nibh quis tempor
      volutpat. Nunc libero libero, semper sit amet ex non, egestas iaculis
      massa. Etiam vitae pretium massa. Vestibulum vestibulum elementum sem.
      Morbi eget pulvinar purus, sit amet porta sem. Fusce commodo nibh quis
      tempor volutpat.
    </p>
  </div>
);

export default About;

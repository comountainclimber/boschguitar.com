import React, { Component } from "react";

import contact from "../images/contact.png";

const config = {
  script:
    "https://script.google.com/macros/s/AKfycbwHgYsnWVvght7aam3v0nVaS6iryiy6APft1JSA5w/exec",
  sheet: "responses"
  // email: '',
};

const Thanks = () => (
  <div className="thankyou_message">
    <h2>Thanks for reaching out. I will get back to you soon!</h2>
  </div>
);

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        message: "",
        email: "",
        honeypot: ""
      },
      sent: false,
      clicked: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { form } = this.state;

    // loading
    this.setState({ clicked: true });

    // sent
    const setSent = () => {
      this.setState({ sent: true });
    };

    // checking if bot
    const { honeypot } = form;
    if (honeypot) {
      return false;
    }

    // sending through xhr as axios won't work (CORS)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", config.script);
    // xhr.withCredentials = true
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function xhrGo() {
      setSent();
    };
    const encoded = Object.keys(form)
      .map(k => {
        return `${encodeURIComponent(k)}=${encodeURIComponent(form[k])}`;
      })
      .join("&");

    // finally sending
    xhr.send(encoded);
    return true;
  };

  handleChange = ({ target }) => {
    const { id, value } = target;
    const { state } = this;
    state.form[id] = value;
    this.setState(state);
  };

  render() {
    const {
      form: { name, message, email, honeypot },
      sent,
      clicked
    } = this.state;

    return (
      <div className="contact-container">
        <div className="contact-information-container">
          <h1> Session and studio work</h1>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            pharetra justo, id luctus ipsum. Duis urna nunc, ultrices id
            dignissim ornare, sagittis vel lacus. Nunc libero libero, semper sit
            amet ex non, egestas iaculis massa. Etiam vitae pretium massa.
            Vestibulum vestibulum elementum sem. Morbi eget pulvinar purus, sit
            amet porta sem. Fusce commodo nibh quis tempor volutpat. Aliquam
            blandit at leo eu vehicula. Praesent dapibus et nunc sit amet
            cursus. In in lacus tincidunt, bibendum nunc at, suscipit turpis.
          </p>
          <img src={contact} alt="bosch-jammin" />

          <h1> Private lessons</h1>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            pharetra justo, id luctus ipsum. Duis urna nunc, ultrices id
            dignissim ornare, sagittis vel lacus. Nunc libero libero, semper sit
            amet ex non, egestas iaculis massa.
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </p>
        </div>

        <div className="form-container">
          {sent ? (
            <Thanks />
          ) : (
            <>
              <form
              // method="POST"
              // action={config.script} // change this url
              >
                <h1> Send me a message</h1>
                <div>
                  <fieldset>
                    <label htmlFor="name">Name:</label>
                    <input
                      onChange={this.handleChange}
                      id="name"
                      key="name"
                      name="name"
                      placeholder="What your Mom calls you"
                      value={name}
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      onChange={this.handleChange}
                      id="message"
                      key="message"
                      name="message"
                      rows={10}
                      placeholder="Tell me all about it..."
                      value={message}
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="email">Your Email Address:</label>
                    <input
                      onChange={this.handleChange}
                      id="email"
                      key="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.name@email.com"
                      value={email}
                    />
                  </fieldset>
                  <fieldset
                    className="honeypot-field"
                    style={{ display: "none" }}
                  >
                    <label htmlFor="honeypot">
                      {/* To help avoid spam, utilize a Honeypot technique with a hidden text field; must
                    be empty to submit the form! Otherwise, we assume the user is a spam bot. */}
                      <input
                        onChange={this.handleChange}
                        id="honeypot"
                        key="honeypot"
                        type="text"
                        name="honeypot"
                        value={honeypot}
                      />
                    </label>
                  </fieldset>
                  {clicked ? (
                    <button type="button" disabled>
                      Loading
                    </button>
                  ) : (
                    <button type="button" onClick={() => this.handleClick()}>
                      Send
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    );
  }
}

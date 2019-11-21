import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import "./App.scss";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import About from "./components/About";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.history.action === "PUSH" ||
      this.props.history.action === "POP"
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const ScrollToTopWithRouter = withRouter(ScrollToTop);

export default () => (
  <Fragment>
    <div className="content">
      <Router>
        <ScrollToTopWithRouter>
          <Navigation />
          <div className="router-content">
            <Switch>
              <Route
                path="/contact"
                component={props => <Contact {...props} />}
              />
              <Route
                path="/gallery"
                component={props => <Gallery {...props} />}
              />
              <Route path="/about" component={props => <About {...props} />} />
              <Route path="/" component={props => <LandingPage {...props} />} />
            </Switch>
          </div>
        </ScrollToTopWithRouter>
      </Router>
    </div>
    <Footer />
  </Fragment>
);

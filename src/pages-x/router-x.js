import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";

import Inbox from "./inbox";
import about from "./pages/demo/about-x";
import home from "./pages/demo/home-x";

const Inbox = require("./inbox");

const BasicRoute = () => (
  <Router>
    <Route exact path="/" component={Inbox.default} />
    <Route exact path="/about" component={about} />
    <Route exact path="/home" component={home} />
  </Router>
);

export default BasicRoute;
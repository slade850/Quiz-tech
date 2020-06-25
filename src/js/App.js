import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./component/header";
import Home from "./page/home";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

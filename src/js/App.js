import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./component/header";
import Home from "./page/home";
import Theme from "./page/themes";
import Question from "./page/question";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/themes">
          <Theme />
        </Route>
        <Route path="/question/theme/:id">
          <Question />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

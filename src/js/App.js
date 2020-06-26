import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getUserLocalStorage } from "./utils/local-storage";
import { addAuth } from './utils/api';

import Header from "./component/header";
import Home from "./page/home";
import Theme from "./page/themes";
const App = () => {

  let user = getUserLocalStorage();
  if(user.token != undefined) addAuth(user.token);

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
      </Switch>
    </Router>
  );
};

export default App;

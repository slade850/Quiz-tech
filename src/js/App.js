import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserLocalStorage } from "./utils/local-storage";
import { addAuth } from "./utils/api";
import Header from "./component/header";
import Home from "./page/home";
import Theme from "./page/themes";
import Question from "./page/question";
const App = () => {
  const logged = useSelector((state) => state.authStore.user.isLogged);
  let user = getUserLocalStorage();
  if (user.token != undefined) {
    useDispatch({ type: "SET_USER_LOGGED", payload: true });
    addAuth(user.token);
  }

  return (
    <Router>
      {logged ? <Header /> : <div></div>}
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

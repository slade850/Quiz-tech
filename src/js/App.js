import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getUserLocalStorage } from "./utils/local-storage";
import { addAuth } from "./utils/api";

import Header from "./component/header";
import Home from "./page/home";
import Theme from "./page/themes";
import Login from './component/login'
import Modale from './component/modale'
import Question from "./page/question";

const clickOutsideModale = event => {
	if (event.target.id === "OutsideModale")
		dispatch({ type: "TOGGLE_IS_MODAL_SHOWING" });
}

const App = () => {
	const dispatch = useDispatch()
	const isModalShowing =  useSelector(state => state.homeStore.isModalShowing)
	const clickOutsideModale = event => {
		if (event.target.id === 'OutsideModale') dispatch({ type: 'TOGGLE_IS_MODAL_SHOWING' })
	}

	const logged = useSelector((state) => state.authStore.user.isLogged);
	let user = getUserLocalStorage();
	if (user.token != undefined) {
		useDispatch({ type: "SET_USER_LOGGED", payload: true });
		addAuth(user.token);
	}

	return (
		<Router>
			<Header />
			{isModalShowing && <Modale clickOutside={clickOutsideModale} />}
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/question/theme/:id">
					<Question />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}

export default App

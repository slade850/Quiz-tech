import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'

const Header = (props) => {
	const dispatch = useDispatch()
	const showModal = () => dispatch({ type: "TOGGLE_IS_MODAL_SHOWING", payload: { type: "login", title: "Login" } })
    
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<button onClick={showModal}>SignIn</button>
					</li>
					<li>
						<Link to="/themes">Themes</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

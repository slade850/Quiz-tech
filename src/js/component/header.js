import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import logo from "../../../assets/images/home.png";
import avatar from "../../../assets/images/avatar/default.png";

const Header = props => {
  const dispatch = useDispatch();
  const showModal = () => dispatch({ type: "TOGGLE_IS_MODAL_SHOWING", payload: { type: "login", title: "Login" } })

  return (
		<header className="container">
			<nav>
				<ul className="nav d-flex justify-content-between">
					<li>
						<Link to="/">
							<img src={logo} width="100px" className="mt-3" />
						</Link>
					</li>
					<li className="font-weight-bold">
						<span className="txt-white">Score : </span>
						<span className="txt-yellow">200 XP</span>
					</li>
					<li>
						<button onClick={showModal}>SignIn</button>
					</li>
					<li>
						<img src={avatar} />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

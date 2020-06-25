import React, { useState, useEffect } from "react";
import { doLogin } from "../store/authStore";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from 'styled-components'

const Login = (props) => {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.authStore.authMessage.message);
    const logged = useSelector((state) => state.authStore.user.isLogged);

    const [formLogin, setFormLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

//    const displayRegisterModale = () =>
//        dispatch({
//            type: "TOGGLE_IS_MODAL_SHOWING",
//            payload: { type: "register", title: "Register" }
//    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        dispatch({ type: "CLEAR_AUTH_MESSAGE" });
        const body = {
            formLogin,
            password,
        };
        dispatch(doLogin(body))
        .then((res) => {
            setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
        });
    };

//   if (logged && !isLoading) return <Redirect to="/" />;

    return (
		<div className="">
			{
				isLoading ? (
					<h2>loading</h2>
			    ) : (
				<LoginBox>
					<form onSubmit={handleSubmit}>
						<h1>Welcome</h1>
						<div className="">
							<label>Login</label>
							<input
								type="text"
								onChange={ev => setFormLogin(ev.target.value)}
								name="formLogin"
								value={formLogin}
								required
							/>
						</div>
						<div className="">
							<label>Password</label>
							<input
								type="password"
								onChange={ev => setPassword(ev.target.value)}
								name="password"
								value={password}
								required
							/>
						</div>
						<button type="submit">Connexion</button>
						{/* <p>Not member yet? <span onClick={displayRegisterModale}>Sign Up</span></p> */}
						<br />
						{message && <span>{message}</span>}
					</form>
				</LoginBox>
			)}
		</div>
	);
};

const LoginBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		div {
			width: 100%;
			margin-top: 10px;
			display: flex;
			justify-content: space-between;

			input {
				margin-left: 15px;
				border-radius: 5px;
			}
		}

		p {
			margin-top: 12px;
			font-size: 14px;

            span {
                color: #e39c19;
                text-decoration: underline;
                cursor: pointer;
            }
		}
	}
`

const Button = styled.button`
	padding: 7.5px 15px;
	background-color: rgb(0, 245, 0);
	border-radius: 5px;
	border-style: none;
	border 1px solid grey;
	box-sizing: border-box;
	font-size: 15.5px;
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	:active {
		box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5) inset;
		transform: scale(0.98);
	}
`

export default Login;

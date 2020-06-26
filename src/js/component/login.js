import React, { useState, useEffect } from "react";
import { doLogin } from "../store/authStore";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from 'styled-components';

const Login = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.authStore.authMessage.message);
  const logged = useSelector((state) => state.authStore.user.isLogged);

  const [formLogin, setFormLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  if (logged && !isLoading) return <Redirect to="/" />;

  return (
    <StyledLogin className="">
      {isLoading ? (
        <h2>loading</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Welcome</h1>
          <div className="">
            <label>Login</label>
            <input
              type="text"
              onChange={(ev) => setFormLogin(ev.target.value)}
              name="formLogin"
              value={formLogin}
              required
            />
          </div>
          <div className="">
            <label>Password</label>
            <input
              type="password"
              onChange={(ev) => setPassword(ev.target.value)}
              minLength="3"
              name="password"
              value={password}
              required
            />
          </div>
          <button type="submit">Se Connecter</button>
          <br />
          {message && <span>{message}</span>}
        </form>
      )}
    </StyledLogin>
  );
};




const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: 2px solid  #9F489B;
  border-radius: 20px;
  background: #eee;

  button {
    background: palevioletred;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
  }
`;
export default Login;

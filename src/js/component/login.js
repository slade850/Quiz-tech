import React, { useState, useEffect } from "react";
import { doLogin } from "../store/authStore";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import api from '../utils/api';

const Login = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.authStore.authMessage.message);
  const logged = useSelector((state) => state.authStore.user.isLogged);

  const [formLogin, setFormLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userlogged, setUserLogged] = useState(false);

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


  useEffect(() => {
      api.get('user/1')
      .then(res => setUserLogged(true))
      .catch(err => console.log(err))
  },[]);

  if (userlogged) return <Redirect to="/themes" />;

  return (
    <div className="">
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
    </div>
  );
};

export default Login;

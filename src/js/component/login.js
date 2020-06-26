import React, { useState, useEffect } from "react";
import { doLogin } from "../store/authStore";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import img from "../../../assets/images/home.png";

const Login = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.authStore.authMessage);
  const logged = useSelector((state) => state.authStore.user.isLogged);

  const [formLogin, setFormLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
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

  if (logged) return <Redirect to="/themes" />;

  return (
    <div className="container">
      <div className="text-center mt-3">
        <img src={img} />
        {isLoading ? (
          <h2>loading</h2>
        ) : (
          <div className="d-flex justify-content-center">
            <form className="mt-3 w-25 text-center" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  onChange={(ev) => setFormLogin(ev.target.value)}
                  name="formLogin"
                  value={formLogin}
                  placeholder="Email ou pseudo"
                  required
                />
              </div>
              <div className="form-group ">
                <input
                  type="password"
                  onChange={(ev) => setPassword(ev.target.value)}
                  minLength="3"
                  name="password"
                  value={password}
                  required
                  className="form-control"
                  placeholder="Mot de passe"
                />
              </div>
              <div className="form-group">
                <button
                  className="radius form-control bg-yellow color-violet font-weight-bold"
                  type="submit"
                >
                  Connexion
                </button>
              </div>
              <br />
              {message && <span>{message}</span>}
            </form>
          </div>
        )}{" "}
        <p className="txt-white">
          Vous n’avez pas de compte?{" "}
          <span className="txt-pink font-weight-bold">Créez un compte</span>
        </p>
      </div>
    </div>
  );
};

export default Login;

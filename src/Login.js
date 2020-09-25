import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    //Firebase Login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };

  const register = (event) => {
    event.preventDefault();
    //Firebase Register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Successfully created an account
        console.log(auth);
        if (auth) {
          history.push("./");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon FAKE Clone Conditions of Use and
          Privacy Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create you Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

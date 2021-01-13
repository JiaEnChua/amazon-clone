import React, { useState } from 'react';
import './Register.css';
import { auth } from './firebase';
import { useHistory, Link } from 'react-router-dom';

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = (event) => {
    event.preventDefault();
    //Firebase Register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Successfully created an account
        console.log(auth);
        if (auth) {
          history.push('./');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='register'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
          className='register__logo'
        />
      </Link>

      <div className='register__container'>
        <h1>Register</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </form>
        <p>
          By continuing, you agree to Amazon FAKE Clone Conditions of Use and
          Privacy Notice.
        </p>
        <button className='register__Button' onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;

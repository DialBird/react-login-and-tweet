import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import AuthContext from '../contexts/AuthContext';

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login(email.value, password.value, history);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form className="white" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name='email' />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name='password' />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

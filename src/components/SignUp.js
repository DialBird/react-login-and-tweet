import React, { useState } from 'react';

import firebase from '../firebase';

const SignUp = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form className="white" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;

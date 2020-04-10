import React, { useContext } from 'react';
import { Link, withRouter } from "react-router-dom";

import AuthContext from '../contexts/AuthContext';

const Header = props => {
  const { currentUser, logout } = useContext(AuthContext);

  const header = {
    padding: '0 20px',
    height: '60px',
    background: '#eee',
    display: 'flex',
    'align-items': 'center'
  };
  const logo = {
    textDecoration: 'none',
    color: '#333',
  };
  const loginButton = {
    marginLeft: 'auto',
  };

  const renderButton = () => {
    if (currentUser) {
      return (
        <button onClick={() => logout(props.history)} style={loginButton}>Logout</button>
      );
    } else {
      return (
        <div style={loginButton}>
          <Link to='/signin'>Signin</Link>
          <Link to='/signup'>Signup</Link>
        </div>
      );
    }
  };

  return (
    <div style={header}>
      <h1>
        <Link to="/" style={logo}>Login Sample</Link>
      </h1>
      {renderButton()}
    </div>
  );
}

export default withRouter(Header);

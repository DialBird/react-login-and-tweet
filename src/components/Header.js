import React, { useContext } from 'react';
import { Link, withRouter } from "react-router-dom";

import AppContext from '../contexts/AppContext';

const Header = props => {
  const { state, setState } = useContext(AppContext);

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
  const handleLogin = () => {
    props.history.push('/login');
    // setState({ loggedIn: true });
  };
  const handleSignup = () => {
    props.history.push('/signup');
    // setState({ loggedIn: true });
  };
  const handleLogout = () => {
    setState({ loggedIn: false });
  };

  const renderButton = () => {
    if (state.loggedIn) {
      return (
        <button onClick={handleLogout} style={loginButton}>Logout</button>
      );
    } else {
      return (
        <div style={loginButton}>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
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

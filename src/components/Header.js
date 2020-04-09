import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import AppContext from '../contexts/AppContext';

const Header = () => {
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
    setState({ loggedIn: true });
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
        <button onClick={handleLogin} style={loginButton}>Login</button>
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

export default Header;

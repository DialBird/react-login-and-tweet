import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
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
  return (
    <div style={header}>
      <h1>
        <Link to="/" style={logo}>Login Sample</Link>
      </h1>
      <button style={loginButton}>Login</button>
    </div>
  );
}

export default Header;

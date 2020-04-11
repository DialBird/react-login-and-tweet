import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import AuthContext from '../contexts/AuthContext';

const Dashboard = () => {
  const history = useHistory();
  const { loginWithTwitter } = useContext(AuthContext);

  const handleTwitter = () => {
    loginWithTwitter(history);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleTwitter}>Twitter</button>
    </div>
  );
}

export default Dashboard;

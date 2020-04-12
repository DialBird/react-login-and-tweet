import React, { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <a href={`https://us-central1-facebookloginwithfirebas-e8c65.cloudfunctions.net/api/auth/twitter?uid=${currentUser.uid}`}>Twitter</a>
    </div>
  );
}

export default Dashboard;

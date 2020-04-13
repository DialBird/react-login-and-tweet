import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <a href={process.env.REACT_APP_TWITTER_AUTH_URL + `&redirectTo=${window.location.href}`}>Twitter</a>
    </div>
  );
}

export default Dashboard;

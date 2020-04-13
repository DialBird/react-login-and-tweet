import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import TwitterContext from '../../contexts/TwitterContext';

const Twitter = () => {
  const [authenticating, setAuthenticating] = useState(true);
  const { setAccessToken, setAccessSecret } = useContext(TwitterContext);

  useEffect(() => {
    console.log(window.location.search);
  }, [])

  return (
    <React.Fragment>
      {authenticating
          ? <p>Authenticating...</p>
          : <Redirect to="/dashboard" />}
    </React.Fragment>
  );
}

export default Twitter;

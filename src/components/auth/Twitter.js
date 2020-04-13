import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import TwitterContext from '../../contexts/TwitterContext';

const Twitter = () => {
  const [authenticating, setAuthenticating] = useState(true);
  const { setAccessToken, setAccessSecret } = useContext(TwitterContext);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const token = params.get('token');
    const secret = params.get('secret');
    setAccessToken(token);
    setAccessSecret(secret);
    setAuthenticating(false);
  }, [setAccessToken, setAccessSecret])

  return (
    <React.Fragment>
      {authenticating
          ? <p>Authenticating...</p>
          : <Redirect to="/dashboard" />}
    </React.Fragment>
  );
}

export default Twitter;

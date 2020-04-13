import React, { createContext, useEffect, useState } from 'react';

const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState('');
  const [accessSecret, setAccessSecret] = useState('');

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
  }, [accessToken]);

  useEffect(() => {
    localStorage.setItem('accessSecret', accessSecret);
  }, [accessSecret]);

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <TwitterContext.Provider
      value={{
        accessToken,
        setAccessToken,
        accessSecret,
        setAccessSecret
      }}
    >
      {children}
    </TwitterContext.Provider>
  );
};

export default TwitterContext;

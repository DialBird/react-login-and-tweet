import React, { createContext, useEffect, useState } from 'react';

import firebase, { twitterProvider } from '../firebase';
import { createUser } from '../dbs/users';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // ユーザーをログインさせる関数
  const login = async (email, password, history) => {
    await firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
      alert(error);
    });
    history.push("/dashboard");
  };

  const loginWithTwitter = async (history) => {
    try {
      const { credential } = await firebase.auth().signInWithPopup(twitterProvider);
      localStorage.setItem('credential', JSON.stringify(credential));
      history.push("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  // 新しいユーザーを作成しログインさせる関数
  const signup = async (email, password, history) => {
    const { user } =
      await firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        alert(error);
      });
    await createUser(user);
    history.push("/dashboard");
  };

  const logout = async (history) => {
    try {
      await firebase.auth().signOut();
      history.push("/");
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        login: login,
        signup: signup,
        logout: logout,
        loginWithTwitter,
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

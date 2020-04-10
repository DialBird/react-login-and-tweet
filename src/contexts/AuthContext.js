import React, { createContext, useEffect, useState } from 'react';

import firebase from '../firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // ユーザーをログインさせる関数
  const login = async (email, password, history) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  const loginWithTwitter = async (history) => {
    try {
      const provider = new firebase.auth.TwitterAuthProvider();
      const res = await firebase.auth().signInWithPopup(provider);
      history.push("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  // 新しいユーザーを作成しログインさせる関数
  const signup = async (email, password, history) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      history.push("/dashboard");
    } catch (error) {
      alert(error);
    }
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

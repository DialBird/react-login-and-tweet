import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import AuthContext, { AuthProvider } from '../contexts/AuthContext';
import { TwitterProvider } from '../contexts/TwitterContext';

import Dashboard from './Dashboard';
import Header from './Header';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Twitter from './auth/Twitter';

const App = () => {
  const HomeRoute = ({ children, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
            currentUser ? (
              <Redirect
                to={{
                  pathname: "/dashboard",
                  state: { from: location }
                }}
              />
            ) : (
              children
            )
        }
      />
    );
  }
  const DashboardRoute = ({ children, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
            currentUser ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: location }
                }}
              />
            )
        }
      />
    );
  }
  return (
    <AuthProvider>
      <TwitterProvider>
        <Router>
          <div>
            <Header />
            <Switch>
              <DashboardRoute path="/dashboard">
                <Dashboard />
              </DashboardRoute>
              <Route path='/auth/twitter/callback' component={Twitter} />
              <HomeRoute path="/signin">
                <SignIn />
              </HomeRoute>
              <HomeRoute path="/signup">
                <SignUp />
              </HomeRoute>
              <HomeRoute path="/">
                <Home />
              </HomeRoute>
            </Switch>
          </div>
        </Router>
      </TwitterProvider>
    </AuthProvider>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { AuthProvider } from '../contexts/AuthContext';

import Dashboard from './Dashboard';
import Header from './Header';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AppContext from '../contexts/AppContext';

import Dashboard from './Dashboard';
import Header from './Header';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';

const initialState = { loggedIn: false };

function App() {
  const [state, setState] = useState(initialState);
  const renderLinkList = () => {
    if (state.loggedIn) {
      return (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      );
    } else {
      return (
        <React.Fragment>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </React.Fragment>
      );
    }
  };
  return (
    <AppContext.Provider value={{ state, setState }}>
      <Router>
        <div>
          <Header />
          <nav>
            <ul>
              {renderLinkList()}
            </ul>
          </nav>
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
    </AppContext.Provider>
  );
}

export default App;

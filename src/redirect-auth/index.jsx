import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';
import PublicPage from './PublicPage';
import ProtectedPage from './ProtectedPage';
import LoginPage from './LoginPage';

const RedirectAuth = () => (
  <Router>
    <div>
      <AuthButton></AuthButton>
      <ul>
        <li>
          <Link to='/public'>Public Page</Link>
        </li>
        <li>
          <Link to='/protected'>Protected Page</Link>
        </li>
      </ul>

      <Switch>
        <Route path='/public'>
          <PublicPage></PublicPage>
        </Route>
        <Route path='/login'>
          <LoginPage></LoginPage>
        </Route>
        <PrivateRoute path='/protected'>
          <ProtectedPage></ProtectedPage>
        </PrivateRoute>
      </Switch>
    </div>
  </Router>
);

export default RedirectAuth;

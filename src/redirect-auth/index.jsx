import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';
import PublicPage from './PublicPage';
import ProtectedPage from './ProtectedPage';
import LoginPage from './LoginPage';
import CallbackAuth from './CallbackAuth';

const RedirectAuth = () => {
  const {path, url} = useRouteMatch();

  return (
    <Router>
      <div>
        <AuthButton></AuthButton>
        <ul>
          <li>
            <Link to={`${url}/public`}>Public Page</Link>
          </li>
          <li>
            <Link to={`${url}/protected`}>Protected Page</Link>
          </li>
          <li>
            <Link to={`${url}/callbackAuth`}>Callback authen Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${path}/public`}>
            <PublicPage></PublicPage>
          </Route>
          <Route path={`${path}/login`}>
            <LoginPage></LoginPage>
          </Route>
          <Route path={`${path}/callbackAuth`}>
            <CallbackAuth></CallbackAuth>
          </Route>
          <PrivateRoute path={`${path}/protected`}>
            <ProtectedPage></ProtectedPage>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default RedirectAuth;

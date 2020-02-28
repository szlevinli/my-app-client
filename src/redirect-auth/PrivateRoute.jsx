import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import FakeAuth from './fake-auth';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children, ...rest}) => (
  <Route
    {...rest}
    render={({location}) =>
      FakeAuth.isAuthenticated ? (
        children
      ) : (
        <Redirect to={{pathname: '/login', state: {from: location}}} />
      )
    }
  ></Route>
);

export default PrivateRoute;

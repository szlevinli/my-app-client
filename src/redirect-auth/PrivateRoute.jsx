import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import FakeAuth from './fake-auth';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children, ...rest}) => {
  return (
    <Route
      {...rest}
      render={({location}) => {
        const pathname = location.pathname;
        let path = pathname.split('/');
        path = path.slice(0, path.length - 1).join('/');
        return FakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{pathname: `${path}/login`, state: {from: location}}} />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;

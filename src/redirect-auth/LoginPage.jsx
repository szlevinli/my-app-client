import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import FakeAuth from './fake-auth';

const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();

  let {from} = location.state || {from: {pathname: '/'}};
  let login = () => {
    FakeAuth.authenticated(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default LoginPage;

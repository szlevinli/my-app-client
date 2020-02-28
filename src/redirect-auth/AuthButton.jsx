import React from 'react';
import {useHistory} from 'react-router-dom';
import FackAuth from './fake-auth';

const AuthButton = () => {
  let history = useHistory();

  return FackAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          FackAuth.signOut(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in!</p>
  );
};

export default AuthButton;

import React, {useState} from 'react';
import Authing from 'authing-js-sdk';

const AuthLogin = () => {
  const [userInfo, setUserInfo] = useState({});
  const [errorInfo, setErrorInfo] = useState({});
  const email = 'test@test.com';
  const password = '123456a!';

  let auth = new Authing({
    userPoolId: '5e4f7e153970c2e1953fe5ed'
  });

  const login = async () => {
    const userInfo = await auth
      .login({
        email,
        password
      })
      .catch((error) => {
        setErrorInfo(error);
      });
    setUserInfo(userInfo);
  };

  return (
    <div>
      <div>
        <button onClick={login}>Login</button>
      </div>
      <div className='email'>email: {email}</div>
      <div className='password'>password: {password}</div>
      <div className='userInfo'>user info: {JSON.stringify(userInfo)}</div>
      <div className='errorInfo'>error info: {JSON.stringify(errorInfo)}</div>
    </div>
  );
};

export default AuthLogin;

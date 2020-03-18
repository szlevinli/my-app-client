import React from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

const useQuery = () => new URLSearchParams(useLocation().search);

const CallbackAuth = async () => {
  const query = useQuery();
  console.log('start callback auth...');
  console.log(`code: ${query.get('code')}`);
  console.log(`state: ${query.get('state')}`);

  const data = await axios
    .post('/api/login', {
      code: query.get('code'),
      state: query.get('state')
    })
    .catch((error) => console.log(error));
  console.log(data);

  return (
    <div>
      code: {query.get('code')}
      <br />
      state: {query.get('state')}
    </div>
  );
};

export default CallbackAuth;

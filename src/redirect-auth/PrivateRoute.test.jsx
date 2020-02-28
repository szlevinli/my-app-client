import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import FakeAuth from './fake-auth';

const getWrapper = () =>
  mount(
    <MemoryRouter>
      <Switch>
        <Route path='/login'>
          <div className='login'>login page</div>
        </Route>
        <PrivateRoute>
          <div className='authenticated'></div>
        </PrivateRoute>
      </Switch>
    </MemoryRouter>
  );

it('should be mosk ok when authenticated', () => {
  FakeAuth.isAuthenticated = true;
  const wrapper = getWrapper();
  expect(wrapper).toContainMatchingElement('.authenticated');
  expect(wrapper).not.toContainMatchingElement('.login');
});

it('should be mosk ok when unauthenticated', () => {
  FakeAuth.isAuthenticated = false;
  const wrapper = getWrapper();
  expect(wrapper).toContainMatchingElement('.login');
  expect(wrapper).not.toContainMatchingElement('.authenticated');
});

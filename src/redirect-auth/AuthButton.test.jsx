import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import AuthButton from './AuthButton';
import FakeAuth from './fake-auth';

const getWrapper = () =>
  mount(
    <MemoryRouter>
      <AuthButton />
    </MemoryRouter>
  );

it('should be mosk ok', () => {
  FakeAuth.isAuthenticated = false;
  const wrapper = getWrapper();
  expect(wrapper).toIncludeText('not logged');
});

it('should be renden button', () => {
  FakeAuth.isAuthenticated = true;
  const wrapper = getWrapper();
  expect(wrapper).toContainMatchingElement('button');
  expect(wrapper).toIncludeText('Welcome!');
});

it('should be handle button click', () => {
  FakeAuth.signOut = jest.fn();
  FakeAuth.isAuthenticated = true;
  const wrapper = getWrapper();
  wrapper.find('button').simulate('click');
  expect(FakeAuth.signOut).toHaveBeenCalledTimes(1);
  expect(FakeAuth.signOut).toHaveBeenCalledWith(expect.any(Function));
});

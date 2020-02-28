import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import LoginPage from './LoginPage';
import FakeAuth from './fake-auth';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {from: {pathname: 'testPath'}}
  })
}));

const getWrapper = () =>
  mount(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );

it('should be mosk ok ', () => {
  const wrapper = getWrapper();
  expect(wrapper).toContainMatchingElement('div');
  expect(wrapper).toContainMatchingElement('p');
  expect(wrapper).toContainMatchingElement('button');
});

it('should be use location.state', () => {
  const wrapper = getWrapper();
  expect(wrapper.find('p')).toIncludeText('testPath');
});

it('should be handle button click event', () => {
  const wrapper = getWrapper();
  FakeAuth.authenticated = jest.fn();
  wrapper.find('button').simulate('click');
  expect(FakeAuth.authenticated).toHaveBeenCalledTimes(1);
});

import React from 'react';
import {shallow} from 'enzyme';
import {waitFor} from 'async-enzyme-helpers';
import AuthLogin from './index';

jest.mock('authing-js-sdk', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    login: jest.fn(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({_userID: 123456});
        }, 0);
      });
    })
  }))
}));

const getWrapper = () => shallow(<AuthLogin></AuthLogin>);

it('should be mosk ok', () => {
  const wrapper = getWrapper();
  expect(wrapper).toContainMatchingElement('button');
});

it('should be handle click event', async (done) => {
  const wrapper = getWrapper();
  wrapper.find('button').simulate('click', true);
  await waitFor(wrapper, '.userInfo');
  expect(wrapper.find('.userInfo')).toIncludeText('1234');
  done();
});

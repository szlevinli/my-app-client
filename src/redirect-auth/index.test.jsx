import React from 'react';
import {shallow} from 'enzyme';
import RedirectAuth from './index';

it('<RedirectAuth /> should render correctly', () => {
  const wrapper = shallow(<RedirectAuth></RedirectAuth>);
  expect(wrapper).toMatchSnapshot();
});

import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {mount} from 'enzyme';
import RedirectAuth from './index';

it('<RedirectAuth /> should render correctly', () => {
  const wrapper = mount(
    <MemoryRouter>
      <RedirectAuth></RedirectAuth>
    </MemoryRouter>
  );
  expect(wrapper).toBeDefined();
  // expect(wrapper).toMatchSnapshot();
});

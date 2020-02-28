import React from 'react';
import {shallow} from 'enzyme';
import PublicPage from './PublicPage';

it('should be mosk ok', () => {
  const wrapper = shallow(<PublicPage></PublicPage>);
  expect(wrapper).toContainMatchingElement('h3');
  expect(wrapper).toIncludeText('Public');
});

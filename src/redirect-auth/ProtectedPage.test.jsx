import React from 'react';
import {shallow} from 'enzyme';
import ProtectedPage from './ProtectedPage';

it('should be mosk ok', () => {
  const wrapper = shallow(<ProtectedPage></ProtectedPage>);
  expect(wrapper).toContainMatchingElement('h3');
  expect(wrapper).toIncludeText('Protected');
});

/* global it, describe, expect */
import React from 'react';
import { shallow } from 'enzyme';

import Home from './home';

it('component should render', () => {
  const comp = shallow(<Home />);
  expect(comp.find('div').length).to.be.least(1);
});

it('component should render: [PalindromeForm, PalindromeResults, PalindromeStats]', () => {
  const comp = shallow(<Home />);
  expect(comp.find('PalindromeForm').length).to.be.equal(1);
  expect(comp.find('PalindromeResults').length).to.be.equal(1);
  expect(comp.find('PalindromeStats').length).to.be.equal(1);
});

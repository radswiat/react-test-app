/* global it, describe, expect */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Results from './results';

global.storeCheckSpy = sinon.spy();

jest.mock('store', () => {
  return {
    userPalindromeList: [{
      sentence: 'test',
      isValid: true,
    }, {
      sentence: 'test2',
      isValid: false,
    }],
  };
});

it('component should render', () => {
  const comp = shallow(<Results />);
  expect(comp.find('div').length).to.be.least(1);
});

it('component should render 2 palindromes', () => {
  const comp = shallow(<Results />);
  expect(comp.find('[styleName="results__row"]').length).to.be.equal(2);
});

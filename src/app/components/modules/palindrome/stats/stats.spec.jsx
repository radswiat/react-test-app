/* global it, describe, expect */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Stats from './stats';

global.getPalindromesStatsSpy = sinon.spy();

jest.mock('store', () => {
  return {
    getPalindromesStats: () => {
      global.getPalindromesStatsSpy();
    },
    palindromeStatsList: [{
      sentence: 'test',
      isValid: true,
      timestamp: null,
      count: 1,
    }, {
      sentence: 'test2',
      isValid: false,
      timestamp: null,
      count: 1,
    }],
  };
});

it('component should render', () => {
  const comp = shallow(<Stats />);
  expect(comp.find('div').length).to.be.least(1);
});

it('should call stats update from store', () => {
  expect(global.getPalindromesStatsSpy).to.have.been.calledOnce;
});

it('should render 2 palindrome stats', () => {
  const comp = shallow(<Stats />);
  expect(comp.find('[styleName="stats__row"]').length).to.be.equal(2);
});

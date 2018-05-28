/* global it, describe, expect */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Form from './form';

global.storeCheckSpy = sinon.spy();

jest.mock('store', () => {
  return {
    checkPalindrome: (...args) => {
      global.storeCheckSpy(...args);
      return {
        status: 0,
        error: 'test-error',
      };
    },
  };
});

it('component should render', () => {
  const comp = shallow(<Form />);
  expect(comp.find('div').length).to.be.least(1);
});

it('component should have basic html structure', () => {
  const comp = shallow(<Form />);
  expect(comp.find('form').length).to.be.least(1);
  expect(comp.find('input').length).to.be.least(1);
});

describe('method testing', () => {

  it('isSubmitDisabled should return true', () => {
    const comp = shallow(<Form />);
    expect(comp.instance().isSubmitDisabled()).to.be.true;
  });

  it('isSubmitDisabled should return false', () => {
    const comp = shallow(<Form />);
    comp.setState({ inputValue: 'value' });
    expect(comp.instance().isSubmitDisabled()).to.be.false;
  });

  it('handleInput should set state', () => {
    const comp = shallow(<Form />);
    const target = { target: { value: 'value' } };
    comp.instance().handleInput(target);
    expect(comp.state('inputValue')).to.be.equal('value');
  });

  it('handleDictionaryCheck should set state', () => {
    const comp = shallow(<Form />);
    const target = { target: { checked: true } };
    comp.instance().handleDictionaryCheck(target);
    expect(comp.state('dictionaryMode')).to.be.true;
  });

  it('handleSubmit should prevent submitting', () => {
    const comp = shallow(<Form />);
    comp.instance().handleSubmit();
    expect(global.storeCheckSpy).to.not.have.been.called;
  });

  it('handleSubmit should successfully call store', () => {
    const comp = shallow(<Form />);
    comp.setState({ inputValue: 'test', dictionaryMode: true });
    comp.instance().handleSubmit();
    expect(global.storeCheckSpy).to.have.been.calledOnce;
  });

  it('handleSubmit should send correct params to store', () => {
    expect(global.storeCheckSpy.args[0][0]).to.be.deep.equal({
      sentence: 'test',
      dictionaryMode: true,
    });
  });

});


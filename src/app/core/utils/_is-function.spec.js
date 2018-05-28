/* global it, describe, expect */
import isFunction from './_is-function';

it('should "string" not to be a function', () => {
  expect(isFunction('asdasd')).to.be.false;
});

it('should "null" not to be a function', () => {
  expect(isFunction(null)).to.be.false;
});

it('should "undefined" not to be a function', () => {
  expect(isFunction(undefined)).to.be.false;
});

it('should "function" to be a function', () => {
  expect(isFunction(() => {})).to.be.true;
});

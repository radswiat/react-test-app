/* global it, describe, expect */
import isDefined from './_is-defined';

it('should be undefined', () => {
  expect(isDefined()).to.be.false;
});

it('should be undefined', () => {
  const test = {};
  expect(isDefined(test.value)).to.be.false;
});

it('should "undefined" not to be defined', () => {
  expect(isDefined(undefined)).to.be.false;
});

it('should "number" to be defined', () => {
  expect(isDefined(5)).to.be.true;
});

it('should "string" to be defined', () => {
  expect(isDefined('test')).to.be.true;
});

it('should "empty array" to be defined', () => {
  expect(isDefined([])).to.be.true;
});

it('should "empty object" to be defined', () => {
  expect(isDefined({})).to.be.true;
});

it('should "null" to be defined', () => {
  expect(isDefined(null)).to.be.true;
});

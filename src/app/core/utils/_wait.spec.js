/* global it, describe, expect */
import sinon from 'sinon';

import wait from './_wait';

it('wait should return a promise', () => {
  expect(wait()).to.be.a('promise');
});

it('wait promise should be resolved after timeout', async (done) => {
  const waitSpy = sinon.spy();
  const waiting = wait(0).then(() => {
    waitSpy();
  });
  expect(wait()).to.be.a('promise');
  expect(waitSpy).to.not.have.been.called;
  await waiting;
  expect(waitSpy).to.have.been.calledOnce;
  done();
});

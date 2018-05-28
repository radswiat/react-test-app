/* global it, describe, expect */
import sinon from 'sinon';
import axios from 'axios';
import AxiosMock from 'axios-mock-adapter';
import { toJS } from 'mobx';

import store from './store';

const axiosMock = new AxiosMock(axios);

it('store should be initially empty', () => {
  expect(store.userPalindromeList.length).to.be.equal(0);
  expect(store.palindromeStatsList.length).to.be.equal(0);
});

describe('checkPalindrome', () => {

  it('checkPalindrome should not fail without parameters', async (done) => {
    const res = await store.checkPalindrome({});
    expect(res).to.be.undefined;
    done();
  });

  it('checkPalindrome should call dictionary', async (done) => {
    // stub dictionary
    const stub = sinon.stub(store, '_checkDictionary');
    await store.checkPalindrome({
      sentence: 'test',
      dictionaryMode: true,
    });
    expect(stub).to.have.been.calledOnce;
    expect(stub).to.have.been.calledWith('test');
    stub.restore();
    done();
  });

  it('checkPalindrome should return error on axios failure', async () => {
    // stub axios palindrome check
    axiosMock.onPost(/palindrome\/check/).replyOnce(() => {
      return new Promise((resolve, reject) => {
        reject({
          message: 'test error message',
        });
      });
    });

    // make palindrome call
    const res = await store.checkPalindrome({
      sentence: 'test',
      dictionaryMode: false,
    });

    // expect it to return error
    expect(res).to.be.deep.equal({
      status: 0,
      error: 'test error message',
    });
  });

  it('checkPalindrome should push to userPalindromeList and call getPalindromesStats', async (done) => {
    // stub axios palindrome check
    axiosMock.onPost(/palindrome\/check/).replyOnce(200, true);

    // make palindrome call
    await store.checkPalindrome({
      sentence: 'test',
      dictionaryMode: false,
    });

    // mobx is observable array, convert back to js array
    const userPalindromeListArray = toJS(store.userPalindromeList);

    expect(userPalindromeListArray.length).to.be.equal(1);
    expect(userPalindromeListArray[0]).to.be.deep.equal({
      sentence: 'test',
      status: 200,
      isValid: true,
    });
    done();
  });
});

describe('checkDictionary', () => {

  it('checkDictionary should handle error', async (done) => {

    // stub axios palindrome check
    axiosMock.onPost(/dictionary\/check/).replyOnce(() => {
      return new Promise((resolve, reject) => {
        reject({
          message: 'example error message',
        });
      });
    });

    // make palindrome call
    const res = await store._checkDictionary('test sentence');

    expect(res).to.deep.equal({
      status: 0,
      error: 'example error message',
    });

    done();
  });

  it('checkDictionary should return invalid word message', async (done) => {

    // stub axios palindrome check
    axiosMock.onPost(/dictionary\/check/).replyOnce(200, false);

    // make palindrome call
    const res = await store._checkDictionary('test sentence');

    expect(res).to.deep.equal({
      status: 0,
      error: 'Invalid word(s)',
    });

    done();
  });
});

describe('getPalindromesStats', () => {

  it('getPalindromesStats should set palindromes stats into the store', async (done) => {
    // stub axios palindrome check
    axiosMock.onGet(/palindrome\/stats/).replyOnce(200, ['a', 'b', 'c']);

    await store.getPalindromesStats();

    expect(store.palindromeStatsList.length).to.be.equal(3);

    done();
  });

});

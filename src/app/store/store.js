import { observable, action } from 'mobx';
import to from 'await-to-js';
import axios from 'axios';

import { apiCfg } from 'config';

export default new class Store {

  /**
   * Store user palindrome list
   * - palindrome in local memory
   * - only from a current user
   * @type {Array}
   */
  @observable userPalindromeList = [];

  /**
   * Stores palindrome stats list
   * - palindrome stored in DB
   * - from all the users
   * @type {Array}
   */
  @observable palindromeStatsList = [];

  /**
   * Check if sentence is palindrome
   * - additionally check if sentence contains valid words before
   * - add results to store
   * @param sentence
   * @param captcha
   * @returns {Promise<void>}
   */
  @action async checkPalindrome({ sentence = null, dictionaryMode = false }) {

    if (!sentence) return;

    // if dictionary mode,
    // check if sentence contains only valid words
    if (dictionaryMode) {
      const res = await this._checkDictionary(sentence);
      if (res && res.status === 0) return res;
    }

    // make api call
    const [err, res] = await to(axios.post(`${apiCfg.apiEndpoints}/palindrome/check`, {
      sentence,
    }));

    if (err) {
      return {
        status: 0,
        error: err.message,
      };
    }

    this.userPalindromeList.push({
      sentence,
      status: res.status,
      isValid: res.data,
    });

    // update palindrome stats
    await this.getPalindromesStats();
  }

  /**
   * Make dictionary check
   * @returns {Promise<*>}
   * @private
   */
  async _checkDictionary(sentence) {
    // api call
    const [err, res] = await to(axios.post(`${apiCfg.apiEndpoints}/dictionary/check`, {
      sentence,
    }));

    if (err) {
      return {
        status: 0,
        error: err.message,
      };
    }

    if (!res.data) {
      return {
        status: 0,
        error: 'Invalid word(s)',
      };
    }
  }

  /**
   * Get palindrome stats from DB
   * - add results to store
   * @returns {Promise<void>}
   */
  @action async getPalindromesStats() {
    const [err, res] = await to(axios.get(`${apiCfg.apiEndpoints}/palindrome/stats`));
    if (err) return;
    this.palindromeStatsList = res.data;
  }
};

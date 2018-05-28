import React, { Component } from 'react';
import cx from 'classnames';

import store from 'store';

import './form.scss';

export default class PalindromeForm extends Component {

  state = {};

  /**
   * Is submit disabled
   * - return bool based on inputValue and captcha
   * @returns {*}
   */
  isSubmitDisabled = () => {
    return !this.state.inputValue;
  };

  /**
   * Handle input
   * @param target
   */
  handleInput = ({ target }) => {
    this.setState({
      inputValue: target.value,
    });
  };

  /**
   * Handle dictionary check
   * - change dictionary mode
   * @param target
   */
  handleDictionaryCheck = ({ target }) => {
    this.setState({
      dictionaryMode: target.checked,
    });
  };

  /**
   * Handle submit
   * - check if it's not disabled
   * - send request to store
   * - handle any errors back to form
   * @returns {Promise<void>}
   */
  handleSubmit = async () => {
    // protect from empty values
    if (this.isSubmitDisabled()) return;

    // clear any errors
    this.setState({ submitError: null });

    // make store palindrome check
    const result = await store.checkPalindrome({
      sentence: this.state.inputValue,
      dictionaryMode: this.state.dictionaryMode,
    });

    // palindrome check return results on:
    // - http errors
    // - dictionary failure
    if (result && result.status === 0) {
      this.setState({
        submitError: result.error,
      });
    }
  };

  render() {
    return (
      <div styleName="form">
        <form>
          <div styleName="form__element form__text">
            A palindrome is a word, number, or other sequence of
            characters which reads the same backward as forward, such as madam or racecar.
            Numbers are allowed, special char and capital letters ignored.
          </div>
          <div styleName="form__element">
            <div styleName="form__label">Input:</div>
            <div styleName="form__separator" />
            <input data-e2e="pal-input" styleName="form__input" onChange={this.handleInput} />
          </div>
          <div styleName="form__element">
            <div styleName="form__label">Use dictionary validation:</div>
            <div styleName="form__separator" />
            <input data-e2e="pal-check-dict" type="checkbox" onChange={this.handleDictionaryCheck} />
          </div>
          <div styleName="form__element">
            <If condition={this.state.submitError}>
              <div styleName="form__error">
                {this.state.submitError}
              </div>
            </If>
          </div>
          <div styleName="form__element">
            <div
              data-e2e="pal-submit"
              styleName={cx('form__submit', {
                'form__submit--disabled': this.isSubmitDisabled(),
              })}
              onClick={this.handleSubmit}
            >
              Submit
            </div>
          </div>
        </form>
      </div>
    );
  }
}


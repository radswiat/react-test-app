import React, { Component } from 'react';

import { PalindromeForm, PalindromeResults, PalindromeStats } from 'components/modules/palindrome';

import './home.scss';

export default class PageHome extends Component {

  render() {
    return (
      <div styleName="home-page">
        <div className="row">
          <div className="col-md-6">
            <PalindromeForm />
          </div>
          <div className="col-md-6">
            <PalindromeResults />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PalindromeStats />
          </div>
        </div>
      </div>
    );
  }
}

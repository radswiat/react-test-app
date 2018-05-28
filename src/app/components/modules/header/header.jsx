import React, { Component } from 'react';

import './header.scss';

export default class Header extends Component {

  render() {
    return (
      <div styleName="header" className="wrapper">
        <div className="row">
          <div styleName="-separator -center" className="col-md-6">
            <div styleName="header__intro">Lets play with</div>
            <h2 styleName="header__title">Palindrome App</h2>
          </div>
          <div className="col-md-1" />
          <div styleName="-center" className="col-md-4">
            <div styleName="header__info">
              Please make sure server is up and running!
            </div>
          </div>
        </div>
      </div>
    );
  }
}


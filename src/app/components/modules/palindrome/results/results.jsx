import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from 'store';

import './results.scss';

@observer
export default class PalindromeResults extends Component {
  render() {
    return (
      <div styleName="results">
        {store.userPalindromeList.map((res, key) => (
          <div data-e2e={`pal-res-${res.sentence}-valid`} key={key} styleName="results__row">
            {res.sentence} - {res.isValid ? 'Valid' : 'Invalid'}
          </div>
        ))}
      </div>
    );
  }
}

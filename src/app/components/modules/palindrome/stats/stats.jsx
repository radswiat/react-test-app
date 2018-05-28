import React, { Component } from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';

import store from 'store';

import './stats.scss';

@observer
export default class PalindromeStats extends Component {

  componentWillMount() {
    // ask store to load palindromes stats from db
    store.getPalindromesStats();
  }

  render() {
    return (
      <div styleName="stats">
        <h3>DB Stats</h3>
        <Choose>
          <When condition={store.palindromeStatsList.length}>
            {store.palindromeStatsList.map(({ sentence, isValid, timestamp, count }, key) => (
              <div key={key} styleName="stats__row">
                <div styleName="stats__col">
                  {sentence}
                </div>
                <div styleName="stats__col">
                  {isValid ? 'VALID' : 'INVALID'}
                </div>
                <div styleName="stats__col">
                  {moment(timestamp).format('DD-MMM-YYYY')}
                </div>
                <div styleName="stats__col">
                  {count}
                </div>
              </div>
            ))}
          </When>
          <Otherwise>
            <div styleName="stats__row">
              No results
            </div>
          </Otherwise>
        </Choose>
      </div>
    );
  }
}

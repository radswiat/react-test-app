import React, { Fragment, Component } from 'react';

import PropTypes from 'prop-types';

/**
 * App container
 * - app containers should be use for global application logic
 * - ITS NOT a place to define UI page structure ( html, css )
 * - DO NOT make app container overcomplicated
 */
export default class AppContainer extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './wrapper.scss';

export default class Wrapper extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div styleName="wrapper" className="page-wrapper">
        {this.props.children}
      </div>
    );
  }
}

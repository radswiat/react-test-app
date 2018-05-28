import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/modules/header';

import './page.scss';

/**
 * Page container
 *
 * You can put here all generic route components or initial html/css structure for all the routes,
 * please bear in mind every single route will follow this.
 */
export default class PageContainer extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div styleName="page">
        <div styleName="page__wrapper">
          <div styleName="page__content">
            <Header />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

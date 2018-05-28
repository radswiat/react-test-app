import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createHashHistory';
import { Provider } from 'mobx-react';
import store from 'store';

import routes from 'app/routes';

import 'config';
import 'flexibility';
import 'styles/main.scss';

/**
 * React App
 */
export default class App {

  /**
   * Bootstrap
   *
   * @return { App }
   */
  static bootstrap() {
    return new App();
  }

  constructor() {
    this.createHistory();
    this.render();
  }

  /**
   * @name createHistory
   * @description Creates browser history stack
   */
  createHistory() {
    this.history = createBrowserHistory();
  }

  render() {
    render(
      <Provider projectsStore={store}>
        {routes(this.history)}
      </Provider>,
      document.getElementById('root'),
    );
  }
}


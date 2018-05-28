import React from 'react';
import { Router, Route } from 'react-router';

// import containers
import AppContainer from 'components/containers/app';
import Page from 'components/containers/page';

// import routes pages
import Home from 'components/pages/home';

export default (history) => {
  return (
    <Router history={history}>
      <AppContainer>
        <Page>
          <Route path="/" exact component={Home} />
        </Page>
      </AppContainer>
    </Router>
  );
};

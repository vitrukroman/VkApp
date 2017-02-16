

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/app_container';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import SearchContainer from './containers/search_container';

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <Route path="/search" component={SearchContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

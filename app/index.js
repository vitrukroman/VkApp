'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import AppContainer from './containers/app_container';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import SearchContainer from './containers/search_container';
import {parse} from 'qs';
import actions from './actions';


const history = syncHistoryWithStore(hashHistory, store);

const isAuthorized = (nextState, replace, callback) => {
  if (!store.getState().access_token) {
    const currentPath = nextState.location.pathname.replace(/\//g, 'slash');

    location.href = [
      'https://oauth.vk.com/authorize?',
      'client_id=5514646&',
      'display=popup&',
      'redirect_uri=http://localhost:8080/&',
      'scope=friends&',
      'response_type=token&',
      `state=${currentPath}`
    ].join('');
  } else {
    callback();
  }
};

const cacheAccessToken = (nextState, replace, callback) => {
  if (nextState.params.params) {
    const params = parse(nextState.params.params);
    store.dispatch(actions.access_token_resolved(params.access_token));
    const refererPath = (params.state || '').replace(/slash/g, '/');
    replace(refererPath);
  }

  callback();
};

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <Route path="/search" component={SearchContainer} onEnter={isAuthorized}/>
      </Route>
      <Route path="/:params" onEnter={cacheAccessToken} />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
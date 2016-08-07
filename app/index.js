import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import AppContainer from './containers/app_container';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Search from './components/search.jsx';
import {parse} from 'qs';
import {getAccessToken, setAccessToken} from './lib/vk/api/auth';


const history = syncHistoryWithStore(hashHistory, store);

const isAuthorized = (nextState, replace, callback) => {
  if (nextState.params.params) {
    const params = parse(nextState.params.params);
    console.log(params);
    replace('/');
  }
  callback();
};

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <Route path="/search" component={Search}/>
      </Route>
      <Route path="/:params" onEnter={isAuthorized}/>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
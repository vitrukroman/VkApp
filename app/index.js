import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/app'
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Search from './components/search';


const history = syncHistoryWithStore(hashHistory, store);


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/search" component={Search}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/app'
import {Router, Route, broswerHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';



const history = syncHistoryWithStore(broswerHistory, store);


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
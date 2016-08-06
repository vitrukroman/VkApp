'use strict';

import {connect} from 'react-redux'
import App from '../components/app.jsx';


const AppContainer = connect(
  () => ({}),
  dispatch => {
    return {
      get_user() {
        const user_ids = 210700286,
          fields = ['photo_100', 'sex'],
          query_params = {user_ids, fields};

        dispatch({type: 'GET_USER', query_params});
      }
    };
  }
)(App);


export default AppContainer;
'use strict';

import {connect} from 'react-redux'
import Layout from '../components/layout';


const LayoutContainer = connect(
  state => {
    return {
      user: state.get('user')
    };
  },
  dispatch => {
    return {
      get_user() {
        const user_ids = 210700286,
          fields = ['photo_50', 'sex'],
          query_params = {user_ids, fields};

        dispatch({type: 'GET_USER', query_params});
      }
    };
  }
)(Layout);


export default LayoutContainer;
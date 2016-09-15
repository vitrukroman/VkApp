'use strict';

import {connect} from 'react-redux'
import Search from '../components/search.jsx';
import actions from '../actions';


const SearchContainer = connect(
  state => ({
    found_users: state.found_users,
    filtered_users: state.filtered_users,
    found_users_count: state.found_users_count,
    captcha: state.captcha
  }),
  dispatch => ({
    search_users() {
      dispatch(actions.search_users());
    },

    like_add(user) {
      dispatch(actions.like_add(user));
    }
  })
)(Search);


export default SearchContainer;
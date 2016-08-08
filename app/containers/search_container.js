'use strict';

import {connect} from 'react-redux'
import Search from '../components/search.jsx';
import actions from '../actions';


const SearchContainer = connect(
  state => ({
    found_users: state.found_users,
    found_users_count: state.found_users_count
  }),
  dispatch => ({
    search_users() {
      dispatch(actions.search_users());
    },

    change_birth_day(day) {
      dispatch(actions.change_search_criteria('birth_day', parseInt(day, 10)));
      dispatch(actions.search_users());
    }
  })
)(Search);


export default SearchContainer;
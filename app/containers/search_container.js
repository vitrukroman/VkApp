'use strict';

import {connect} from 'react-redux'
import Search from '../components/search.jsx';
import actions from '../actions';
import {isNaN} from 'lodash';


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
      let _day = parseInt(day, 10);
      _day = !isNaN(_day) ? _day : undefined;
      dispatch(actions.change_search_criteria('birth_day', _day));
      dispatch(actions.search_users());
    },

    change_birth_month(day) {
      let month = parseInt(day, 10);
      month = !isNaN(month) ? month : undefined;
      dispatch(actions.change_search_criteria('birth_month', month));
      dispatch(actions.search_users());
    }
  })
)(Search);


export default SearchContainer;
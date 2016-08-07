'use strict';

import {connect} from 'react-redux'
import Search from '../components/search.jsx';
import actions from '../actions';


const SearchContainer = connect(
  state => ({found_users: state.found_users}),
  dispatch => ({
    search_users() {
      dispatch(actions.search_users());
    }
  })
)(Search);


export default SearchContainer;
'use strict';

import {connect} from 'react-redux'
import Search from '../components/search.jsx';
import actions from '../actions';
import store from '../store';
import SearchCriteria from '../records/search_criteria';


const SearchContainer = connect(
  state => ({ found_users: state.found_users}),
  dispatch => {
    return {
      search_users() {
        let query_params = new SearchCriteria();
        query_params = query_params.set('access_token', store.getState().access_token);
        dispatch(actions.search_users(query_params.toJS()));
      }
    };
  }
)(Search);


export default SearchContainer;
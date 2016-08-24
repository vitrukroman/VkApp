'use strict';

import {chain} from 'lodash';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import actions from '../actions';
import config from '../../config.json';
import SearchCriteria from '../records/search_criteria';


const cached_access_token = sessionStorage.getItem('access_token') || '' ;
const search_criteria_default = new SearchCriteria(config.search_criteria);
search_criteria_default.set('access_token', cached_access_token);

const photo_url = (state = config.photo_url_default, action) => {
  switch (action.type) {
    case actions.types.GET_USER_RESOLVED:
      return action.user.photo_100;
    default:
      return state;
  }
};


const access_token = (state = cached_access_token, action) => {
  switch (action.type) {
    case actions.types.ACCESS_TOKEN_RESOLVED:
      sessionStorage.setItem('access_token', action.access_token);
      return action.access_token;
    default:
      return state;
  }
};


const found_users = (state = [], action) => {
  switch (action.type) {
    case actions.types.SEARCH_USERS_RESOLVED:
      return action.data.users;
    default:
      return state;
  }
};


const filtered_users = (state = [], action) => {
  switch (action.type) {
    case actions.types.SEARCH_USERS_RESOLVED:
      return action.data.users.filter(user => chain(config.search_filters)
        .keys()
        .every(filterName => (
          user[filterName] === config.search_filters[filterName] &&
          user['photo_id'] !== undefined
        ))
        .value());
    default:
      return state;
  }
};


const found_users_count = (state = 0, action) => {
  switch (action.type) {
    case actions.types.SEARCH_USERS_RESOLVED:
      return action.data.usersCount;
    default:
      return state;
  }

};

const search_criteria = (state = search_criteria_default, action) => {
  switch (action.type) {
    case actions.types.ACCESS_TOKEN_RESOLVED:
      return state.set('access_token', action.access_token);
    case actions.types.CHANGE_SEARCH_CRITERIA:
      return state.set(action.key, action.value);
    default:
      return state;
  }
};

export {
  photo_url,
  access_token,
  found_users,
  search_criteria,
  found_users_count,
  filtered_users
};

export default combineReducers({
  photo_url,
  routing: routerReducer,
  access_token,
  found_users,
  search_criteria,
  found_users_count,
  filtered_users
});

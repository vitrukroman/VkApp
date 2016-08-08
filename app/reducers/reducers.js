'use strict';

import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import actions from '../actions';
import {Record} from 'immutable';
import config from '../../config.json';


const SearchCriteria = Record(config.search_criteria);
const cached_access_token = sessionStorage.getItem('access_token') || '' ;

const photo_url = (state = '/images/photo_spinner.gif', action) => {
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


const found_users_count = (state = 0, action) => {
  switch (action.type) {
    case actions.types.SEARCH_USERS_RESOLVED:
      return action.data.usersCount;
    default:
      return state;
  }

};

const search_criteria = (state = new SearchCriteria({access_token: cached_access_token}), action) => {
  switch (action.type) {
    case actions.types.ACCESS_TOKEN_RESOLVED:
      return state.set('access_token', action.access_token);
    case actions.types.CHANGE_SEARCH_CRITERIA:
      return state.set(action.key, action.value);
    default:
      return state;
  }
};

export default combineReducers({
  photo_url,
  routing: routerReducer,
  access_token,
  found_users,
  search_criteria,
  found_users_count
});

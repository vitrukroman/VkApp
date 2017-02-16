

import { chain } from 'lodash';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import actions from '../actions';
import config from '../../config.json';
import SearchCriteria from '../records/search_criteria';
import Captcha from '../records/captcha';
import { Set } from 'immutable';


const cached_access_token = sessionStorage.getItem('access_token') || '';


function getSearchCriteriaDefault() {
  let cached_search_criteria = localStorage.getItem('search_criteria');
  try {
    cached_search_criteria = JSON.parse(cached_search_criteria);
  }
  catch (error) {
    cached_search_criteria = null;
  }

  const search_criteria_default = new SearchCriteria(cached_search_criteria || config.search_criteria);
  search_criteria_default.set('access_token', cached_access_token);

  return search_criteria_default;
}

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


const found_users = (state = new Set(), action) => {
  switch (action.type) {
    case actions.types.SEARCH_USERS_RESOLVED:
      return action.data.users;
    default:
      return state;
  }
};


const filtered_users = (state = new Set(), action) => {
  switch (action.type) {
    case actions.types.SEARCH_USERS_RESOLVED:
      return action.data.users.filter(user => chain(config.search_filters)
        .keys()
        .every(filterName => (
          user[filterName] === config.search_filters[filterName] &&
          user.photo_id !== undefined
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

const search_criteria = (state = getSearchCriteriaDefault(), action) => {
  let newState = state;

  switch (action.type) {
    case actions.types.ACCESS_TOKEN_RESOLVED:
      newState = state.set('access_token', action.access_token);
      break;
    case actions.types.CHANGE_SEARCH_CRITERIA:
      newState = state.set(action.key, action.value);
      break;
  }

  newState !== state && localStorage.setItem('search_criteria', JSON.stringify(newState.toJS()));

  return newState;
};


const captcha = (state = new Captcha(), action) => {
  switch (action.type) {
    case actions.types.LAUNCH_CAPTCHA:
      return state
        .set('is_active', true)
        .set('sid', action.sid)
        .set('image_url', action.image_url);
    case actions.types.CAPTCHA_HANDLED:
      return state
        .set('key', action.key);
    case actions.types.DEACTIVATE_CAPTCHA:
      return state
        .set('is_active', false);
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
  filtered_users,
  captcha,
  getSearchCriteriaDefault,
};

export default combineReducers({
  photo_url,
  routing: routerReducer,
  access_token,
  found_users,
  search_criteria,
  found_users_count,
  filtered_users,
  captcha,
});

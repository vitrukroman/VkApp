'use strict';

import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import actions from '../actions';

/*
 const user = (state, action) => {
 switch (action.type) {
 case 'GET_USER_RESOLVED':
 return action.user;
 default:
 return state;
 }
 };
 */


const photo_url = (state = '/images/photo_spinner.gif', action) => {
  switch (action.type) {
    case actions.types.GET_USER_RESOLVED:
      return action.user.photo_100;
    default:
      return state;
  }
};


const access_token = (state = sessionStorage.getItem('access_token') || '', action) => {
  switch (action.type) {
    case actions.types.ACCESS_TOKEN_RESOLVED:
      sessionStorage.setItem('access_token', action.access_token);
      return action.access_token;
    default:
      return state;
  }
};


const found_users = (state = [], action) => {
  switch(action.type) {
    case actions.types.SEARCH_USERS_RESOLVED:
      console.log(action);

  }
  return state;
};

export default combineReducers({photo_url, routing: routerReducer, access_token, found_users});

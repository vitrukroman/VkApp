'use strict';


const types = {
  GET_USER: 'GET_USER',
  GET_USER_RESOLVED: 'GET_USER_RESOLVED',
  GET_USER_REJECTED: 'GET_USER_REJECTED',
  GET_ACCESS_TOKEN: 'GET_ACCESS_TOKEN',
  ACCESS_TOKEN_RESOLVED: 'ACCESS_TOKEN_RESOLVED',
  SEARCH_USERS_RESOLVED: 'SEARCH_USERS_RESOLVED',
  SEARCH_USERS: 'SEARCH_USERS',
  CHANGE_SEARCH_CRITERIA: 'CHANGE_SEARCH_CRITERIA',
  LIKE_ADD: 'LIKE_ADD',
  LIKE_ADD_RESOLVED: 'LIKE_ADD_RESOLVED',
  LIKE_ADD_REJECTED: 'LIKE_ADD_REJECTED'
};


const like_add = user => ({
  type: types.LIKE_ADD,
  user
});


const like_add_resolved = () => ({
  type: types.LIKE_ADD_RESOLVED
});


const like_add_rejected = error => ({
  type: types.LIKE_ADD_REJECTED,
  error
});


const get_user = query_params => {
  return {
    type: types.GET_USER,
    query_params
  }
};


const get_user_resolved = user => {
  return {
    type: types.GET_USER_RESOLVED,
    user
  }
};


const get_user_rejected = error => {
  return {
    type: types.GET_USER_REJECTED,
    error
  }
};

const access_token_resolved = access_token => ({
  type: types.ACCESS_TOKEN_RESOLVED,
  access_token
});

const get_access_token = () => ({
  type: types.GET_ACCESS_TOKEN
});

const search_users_resolved = data => ({
  type: types.SEARCH_USERS_RESOLVED,
  data
});


const search_users = query_params => ({
  type: types.SEARCH_USERS,
  query_params
});


const change_search_criteria = (key, value) => ({
  type: types.CHANGE_SEARCH_CRITERIA,
  key,
  value
});


export default {
  types,
  get_user,
  get_user_resolved,
  get_user_rejected,
  get_access_token,
  access_token_resolved,
  search_users_resolved,
  search_users,
  change_search_criteria,
  like_add,
  like_add_resolved,
  like_add_rejected
};
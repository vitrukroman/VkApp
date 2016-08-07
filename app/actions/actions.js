'use strict';


const types = {
  GET_USER: 'GET_USER',
  GET_USER_RESOLVED: 'GET_USER_RESOLVED',
  GET_USER_REJECTED: 'GET_USER_REJECTED',
  GET_ACCESS_TOKEN: 'GET_ACCESS_TOKEN',
  ACCESS_TOKEN_RESOLVED: 'ACCESS_TOKEN_RESOLVED',
  SEARCH_USERS_RESOLVED: 'SEARCH_USERS_RESOLVED',
  SEARCH_USERS: 'SEARCH_USERS'
};


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

const access_token_resolved = access_token  => ({
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



export default {
  types,
  get_user,
  get_user_resolved,
  get_user_rejected,
  get_access_token,
  access_token_resolved,
  search_users_resolved,
  search_users
};
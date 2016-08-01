'use strict';


const types = {
  GET_USER: 'GET_USER',
  GET_USER_RESOLVED: 'GET_RESOLVED',
  GET_USER_REJECTED: 'GET_USER_REJECTED'
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


export default {
  types,
  get_user,
  get_user_resolved,
  get_user_rejected
};
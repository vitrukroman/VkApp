import Immutable from 'immutable';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';


const user = (state, action) => {
  switch (action.type) {
    case 'GET_USER_RESOLVED':
      return action.user;
    default:
      return state;
  }
};


const photo_url = (state, action) => {
  switch (action.type) {
    case 'GET_USER_RESOLVED':
      return action.user.response[0].photo_100;
    default:
      return state;
  }
};

export default combineReducers({user, photo_url, routing: routerReducer});

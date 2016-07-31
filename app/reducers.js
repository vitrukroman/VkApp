import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';


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
    case 'GET_USER_RESOLVED':
      return action.user.response[0].photo_100;
    default:
      return state;
  }
};

export default combineReducers({photo_url, routing: routerReducer});

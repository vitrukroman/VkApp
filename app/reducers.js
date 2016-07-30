import {
    combineReducers
} from 'redux-immutable';


const user = (state, action) => {
    switch (action.type) {
        case 'GET_USER_RESOLVED':
            return action.user;
        default:
            return state;
    }
};
export default combineReducers({user});

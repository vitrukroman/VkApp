import {
    combineReducers
} from 'redux-immutable';


const clicks = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return ++state;
        case 'DECREMENT':
            return --state;
        default:
            return state;
    }
};
export default combineReducers({clicks});

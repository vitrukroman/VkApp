import {createStore} from 'redux';
import VkApp from './reducers';
import {Map} from 'immutable';


const store = createStore(VkApp, Map({clicks: 0}));

export default store;
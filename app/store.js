import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import VkApp from './reducers';
import sagas from './sagas';
import {Map} from 'immutable';


const sagaMiddleWare = createSagaMiddleware();
const store = createStore(VkApp, Map({user: null}), applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(sagas);

export default store;
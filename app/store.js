import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import VkApp from './reducers/reducers';
import sagas from './sagas/sagas';


const sagaMiddleWare = createSagaMiddleware();
const store = createStore(VkApp, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(sagas);

export default store;

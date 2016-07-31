'use strict';

import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import User from './lib/vk/api/user';
import 'babel-polyfill';

function* get_user(action) {
  try {
    const user = yield call(User.get, action.query_params);
    yield put({type: 'GET_USER_RESOLVED', user});
  } catch (error) {
    yield put({type: 'GET_USER_REJECTED', error});
  }
}


function* saga() {
  yield takeEvery('GET_USER', get_user);
}

export default saga;
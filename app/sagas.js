'use strict';

import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import User from './lib/vk/api/user';
import 'babel-polyfill';

function* get_user(action) {
  try {
    console.log(action.query_params);
    console
    const user = yield call(User.get, action.query_params);
    console.log(user);
    yield put({type: 'GET_USER_RESOLVED', user});
  } catch (error) {
    console.error(error);
    yield put({type: 'GET_USER_REJECTED', error});
  }
}


function* saga() {
  yield* takeEvery('GET_USER', get_user);
}

export default saga;
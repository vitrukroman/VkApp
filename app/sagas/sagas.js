'use strict';

import 'babel-polyfill';
import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {get as getUser} from '../lib/vk/api/user';
import actions from '../actions';

function* get_user(action) {
  try {
    const user = yield call(getUser, action.query_params);
    yield put(actions.get_user_resolved(user));
  } catch (error) {
    yield put(actions.get_user_rejected(error));
  }
}


function* saga() {
  yield takeEvery(actions.types.GET_USER, get_user);
}


export {get_user};
export default saga;
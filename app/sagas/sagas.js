'use strict';

import 'babel-polyfill';
import {takeEvery, takeLatest} from 'redux-saga';
import {call, put, select} from 'redux-saga/effects';
import {get as getUser, search as searchUsers} from '../lib/vk/api/user';
import actions from '../actions';
import rp from 'request-promise';

function* get_user(action) {
  try {
    const user = yield call(getUser, action.query_params);
    yield put(actions.get_user_resolved(user));
  } catch (error) {
    yield put(actions.get_user_rejected(error));
  }
}

export const get_query_params = state => state.search_criteria.toJS();


function* search_users() {
  try {
    const access_token = yield call(rp, 'http://localhost:1337/127.0.0.1:3000');
    yield put(actions.access_token_resolved(access_token));
    const query_params = yield select(get_query_params);
    const data = yield call(searchUsers, query_params);
    yield put(actions.search_users_resolved(data));
  } catch (error) {
    console.error(error);
    yield put(actions.search_users_rejected(error));
  }
}


function* saga() {
  yield [
    takeEvery(actions.types.GET_USER, get_user),
    takeLatest(actions.types.SEARCH_USERS, search_users),
  ];
}


export {get_user};
export default saga;
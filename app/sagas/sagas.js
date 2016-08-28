'use strict';

import 'babel-polyfill';
import {takeLatest, delay} from 'redux-saga';
import {
  call,
  put,
  select,
  actionChannel,
  take,
  fork
} from 'redux-saga/effects';
import {get as getUser, search as searchUsers, likeAdd} from '../lib/vk/api/user';
import actions from '../actions';
import rp from 'request-promise';
import config from '../../config.json';


const select_search_criteria = select(state => state.search_criteria);
const select_access_token = select(state => state.access_token);


function* get_user() {
  try {
    const action = yield take(actions.types.GET_USER);
    const user = yield call(getUser, action.query_params);
    yield put(actions.get_user_resolved(user));
  } catch (error) {
    yield put(actions.get_user_rejected(error));
  }
}

function* get_access_token(reset = false) {
  let access_token;

  if (reset || !(access_token = yield select_access_token)) {
    try {
      access_token = yield call(rp, config.server_endpoint);
    } catch (err) {
      yield put(actions.access_token_rejected(err));
    }
  }

  yield put(actions.access_token_resolved(access_token));
}

function* search_users() {
  try {
    const query_params = yield select_search_criteria;
    const data = yield call(searchUsers, query_params);
    yield put(actions.search_users_resolved(data));
  } catch (error) {
    yield put(actions.search_users_rejected(error));
  }
}


function* like_add(user) {
  try {
    const access_token = yield select_access_token;
    yield call(likeAdd, user, access_token);
    yield put(actions.like_add_resolved());
  } catch (error) {
    yield put(actions.like_add_rejected(error));
  }
}

function* handleLikesAddition() {
  const likesAddChannel = yield actionChannel(actions.types.LIKE_ADD);

  while(true) {
    let action = yield take(likesAddChannel);
    yield fork(like_add, action.user);
    action = yield take([
      actions.types.LIKE_ADD_RESOLVED,
      actions.types.LIKE_ADD_REJECTED
    ]);

    yield [
      action,
      call(delay, 1000)
    ];

    if (action.type === actions.types.LIKE_ADD_REJECTED) {
      console.log(action.error);
      yield call(delay, 5000);
    } else {
      console.log('like');
    }
  }
}

function* saga() {
  yield [
    call(get_user),
    call(get_access_token)
  ];

  yield [
    call(handleLikesAddition),
    takeLatest(actions.types.SEARCH_USERS, search_users)
  ];
}


export {get_user, get_access_token, search_users,
  select_search_criteria, select_access_token};
export default saga;
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
const select_captcha = select(state => state.captcha);


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
    const searchUserCalls = spreadCalls(query_params);
    const data = yield searchUserCalls;

    yield put(actions.search_users_resolved(chooseUsers(data)));
  } catch (error) {
    yield put(actions.search_users_rejected(error));
  }


  function spreadCalls(query_params) {
    return query_params.status !== 8 ?
      [call(searchUsers, query_params)]:
      ['', 1, 2, 3, 4, 5, 6, 7].map(status => call(searchUsers, query_params.set('status', status)));
  }


  function chooseUsers(data) {
    return data.slice(1).reduce((summaryData, currentData) => ({
      usersCount: summaryData.usersCount - currentData.usersCount,
      users: summaryData.users.subtract(currentData.users)
    }), Object.assign({}, data[0]));
  }
}


function* like_add(user) {
  try {
    const access_token = yield select_access_token;
    const captcha = yield select_captcha;
    yield captcha.is_active ?
      call(likeAdd, user, access_token, captcha):
      call(likeAdd, user, access_token);
    yield put(actions.deactivate_captcha());
    yield put(actions.like_add_resolved());
  } catch (error) {
    yield put(actions.like_add_rejected(error));
  }
}

function* handleLikesAddition() {
  const likesAddChannel = yield actionChannel(actions.types.LIKE_ADD);

  while(true) {
    let likeAction = yield take(likesAddChannel);
    yield fork(like_add, likeAction.user);
    let action = yield take([
      actions.types.LIKE_ADD_RESOLVED,
      actions.types.LIKE_ADD_REJECTED
    ]);

    yield [
      action,
      call(delay, 1000)
    ];

    if (action.type === actions.types.LIKE_ADD_REJECTED) {
      yield call(handleCaptcha, action.error.captcha_sid, action.error.captcha_img);
      yield put(likeAction);
    } else {
      console.log('like');
    }
  }
}

function* handleCaptcha(captcha_sid, captcha_img) {
  yield put(actions.launch_captcha(captcha_sid, captcha_img));
  yield take(actions.types.CAPTCHA_HANDLED);
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
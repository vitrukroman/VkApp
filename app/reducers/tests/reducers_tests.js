'use strict';

import {
  photo_url,
  found_users_count,
  access_token
} from '../reducers';
import config from '../../../config.json';
import actions from '../../actions';


describe('photo_url()', function () {
  it('returns default photo_url state value ', function () {
    expect(photo_url(undefined, {})).toEqual(config.photo_url_default);
  });

  it('returns new photo_url state value ', function () {
    const resolved_user = {
      photo_100: 'some_photo'
    };

    expect(photo_url(undefined, {
      type: actions.types.GET_USER_RESOLVED,
      user: resolved_user
    })).toEqual(resolved_user.photo_100);
  });

  it('returns previous state if unknown action', function () {
    const prev_state = '';
    expect(photo_url(prev_state, {})).toEqual(prev_state);
  });
});

describe('found_users_count()', function () {
  it('returns default found_users_count state value ', function () {
    expect(found_users_count(undefined, {})).toEqual(0);
  });

  it('returns new found_users_count state value ', function () {
    const data = {
      usersCount: 10
    };

    expect(found_users_count(undefined, {
      type: actions.types.SEARCH_USERS_RESOLVED,
      data
    })).toEqual(10);
  });

  it('returns previous state if unknown action', function () {
    const prev_state = 0;

    expect(found_users_count(prev_state, {})).toEqual(prev_state);
  });
});


describe('access_token()', function () {
  it('returns default access_token state value ', function () {
    const cached_access_token = sessionStorage.getItem('access_token') || '' ;

    expect(access_token(undefined, {})).toEqual(cached_access_token);
  });

  it('returns new access_token state value ', function () {
    const new_access_token = 'af0b1ad216f24';

    expect(access_token(undefined, {
      type: actions.types.ACCESS_TOKEN_RESOLVED,
      access_token: new_access_token
    })).toEqual(new_access_token);

    // check if new Access token saved to sessionStorage
    expect(sessionStorage.getItem('access_token'))
      .toEqual(new_access_token);
  });

  it('returns previous state if unknown action', function () {
    const access_token_previous = '6316ec0eba15';

    expect(access_token(access_token_previous, {})).toEqual(access_token_previous);
  });
});


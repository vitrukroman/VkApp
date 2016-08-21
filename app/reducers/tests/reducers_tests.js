'use strict';

import {
  photo_url,
  found_users_count,
  access_token,
  search_criteria
} from '../reducers';
import config from '../../../config.json';
import actions from '../../actions';
import SearchCriteria from '../../records/search_criteria';


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
  beforeEach(function () {
    this.old_access_token =
      sessionStorage.getItem('access_token') || '';
  });

  afterEach(function () {
    sessionStorage.setItem('access_token', this.old_access_token);
  });

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


describe('search_criteria()', function () {
  beforeEach(function () {
    this.search_criteria_old = new SearchCriteria({
      "sort": 0,
      "count": 240,
      "city": 315,
      "country": 1,
      "sex": 1,
      "age_from": 21,
      "age_to": 23,
      "online": 1,
      "has_photo": 1,
      "fields": ["photo_100",
        "can_send_friend_request", "can_write_private_message",
        "followers_count", "friend_status", "has_photo",
        "is_favorite", "is_friend"],
      "access_token": "6316ec0eba15",
      "birth_day": 23,
      "birth_month": 2
    });
  });

  it('returns default search_criteria state value ', function () {
    const cached_access_token = sessionStorage.getItem('access_token') || '' ;
    console.log(sessionStorage.getItem('access_token'));
    const search_criteria_default = new SearchCriteria({access_token: cached_access_token});

    expect(search_criteria(undefined, {})).toEqual(search_criteria_default);
  });

  it('returns new search_criteria state value after changing search_criteria', function () {
    const key = 'online';
    const offline = 0;

    const expected = this.search_criteria_old.set(key, offline);
    expect(search_criteria(this.search_criteria_old, {
      type: actions.types.CHANGE_SEARCH_CRITERIA,
      key,
      value: offline
    })).toEqual(expected);
  });

  it('returns new search_criteria state value after access_token resolved', function () {
    const access_token = "ff234dqwr3u76";

    const expected = this.search_criteria_old.set('access_token', access_token);
    expect(search_criteria(this.search_criteria_old, {
      type: actions.types.ACCESS_TOKEN_RESOLVED,
      access_token
    })).toEqual(expected);
  });
});
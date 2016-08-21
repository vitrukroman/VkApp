'use strict';

import actions from '../actions';

describe('actions', () => {
  it('should crate an action to get user', () => {
    const id = 210700286,
      fields = ['photo_50', 'sex'],
      query_params = { id, fields };

    const expectedAction = {
      type: actions.types.GET_USER,
      query_params
    };

    expect(actions.get_user(query_params))
      .toEqual(expectedAction);
  });

  it('should crate an action to resolve got user', () => {
    const user = {
      "response": [{
        "uid": 210700286,
        "first_name": "Lindsey",
        "last_name": "Stirling",
        "sex": 1,
        "photo_100": "http://cs631329.vk.me/v631329286/23f6d/yV0LrfbdgWk.jpg"
      }]
    };

    const expectedAction = {
      type: actions.types.GET_USER_RESOLVED,
      user
    };

    expect(actions.get_user_resolved(user))
      .toEqual(expectedAction);
  });


  it('should crate an action to reject get user', () => {
    const error = new Error('get user request rejected');

    const expectedAction = {
      type: actions.types.GET_USER_REJECTED,
      error
    };

    expect(actions.get_user_rejected(error))
      .toEqual(expectedAction);
  });


  it('should crate an action to change search criteria', () => {
    const key = 'sex';
    const value = 1;

    const expectedAction = {
      type: actions.types.CHANGE_SEARCH_CRITERIA,
      key, value
    };

    expect(actions.change_search_criteria(key, value))
      .toEqual(expectedAction);
  });
});
'use strict';

import {get_user} from '../index';
import {call, put} from 'redux-saga/effects';
import {get as getUser} from '../../lib/vk/api/user';

describe('Sagas', () => {
  describe('* get_user()', () => {
    it('resolves get_user', () => {
      const user_ids = 210700286,
        fields = ['photo_100', 'sex'],
        query_params = {user_ids, fields};

      const action = {query_params};
      const generator = get_user(action);

      expect(generator.next().value)
        .toEqual(call(getUser, action.query_params));

      const user = {
        "response": [{
          "uid": 210700286,
          "first_name": "Lindsey",
          "last_name": "Stirling",
          "sex": 1,
          "photo_100": "http://cs631329.vk.me/v631329286/23f6d/yV0LrfbdgWk.jpg"
        }]
      };

      expect(generator.next(user).value)
        .toEqual(put({type: 'GET_USER_RESOLVED', user}));

      expect(generator.next().done).toEqual(true);
    });
  });
});
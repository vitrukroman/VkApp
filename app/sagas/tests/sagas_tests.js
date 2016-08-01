'use strict';

import {get_user} from '../sagas';
import {call, put} from 'redux-saga/effects';
import {get as getUser} from '../../lib/vk/api/user';
import actions from '../../actions';

describe('Sagas', function () {
  describe('* get_user()', function () {
    beforeEach(function () {
      const user_ids = 210700286,
        fields = ['photo_100', 'sex'],
        query_params = {user_ids, fields};

      this.action = {query_params};
      this.generator = get_user(this.action);

      expect(this.generator.next().value)
        .toEqual(call(getUser, this.action.query_params));
    });

    it('resolves get_user', function () {
      const user = {
        "response": [{
          "uid": 210700286,
          "first_name": "Lindsey",
          "last_name": "Stirling",
          "sex": 1,
          "photo_100": "http://cs631329.vk.me/v631329286/23f6d/yV0LrfbdgWk.jpg"
        }]
      };

      expect(this.generator.next(user).value)
        .toEqual(put(actions.get_user_resolved(user)));
    });

    it('rejects get_user', function () {
      const error = new Error('error happened');

      expect(this.generator.throw(error).value)
        .toEqual(put(actions.get_user_rejected(error)));

    });

    afterEach(function () {
      expect(this.generator.next().done).toEqual(true);
    })
  });
});
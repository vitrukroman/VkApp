'use strict';


import {get_user, get_access_token, search_users,
  select_search_criteria, select_access_token} from '../sagas';
import {call, put, take} from 'redux-saga/effects';
import {get as getUser, search as searchUsers} from '../../lib/vk/api/user';
import actions from '../../actions';
import rp from 'request-promise';
import config from '../../../config.json';
import SearchCriteria from '../../records/search_criteria';




describe('Sagas', function () {
  describe('* get_user()', function () {
    beforeEach(function () {
      const user_ids = 210700286,
        fields = ['photo_100', 'sex'],
        query_params = {user_ids, fields};

      const action = {query_params};
      this.generator = get_user();

      expect(this.generator.next().value)
        .toEqual(take(actions.types.GET_USER));

      expect(this.generator.next(action).value)
        .toEqual(call(getUser, action.query_params));
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
  
  describe('* get_access_token()', function () {
    beforeEach(function () {
      this.generator = get_access_token(true);
    });

    it('resolves token when calling saga the first time', function () {
      expect(this.generator.next().value)
        .toEqual(call(rp, config.server_endpoint));

      const access_token = '43nj124ndsdf7223j4kh5jk234hjk5h3423hg';
      expect(this.generator.next(access_token).value)
        .toEqual(put(actions.access_token_resolved(access_token)));
    });


    it('resolves cached token when calling more than 1 time', function () {
      this.generator.next();

      const access_token = '4i23h5ih234134123498123h40838rj7837h';
      this.generator.next(access_token);

      const generator = get_access_token();

      expect(generator.next().value)
        .toEqual(select_access_token);
      
      expect(generator.next(access_token).value)
        .toEqual(put(actions.access_token_resolved(access_token)));
    });


    it('do request for new token if token was not cached in state', function () {
      this.generator.next();

      const access_token = '0993458934jrh78h834fh46fh3hf3782fh7348hf38';
      this.generator.next(access_token);

      const generator = get_access_token();

      expect(generator.next().value)
        .toEqual(select_access_token);

      expect(generator.next('').value)
        .toEqual(call(rp, config.server_endpoint));

      expect(generator.next(access_token).value)
        .toEqual(put(actions.access_token_resolved(access_token)));
    });


    it('rejects access_token', function () {
      expect(this.generator.next().value)
        .toEqual(call(rp, config.server_endpoint));

      const error = new Error('Error getting access_token');
      expect(this.generator.throw(error).value)
        .toEqual(put(actions.access_token_rejected(error)));
    });
  });

  describe('* search users()', function () {
    beforeEach(function () {
      this.generator = search_users();

      expect(this.generator.next().value)
        .toEqual(select_search_criteria);
      
      const search_criteria = new SearchCriteria(config.search_criteria);
      
      expect(this.generator.next(search_criteria).value)
        .toEqual(call(searchUsers, search_criteria));
    });

    
    it('resolved found users', function () {

    });
  });
});
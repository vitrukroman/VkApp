'use strict';

import {photo_url} from '../reducers';
import config from '../../../config.json';
import actions from '../../actions';


describe('Reducers', function () {
  describe('photo_url()', function () {
    it('returns default photo_url state value ', function () {
      expect(photo_url(undefined, {})).toEqual(config.photo_url_default);
    });

    it('returns default photo_url state value ', function () {
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
});


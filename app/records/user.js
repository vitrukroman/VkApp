'use strict';

import {Record} from 'immutable';

export default class User extends Record({
  uid: undefined,
  first_name: undefined,
  last_name: undefined,
  sex: undefined,
  photo_100: undefined,
  can_send_friend_request: undefined,
  can_write_private_message: undefined,
  followers_count: undefined,
  friend_status: undefined,
  has_photo: undefined,
  is_favorite: undefined,
  is_friend: undefined,
  photo_id: undefined
}) {
  getPhotoId() {
    return this.photo_id.match(/_(\d+)/)[1];
  }
}
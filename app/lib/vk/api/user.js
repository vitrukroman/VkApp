'use strict';

import rp from 'request-promise';
import config from '../../../../config';
import User from '../../../records/user';

/**
 * Builds GET request to VK api
 * @param {string} apiMethod
 * @param {object} query_params
 * @return {object}
 */
const build_get_request = (apiMethod, query_params) => {
  return {
    baseUrl: config.vk.api,
    uri: `method/${apiMethod}`,
    qs: query_params,
    json: true
  };
};

const get = query_params => {
  return rp.get(build_get_request('users.get', query_params))
    .then(body => new User(body.response[0]));
};


const search = query_params => rp.get(build_get_request('users.search', query_params))
  .then(body => {
    if (body.error) {
      throw body.error;
    }

    return {
      usersCount: body.response[0],
      users: body.response.slice(1).map(userData => new User(userData))
    }
  });


const likeAdd = (user, access_token) => new Promise(
  (resolve, reject) => rp.get(build_get_request('likes.add', {
      access_token,
      owner_id: user.uid,
      item_id: user.getPhotoId(),
      type: 'photo'
    }))
    .then(body => {
      if (body.error) {
        reject(body.error);
      } else {
        resolve();
      }
    }, reject)
);


export {build_get_request, get, search, likeAdd};
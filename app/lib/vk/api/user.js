'use strict';

const rp = require('request-promise');
const config = require('../../../../config');


/**
 * Builds GET request to VK api
 * @param {string} apiMethod
 * @param {object} query_params
 * @return {object}
 */
const build_get_request = (apiMethod, query_params) => {
  return {
    method: 'GET',
    baseUrl: config.vk.api,
    uri: `method/${apiMethod}`,
    qs: query_params,
    json: true
  };
};



const get = query_params => rp(build_get_request('users.get', query_params));


const user_ids = 210700286,
  fields = ['photo_50', 'sex'],
  query_params = {user_ids, fields};

get(query_params).then(data => console.log(data)).error(err => console.error(err));


module.exports = {build_get_request};
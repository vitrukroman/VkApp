'use strict';

import rp from 'request-promise';
import config from '../../../../config';


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
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    json: true
  };
};

const get = query_params => rp(build_get_request('users.get', query_params));

export default {build_get_request, get};
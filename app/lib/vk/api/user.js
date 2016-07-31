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
    baseUrl: config.vk.api,
    uri: `method/${apiMethod}`,
    qs: query_params,
    json: true
  };
};

const get = query_params => rp.get(build_get_request('users.get', query_params));

export {build_get_request, get};
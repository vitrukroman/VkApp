'use strict';

const {build_get_request} = require('../user');
const {vk: {api: vk_api}} = require('../../../../../config');

describe('build_get_request', () => {
  it('builds user get request by id and fields', () => {
    const apiMethod = 'get',
      id = 210700286,
      fields = ['photo_50', 'sex'],
      query_params = {id, fields};

    const build_request = build_get_request('get', query_params);

    expect(build_request).toEqual({
      method: 'GET',
      baseUrl: vk_api,
      uri: `method/${apiMethod}`,
      qs: query_params,
      json: true
    });
  });
});
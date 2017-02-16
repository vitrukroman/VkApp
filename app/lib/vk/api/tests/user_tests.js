

import { build_get_request } from '../user';
import { vk } from '../../../../../config';

describe('build_get_request', () => {
  it('builds user get request by id and fields', () => {
    const apiMethod = 'get',
      id = 210700286,
      fields = ['photo_50', 'sex'],
      query_params = { id, fields };

    const build_request = build_get_request('get', query_params);

    expect(build_request).toEqual({
      baseUrl: vk.api,
      uri: `method/${apiMethod}`,
      qs: query_params,
      json: true,
    });
  });
});

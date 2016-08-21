'use strict';

import {Record} from 'immutable';


class SearchResult extends Record({a:1,b:2}) {
  constructor
}

var myRecord = new ABRecord({b: 3})
myRecord.getAB() // 4

export default Record({
  usersCount: undefined,
  users: undefined
});

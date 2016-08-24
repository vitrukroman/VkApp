'use strict';

import {connect} from 'react-redux'
import SearchSelect from '../components/search_select.jsx';
import actions from '../actions';
import {isNaN} from 'lodash';

const SearchSelectContainer = connect(
  () => ({}),

  dispatch => ({
    on_change(key, value) {
      let _value = parseInt(value, 10);
      _value = !isNaN(_value) ? _value : undefined;
      dispatch(actions.change_search_criteria(key, _value));
      dispatch(actions.search_users());
    }
  })
)(SearchSelect);


export default SearchSelectContainer;
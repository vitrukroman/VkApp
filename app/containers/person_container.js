'use strict';

import { connect } from 'react-redux';
import Person from '../components/person.jsx';
import actions from '../actions';

const PersonContainer = connect(
  state => ({
    filtered_users: state.filtered_users
  }),
  dispatch => ({
    like_add(user) {
      dispatch(actions.like_add(user));
    }
  })
)(Person);


export default PersonContainer;
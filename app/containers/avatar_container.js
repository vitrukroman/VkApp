'use strict';

import {connect} from 'react-redux'
import Avatar from '../components/avatar.jsx';


const AvatarContainer = connect(
  state => {
    return {
      photo_url: state.photo_url
    };
  }
)(Avatar);


export default AvatarContainer;
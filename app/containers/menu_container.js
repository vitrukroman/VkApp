'use strict';

import {connect} from 'react-redux'
import Menu from '../components/menu.jsx';


const MenuContainer = connect(
  state => ({found_users_count: state.found_users_count})
)(Menu);


export default MenuContainer;
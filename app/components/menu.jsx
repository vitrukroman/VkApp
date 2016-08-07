'use strict';

import React from 'react';
import {Link} from 'react-router';

const searchMenuText = found_users_count => (
  `Пошук${found_users_count ? ` (${found_users_count})`: ''}`
);

const Menu = ({found_users_count}) => (
  <ul className="row nav nav-stacked">
    <li role="presentation">
      <Link to="/">Головна</Link>
    </li>
    <li role="presentation">
      <Link to="/search">{searchMenuText(found_users_count)}</Link>
    </li>
  </ul>
);

export default Menu;
'use strict';

import React from 'react';
import {Link} from 'react-router';


const Menu = () => (
  <ul className="row nav nav-stacked">
    <li role="presentation">
      <Link to="/">Головна</Link>
    </li>
    <li role="presentation">
      <Link to="/search">Пошук</Link>
    </li>
  </ul>
);

export default Menu;
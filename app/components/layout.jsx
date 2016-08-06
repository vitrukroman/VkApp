import React, {Component} from 'react';
import AvatarContainer from '../containers/avatar_container';
import Menu from './menu.jsx';

const Layout = ({children}) => (
  <div className="container">
    <div className="row">
      <div className="col-md-2">
        <AvatarContainer />
        <Menu />
      </div>

      <div className="col-md-10">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;

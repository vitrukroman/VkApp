import React, {Component} from 'react';
import AvatarContainer from '../containers/avatar_container';
import MenuContainer from '../containers/menu_container';

const Layout = ({children}) => (
  <div className="container">
    <div className="row">
      <div className="col-md-2">
        <AvatarContainer />
        <MenuContainer />
      </div>

      <div className="col-md-10">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;

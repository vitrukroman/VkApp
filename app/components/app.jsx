'use strict';

import Layout from './layout.jsx';
import React, {Component} from 'react';


class App extends Component {
  componentDidMount() {
    this.props.get_user();
  }

  render() {
    return (
      <Layout children={this.props.children}/>
    );
  }
}


export default App;






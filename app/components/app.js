import LayoutContainer from '../containers/layout_container';
import React, {Component} from 'react';


class App extends Component {
  render() {
    return (
      <LayoutContainer children={this.props.children}></LayoutContainer>
    );
  }
}


export default App;






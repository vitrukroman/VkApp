import React, {Component} from 'react';
import {Link} from 'react-router';

class Layout extends Component {
  componentDidMount() {
    this.props.get_user();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <img src={this.props.photo_url} className="img-rounded"/>
            </div>
            <ul className="row nav nav-stacked">
              <li role="presentation" class="active">
                <Link to="/">Головна</Link>
              </li>
              <li role="presentation">
                <Link to="/search">Пошук</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-9">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;






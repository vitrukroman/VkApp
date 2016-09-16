import React, { Component } from 'react';
import { range } from 'lodash';
import CaptchaContainer from '../containers/captcha_container';
import SearchCriteriaContainer from '../containers/search_criteria_container';
import PersonContainer from '../containers/person_container';

class Search extends Component {
  likeAll() {
    this.props.filtered_users.forEach(
      user => this.props.like_add(user));
  }

  componentDidMount() {
    this.props.search_users();
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge">{this.props.found_users_count}</span>
              Всього
            </li>
            <li className="list-group-item">
              <span className="badge">{this.props.found_users.size}</span>
              <span className="badge">{this.props.filtered_users.size}</span>
              Показано
            </li>
            <li className="list-group-item">
              <button type="button"
                      onClick={() => this.likeAll()}
                      className="btn btn-info">Мені подобається
              </button>
            </li>
            {this.props.captcha.is_active ?
              <li className="list-group-item">
                <CaptchaContainer />
              </li> : ''}
          </ul>
        </div>
        <div className="row">
          <div className="col-md-9">
            {this.props.filtered_users.map(user => <PersonContainer user={user} key={user.uid}/>)}
          </div>
          <div className="col-md-3">
            <SearchCriteriaContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;






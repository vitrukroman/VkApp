import React, {Component} from 'react';
import {range} from 'lodash';
import SearchSelectContainer from '../containers/search_select_container';
import {days, months, ages} from '../constants';

class Search extends Component {
  componentDidMount() {
    this.props.search_users();
  }

  render() {
    console.log(this.props.filtered_users.map (user => user.toJS()));

    const users = this.props.filtered_users.map(user => {
      return (
        <div className="media" key={user.uid}>
          <div className="media-left">
            <img src={user.photo_100} className="img-rounded">
            </img>
          </div>
          <div className="media-body">
            <a href={`https://vk.com/id${user.uid}`}>{`${user.first_name} ${user.last_name}`}</a>
            <br />
            <button type="button"
                    onClick={() => this.props.like_add(user)}
                    className="btn btn-info">Мені подобається</button>
          </div>

        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge">{this.props.found_users_count}</span>
              Всього
            </li>
            <li className="list-group-item">
              <span className="badge">{this.props.found_users.length}</span>
              <span className="badge">{this.props.filtered_users.length}</span>
              Показано
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-9">
            {users}
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Дата народження</label>
              <SearchSelectContainer search_key="birth_day" search_options={days}/>

              <label>Місяць народження</label>
              <SearchSelectContainer search_key="birth_month" search_options={months}/>

              <label>Вік, від</label>
              <SearchSelectContainer search_key="age_from" search_options={ages}/>

              <label>Вік, до</label>
              <SearchSelectContainer search_key="age_to" search_options={ages}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;






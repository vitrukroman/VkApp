import React, {Component} from 'react';
import {range} from 'lodash';
import SearchSelectContainer from '../containers/search_select_container';


class Search extends Component {
  componentDidMount() {
    this.props.search_users();
  }

  render() {
    console.log(this.props.found_users);


    const birth_days = range(1, 32);
    const birth_months = {
      1: 'Cічень',
      2: 'Лютий',
      3: 'Березень',
      4: 'Квітень',
      5: 'Травень',
      6: 'Червень',
      7: 'Липень',
      8: 'Серпень',
      9: 'Вересень',
      10: 'Жовтень',
      11: 'Листопад',
      12: 'Грудень',
    };
    const ages = range(15, 30);
    const users = this.props.found_users.map(user => {
      return (
        <div className="media" key={user.uid}>
          <div className="media-left">
            <img src={user.photo_100} className="img-rounded">
            </img>
          </div>
          <div className="media-body">
            <a href={`https://vk.com/id${user.uid}`}>{`${user.first_name} ${user.last_name}`}</a>
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
              <SearchSelectContainer search_key="birth_day" search_options={birth_days}/>

              <label>Місяць народження</label>
              <SearchSelectContainer search_key="birth_month" search_options={birth_months}/>

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






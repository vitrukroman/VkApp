import React, {Component} from 'react';

class Search extends Component {
  componentDidMount() {
    this.props.search_users();
  }


  onBirthDayChange(event) {
    this.props.change_birth_day(event.target.value);
  }

  render() {
    console.log(this.props.found_users);


    const birth_days = [...Array(32)]
      .map((_,i) => <option key={i}>{i}</option>)
      .slice(1);
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
              <select className="form-control" onChange={e => this.onBirthDayChange(e)}>
                {birth_days}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;






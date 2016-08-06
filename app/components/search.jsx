import React, {Component} from 'react';

class Search extends Component {
  render() {
    return (
      <div className="container-fluid">
        <input type="email"
               className="form-control"
               id="search_query"
               placeholder="Почніть вводити будь-яке імя"/>
        <div className="Row">
          <div className="col-md-3 col-md-offset-9">
            <div className="form-group">
              <div className="dropdown">
                <button type="button" className="btn btn-default btn-xsdropdown-toggle"
                        data-toggle="dropdown">
                  <span>Вибір країни</span>
                  <span className="caret"></span>

                </button>
                <ul className="dropdown-menu">
                  <li><a>Dropdown link</a></li>
                  <li><a>Dropdown link</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;






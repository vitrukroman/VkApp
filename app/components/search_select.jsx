'use strict'

import React, {Component} from 'react';
import {map} from 'lodash';


class SearchSelect extends Component {
  onChange(event) {
    this.props.on_change(this.props.search_key, event.target.value);
  }

  render() {
    const options = map(this.props.search_options,
      (value, key) => <option key={key} value={key}>{value}</option>
    );
    return (
      <select className="form-control"
              onChange={e => this.onChange(e)}
              value={this.props.search_criteria[this.props.search_key]}>
        <option />
        {options}
      </select>
    );
  }
}


export default SearchSelect;
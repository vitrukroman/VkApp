'use strict'

import React, {Component} from 'react';
import {isArray, map} from 'lodash';


class SearchSelect extends Component {
  onChange(event) {
    this.props.on_change(this.props.search_key, event.target.value);
  }

  getKey(key, addOne) {
    if (addOne) {
      return key + 1;
    }

    return key;
  }

  render() {
    const addOne = isArray(this.props.search_options);
    const options = map(this.props.search_options,
      (value, key) => <option key={this.getKey(key, addOne)}
                              value={this.getKey(key, addOne)}>{value}</option>
    );
    return (
      <select className="form-control" onChange={e => this.onChange(e)}>
        <option />
        {options}
      </select>
    );
  }
}


export default SearchSelect;
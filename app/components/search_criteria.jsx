'use strict';

import React, { Component } from 'react';
import SearchSelectContainer from '../containers/search_select_container';


class SearchCriteria extends Component {
  render() {
    return <div className="form-group">
      <label>Дата народження</label>
      <SearchSelectContainer search_key="birth_day" search_options={this.props.days}/>

      <label>Місяць народження</label>
      <SearchSelectContainer search_key="birth_month" search_options={this.props.months}/>

      <label>Вік, від</label>
      <SearchSelectContainer search_key="age_from" search_options={this.props.ages}/>

      <label>Вік, до</label>
      <SearchSelectContainer search_key="age_to" search_options={this.props.ages}/>
    </div>;
  }
}

export default SearchCriteria;
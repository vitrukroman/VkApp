'use strict';

import {connect} from 'react-redux'
import SearchCriteria from '../components/search_criteria.jsx';
import {days, months, ages} from '../constants';


const SearchCriteriaContainer = connect(
  state => ({
    days,
    months,
    ages
  })
)(SearchCriteria);


export default SearchCriteriaContainer;
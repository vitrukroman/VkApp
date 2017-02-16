

import { connect } from 'react-redux';
import SearchCriteria from '../components/search_criteria.jsx';
import { days, months, ages, sort_types, statuses, birth_years } from '../constants';


const SearchCriteriaContainer = connect(
  state => ({
    days,
    months,
    ages,
    sort_types,
    statuses,
    birth_years,
  })
)(SearchCriteria);


export default SearchCriteriaContainer;



import { connect } from 'react-redux';
import App from '../components/app.jsx';
import config from '../../config.json';


const AppContainer = connect(
  () => ({}),
  (dispatch) => {
    return {
      get_user() {
        dispatch({ type: 'GET_USER', query_params: config.main_user_criteria });
      },
    };
  }
)(App);


export default AppContainer;

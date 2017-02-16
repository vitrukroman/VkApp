

import { connect } from 'react-redux';
import Captcha from '../components/captcha';
import actions from '../actions';

const CaptchaContainer = connect(
  (state) => {
    return {
      captcha: state.captcha,
    };
  },
  dispatch => ({
    captcha_handled(captcha_key) {
      dispatch(actions.captcha_handled(captcha_key));
    },
  })
)(Captcha);


export default CaptchaContainer;



import React, { Component } from 'react';


class Captcha extends Component {

  onSubmit(e) {
    e.preventDefault();
    this.props.captcha_handled(this.refs.captcha_input.value);
  }

  render() {
    return this.props.captcha.is_active ? <form onSubmit={e => this.onSubmit(e)}>
      <img src={this.props.captcha.image_url} />
      <input ref="captcha_input" />
      <button type="submit"
        className="btn btn-info"
      >Далі
      </button>
    </form> : null;
  }
}

export default Captcha;

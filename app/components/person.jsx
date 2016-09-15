'use strict';

import React, { Component } from 'react';


class Person extends Component {
  render() {
    return <div className="media">
      <div className="media-left">
        <img src={this.props.user.photo_100} className="img-rounded">
        </img>
      </div>
      <div className="media-body">
        <a
          href={`https://vk.com/id${this.props.user.uid}`}>{`${this.props.user.first_name} ${this.props.user.last_name}`}</a>
        <br />
        <button type="button"
                onClick={() => this.props.like_add(this.props.user)}
                className="btn btn-info">Мені подобається
        </button>
      </div>
    </div>;
  }
}

export default Person;
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      children
    } = this.props;

    const className = classNames(
      'briz'
    )
    return (
      <button className={className}>
        { children ? children : null }
      </button>
    );
  }
}

export default Button;

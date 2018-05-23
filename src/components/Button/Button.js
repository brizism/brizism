import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { COLORS, GRADIENTS, BUTTON_SIZE } from '../../options';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf([ ...COLORS ]),
    gradient: PropTypes.oneOf([ ...GRADIENTS ]),
    size: PropTypes.oneOf([ ...BUTTON_SIZE ])
  }

  render() {
    const {
      children,
      color,
      gradient,
      size
    } = this.props;

    const className = classNames(
      'br_button',
      color,
      gradient,
      size
    )
    return (
      <button className={className}>
        { children ? children : null }
      </button>
    );
  }
}

Button.defaultProps = {
  color: 'blue'
}

export default Button;

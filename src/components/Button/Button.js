import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { COLORS, GRADIENTS, BUTTON_SIZE } from '../../options';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf([ ...COLORS ]),
    gradient: PropTypes.oneOf([ ...GRADIENTS ]),
    size: PropTypes.oneOf([ ...BUTTON_SIZE ]),
    round: PropTypes.bool
  }

  render() {
    const {
      children,
      color,
      gradient,
      size,
      round
    } = this.props;

    const className = classNames(
      'br__button',
      gradient ? `gradient__${gradient}` : `color__${color}`,
      size,
      round ? 'round' : ''
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

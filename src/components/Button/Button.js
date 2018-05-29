import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSClassnames, { namespace } from '../../options/CSSClassnames';
import { COLORS, GRADIENTS, BUTTON_SIZE, SOCIAL_MEDIA } from '../../options';

const CLASS_ROOT = CSSClassnames.BUTTON;

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf([ ...COLORS ]),
    gradient: PropTypes.oneOf([ ...GRADIENTS ]),
    size: PropTypes.oneOf([ ...BUTTON_SIZE ]),
    social: PropTypes.oneOf([ ...SOCIAL_MEDIA ]),
    round: PropTypes.bool
  }

  render() {
    const {
      children,
      color,
      gradient,
      size,
      social,
      round
    } = this.props;

    const className = classNames(
      CLASS_ROOT,
      gradient ? gradient : color,
      size,
      social ? `social__${social}` : '',
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

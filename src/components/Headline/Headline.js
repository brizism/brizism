import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { COLORS, GRADIENTS, HEADLINE_SIZE } from '../../options';

class Headline extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf([ ...COLORS ]),
    gradient: PropTypes.oneOf([ ...GRADIENTS ]),
    size: PropTypes.oneOf([ ...HEADLINE_SIZE ])
  }

  render() {
    const {
      children,
      color,
      gradient,
      size
    } = this.props;
    
    const className = classNames(
      'br__headline',
      gradient ? `gradient__${gradient}` : `color__${color}`,
    )

    const HeadlineSize = size.toLowerCase();

    return (
      <HeadlineSize className={className}>
        { children ? children : null }
      </HeadlineSize>
    );
  }
}

Headline.defaultProps = {
  color: 'blue'
}

export default Headline;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSClassnames, { namespace } from '../../options/CSSClassnames';
import { COLORS, GRADIENTS, HEADLINE_SIZE } from '../../options';

const CLASS_ROOT = CSSClassnames.HEADLINE;

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
      CLASS_ROOT,
      gradient ? gradient : color,
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

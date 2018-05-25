import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { HEADLINE_SIZE, GRADIENTS, COLORS } from '../../options';

class Headline extends Component {
  render() {
    const {
      children,
      size
    } = this.props;
    
    const className = classNames(
      'br_headline'
    )

    const HeadlineSize = size.toLowerCase();

    return (
      <HeadlineSize className={className}>
        { children ? children : null }
      </HeadlineSize>
    );
  }
}

export default Headline;

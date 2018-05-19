import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import * as colors from '../../styles/colors';

const buttonSizes = {
  small: {
    'font-size': '1.4rem',
    'line-height': '3rem',
    padding: '0 1.5rem',
  },
  medium: {
    'font-size': '1.6rem',
    'line-height': '4rem',
    padding: '0 1.7rem',
  },
  large: {
    'font-size': '1.8rem',
    'line-height': '5rem',
    padding: '0 3.5rem',
  },
  wide: {
    'font-size': '1.6rem',
    'line-height': '4rem',
    padding: '0 4.2rem',
  },
  extraWide: {
    'font-size': '1.6rem',
    'line-height': '4rem',
    padding: '0 7.2rem',
  },
  fullWidth: {
    'font-size': '1.6rem',
    'line-height': '4rem',
    padding: '0 .8rem',
  },
};

const buttonTypes = {
  primary: {
    'background': colors['blue'],
    'insideBorder': colors['lightBlue']
  },
  success: {
    'background': colors['green'],
    'insideBorder': colors['darkGreen']
  },
  danger: {
    'background': colors['red'],
    'insideBorder': colors['orange']
  },
  warning: {
    'background': colors['yellow'],
    'insideBorder': colors['darkYellow']
  }
}

function setDisplay({ size }) {
  return size === 'fullWidth' ? 'block' : 'inline-block';
}

function setWidth({ size }) {
  return size === 'fullWidth' ? '100%' : 'initial';
}

const Button = styled.button`
  background: ${({ buttonStyle }) => buttonTypes[buttonStyle]['background']};
  border: none;
  border-radius: .5rem;
  border: .2rem solid ${({ borderColor })  => colors[borderColor]};
  box-shadow: inset 0 0 0 .3rem ${({ buttonStyle }) => buttonTypes[buttonStyle]['insideBorder']},0 .3rem 0 0 #e7e6e4;
  color: ${({ fontColor })  => colors[fontColor]};
  cursor: pointer;
  display: ${setDisplay};
  font-size: ${({ size }) => buttonSizes[size]['font-size']};
  line-height: ${({ size }) => buttonSizes[size]['line-height']};
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: ${({ size }) => buttonSizes[size]['padding']};
  width: ${setWidth};
  transition: all 300ms ease;
  &:hover {
    box-shadow: inset 0 0 0 .3rem ${({ insetShadowColor })  => colors[insetShadowColor]},0 .4rem 0 0 #e7e6e4;
    transform: translateY(-.2rem);
  };
  &:active {
    box-shadow: inset 0 0 0 .4rem ${({ insetShadowColor })  => colors[insetShadowColor]};
    transform: translateY(.3rem);
  }
`;

Button.defaultProps = {
  buttonStyle: 'primary',
  buttonColor: 'pink',
  fontColor: 'white',
  size: 'medium',
  borderColor: 'slate'
};

export default Button;

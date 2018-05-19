import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './blocks/Button/Button.jsx';

class Brizism extends Component {
  render() {
    return (
      <div>
       <Button buttonStyle="warning">Click me</Button>
      </div>
    );
  }
}

export default Brizism;

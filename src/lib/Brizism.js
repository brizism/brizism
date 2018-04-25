import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './blocks/Button/Button.jsx';

class Brizism extends Component {
  render() {
    return (
      <div>
        <div>
          <Button
            bgColor="green"
            size="small"
            insetShadowColor="darkGreen"
          >
            small
          </Button>
        </div>
        <div>
          <Button
            bgColor="red"
            size="small"
            insetShadowColor="orange"
          >
            small
          </Button>
        </div>
        <div>
          <Button
            bgColor="yellow"
            size="small"
            insetShadowColor="darkYellow"
          >
            small
          </Button>
        </div>
        <div>
          <Button
            bgColor="blue"
            size="medium"
            insetShadowColor="lightBlue"
          >
            medium
          </Button>
        </div>
        <div>
          <Button
            bgColor="purple"
            size="medium"
            insetShadowColor="lightPurple"
          >
            medium
          </Button>
        </div>
        <div>
          <Button
            bgColor="hotPink"
            size="medium"
            insetShadowColor="lightPink"
          >
            medium
          </Button>
        </div>
        <div>
          <Button
            bgColor="darkSmoke"
            size="large"
            insetShadowColor="smoke"
          >
            large
          </Button>
        </div>
        <div>
          <Button
            bgColor="darkSnow"
            size="wide"
            insetShadowColor="snow"
          >
            wide
          </Button>
        </div>
        <div>
          <Button
            bgColor="steel"
            size="extraWide"
            insetShadowColor="slate"
          >
            extra wide
          </Button>
        </div>
        <div>
          <Button
            bgColor="yellow"
            size="fullWidth"
            insetShadowColor="darkYellow"
          >
            full width
          </Button>
        </div>
      </div>
    );
  }
}

export default Brizism;

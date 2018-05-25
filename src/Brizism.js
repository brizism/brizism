import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button';
import Headline from './components/Headline';

class Brizism extends Component {
  render() {
    return (
      <div>
       <Button>Click here!</Button>
       <Button gradient='retro-wagon' size='small'>Submit</Button>
       <Button gradient='retro-wagon' size='medium'>Submit</Button>
       <Button gradient='retro-wagon' size='large'>Submit</Button>
       <Button gradient='retro-wagon' size='wide'>Submit</Button>
       <Button gradient='retro-wagon' size='extra-wide'>Submit</Button>
       <Button gradient='retro-wagon' size='full-width'>Submit</Button>
       <Headline size='h1'>Header h1</Headline>
       <Headline size='h2'>Header h2</Headline>
       <Headline size='h3'>Header h3</Headline>
       <Headline size='h4'>Header h4</Headline>
       <Headline size='h5'>Header h5</Headline>
      </div>
    );
  }
}

export default Brizism;

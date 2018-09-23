import React, {Component} from 'react';
import {getMedia} from './api';
import styled from 'styled-components';
import CompositeImage from './components/CompositeImage';

const StyledApp = styled.div``;

class App extends Component {
  state = {
    image: {},
  };

  componentDidMount () {
    getMedia ().then (image => {
      this.setState (() => ({image}));
    });
  }

  render () {
    return (
      <StyledApp>
        <CompositeImage image={this.state.image} />
      </StyledApp>
    );
  }
}

export default App;

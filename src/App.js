import React, {Component} from 'react';
import CompositeImage from './components/CompositeImage';

class App extends Component {
  render () {
    const image = {
      src: './media/tile.jpg',
      logo: './media/logo.png',
      title: 'Home and Away',
      production: '7 Network',
    };

    return <CompositeImage image={image} />;
  }
}

export default App;

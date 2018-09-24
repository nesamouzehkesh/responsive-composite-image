import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CompositeImage from '../';

const mockImage = {
  src: './media/tile.jpg',
  logo: './media/logo.png',
  title: 'Home and Away',
  production: '7 Network',
};

describe ('Test CompositeImage component', () => {
  it ('renders CompositeImage component normally and checks against snapshot', () => {
    const element = renderer
      .create (<CompositeImage image={mockImage} />)
      .toJSON ();

    expect (element).toMatchSnapshot ();
  });

  it ('renders CompositeImage component normally with margin and checks against snapshot', () => {
    const element = renderer
      .create (<CompositeImage image={mockImage} margin="10px" />)
      .toJSON ();

    expect (element).toMatchSnapshot ();
  });

  it ('renders CompositeImage component normally with opacity and checks against snapshot', () => {
    const element = renderer
      .create (<CompositeImage image={mockImage} opacity="1" />)
      .toJSON ();

    expect (element).toMatchSnapshot ();
  });
});

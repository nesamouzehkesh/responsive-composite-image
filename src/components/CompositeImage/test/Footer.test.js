import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Footer from '../Footer';

describe ('Test CompositeImage Footer component', () => {
  it ('renders Footer component normally and checks against snapshot', () => {
    const element = renderer
      .create (<Footer logo="test.png" title="Footer title" />)
      .toJSON ();

    expect (element).toMatchSnapshot ();
  });

  it ('renders Footer component normally with opacity and checks against snapshot', () => {
    const element = renderer
      .create (<Footer logo="test.png" title="Footer title" opacity="0.6" />)
      .toJSON ();

    expect (element).toMatchSnapshot ();
  });
});

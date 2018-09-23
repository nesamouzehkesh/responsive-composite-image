import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Body from '../Body';

describe ('Test CompositeImage Body component', () => {
  it ('renders Body component normally and check with snapshot', () => {
    const element = renderer.create (<Body src="test.png" />).toJSON ();

    expect (element).toMatchSnapshot ();
  });
});

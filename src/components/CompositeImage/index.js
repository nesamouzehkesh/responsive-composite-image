import React from 'react';
import Body from './Body';
import Footer from './Footer';

function CompositeImage({image}) {
  return (
    <div>
      <Body src={image.src} />
      <Footer title={image.title} logo={image.logo} />
    </div>
  );
}

export default CompositeImage;

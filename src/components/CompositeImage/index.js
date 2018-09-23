import React from 'react';
import ImageBody from './ImageBody';
import ImageFooter from './ImageFooter';

function CompositeImage({image}) {
  return (
    <div>
      <ImageBody src={image.src} />
      <ImageFooter title={image.title} logo={image.logo} />
    </div>
  );
}

export default CompositeImage;

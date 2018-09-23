import React from 'react';

function ImageFooter({logo, title}) {
  return (
    <div>
      <img src={logo} title={title} />
      {logo} {title}
    </div>
  );
}
export default ImageFooter;

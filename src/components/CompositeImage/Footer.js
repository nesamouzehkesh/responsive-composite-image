import React from 'react';

function Footer({logo, title}) {
  return (
    <div>
      <img src={logo} title={title} />
      {logo} {title}
    </div>
  );
}
export default Footer;

import React, {Component} from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

function Body({src}) {
  return <StyledImage src={src} />;
}

Body.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Body;

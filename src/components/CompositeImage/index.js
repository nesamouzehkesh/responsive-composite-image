import React, {Component} from 'react';
import styled from 'styled-components';
import Body from './Body';
import Footer from './Footer';

const StyledCompositeImage = styled.div` 
  width:${props => props.width.small || '100%'};
  background-color:#000;
  position:relative;
  display: inline-block;
  margin: ${props => props.margin};
  /* Tablets, Ipads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: ${props => props.width.medium || '450px'};
  }
  /* Laptops, Desktops */
  @media all and (min-width: 1025px) and (max-width: 1280px) {
    width: ${props => props.width.large || '315px'};
  }
  /* Desktops */
  @media only screen and (min-width: 1281px) {
    width: ${props => props.width.large || '315px'};
  }  
`;

function CompositeImage({image, width, margin, opacity}) {
  return (
    <StyledCompositeImage width={width} margin={margin}>
      <Body src={image.src} />
      <Footer title={image.title} logo={image.logo} opacity={opacity} />
    </StyledCompositeImage>
  );
}

CompositeImage.defaultProps = {
  width: {},
  margin: '0px',
  opacity: '0.7',
};

export default CompositeImage;

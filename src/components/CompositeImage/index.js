import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Body from './Body';
import Footer from './Footer';

const StyledCompositeImage = styled.div` 
  width:${props => props.width.small || '100%'};
  background-color:#000;
  position:relative;
  display: inline-block;
  margin: ${props => props.margin};

  /* Tablets, iPads (portrait) */
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

CompositeImage.propTypes = {
  image: PropTypes.shape ({
    src: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    production: PropTypes.string,
  }),
  width: PropTypes.shape ({
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
  }),
  margin: PropTypes.string,
  opacity: PropTypes.string,
};

CompositeImage.defaultProps = {
  width: {},
  margin: '0px',
  opacity: '0.7',
};

export default CompositeImage;

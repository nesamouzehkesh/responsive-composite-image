import React, {Component} from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  width:100%;
  height:30%;
  background-color: rgba(0, 0, 0, ${props => props.opacity});
  position:absolute;
  bottom:0px;
  z-index: 1;
`;

const StyledTitle = styled.span`
  font-size: 18px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: #fff;
  /* Tablets, Ipads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }
  /* Laptops, Desktops */
  @media all and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 15px;
  }
  /* Desktops */
  @media only screen and (min-width: 1281px) {
    font-size: 15px;
  }
`;

const StyledLogo = styled.img`
  margin: 10px;
  width: 8%;
  /* Laptops, Desktops */
  @media all and (min-width: 1025px) and (max-width: 1280px) {
    width: 9%;
  }
  /* Desktops */
  @media only screen and (min-width: 1281px) {
    width: 10%;
  }  
`;

function Footer({logo, title, opacity}) {
  return (
    <StyledFooter opacity={opacity}>
      <StyledLogo src={logo} title={title} />
      <StyledTitle>{title}</StyledTitle>
    </StyledFooter>
  );
}

Footer.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  opacity: PropTypes.string,
};

export default Footer;

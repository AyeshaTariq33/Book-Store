import React from 'react';
import { Container } from '../../styles/GlobalStyles.styles';
import {Flex} from '../../styles/helpers.styles'
import { NavbarSection, LogoSection, NavLinks, SignInButton } from './Navbar.styles';
import Logo from '../../assets/Logo.svg';

const Navbar = () => {
  return (
    <NavbarSection>          
      <Container>            
        <Flex justify="space-between" align="middle">
          <LogoSection>
            <img src={Logo} alt='Logo' />
          </LogoSection>
          <NavLinks>
            <a href="#home" className="active">Home</a>
            <a href="#about">About us</a>
            <a href="#courses">Courses</a>
            <a href="#service">Our Service</a>
            <a href="#contact">Contact us</a>
          </NavLinks>
          <SignInButton>Sign In</SignInButton>
        </Flex>
      </Container>
    </NavbarSection>
  );
};

export default Navbar;
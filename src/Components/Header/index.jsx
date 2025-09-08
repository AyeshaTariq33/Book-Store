import React from 'react';
import { Container } from '../../styles/GlobalStyles.styles';
import {Flex} from '../../styles/helpers.styles'
import { NavbarSection, Logo, NavLinks} from './Header.styles';
import Button from './../Buttons/index';
import Logos from '../../assets/Logo.svg';

const Navbar = () => {
  return (
    <NavbarSection>          
      <Container>            
        <Flex justify="space-between" align="middle">
          <Logo>
            <img src={Logos} alt='Logo' />
          </Logo>
          
          <Flex align="middle" style={{ gap: 'var(--space-xl)' }}>
            <NavLinks>
              <a href="#home" className="active">Home</a>
              <a href="#about">About us</a>
              <a href="#courses">Courses</a>
              <a href="#service">Our Service</a>
              <a href="#contact">Contact us</a>
            </NavLinks>
            <Button>Sign In</Button>
          </Flex>
        </Flex>
      </Container>
    </NavbarSection>
  );
};

export default Navbar;
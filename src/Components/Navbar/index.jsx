import React from 'react';
import { Container } from '../../styles/GlobalStyles.styles';
import { NavbarSection, NavLinks} from './Navbar.styles';
import Button from '../Buttons/index';
import Logos from '../../assets/Logo.svg';

const Navbar = () => {
  return (
    <NavbarSection>          
      <Container>            
        <div className="flex-content">
          
            <div className="Logo">
              <img src={Logos} alt='Logo' />
            </div>
          
            <div className="flex-content">
              <NavLinks>
                <a href="#home" className="active">Home</a>
                <a href="#about">About us</a>
                <a href="#courses">Courses</a>
                <a href="#service">Our Service</a>
                <a href="#contact">Contact us</a>
              </NavLinks>
              <Button>
                Sign In
              </Button>
            </div>
        </div>
      </Container>
    </NavbarSection>
  );
};

export default Navbar;
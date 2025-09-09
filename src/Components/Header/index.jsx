import React from 'react';
import { Container } from '../../styles/GlobalStyles.styles';
import {Section, Background, ImageWrapper} from './Header.styles';
import Button from '../Buttons/index';
import backGround from '../../assets/headerBg.png';
import image from '../../assets/headerImage.png';
import ellipse from '../../assets/headerEllipse.png';

const Header = () => {
  return (
      <Section>
        <Container>
          <Background>
              <img src={backGround} alt='background' />
          </Background>
          <div className="flex-content">
            <div className="content">
              <h1>The <span>Smart </span> <br />Choice For <span>Future</span></h1>
              <p>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
              <Button>Continue</Button>
            </div>
            <ImageWrapper>
              <img src={image} alt='header display' />
              <img className="ellipse" src={ellipse} alt='ellipse' />
            </ImageWrapper>
          </div>
        </Container>
      </Section>
  );
};

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyle';
import { HeroImg, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyle';

const Hero = () => {
  const handleClick = () => {
    window.location = "#Product";
  };
  return (
    <div>
      <HeroSection>
          <HeroImg src="./assests/A1.jpg"/>
          <Container>
              <MainHeading>Your data is secure with us</MainHeading>
              <HeroText>We handle all areas of software development, including analysis, architecture, design, programming, testing, deployment, and continued maintenance. Our goal is to establish competitive advantages through information technology as well.</HeroText>
              <ButtonWrapper>
                  <Link to="signup">
                    <Button>Get Started</Button>
                  </Link>
                   <HeroButton onClick={handleClick}>Find More</HeroButton>

              </ButtonWrapper>
          </Container>
      </HeroSection>
    </div>
  )
}

export default Hero

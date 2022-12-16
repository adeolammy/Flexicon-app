import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyle';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyle';

const Hero = () => {
  return (
    <div>
      <HeroSection>
          <HeroVideo src="./assests/hero.mp4"/>
          <Container>
              <MainHeading>Your data is secure with us</MainHeading>
              <HeroText>We provide the best security systems for clients all over the world</HeroText>
              <ButtonWrapper>
                  <Link to="signup">
                    <Button>Get Started</Button>
                  </Link>
                  <HeroButton>Find More</HeroButton>
              </ButtonWrapper>
          </Container>
      </HeroSection>
    </div>
  )
}

export default Hero

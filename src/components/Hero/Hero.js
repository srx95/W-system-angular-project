import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
    <HeroVideo src="./assets/w-system.mp4" autoPlay muted loop/>
    <Container>
        <MainHeading>Vasi podaci su sigurni sa nama</MainHeading>
        <HeroText>
            Pruzamo najbolje usluge sigurnosti vaseg doma
        </HeroText>
        <ButtonWrapper>
            <Link to="contact">
                <Button>Kontaktirajte nas</Button>
            </Link>
            <Link to="marketing">
            <HeroButton>Saznajte vise</HeroButton>
            </Link>
        </ButtonWrapper>
    </Container>
</HeroSection>

  );
};

export default Hero;
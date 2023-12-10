import React from 'react';
import Button from '../Button/Button';
import { Container } from '../Components.styled';
import { HeroText, HeroTitle, HeroWrap } from '../HeroHome/Hero.styled';
import car from '../../images/hyundai.png';

export default function Hero({}) {
  return (
    <section>
      <Container>
        <HeroWrap>
          <div>
            <HeroTitle>
              Your <span>favorites</span> cars.
            </HeroTitle>
            <HeroText>
              Get a car wherever and whenever you need it! <br />
              Feel free to contact us:
            </HeroText>
            <Button
              as="a"
              href="tel:+380634767370"
              text="Call us!"
              paddingX="60px"
              width="auto"
            />
          </div>
          <div>
            <img src={car} alt="Car photo" width={600}></img>
          </div>
        </HeroWrap>
      </Container>
    </section>
  );
}

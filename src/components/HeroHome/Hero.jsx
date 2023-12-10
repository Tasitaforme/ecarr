import React from 'react';
import Button from '../Button/Button';
import { Container } from '../Components.styled';
import { HeroText, HeroTitle, HeroWrap } from './Hero.styled';
import car from '../../images/lamborghini.png';
import { useNavigate } from 'react-router-dom';

export default function Hero({}) {
  const navigate = useNavigate();
  return (
    <section>
      <Container>
        <HeroWrap>
          <div>
            <HeroTitle>
              Find, book and rental car in <span>Easy</span> steps.
            </HeroTitle>
            <HeroText>
              Get a car wherever and whenever you need it! <br />
              All you need is to choose a car:
            </HeroText>
            <Button
              as="a"
              text="Choose a car"
              onClick={() => navigate('/catalog', { replace: true })}
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

import logo from '../../images/car.svg';
import { Container } from '../Components.styled';
import { Logo } from '../Header/Header.styled';
import { FooterText, FooterWrap } from './Footer.styled';
import sprite from '../../images/sprite.svg';

export default function Footer() {
  return (
    <footer>
      <Container>
        <FooterWrap>
          <Logo to="/">
            <img src={logo} alt="Car logo" width={100}></img>
            <span style={{ paddingLeft: '0.5em' }}>ECARR</span>
          </Logo>
          <FooterText>
            <p>Made by Tasita. Copyright © Tasita®. All rights reserved.</p>
            <a
              href="https://www.linkedin.com/in/tasita/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <p style={{ display: 'inline-flex', paddingTop: '8px' }}>
                Feel free to contact me
                <svg>
                  <use href={sprite + '#linkedin'}></use>
                </svg>
              </p>
            </a>
          </FooterText>
        </FooterWrap>
      </Container>
    </footer>
  );
}

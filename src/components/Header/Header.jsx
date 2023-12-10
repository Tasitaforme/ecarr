import { HeaderNav, HeaderNavLink, HeaderWrap, Logo } from './Header.styled';

import logo from '../../images/car.svg';
import { Container } from '../Components.styled';

export default function Header() {
  return (
    <header>
      <Container>
        <HeaderWrap>
          <Logo to="/">
            <img src={logo} alt="Car logo" width={100}></img>
            <span style={{ paddingLeft: '0.5em' }}>ECARR</span>
          </Logo>
          <HeaderNav>
            <HeaderNavLink to="/">Home</HeaderNavLink>
            <HeaderNavLink to="/catalog">Catalog</HeaderNavLink>
            <HeaderNavLink to="/favorites">Favorites</HeaderNavLink>
          </HeaderNav>
        </HeaderWrap>
      </Container>
    </header>
  );
}

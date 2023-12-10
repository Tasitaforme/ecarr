import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Logo = styled(Link)`
  font-family: ManropeBold;
  text-transform: uppercase;
  color: var(--text-color-full);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  letter-spacing: 0.5em;
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding: 18px 0;
  gap: 16px;
  font-family: ManropeBold;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;
export const HeaderNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 24px;
`;

export const HeaderNavLink = styled(NavLink)`
  font-size: 20px;
  transition: color var(--transition-dur-and-fun);

  &.active,
  &:hover {
    color: var(--accent-color-full);
  }
`;

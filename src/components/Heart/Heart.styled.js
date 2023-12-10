import styled from 'styled-components';

export const HeartWrap = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  color: var(--accent-color);
  transition: color var(--transition-dur-and-fun);

  &:hover {
    color: var(--accent-color-full);
  }

  & svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;

    fill: ${props => (props.$isInFavorites ? 'currentColor' : 'transparent')};
    transition: fill var(--transition-dur-and-fun);
  }
`;

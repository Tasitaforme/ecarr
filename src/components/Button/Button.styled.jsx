import styled from 'styled-components';

export const Btn = styled.button`
  font-family: ManropeSemiBold;
  padding: 12px;
  width: 100%;
  border-radius: 12px;
  background-color: var(--accent-color);
  color: var(--white-color);
  font-size: 14px;

  &:hover {
    background-color: var(--accent-color-full);
    transition: background-color var(--transition-dur-and-fun);
  }
`;

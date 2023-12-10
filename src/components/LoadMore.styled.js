import styled from 'styled-components';

export const LoadMore = styled.button`
  color: var(--accent-color);
  font-family: ManropeMedium;
  font-size: 16px;
  line-height: 1.5;
  text-decoration-line: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;

  transition: color var(--transition-dur-and-fun);

  &:hover {
    color: var(--accent-color-full);
  }
`;

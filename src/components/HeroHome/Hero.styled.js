import styled from 'styled-components';

export const HeroWrap = styled.div`
  margin-top: 0 auto;
  padding-top: 72px;
  padding-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 100px;
  }
`;
export const HeroTitle = styled.h1`
  font-size: 56px;

  margin-bottom: 24px;
  max-width: 450px;

  & span {
    color: var(--accent-color);
  }
`;

export const HeroText = styled.p`
  margin-bottom: 36px;
`;

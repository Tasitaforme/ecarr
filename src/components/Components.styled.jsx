import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 12px;
  padding-right: 12px;

  @media screen and (min-width: 768px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 128px;
  }
`;

export const TitleSecond = styled.h2`
  text-align: center;
  font-family: ManropeBold;
  font-size: 36px;
  padding-top: 20px;
`;

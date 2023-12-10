import styled from 'styled-components';

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding: 18px 0;
  gap: 16px;
  font-family: ManropeBold;
  margin-top: 40px;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    fill: currentColor;
    margin-left: 8px;
  }
`;

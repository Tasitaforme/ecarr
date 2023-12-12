import styled from 'styled-components';
import bgMobile1 from '../../images/error-mobile-1x.jpg';
import bgMobile2 from '../../images/error-mobile-2x.jpg';
import bgTablet1 from '../../images/error-tablet-1x.jpg';
import bgTablet2 from '../../images/error-tablet-2x.jpg';
import bgDesktop1 from '../../images/error-desktop-1x.jpg';
import bgDesktop2 from '../../images/error-desktop-2x.jpg';

export const Section = styled.div`
  background-image: url(${bgMobile1});
  background-image: -webkit-image-set(
    url(${bgMobile1}) 1x,
    url(${bgMobile2}) 2x
  );

  background-repeat: no-repeat;
  background-size: contain;
  background-color: var(--light-color);
  background-position: bottom 0 right 10%;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    background-image: url(${bgTablet1});
    background-image: -webkit-image-set(
      url(${bgTablet1}) 1x,
      url(${bgTablet2}) 2x
    );
    background-position: bottom 0 right 0%;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bgDesktop1}) 771px;
    background-image: -webkit-image-set(
      url(${bgDesktop1}) 1x,
      url(${bgDesktop2}) 2x
    );
  }
`;

export const Left = styled.div`
  background: var(--light-color);
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  padding: 36px;
  display: flex;
`;

export const Content = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title404 = styled.h1`
  font-family: ManropeBold;
  font-size: 60px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
  }
`;

export const Text404 = styled.p`
  font-family: ManropeMedium;
  font-size: 14px;
  margin-top: 14px;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 28px;
  }
`;

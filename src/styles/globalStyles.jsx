import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import ManropeRegular from '../fonts/Manrope-Regular.ttf';
import ManropeMedium from '../fonts/Manrope-Medium.ttf';
import ManropeSemiBold from '../fonts/Manrope-SemiBold.ttf';
import ManropeBold from '../fonts/Manrope-Bold.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'ManropeRegular';
        src: local('ManropeRegular'),
        url(${ManropeRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeMedium';
        src: local('ManropeMedium'),
        url(${ManropeMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeSemiBold';
        src: local('ManropeSemiBold'),
        url(${ManropeSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeBold';
        src: local('ManropeBold'),
        url(${ManropeBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    
    /* body {
        font-family: ManropeRegular;
    } */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    color: var(--text-color-full);
    }

    p {
    font-family: ManropeRegular;
    color: var(--text-color-translucent);
    line-height: 1.5;
    }
`;

export default GlobalStyle;

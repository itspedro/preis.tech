import { createGlobalStyle } from 'styled-components';
import svgToMiniDataURI from 'mini-svg-data-uri';

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.textBold};
        background-size: 40px 40px;
        background-image: radial-gradient(circle, ${props => props.theme.text20} 1px, rgba(0, 0, 0, 0) 1px);
    };

`

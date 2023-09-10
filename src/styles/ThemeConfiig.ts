import { createGlobalStyle } from 'styled-components';
import svgToMiniDataURI from 'mini-svg-data-uri';
import { addOpacity } from '@/utils/misc'

export const GlobalStyles = createGlobalStyle`

    ::-webkit-scrollbar {
        width: 10px;
    };

    ::-webkit-scrollbar-track {
        background: ${props => props.theme.text20}; 
    };
    
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.text};
    };

    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.text80}; 
    };

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 110px;
    };

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: none;
        text-decoration: none;
        list-style: none;
        outline: none;
    };

    .bg-image { 
        background-color: transparent; 
        background-size: 40px 40px;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("${props => svgToMiniDataURI(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='${addOpacity(props.theme.text.toString(), Number(0.1))}' stroke-dasharray='5 3' transform='scale(1, -1)'><path d='M0 .5H31.5V32'/></svg>`)}");
            z-index: -2;
        };
    };

    body {
        overflow-x: initial;
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.textBold};
        background-size: 40px 40px;
    };

`

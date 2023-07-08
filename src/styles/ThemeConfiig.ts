import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: none;
        text-decoration: none;
        list-style: none;
        outline: none;
    };

    body {
        overflow-x: initial;
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.textBold};
        background-size: 40px 40px;
        background-image: radial-gradient(circle, ${props => props.theme.text20} 1px, rgba(0, 0, 0, 0) 1px);
    };

`

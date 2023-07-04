import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
    };
`
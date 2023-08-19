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
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23C4C4C433' stroke-dasharray='5 3' transform='scale(1, -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
            mask-image: linear-gradient(to bottom, black 20%, transparent 30%);
            -webkit-mask-image: linear-gradient(to bottom, black 20%, transparent 30%);
            z-index: -2;
        };
    };

    body {
        overflow-x: initial;
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.textBold};
        background-size: 40px 40px;
        /* background-image: radial-gradient(circle, ${props => props.theme.text20} 1px, rgba(0, 0, 0, 0) 1px); */
    };

`

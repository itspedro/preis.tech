import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    textBold: string;
    textLight: string;
    text: string;
    text80: string;
    text70: string;
    text20: string;
    icons: string;
  };
};
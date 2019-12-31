import { createGlobalStyle } from 'styled-components';

export const theme1 = {
  primary: '#ff0198',
  secondary: '#01c1d6',
  danger: '#eb238e',
  light: '#f4f4f4',
  dark: '#222'
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Mono&display=swap');
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
`;
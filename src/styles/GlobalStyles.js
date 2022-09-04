import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, textarea, button {
    text-decoration: none;
    list-style: none;
    border: 0;
  }
`
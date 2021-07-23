import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Inter',sans-serif;
  }

  body {

    img {
      height: auto;
      max-width: 100%;
    }
  }
`;

export default GlobalStyle;

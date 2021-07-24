import { createGlobalStyle } from 'styled-components';

type Props = {
    themeMatch: any;
};

const GlobalStyle = createGlobalStyle<Props>`
  * {
    font-family: 'Montserrat',sans-serif;
  }

  body {
    background-color: ${(props) => props.themeMatch().background.secondary};
    img {
      height: auto;
      max-width: 100%;
    }
  }
`;

export default GlobalStyle;

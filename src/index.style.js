import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
    src: local('Material Icons'),
      local('MaterialIcons-Regular'),
      url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
      url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
      url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  
  html {
    font-size: 15px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  
  body {
    margin: 0;
  }
`;

export default GlobalStyle;

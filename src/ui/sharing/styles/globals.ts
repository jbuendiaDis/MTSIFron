import { injectGlobal } from "@emotion/css";
import "@fontsource/lato";
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
  :root {
    --primary-color: #E73E3B;
    --secondary-color: #011C4D; 
    /* --accent-color: ; */
    /* --success-color: ; */
    /* --error-color: ; */
    /* --warning-color: ; */
    --primary-font: lato ;
    /* --secondary-font: ; */
    /* --text-white: ; */
/*     --bg-gray: rgba(200, 200, 200, 0.3) ;
 */    --bg-button:  linear-gradient(to right, #E73E3B, #FF7A68); 
    --text-white: #FFFFFF;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  html {
    /* color: var(--text-white); */
    font-size: 62.5%;
    font-family: var(--primary-font);
  }
  body {
    min-height: 100vh;
    font-size: 1.6rem;
;
  }
  a,
  input,
  select,
  textarea,
  button {
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    border: 0;
  }
  a {
    text-decoration: none;
  }
  a,
  button {
    &:hover {
      cursor: pointer;
      transition: all 0.1s linear;
    }
  }

  #modal-root,
  #loader-root {
    position: absolute;
  }

  #modal-root {
    z-index: 5;
  }
  #loader-root {
    z-index: 10;
  }
`;

export * as layout from "./layout.styles";

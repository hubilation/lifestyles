import { createGlobalStyle } from 'styled-components';

const theme = {
    lightGreen: "#0CE8BE",
    lighterGreen: "#0DF5C8",
    greyGreen: "#C4FFF4",
    black: "#393939",
    grey: "#3A3A3A",
    midGrey: "#A1A1A1",
    lightGrey: "#E1E1E1",
    offGrey: "#82A8A1",
    offWhite: "#EDEDED",
    lighterOffWhite: "#FAFAFA",
    veryLightYellow: "#FBFAE2",
    white: "#FFFFFF",
    orange: "#E8480C",
    lightOrange: "#E8784F",
    maxWidth: "1000px",
    bs: "0 3px 8px 0 rgba(0,50,0,0.4)",

    headerFont: "babasneue",
    bodyFont: "unineue"
};

const GlobalStyle = createGlobalStyle`
    html {
          box-sizing: border-box;
          font-size: 10px;
      }
      *, *:before, *:after {
          box-sizing: inherit;
      }
      body {
          padding: 0;
          margin: 0;
          font-size: 1.5rem;
          font-family: 'unineue';
          background: ${theme.offWhite};
      }
      a {
          text-decoration: none;
          color: ${theme.black};
      }
      fieldset {
        border: 0;
        padding: 0;
        margin: 0;
        min-width: 0;
      }
  `;

export { theme, GlobalStyle }
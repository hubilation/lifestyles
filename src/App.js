import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Playground from "./Playground";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from "./Header";


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

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  /* padding: 2rem; */
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <StyledPage>
            <header className="App-header">
            </header>
            <Inner>
              <Playground />
            </Inner>
          </StyledPage>
        </>
      </ThemeProvider>
    );
  }
}

export default App;

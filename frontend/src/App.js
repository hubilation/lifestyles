import React, { Component } from "react";
import logo from "./logo.svg";
import styled, { ThemeProvider, } from 'styled-components';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import { theme, GlobalStyle } from './styles/GlobalStyle';
import Header from "./Header";
import Playground from "./Playground";
import Signin from './Signin';
import Signup from './Signup';
import PrivateRoute from './PrivateRoute';
import User from './User';
import Loading from './Loading';
import Welcome from './Welcome';
import client from './lib/client';

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <ThemeProvider theme={theme}>
            <User>
              {({ data: { me }, loading }) => {
                if (loading) {
                  return <Loading />
                }
                return (
                  <>
                    <GlobalStyle />
                    <Header me={me} />
                    <StyledPage>
                      <header className="App-header">
                      </header>
                      <Inner>
                        <Route me={me} path="/" exact component={Welcome} />
                        <Route me={me} path="/signup" component={Signup} />
                        <PrivateRoute me={me} path="/me" component={Playground} />
                        {/* <Route path="/signin" component={Signin} /> */}
                      </Inner>
                    </StyledPage>
                  </>
                )
              }}
            </User>
          </ThemeProvider>
            </Router>
          </ApolloProvider>
        );
      }
    }

export default App;

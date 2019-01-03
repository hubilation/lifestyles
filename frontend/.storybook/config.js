import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { theme, globalStyles, GlobalStyles } from '../src/App';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import '../src/index.css';

function loadStories() {
  require('../src/stories');
}

addDecorator((story)=>(
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));

addDecorator((story)=>(
  <React.Fragment>
    <GlobalStyles />
    {story()}
  </React.Fragment>
))

configure(loadStories, module);

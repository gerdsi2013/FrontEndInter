import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'
import { GlobalStyles } from "../src/styles/globalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from './styles/theme';





ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles/>
  </ThemeProvider>,
  document.getElementById('root')
);

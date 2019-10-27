import React, { FC } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './App.theme';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header'
import './App.css'
import { Content } from '../Content/Content';
//import logo from './logo.svg';

export const App: FC = () => (
  <div id="main"> 
    <CssBaseline />
    <ThemeProvider theme={theme}>
    <div id="back-to-top-anchor" style={{position: "absolute"}}/>
      <Header/>
        <Content/>
      <Footer/>
    </ThemeProvider>
  </div>
)

  
import React, { FC } from 'react';
import { Paper, Button, CssBaseline, Container, Grid, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './App.theme';
import { Footer } from '../Footer/Footer';
import './App.css'
//import logo from './logo.svg';

export const App: FC = () => (
  <div id="main"> 
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Container>
        <Paper>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Button variant="contained" color="primary">
                <Typography variant="button">Primary</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Primary
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Primary
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer/>
    </ThemeProvider>
  </div>
)

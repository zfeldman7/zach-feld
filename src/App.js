import React from 'react';
import { Paper, Button, CssBaseline, Container, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './App.theme';
//import logo from './logo.svg';

export function App() {
  return (
    <div> 
      <CssBaseline />
      <ThemeProvider theme={ theme }>
        <Container>
          <Paper>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Button variant="contained" color="primary">
                  Primary
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
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
      </ThemeProvider>
    </div>
  );
}

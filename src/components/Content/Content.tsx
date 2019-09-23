import React, { FC } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { ScrollTop } from '../App/ScrollTop';
import { contentStyles } from './Content.theme';
import { Experience } from './Experience'; 
import { Coursework } from './Coursework';


export const Content: FC = () => {
    const classes = contentStyles()

    return (
    <Container>
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item lg={10} md={8}>
                    <Experience />
                    <br />
                    <Coursework />
            <ScrollTop />
            </Grid>
        </Grid>
    </Container>
    )
}
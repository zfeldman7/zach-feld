import React, { FC } from 'react';
import { Grid, Container } from '@material-ui/core';
import { ScrollTop } from '../App/ScrollTop';
import { Experience } from './Experience'; 
import { Coursework } from './Coursework';
import { Skills } from './Skills';
import { Hobbies } from './Hobbies';


export const Content: FC = () => {

    return (
    <Container>
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item lg={10} md={8}>
                    <Experience />
                    <br /> <hr /> <br />
                    <Coursework />
                    <br /> <hr /> <br />
                    <Skills />
                    <br /> <hr /> <br />
                    <Hobbies />
            <ScrollTop />
            </Grid>
        </Grid>
    </Container>
    )
}
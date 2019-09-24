import React, { FC } from 'react';

import { contentStyles } from './Content.theme';
import { Grid, Typography, Box } from '@material-ui/core';


export const Skills: FC = () => {
    const classes = contentStyles()
    const red = "#EE6352"
    const green = "#59CD90"
    const blue = "#3FA7D6"
    const yellow = "#FAC05E"
    const orange = "#F79D84"
    const grey = "#403F4C"
    const purple = "#CABAC8"

    return (
        <Grid>
        <Typography variant="h5" align="center">Skills</Typography>
        <br />
        
        </Grid>
    )
}
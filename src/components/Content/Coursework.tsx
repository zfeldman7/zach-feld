import React, { FC } from 'react';

import { contentStyles } from './Content.theme';
import { Grid, Typography, Box } from '@material-ui/core';


export const Coursework: FC = () => {
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
        <Typography variant="h5" align="center">Coursework</Typography>
        <br />
        <Box borderLeft="5px solid" borderColor={green} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS150 - Intro to Data and Information Management</b> <br />
                <i>Fall 2018</i>
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={yellow} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 180 - Programming Fundamentals</b> <br />
                <i>Fall 2018</i>
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={orange} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 280 - Object-Oriented Application Development</b> <br />
                <i>Spring 2019</i>
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={blue} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 240 - Business Processing and Communications Infrastructure</b> <br />
                <i>Spring 2018</i>
            </Typography>
        </Box>
        <br /> <hr /> <br />
        <Box borderLeft="5px solid" borderColor={purple} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 401 - Directed Study: Data Structures and Algorithms</b> <br />
                <i>Fall 2019</i>
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={purple} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 380 - Multi-Tiered Application Development</b> <br />
                <i>Fall 2019</i>
            </Typography>
        </Box>
        <br />
        <Box borderLeft="5px solid" borderColor={purple} paddingLeft="15px">
            <Typography variant="body1">
                <b>CS 350 - Database Management Systems</b> <br />
                <i>Fall 2019</i>
            </Typography>
        </Box>
        <br />

    </Grid>
    )
}
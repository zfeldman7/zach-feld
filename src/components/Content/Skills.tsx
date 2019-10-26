import React, { FC, Fragment } from 'react';

import { contentStyles } from './Content.theme';
import { Grid, Typography, Tooltip, Button } from '@material-ui/core';
import { Bootstrap } from '../SVG/Bootstrap';
import { Css } from '../SVG/Css';
import { Django } from '../SVG/Django';
import { GitHub } from '../SVG/GitHub';
import { Html } from '../SVG/Html';
import { Java } from '../SVG/Java';
import { Javascript } from '../SVG/Javascript';
import { Material } from '../SVG/Material';
import { Node } from '../SVG/Node';
import { Php } from '../SVG/Php';
import { Python } from '../SVG/Python';
import { Reactlogo } from '../SVG/Reactlogo';
import { Sql } from '../SVG/Sql';
import { Typescript } from '../SVG/Typescript';


export const Skills: FC = () => {
    const classes = contentStyles()

    return (
        <Grid>
        <Typography variant="h5" align="center">Skills</Typography>
        <br />
        <Grid container className={classes.skillGrid} spacing={5}>
            <Grid item xs={6} sm={3}>
                <Tooltip title="After creating complex objects and abstract data types in java, I'd say I have a solid foundation and understanding of the ins and outs of the language" placement="top">
                    <Button>
                        <Java className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Tooltip title="Coming from a foundation in Java, python was a fun and calming language to learn. I currently use it to implement abstract data types and algorithms for my data structures and algorithms course!" placement="top">
                    <Button>
                        <Python className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Tooltip title="I have been using Html since highschool, I know my way around the markup language" placement="top">
                    <Button>
                        <Html className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Tooltip title="I have used CSS on many websites and web applications since highschool. I'm no expert, but I know my way around a stylesheet" placement="top">
                    <Button>
                        <Css className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>


            <Grid item xs={6} sm={3}>
                <Tooltip title="I have created and queried databases using SQL in internships, projects, and classes" placement="top">
                    <Button>
                        <Sql className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Tooltip title="I am currently learning php in one of my classes. While it's not the most elegant or intuitive language (in my opinion) I still find it a good way to learn the basics of web applications" placement="top">
                    <Button>
                        <Php className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Tooltip title="I have been teaching myself javascript in my freetime. I think it's an extremely versatile language to have under my belt" placement="top">
                    <Button>
                        <Javascript className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Tooltip title="I have worked with bootstrap on a few projects, most notably with my internship last summer" placement="top">
                    <Button>
                        <Bootstrap className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>

            <Grid item xs={6} sm={3}>
                <Tooltip title="This website is contained within the Node environment!" placement="top">
                    <Button>
                        <Node className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Tooltip title="I used the django model-view framework last summer with my internship!" placement="top">
                    <Button>
                        <Django className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Tooltip title="I used the material-ui library to build this website! I hope you like it!" placement="top">
                    <Button>
                        <Material className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Tooltip title="This website was built with react! I have found it to be an extremely elegant library" placement="top">
                    <Button>
                        <Reactlogo className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>


            <Grid item xs={6}>
                <Tooltip title="I store a lot of my work on github, you can find my account on the header or footer of this site!" placement="top">
                    <Button>
                        <GitHub className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={6}>
                <Tooltip title="This website was built in part with typescript! It's an interesting addition to javascript that has come in handy when trying to deliver my react components" placement="top">
                    <Button>
                        <Typescript className={classes.icon} />
                    </Button>
                </Tooltip>
            </Grid>
        </Grid>
        </Grid>  
        
    )
}
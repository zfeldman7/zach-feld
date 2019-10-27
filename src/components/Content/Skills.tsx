import React, { FC } from 'react';
import { Grid, Typography, } from '@material-ui/core';
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
import { MouseOverIcon } from './MouseOverIcon';
import { contentStyles } from './Content.theme';


export const Skills: FC = () => {
    const classes = contentStyles()

    return (
        <Grid>
        <Typography variant="h5" align="center">Skills</Typography>
        <br />
        <Grid container className={classes.skillGrid} spacing={5}>
            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="After creating complex objects and abstract data types in java, I'd say I have a solid foundation and understanding of the ins and outs of the language."
                    icon={Java}
                    id="Java"
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="Coming from a foundation in Java, python was a fun and calming language to learn. I currently use it to implement abstract data types and algorithms for my data structures and algorithms course!"
                    icon={Python}
                    id="Python"
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="I have been using Html since highschool, I know my way around the markup language."
                    icon={Html}
                    id="Html"
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="I have used CSS on many websites and web applications since highschool. I'm no expert, but I know my way around a stylesheet."
                    icon={Css}
                    id="Css"
                />
            </Grid>


            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="I have created and queried databases using SQL in internships, projects, and classes."
                    icon={Sql}
                    id="Sql"
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="I am currently learning php in one of my classes. While it's not the most elegant or intuitive language (in my opinion) I still find it a good way to learn the basics of web applications."
                    icon={Php}
                    id="Php"
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="I have been teaching myself javascript in my freetime. I think it's an extremely versatile language to have under my belt."
                    icon={Javascript}
                    id="Javascript"
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="I have worked with bootstrap on a few projects, most notably with my internship last summer."
                    icon={Bootstrap}
                    id="Bootstrap"
                />
            </Grid>

            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="This website is contained within the Node environment!"
                    icon={Node}
                    id="Node"
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="I used the django model-view framework last summer with my internship!"
                    icon={Django}
                    id="Django"
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="I used the material-ui library to build this website! I hope you like it!"
                    icon={Material}
                    id="Material"
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <MouseOverIcon 
                    popoverText="This website was built with react! I have found it to be an extremely elegant library."
                    icon={Reactlogo}
                    id="Reactlogo"
                />
            </Grid>


            <Grid item xs={6}>
                <MouseOverIcon 
                    popoverText="I store a lot of my work on github, you can find my account on the header or footer of this site!"
                    icon={GitHub}
                    id="GitHub"
                />
            </Grid>
            <Grid item xs={6}>
                <MouseOverIcon 
                    popoverText="This website was built in part with typescript! It's an interesting addition to javascript that has come in handy when trying to deliver my react components."
                    icon={Typescript}
                    id="Typescript"
                />
            </Grid>
        </Grid>
        </Grid>  
        
    )
}
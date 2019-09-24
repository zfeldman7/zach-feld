import React, { FC, Fragment } from 'react'
import { Grid, ListItemText, ListItem, AppBar, Toolbar, Typography, Divider, Hidden } from '@material-ui/core'
import { headerStyles } from './Header.theme'
import { LinkedIn, Mail } from '@material-ui/icons'
import { GitHub } from '../SVG/GitHub'
import { HideOnScroll } from './HideOnScroll'

export const Header: FC = () => {
    const classes = headerStyles()
    return (
        <Fragment>
        
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Grid container spacing={10} direction="row" justify="center" alignItems="center">
                        <Grid item md={5}>
                            <Typography variant="h4">Welcome! &#128075; <br/></Typography>
                            <Typography>
                                I'm Zach Feldman. I'm currently studying Computer Information Systems at Bentley University.
                                <br/><br/>
                                <Hidden smDown>
                                    I have a strong passion for technology and I strive to understand how things work. 
                                    One of my key strengths is my ability to get to the root of any given problem and troubleshoot until a 
                                    proper solution has been found. I bring a unique perspective of technical and business skills to the table. 
                                    I am looking for an internship where I can expand my knowledge of computer science, software, and hardware.
                                </Hidden>
                            </Typography>
                        </Grid>
                        <Hidden smDown><Divider orientation="vertical"/></Hidden>
                        <Hidden mdUp><Divider/></Hidden>
                        <Grid item md={3}>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <Grid item>
                                    <ListItem className={classes.hyperlink} component="a" href="https://github.com/zfeldman7" button dense>
                                        <GitHub className={classes.icon}/> 
                                        <ListItemText primary="zfeldman7"/>
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem className={classes.hyperlink} component="a" href="https://www.linkedin.com/in/zacharyfeldman13/" button dense>
                                        <LinkedIn className={classes.icon}/>
                                        <ListItemText primary="Zachary.Feldman"/>
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem className={classes.hyperlink} component="a" href="mailto:zachfeldy@gmail.com" button dense>
                                        <Mail className={classes.icon}/>
                                        <ListItemText primary="zachfeldy@gmail.com"/>
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
           
       </Fragment>
)}
import React, { FC, Fragment } from 'react'
import { Grid, ListItemText, ListItem, AppBar, Toolbar } from '@material-ui/core'
import { headerStyles } from './Header.theme'
import { LinkedIn, Mail, KeyboardArrowUp} from '@material-ui/icons'
import { GitHub } from '../SVG/GitHub'
import { HideOnScroll } from './HideOnScroll'

export const Header: FC = () => {
    const classes = headerStyles()
    return (
        <Fragment>
        <HideOnScroll>
            <AppBar className={classes.root}>
                <Toolbar>
                    <Grid container spacing={4} justify="center" alignItems="center">
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
                </Toolbar>
            </AppBar>
        </HideOnScroll>
       </Fragment>
)}
import React, { FC } from 'react'
import { Grid, ListItemText, ListItem } from '@material-ui/core'
import { footerStyles } from './Footer.theme'
import { LinkedIn, Mail} from '@material-ui/icons'
import { GitHub } from '../SVG/GitHub'

export const Footer: FC = () => {
    const classes = footerStyles()
    return (
            <Grid container className={classes.root} spacing={4} justify="center" alignItems="center">
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
)}
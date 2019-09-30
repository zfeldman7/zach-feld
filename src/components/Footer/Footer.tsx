import React, { FC, Fragment } from 'react'
import { Grid, ListItemText, ListItem, Typography, Link, Box } from '@material-ui/core'
import { footerStyles } from './Footer.theme'
import { LinkedIn, Mail} from '@material-ui/icons'
import { GitHub } from '../SVG/GitHub'

export const Footer: FC = () => {
    const classes = footerStyles()
    return (
        <Fragment>
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
                <Grid container justify="center" alignItems="center" className={classes.footnote}>
                    <Box textAlign="center">
                        <Typography variant="caption" > 
                            Some Icons made by&nbsp;
                            <Link href="https://www.flaticon.com/authors/freepik" className={classes.footnotelink}>
                                Freepik
                            </Link>
                            ,&nbsp;
                            <Link href="https://www.flaticon.com/authors/nikita-golubev" className={classes.footnotelink}>
                                Nikita Golubev
                            </Link>
                            ,&nbsp;
                            <Link href="https://www.flaticon.com/authors/photo3idea-studio" className={classes.footnotelink}>
                                photo3idea_studio
                            </Link>
                            ,&nbsp;
                            <Link href="https://www.flaticon.com/authors/smashicons" className={classes.footnotelink}>
                                Smashicons
                            </Link>
                            .&nbsp;From&nbsp;
                            <Link href="https://www.flaticon.com/" className={classes.footnotelink}>www.flaticon.com</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            
        </Fragment>
)}
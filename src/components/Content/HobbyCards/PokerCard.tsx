import React, { FC } from 'react'
import { contentStyles } from '../Content.theme'
import { Typography, Card, CardMedia, CardContent, Box } from '@material-ui/core'
import { Cards } from '../../SVG/Cards'

const orange = "#F79D84"

export const PokerCard: FC = () => {
    const classes = contentStyles()
    return (
        <Card className={classes.card}>
            <Box textAlign="center" bgcolor={orange}>
                <CardMedia> 
                        <Cards className={classes.icon} />
                </CardMedia>
            </Box>
            <CardContent className={classes.cardContent}>
                <Typography align="center">
                    Sitting at the poker table, all eyes on you, 
                    forced to make a decision from any information you can scavenge from the opposition - 
                    I find the game of tells exhilirating.
                </Typography>
            </CardContent>
        </Card>
    )
}
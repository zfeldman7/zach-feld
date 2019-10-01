import React, { FC } from 'react'
import { contentStyles } from '../Content.theme'
import { Typography, Card, CardMedia, CardContent, Box } from '@material-ui/core'
import { GitHub } from '../../SVG/GitHub'
import { Shaker } from '../../SVG/Shaker'

export const BartendingCard: FC = () => {
    const classes = contentStyles()
    return (
        <Card className={classes.card}>
            <Box textAlign="center">
                <CardMedia> 
                        <Shaker className={classes.icon} />
                </CardMedia>
            </Box>
            <CardContent className={classes.cardContent}>
                <Typography>
                    Bartending is one of my favorite ways to express myself. Turning simple ingredients into complex products, 
                    there is no better feeling than creating something for others to enjoy.  
                </Typography>
            </CardContent>
        </Card>
    )
}
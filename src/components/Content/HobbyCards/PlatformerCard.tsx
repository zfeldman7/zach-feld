import React, { FC } from 'react'
import { contentStyles } from '../Content.theme'
import { Typography, Card, CardMedia, CardContent, Box } from '@material-ui/core'
import { Runner } from '../../SVG/Runner'

const green = "#59CD90"

export const PlatformerCard: FC = () => {
    const classes = contentStyles()
    return (
        <Card className={classes.card}>
            <Box textAlign="center" bgcolor={green}>
                <CardMedia> 
                        <Runner className={classes.icon} />
                </CardMedia>
            </Box>
        <CardContent className={classes.cardContent}>
            <Typography align="center">
                The most difficult platformers require a pixel-perfect precision that can drive any player mad. 
                I find the iteration calming, learning the patience to overcome new obstacles at every turn... err frame. 
            </Typography>
        </CardContent>
    </Card>
    )
}
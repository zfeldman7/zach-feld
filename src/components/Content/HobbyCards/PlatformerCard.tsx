import React, { FC } from 'react'
import { contentStyles } from '../Content.theme'
import { Typography, Card, CardMedia, CardContent, Box } from '@material-ui/core'
import { Runner } from '../../SVG/Runner'

export const PlatformerCard: FC = () => {
    const classes = contentStyles()
    return (
        <Card className={classes.card}>
            <Box textAlign="center">
                <CardMedia> 
                        <Runner className={classes.icon} />
                </CardMedia>
            </Box>
        <CardContent>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil doloribus laborum labore aspernatur cupiditate autem, 
            </Typography>
        </CardContent>
    </Card>
    )
}
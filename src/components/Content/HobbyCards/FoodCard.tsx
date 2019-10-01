import React, { FC } from 'react'
import { contentStyles } from '../Content.theme'
import { Typography, Card, CardMedia, CardContent, Box } from '@material-ui/core'
import { Food } from '../../SVG/Food'

const blue = "#3FA7D6"

export const FoodCard: FC = () => {
    const classes = contentStyles()
    return (
        <Card className={classes.card}>
            <Box textAlign="center" bgcolor={blue}>
                <CardMedia> 
                        <Food className={classes.icon} />
                </CardMedia>
            </Box>
            <CardContent className={classes.cardContent}>
                <Typography align="center">
                There are two types of people in the world: those who eat to live and those who live to eat. 
                I am certainly of the latter. I make it a point to seek out the best resturaunts wherever I travel.
                </Typography>
            </CardContent>
        </Card>
    )
}
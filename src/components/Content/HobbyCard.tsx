import React, { FC } from 'react'
import { Typography, Card, CardMedia, CardContent, Box } from '@material-ui/core'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { contentStyles } from './Content.theme'


type Props = {
    cardText: string
    icon: React.ComponentType<SvgIconProps>
    color: string
}

export const HobbyCard: FC<Props> = ({cardText, icon: Icon, color}) => {
    const classes = contentStyles()
    return (
        <Card className={classes.card}>
            <Box textAlign="center" bgcolor={color}>
                <CardMedia> 
                    <Icon className={classes.icon} />
                </CardMedia>
            </Box>
            <CardContent className={classes.cardContent}>
                <Typography align="center">
                    {cardText}
                </Typography>
            </CardContent>
        </Card>
    )
}
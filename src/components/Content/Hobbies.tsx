import React, { FC, Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'

import { Runner } from '../SVG/Runner'
import { Shaker } from '../SVG/Shaker'
import { Cards } from '../SVG/Cards'
import { Food } from '../SVG/Food'
import { HobbyCard } from './HobbyCard'

const orange = "#F79D84"
const green = "#59CD90"
const blue = "#3FA7D6"
const yellow = "#FAC05E"

export const Hobbies: FC = () => {
    return (
        <Fragment>
        <Typography variant="h5" align="center">Hobbies</Typography>
        <br />
            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                <Grid item>
                    <HobbyCard 
                        cardText="The most difficult platformers require a pixel-perfect precision that can drive any player mad. 
                        I find the iteration calming, learning the patience to overcome new obstacles at every turn... err frame."
                        icon={Runner}
                        color={green}
                    />
                </Grid>
                <Grid item>
                    <HobbyCard 
                        cardText="Bartending is one of my favorite ways to express myself. Turning simple ingredients into complex products, 
                        there is no better feeling than creating something for others to enjoy."
                        icon={Shaker}
                        color={yellow}
                    />
                </Grid>
                <Grid item>
                    <HobbyCard 
                        cardText="Sitting at the poker table, all eyes on you, 
                        forced to make a decision from any information you can scavenge from the opposition - 
                        I find the game of tells exhilarating."
                        icon={Cards}
                        color={orange}
                    />
                </Grid>
                <Grid item>
                    <HobbyCard 
                        cardText="There are two types of people in the world: those who eat to live and those who live to eat. 
                        I am certainly of the latter. I make it a point to seek out the best restaurants wherever I travel."
                        icon={Food}
                        color={blue}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}

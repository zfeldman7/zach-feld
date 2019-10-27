import React, { FC, Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { BartendingCard } from './HobbyCards/BartendingCard'
import { PlatformerCard } from './HobbyCards/PlatformerCard'
import { PokerCard } from './HobbyCards/PokerCard'
import { FoodCard } from './HobbyCards/FoodCard'


export const Hobbies: FC = () => {
    return (
        <Fragment>
        <Typography variant="h5" align="center">Hobbies</Typography>
        <br />
            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                <Grid item>
                    <PlatformerCard />
                </Grid>
                <Grid item>
                    <BartendingCard />
                </Grid>
                <Grid item>
                    <PokerCard />
                </Grid>
                <Grid item>
                    <FoodCard />
                </Grid>
            </Grid>
        </Fragment>
    )
}

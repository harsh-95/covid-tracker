import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {

    if(!confirmed){
        return null;
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography variant="h6">{confirmed.value}</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">No. of Infected cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">Recovered</Typography>
                        <Typography variant="h6">{recovered.value}</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">No. of Recovered cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">Deaths</Typography>
                        <Typography variant="h6">{deaths.value}</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">No. of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
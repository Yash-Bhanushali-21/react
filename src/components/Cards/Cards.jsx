import React from 'react';

import {Card, CardContent , Typography,Grid} from '@material-ui/core';
/*we will be using card
    component of material-ui */
import cx from 'classnames';
/*classnames is an external module
that can be used to club multiple
css files together */
import styles from './Cards.module.css';
import CountUp from 'react-countup';

const Cards = ({data : {confirmed,recovered,deaths,lastUpdate}}) => {
    /*we receive props in form of entire
     data, so we will be de-struturing data
     and accordingly we will receive values.
      */
    if(!confirmed) {
        return 'Loading..';
    }
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
         <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
             <CardContent>
                 <Typography color="textSecondary" gutterBottom>Infected</Typography>
                 <Typography varaint="h5">
                     <CountUp
                     start={0}
                     end={confirmed.value}
                     cduration={2.5}
                     separator=","
                     />
                 </Typography>
                 <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>   
                 <Typography color = "textSecondary">Number of Active Cases of Covid-19</Typography>    
             </CardContent>
         </Grid>
         <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
             <CardContent>
                 <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                 <Typography varaint="h5">
                     <CountUp
                     start={0}
                     end={recovered.value}
                     duration={2.5}
                     separator=","
                     />
                 </Typography>
                 <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>   
                 <Typography color = "textSecondary">Number of recovery Cases of Covid-19</Typography>    
             </CardContent>
         </Grid>
         <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
             <CardContent>
                 <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                 <Typography varaint="h5">
                     <CountUp
                     start={0}
                     end={recovered.value}
                     duration={2.5}
                     separator=","
                     />
                 </Typography>
                 <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>    
                 <Typography color = "textSecondary">Number of death Cases of Covid-19</Typography>    
             </CardContent>
         </Grid>
         </Grid>
        </div>
    )
}
export default Cards;
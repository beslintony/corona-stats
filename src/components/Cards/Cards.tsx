import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';

import { GlobalDataState } from '../../pages/Home/Home';
import useStyles from './styles';

type CardsProps = {
  globalData: GlobalDataState;
};

const Cards = ({ globalData }: CardsProps) => {
  const classes = useStyles();
  console.log(globalData);

  return (
    <Container className={classes.container}>
      <Grid container spacing={1} justifyContent="center">
        <Grid
          item
          className={`${classes.card} ${classes.cases}`}
          component={Card}
          xs={12}
          sm={2}
          md={3}>
          <CardContent>
            <Typography gutterBottom>Cases</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.cases}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>Cases Per One Million</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.casesPerOneMillion}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>
              {new Date(globalData.updated)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ')}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          className={`${classes.card} ${classes.active}`}
          item
          component={Card}
          xs={12}
          sm={2}
          md={3}>
          <CardContent>
            <Typography gutterBottom>Active</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.active}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>Active Per One Million</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.activePerOneMillion}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>
              {new Date(globalData.updated)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ')}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          className={`${classes.card} ${classes.critical}`}
          component={Card}
          xs={12}
          sm={2}
          md={3}>
          <CardContent>
            <Typography gutterBottom>Critical</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.critical}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>Critical Per One Million</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.criticalPerOneMillion}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>
              {new Date(globalData.updated)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ')}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          className={`${classes.card} ${classes.deaths}`}
          component={Card}
          xs={12}
          sm={2}
          md={3}>
          <CardContent>
            <Typography gutterBottom>Deaths</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.deaths}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>Deaths Per One Million</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.deathsPerOneMillion}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>
              {new Date(globalData.updated)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ')}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          className={`${classes.card} ${classes.recovered}`}
          component={Card}
          xs={12}
          sm={2}
          md={3}>
          <CardContent>
            <Typography gutterBottom>Recovered</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.recovered}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>Recovered Per One Million</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.recoveredPerOneMillion}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>
              {new Date(globalData.updated)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ')}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          className={`${classes.card} ${classes.tests}`}
          component={Card}
          xs={12}
          sm={2}
          md={3}>
          <CardContent>
            <Typography gutterBottom>Tests</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.tests}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>Tests Per One Million</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.testsPerOneMillion}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>
              {new Date(globalData.updated)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ')}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          className={`${classes.card} ${classes.today}`}
          component={Card}
          xs={12}
          sm={4}
          md={6}>
          <CardContent>
            <Typography gutterBottom>Cases Reported Today</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.todayCases}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>Deaths Reported Today</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.todayDeaths}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>Recovered Reported Today</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={globalData.todayRecovered}
                duration={3}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;

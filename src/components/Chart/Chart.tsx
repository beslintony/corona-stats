import { Typography } from '@material-ui/core';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

import { CountriesList, GlobalDataState } from '../../pages/Home/Home';
import useStyles from './styles';

type ChartProps = {
  globalData: GlobalDataState;
  country: CountriesList;
};

const Chart = ({
  globalData: { todayCases, todayRecovered, todayDeaths },
  country,
}: ChartProps) => {
  const classes = useStyles();

  const lineChart = (
    <Line
      data={{
        labels: ['Cases', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [todayCases, todayRecovered, todayDeaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
      }}
    />
  );

  const barChart = (
    <>
      <Typography style={{ marginBottom: '50px' }} variant="h5" align="center">
        Todays Covid-19 Reports from {country.name}{' '}
      </Typography>
      <Bar
        data={{
          labels: ['Cases', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
              data: [todayCases, todayRecovered, todayDeaths],
            },
          ],
        }}
      />
    </>
  );
  return (
    <div className={classes.chart}>{country?.name ? barChart : lineChart}</div>
  );
};

export default Chart;

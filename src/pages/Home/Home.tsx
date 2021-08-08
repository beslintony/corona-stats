import { Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';

import { api } from '../../api/api';
import Cards from '../../components/Cards/Cards';
import Chart from '../../components/Chart/Chart';
import Countries from '../../components/Countries/Countries';
import { CountryContext } from '../../countryContext';

export type GlobalDataState = {
  active: number;
  activePerOneMillion: number;
  affectedCountries: number;
  cases: number;
  casesPerOneMillion: number;
  critical: number;
  criticalPerOneMillion: number;
  continent?: string;
  country?: string;
  countryInfo?: {};
  deaths: number;
  deathsPerOneMillion: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  population: number;
  recovered: number;
  recoveredPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
};

const initialGlobalDataState = {
  active: 0,
  activePerOneMillion: 0,
  affectedCountries: 0,
  cases: 0,
  casesPerOneMillion: 0,
  critical: 0,
  criticalPerOneMillion: 0,
  continent: '',
  country: '',
  countryInfo: {},
  deaths: 0,
  deathsPerOneMillion: 0,
  oneCasePerPeople: 0,
  oneDeathPerPeople: 0,
  oneTestPerPeople: 0,
  population: 0,
  recovered: 0,
  recoveredPerOneMillion: 0,
  tests: 0,
  testsPerOneMillion: 0,
  todayCases: 0,
  todayDeaths: 0,
  todayRecovered: 0,
  updated: 0,
};

export type CountriesList = {
  name: string;
};

const Home = () => {
  const [globalData, setGlobalData] = useState<GlobalDataState>(
    initialGlobalDataState,
  );
  const [countriesList, setCountriesList] = useState<CountriesList[]>([]);
  const { country } = useContext(CountryContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchGlobalData();
      setGlobalData(data);
      console.log(data);
      const countries = await api.fetchCountriesList();
      setCountriesList(countries);
      console.log(countries);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async (country: string) => {
      const c = await api.fetchGlobalData(country);
      console.log(c);
      setGlobalData(c);
    };
    fetchData(country?.name);
  }, [country]);

  return (
    <>
      <Typography style={{ color: 'yellowgreen' }} align="center" variant="h2">
        COVID - 19 Stats Dashboard
      </Typography>
      <Cards globalData={globalData} />
      <Countries countriesList={countriesList} />
      <Chart globalData={globalData} country={country} />
    </>
  );
};

export default Home;

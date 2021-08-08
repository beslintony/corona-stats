import axios from 'axios';

const BASE_URL = 'https://corona.lmao.ninja/v2';

export type Country = {
  name: string;
  // info: Info;
};

export type Info = {
  flag: string;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  _id: number;
};

export type OldSchema = {
  country: string;
  countryInfo: Info;
};

export type CountryData = {
  active: number;
  activePerOneMillion: number;
  cases: number;
  casesPerOneMillion: number;
  continent: string;
  country: string;
  countryInfo: Info;
  critical: number;
  criticalPerOneMillion: number;
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

export const api = {
  fetchGlobalData: async (country: string = '') => {
    try {
      console.log(country.length);
      if (country.length > 1) {
        const { data } = await axios.get(`${BASE_URL}/countries/${country}`);
        return data;
      }
      const { data } = await axios.get(`${BASE_URL}/all?yesterday`);
      return data;
    } catch (err) {
      return err;
    }
  },

  fetchCountriesList: async () => {
    try {
      const { data: countries } = await axios.get(
        `${BASE_URL}/countries?yesterday&sort`,
      );
      return countries.map((country: OldSchema) => ({
        name: country.country,
        // info: country.countryInfo,
      }));
    } catch (err) {
      return err;
    }
  },
};

import { FormControl, Select } from '@material-ui/core';
import React, { useContext } from 'react';

import { CountryContext } from '../../countryContext';
import { CountriesList } from '../../pages/Home/Home';
import useStyles from './styles';

type CountryProps = {
  countriesList: CountriesList[];
};

const Countries = ({ countriesList }: CountryProps) => {
  const classes = useStyles();
  const { country, setCountry } = useContext(CountryContext);

  const handleCountryChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setCountry({ name: event.target.value as string });
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <Select
          native
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country?.name}
          onChange={(e) => handleCountryChange(e)}>
          <option aria-label="Global" value="">
            Global
          </option>
          {countriesList?.map((el, i) => (
            <option key={i} value={el.name}>
              {el.name}
            </option>
          ))}
          {console.log(country)}
        </Select>
      </FormControl>
    </>
  );
};

export default Countries;

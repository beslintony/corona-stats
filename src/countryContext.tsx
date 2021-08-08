import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

type Country = {
  name: string;
};

type CountryState = {
  country: Country;
  setCountry: Dispatch<SetStateAction<Country>>;
};

const initialCountry: CountryState = {
  country: { name: '' },
  setCountry: () => {},
};
export const CountryContext = createContext(initialCountry);

const CountryProvider = ({ children }: any) => {
  const [country, setCountry] = useState(initialCountry.country);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
export default CountryProvider;

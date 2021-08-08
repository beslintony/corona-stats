import { CssBaseline } from '@material-ui/core';
import React from 'react';

import CountryProvider from './countryContext';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <CountryProvider>
        <CssBaseline />
        <Home />
      </CountryProvider>
    </>
  );
}

export default App;

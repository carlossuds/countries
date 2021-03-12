import React, { useCallback, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import light from './styles/lightTheme';
import dark from './styles/darkTheme';

import GlobalStyle from './styles/globalStyle';

import Header from './components/Header';

import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    const storageTheme = localStorage.getItem('@Countries/theme');

    if (storageTheme) return JSON.parse(storageTheme);

    return light;
  });

  const toggleTheme = useCallback(() => {
    const themeToSet = theme.title === 'light' ? dark : light;

    setTheme(themeToSet);
    localStorage.setItem('@Countries/theme', JSON.stringify(themeToSet));
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/country/:name" component={CountryDetails} />
        </Switch>

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

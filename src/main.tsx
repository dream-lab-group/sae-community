import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import './styles/globals.css';
import './common/i18n/config';
import { createTheme, ThemeProvider } from '@mui/material';
import { Directus } from '@directus/sdk';
import SignIn from './pages/signin';

const directus = new Directus('http://146.190.227.5');

const token = directus.auth.token;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    retina: true; // adds the `mobile` breakpoint
    ultrahd: true;
  }
}

const appTheme = createTheme({
  typography: {
    fontFamily: `'Outfit', sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      retina: 2560,
      ultrahd: 3840,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  // @ts-expect-error: Error due Directus JS-SDK
  <React.StrictMode>
    {/* @ts-expect-error: Error due Directus JS-SDK */}
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        {/* @ts-expect-error: Error due Directus JS-SDK */}
        {!token ? <SignIn /> : <App />}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

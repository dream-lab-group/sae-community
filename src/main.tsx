import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import './styles/globals.css';
import './common/i18n/config';
import { createTheme, ThemeProvider } from '@mui/material';

const appTheme = createTheme({
  typography: {
    fontFamily: `'Outfit', sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  // @ts-expect-error: Error due Directus JS-SDK
  <React.StrictMode>
    {/* @ts-expect-error: Error due Directus JS-SDK */}
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        {/* @ts-expect-error: Error due Directus JS-SDK */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

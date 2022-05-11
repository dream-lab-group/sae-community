import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { createTheme, ThemeProvider } from '@mui/material';
import '../common/i18n/config';

const appTheme = createTheme({
  typography: {
    fontFamily: `'Outfit', sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ThemeProvider theme={appTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

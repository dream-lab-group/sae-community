import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../common/i18n/config';
import { createTheme, ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const appTheme = createTheme({
    typography: {
      fontFamily: `'Outfit', sans-serif`,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });
  return (
    <ThemeProvider theme={appTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

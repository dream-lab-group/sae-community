import '../styles/globals.css';
import '../common/i18n/config';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-expect-error: Todo
  return <Component {...pageProps} />;
}

export default MyApp;

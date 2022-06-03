import '../styles/globals.css';
import '../common/i18n/config';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { RouteGuard } from '../common/context/auth-check';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps, ...appProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  if ([`/project-upload`].includes(appProps.router.pathname)) {
    return (
      // @ts-expect-error: Todo
      <RouteGuard>
        {/* @ts-expect-error: Todo */}
        <Component {...pageProps} />
      </RouteGuard>
    );
  }

  return getLayout(
    // @ts-expect-error: Todo
    <RouteGuard>
      {/* @ts-expect-error: Todo */}
      <Component {...pageProps} />
    </RouteGuard>,
  );
}

export default MyApp;

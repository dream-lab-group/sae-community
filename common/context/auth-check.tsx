import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { token } from '../../pages';

export { RouteGuard };

function RouteGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    //initial run auth check
    authCheck(router.asPath);

    // on route change start - hide page content setting auth to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe events in return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  function authCheck(url: string) {
    // redirect to signin page if accessing private page and not logged in
    const publicPaths = ['/signin'];
    const path = url.split('?')[0];

    if (!token && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/signin',
      });
    } else {
      setAuthorized(true);
    }
  }
  return authorized && children;
}

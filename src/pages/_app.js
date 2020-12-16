import { FormspreeProvider } from '@formspree/react';
import * as gtag from '../lib/gtag';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'focus-visible';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <FormspreeProvider project="1528110468047043877">
        <Component {...pageProps} />
      </FormspreeProvider>
    </>
  );
};

export default MyApp;

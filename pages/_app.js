import '../styles/globals.css';
import { FormspreeProvider } from '@formspree/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Michael W. Lu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormspreeProvider project="1528110468047043877">
        <Component {...pageProps} />
      </FormspreeProvider>
    </>
  );
}

export default MyApp;

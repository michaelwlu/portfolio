import { FormspreeProvider } from '@formspree/react';
import Meta from '../components/misc/Meta';
import '../styles/globals.css';
import 'focus-visible';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <FormspreeProvider project="1528110468047043877">
        <Component {...pageProps} />
      </FormspreeProvider>
    </>
  );
}

export default MyApp;

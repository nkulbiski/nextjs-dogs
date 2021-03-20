import 'styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

/* eslint-disable react/jsx-props-no-spreading */

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <Head>
        <title>Happiness is a Random Dog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

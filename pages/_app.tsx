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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

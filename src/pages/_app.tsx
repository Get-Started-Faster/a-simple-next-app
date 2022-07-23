import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { NextPageWithLayout } from '../types';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component?.getLayout || ((page: any) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp

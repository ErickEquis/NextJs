import { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'
import { NextPage } from 'next';
import { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?: ( page: ReactElement ) => ReactNode;
}

type AppPageWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPageWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)

  // return <Component {...pageProps} />

  return getLayout( <Component {...pageProps} /> )
}

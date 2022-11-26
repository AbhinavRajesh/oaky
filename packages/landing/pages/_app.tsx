import '../styles/dist.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Oaky | Coming Soon</title>
      <link rel="apple-touch-icon" href="/logo.svg"  />
      <link rel="icon" href="/logo.svg"  />
    </Head>
    <Component {...pageProps} />
  </>
}

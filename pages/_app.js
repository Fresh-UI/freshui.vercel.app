import Head from 'next/head'
import './global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <meta name="description" content="Official Website of freshui css framework" />
        <link rel="manifest" href="/manifest.json"/>
        <link rel="icon" href="/favicon.ico" />
        <title>Fresh UI</title>
        <meta name="theme-color" content="#317EFB" />
        <script type="module" src="/pwabuilder-sw-register.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

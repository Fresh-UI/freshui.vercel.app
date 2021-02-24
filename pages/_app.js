import Head from 'next/head'
import "@freshui/freshui/css/fresh-ui.min.css";
import './global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="og:description" content="Official Website of Fresh UI css framework"/>
        <meta name="og:title" content="Fresh UI"/>
        <meta name="og:image" content="https://cdn.discordapp.com/icons/780466302245535785/c2d2e94e6a2c269585404fce24e7f765.png?size=512" />
        <meta name="description" content="Official Website of freshui css framework" />
        <link rel="manifest" href="/manifest.json"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/appstore.png" />
        <title>Fresh UI</title>
        <meta name="theme-color" content="#317EFB" />
        </Head>
      <Component {...pageProps} />
    </>
  )
}

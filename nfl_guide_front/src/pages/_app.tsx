import "@/styles/globals.css";
import "@/styles/banner.css"
import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title> Guia de Times da NFL</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Component {...pageProps} />
      </>
    )
}

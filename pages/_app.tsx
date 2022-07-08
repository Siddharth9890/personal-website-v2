import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Siddharth Singh</title>
        <meta name="title" content="Siddharth Singh" />
        <link rel="profile pic" href="assets/ProfilePic.jpg" />
        <meta
          name="description"
          content="Hello! My name is Siddharth and I enjoy creating things that live on the internet."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://siddharth9890.pages.dev/" />
        <meta property="og:title" content="Siddharth Singh" />
        <meta
          property="og:description"
          content="Hello! My name is Siddharth and I enjoy creating things that live on the internet."
        />
        <meta
          property="og:image"
          content="https://siddharth9890.pages.dev/og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://siddharth9890.pages.dev/"
        ></meta>
        <meta property="twitter:title" content="Siddharth Singh" />
        <meta
          property="twitter:description"
          content="Hello! My name is Siddharth and I enjoy creating things that live on the internet."
        />
        <meta
          property="twitter:image"
          content="https://siddharth9890.pages.dev/og.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

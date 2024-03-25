import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const META_TITLE =
    "Siddharth Singh | My Personal Portfolio | Software Engineer";

  const META_DESCRIPTION =
    "Hello! My name is Siddharth and I enjoy creating softwares that solves problems.";
  const WEBSITE_URL = "https://siddharth9890.pages.dev/";

  return (
    <>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="title" content={META_TITLE} />
        <link rel="profile pic" href="assets/ProfilePic.jpg" />
        <meta name="description" content={META_DESCRIPTION} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={WEBSITE_URL} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" content={`${WEBSITE_URL}og.png`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="siddharth9890.com" />
        <meta property="twitter:url" content={WEBSITE_URL}></meta>
        <meta property="twitter:title" content={META_TITLE} />
        <meta property="twitter:description" content={META_DESCRIPTION} />
        <meta property="twitter:image" content={`${WEBSITE_URL}og.png`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

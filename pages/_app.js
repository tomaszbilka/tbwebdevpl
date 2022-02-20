import Layout from "../components/layout/layout";
import Head from "next/head";

import "../styles/globals.css";
import Footer from "../components/ui/footer";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;

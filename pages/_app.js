import Layout from '../components/layout/layout';
import Head from 'next/head';
import Footer from '../components/ui/footer';

import '../styles/globals.css';

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

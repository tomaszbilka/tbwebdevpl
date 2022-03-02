import Head from 'next/head';
import AllItems from '../components/portfolio/all-items';
import { portfolioArray } from '../data/portfolio';

const PortfolioPage = (props) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Some of my work and projects.' />
      </Head>
      <AllItems portfolioItems={props.portfolioItems} />
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      portfolioItems: portfolioArray,
    },
  };
}

export default PortfolioPage;

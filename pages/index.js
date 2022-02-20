import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import Head from 'next/head';

import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>tbwebdev</title>
        <meta
          name='description'
          content='My personal page where I post about programming and web development. My portfolio is here as well'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}

export default HomePage;

import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src='/images/site/tom.jpg'
            ale='image showing Tom'
            width={300}
            height={300}
          />
        </div>
        <h1>Hi, I'm Tom</h1>
        <p>
          I blog about web development - especially frontend topics related to
          JavaScript.
        </p>
      </section>
    </>
  );
};

export default Hero;

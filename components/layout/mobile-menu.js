import Link from 'next/link';
import Image from 'next/image';

import classes from './mobile-menu.module.css';

const MobileMenu = (props) => {
  const toggleHandler = () => {
    props.toggle();
  };

  return (
    <nav className={classes.mobile}>
      <div className={classes.close}>
        <Image
          src='/images/menu/xmark.svg'
          width={60}
          height={60}
          onClick={toggleHandler}
        />
      </div>
      <ul className={classes.listWrap}>
        <li>
          <Link href='/portfolio'>
            <a onClick={toggleHandler}>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href='/posts'>
            <a onClick={toggleHandler}>Posts</a>
          </Link>
        </li>
        <li>
          <Link href='/contact' onClick={toggleHandler}>
            <a onClick={toggleHandler}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;

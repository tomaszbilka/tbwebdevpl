import Link from 'next/link';
import Logo from './logo';
import MobileMenuControl from './mobile-menu-control';

import classes from './main-navigation.module.css';

const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
        <MobileMenuControl />
        <nav className={classes.main}>
          <ul>
            <li>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link href='/posts'>Posts</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;

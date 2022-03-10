import Image from 'next/image';
import { useState } from 'react';
import MobileMenu from './mobile-menu';
import classes from './mobile-menu-control.module.css';

const MobileMenuControl = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenuHandler = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className={classes.phoneMenu}>
        {!isMobileMenuOpen && (
          <Image
            src='/images/menu/bars-solid.svg'
            width={40}
            height={40}
            onClick={toggleMobileMenuHandler}
          />
        )}

        {isMobileMenuOpen && <MobileMenu toggle={toggleMobileMenuHandler} />}
      </div>
    </>
  );
};

export default MobileMenuControl;

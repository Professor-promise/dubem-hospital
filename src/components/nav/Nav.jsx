import React, { useState, useEffect } from 'react';
import logo from '../../images/logo_3.png';
import { Menu, Close } from '@mui/icons-material';
import NavItems from './NavItems';

const Nav = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [scroll, setScroll] = useState(false);

  const closeMenu = (e) => {
    e.preventDefault();
    setToggleIcon(!toggleIcon);
  };

  useEffect(() => {
    function scroll() {
      if (window.scrollY >= 60) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    <nav
      className={`w-full h-20 sticky top-0 border shadow-sm bg-mainWhite py-3 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-40 lg:py-5 z-20 ${
        scroll && 'fixed top-0 left-0 bottom-0 right-0'
      }`}
    >
      <div className='flex tems-center justify-between px-6 lg:px-0'>
        <div>
          <img src={logo} alt='' className='object-fit cursor-pointer w-full' />
        </div>
        <div onClick={closeMenu} className='cursor-pointer lg:hidden'>
          {toggleIcon ? (
            <Close className='text-5xl' />
          ) : (
            <Menu className='text-5xl' />
          )}
        </div>
      </div>

      <div className='flex lg:hidden'>
        {toggleIcon && <NavItems {...{ closeMenu }} />}
      </div>
      <div className='hidden lg:flex'>
        <NavItems />
      </div>
    </nav>
  );
};

export default Nav;

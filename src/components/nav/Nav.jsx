import React, { useState, useEffect } from 'react';
import logo from '../../images/logo_3.png';
import { Menu, Close } from '@mui/icons-material';
import NavItems from './NavItems';
import { Link as LinkR } from 'react-router-dom';
import { animateScroll, Link as LinkS } from 'react-scroll';

const Nav = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScrollTop = () => {
    animateScroll.scrollToTop();
  };

  const closeMenu = (e) => {
    e.preventDefault();
    setToggleIcon(!toggleIcon);
    setShowLinks(!showLinks);
  };

  const handleScroll = () => {
    if (window.scrollY >= 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 left-0 border shadow-sm bg-mainWhite py-3 flex flex-col lg:flex-row h-20 lg:justify-between lg:items-center lg:px-40 lg:py-5 z-40 ${
        scroll && 'fixed top-0 left-0 bottom-0 right-0'
      }`}
    >
      <div className='w-full flex flex-col items-center justify-center lg:flex-row lg:justify-between rounded-lg bg-mainWhite shadow-lg lg:shadow-none lg:bg-transparent gap-6'>
        <div className='w-full lg:w-[auto] flex items-center justify-between px-6 lg:px-0'>
          <LinkS className='w-full' to='home' onClick={handleScrollTop}>
            <img
              src={logo}
              alt='logo'
              className='object-fit cursor-pointer py-1'
            />
          </LinkS>
          <div onClick={closeMenu} className='cursor-pointer lg:hidden '>
            {toggleIcon ? (
              <Close className='text-5xl' />
            ) : (
              <Menu className='text-5xl' />
            )}
          </div>
        </div>
        <NavItems {...{ closeMenu, showLinks }} />
        <LinkR
          to='signin'
          className={`text-2xl md:text-xl font-medium lg:font-normal bg-mainPurple px-4 py-2 text-white rounded-lg hover:bg-lightPurple mb-10 lg:mb-0 ${
            showLinks ? 'block' : 'hidden lg:block'
          }`}
        >
          Login
        </LinkR>
      </div>
    </nav>
  );
};

export default Nav;

import React from 'react';
import shape_8 from '../../images/shape-8.svg';
import logo from '../../images/logo_3.png';
import { contactsIcon, links, serviceIcons } from '../../shared/data';
import { Link, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const handleScrollTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='w-full bg-zinc-500 relative top-0 left-0 p-4 lg:py-10 lg:px-40 overflow-hidden '>
      <img
        src={shape_8}
        alt=''
        className='absolute top-0 left-0 rotate-180 z-10'
      />
      <img
        src={shape_8}
        alt=''
        className='absolute hidden lg:block top-0 right-0 z-10'
      />
      <div className='flex flex-col lg:grid lg:grid-cols-3 gap-10 justify-items-start text-mainWhite py-4 lg:py-10 '>
        <div className='w-full flex flex-col items-start gap-4 z-20'>
          <Link
            to='/'
            onClick={handleScrollTop}
            className='w-full cursor-pointer'
          >
            <img src={logo} alt='' className='object-cover' />
          </Link>
          <p className='text-lg'>
            Your Health is Our Top Priority', info: 'The most exquisite pleasure
            in the practice of medicine comes from nudging a layman in the
            direction of terror, then bringing him back to safety again.
          </p>
          <div className='flex items-start gap-3 '>
            {contactsIcon?.map((item) =>
              item.right.map(({ Icon, id, url }) => (
                <a
                  href={url}
                  key={id}
                  target='_blank'
                  rel='noreferrer'
                  className='border-mainGray hover:border-mainPurple border-2 rounded-lg hover:bg-mainPurple cursor-pointer z-30 transition-all duration-700'
                >
                  {<Icon className='h-10 w-10 ' />}
                </a>
              ))
            )}
          </div>
        </div>

        <div className='flex flex-col gap-2 items-start z-20'>
          <h3 className='text-2xl font-semibold'>Quick Link</h3>
          {links?.map(({ id, text, url }) => (
            <Link
              key={id}
              to={url}
              className='text-lg hover:text-mainPurple hover:translate-x-2 transition-all duration-1000 cursor-pointer'
              smooth={true}
              offset={-60}
              exact='true'
              spy={true}
              duration={700}
            >
              {text}
            </Link>
          ))}
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-2xl font-semibold'>Quick Link</h3>
          {serviceIcons?.map(({ id, heading }) => (
            <Link
              key={id}
              to='#'
              className='text-lg  hover:text-mainPurple hover:translate-x-2 transition-all duration-1000 z-30'
            >
              {heading}
            </Link>
          ))}
        </div>
      </div>
      <div className='border-t-2 py-4 text-center text-mainWhite'>
        <h3 className='text-xl lg:text-2xl'>
          Designed and Developed By Umeh Promise{' '}
        </h3>
      </div>
    </div>
  );
};

export default Footer;

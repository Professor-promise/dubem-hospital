import React, { useState } from 'react';
import { links } from '../../shared/data';

const NavItems = ({ closeMenu }) => {
  const [navLinks, setNavLinks] = useState({
    active: links[0],
    links: links,
  });

  const handleActiveLink = (index) => {
    setNavLinks({ ...navLinks, active: navLinks.links[index] });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      top: location - 100,
      left: 0,
    });
  };

  return (
    <div className='w-full rounded-lg bg-mainWhite shadow-lg  grid place-items-center lg:bg-none lg:flex lg:p-0 lg:shadow-none'>
      <ul className='w-full place-items-center py-4 text-sm grid grid-cols-2 md:grid-cols-3 gap-4 lg:flex lg:justify-end md:justify-items-start '>
        {navLinks.links?.map((link, index) => (
          <li
            key={link.id}
            className={`text-xl font-medium lg:font-normal px-6 py-2 lg:px-1 md:flex md:mx-auto hover:text-mainPurple transition-all duration-400  ${
              navLinks.links[index] === navLinks.active &&
              'lg:border-b-2 lg:border-b-mainPurple lg:text-mainPurple lg:font-medium'
            }`}
          >
            <a
              href={link.url}
              onClick={function () {
                handleActiveLink(index);
                closeMenu();
                handleClick();
              }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;

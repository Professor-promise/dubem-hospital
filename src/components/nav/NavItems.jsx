import React, { useState } from 'react';
import { links } from '../../shared/data';
import Lock from '@mui/icons-material/Lock';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Container = styled.div`
  a {
    &.active {
      color: var(--mainPurple);

      @media screen and (min-width: 760px) {
        border-bottom: 0.125rem solid var(--mainPurple);
      }
    }
  }
`;

const NavItems = ({ closeMenu }) => {
  /*   const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      top: location - 100,
      left: 0,
    });
  }; */

  return (
    <Container>
      <ul className='w-full py-4 text-sm gap-5 lg:gap-5 flex flex-col items-center justify-center lg:flex-row'>
        {links?.map(({ id, url, text }) => (
          <li
            key={id}
            className='text-2xl font-medium lg:font-normal px-6 py-2 lg:px-1 md:flex md:mx-auto cursor-pointer hover:text-mainPurple transition-all duration-400 '
          >
            <Link
              to={url}
              smooth={true}
              offset={-60}
              duration={700}
              spy={true}
              exact='true'
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default NavItems;

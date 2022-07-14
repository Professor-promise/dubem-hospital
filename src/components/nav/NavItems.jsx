import { links } from '../../shared/data';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  a {
    &.active {
      color: var(--mainPurple);

      @media screen and (min-width: 760px) {
        border-bottom: 0.125rem solid var(--mainPurple);
      }
    }
  }
`;

const NavItems = ({ closeMenu, showLinks }) => {
  return (
    <Container
      className={`${showLinks ? 'flex' : 'hidden lg:flex '} lg:justify-center`}
    >
      <ul className='w-full lg:w-[auto] text-sm gap-5 lg:gap-5 flex flex-col items-center justify-center lg:flex-row  '>
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
              onClick={closeMenu}
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

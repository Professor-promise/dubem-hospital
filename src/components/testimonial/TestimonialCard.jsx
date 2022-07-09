import React from 'react';
import shape_9 from '../../images/shape-9.svg';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  top: 0;
  z-index: 1;
  height: 48vh;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url(${shape_9}) no-repeat;
    background-position: top;
    top: 0;
    left: 0;
  }
`;

const TestimonialCard = ({ item }) => {
  const { text, name, role } = item;

  return (
    <Container className='w-full px-5 lg:px-20 lg:w-3/5 flex flex-col items-center py-4'>
      <div className='flex flex-col gap-4 py-5'>
        <p className='text-lg lg:text-xl text-textColor italic'>{text}</p>
        <div className='flex flex-col'>
          <h4 className='text-md lg:text-xl text-mainPurple font-bold'>
            {name}
          </h4>
          <p className='text-lg lg:text-xl text-textColor'>{role}</p>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialCard;

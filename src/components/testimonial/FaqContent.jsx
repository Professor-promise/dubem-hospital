import React, { useState } from 'react';
import { RemoveOutlined, AddOutlined } from '@mui/icons-material';
import styled from 'styled-components';

const P = styled.p`
  animation: showBox 0.8s ease-in 0s;

  @keyframes showBox {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const FaqContent = ({ item }) => {
  const [toggle, setToggle] = useState(false);

  const { id, title, text } = item;

  return (
    <div className=' p-4 rounded-lg bg-mainPurple' key={id}>
      <div
        className='flex items-center justify-between cursor-pointer bg-mainPurple italic'
        onClick={() => setToggle((prevState) => !prevState)}
      >
        <h1 className='text-xl lg:text-[1.4rem]'>{title}</h1>
        {toggle ? <RemoveOutlined /> : <AddOutlined />}
      </div>
      {toggle && (
        <P className='text-lg lg:text-xl mt-3 lg:mt-5 bg-mainPurple '>{text}</P>
      )}
    </div>
  );
};

export default FaqContent;

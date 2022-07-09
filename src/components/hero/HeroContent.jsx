import React from 'react';

const HeroContent = ({ item }) => {
  const { img, contents } = item;
  return (
    <div className='w-full h-full relative top-0 left-0 '>
      <img src={img} alt={img.id} className='object-cover w-full' />
      <span className='bg-[rgba(0,0,0,.3)] w-full h-full absolute top-0 left-0'></span>
      {contents?.map(({ heading, info, btnText, url }) => (
        <div
          className='w-full lg:w-[70%] h-full flex flex-col items-start justify-center absolute top-0 left-0 px-6 lg:px-40 space-y-8 text-left'
          key={url}
        >
          <h3 className='text-5xl lg:text-7xl text-mainWhite font-bold'>
            {heading}
          </h3>
          <p className='text-xl lg:text-2xl text-mainWhite'>{info}</p>
          <button className='bg-mainWhite text-mainPurple font-medium hover:bg-mainPurple hover:text-mainWhite p-3 text-md lg:text-xl rounded-md'>
            <a href={url}>{btnText}</a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default HeroContent;

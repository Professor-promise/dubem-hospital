import React from 'react';

const Utils = ({ utilTitle, utilSubHeading, utilText, className }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center lg:p-3 space-y-2 lg:space-y-1 font-auxFont lg:w-3/5 lg:mx-auto'>
      <h4 className='text-[2.2rem] font-medium lg:text-[2.7rem] text-mainPurple'>
        {utilTitle}
      </h4>
      <h2 className='text-[2.5rem] lg:text-[3rem] font-medium leading-[1.2] p-2 tracking-tighter'>
        {utilSubHeading}
      </h2>
      <p className={`${className} font-mainFont lg:text-xl text-textColor`}>
        {utilText}
      </p>
    </div>
  );
};

export default Utils;

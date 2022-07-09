import React from 'react';

const DoctorCard = ({ item }) => {
  const { name, img, position, posImg } = item;

  return (
    <div className='mySwiper w-full border-2 border-lightGray hover:border-mainPurple hover:shadow-md hover:shadow-mainPurple rounded-2xl p-4 lg:mb-8 flex flex-col gap-5 items-center justify-center transition-shadow duration-700 '>
      <img src={img} alt='' className='relative' />
      <div className='bg-mainPurple rounded-full w-12 h-12 border-2 border-mainWhite flex items-center justify-center absolute top-[65%] lg:top-[60%] '>
        <img src={posImg} alt='' className=' object-contain p-[0.35rem]' />
      </div>
      <div className='flex flex-col pt-5 gap-1'>
        <h2 className='font-semibold text-xl tracking-wide'>{name} </h2>
        <p className='text-textColor text-lg'>{position}</p>
      </div>
    </div>
  );
};

export default DoctorCard;

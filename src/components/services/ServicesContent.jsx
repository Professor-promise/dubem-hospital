import React from 'react';
import ArrowRightAltOutlined from '@mui/icons-material/ArrowRightAltOutlined';
import './services.css';
import { serviceIcons } from '../../shared/data';

const ServicesContent = () => {
  return serviceIcons?.map(({ id, showIcon, hideIcon, heading, content }) => (
    <div
      key={id}
      className='hoverParent bg-mainWhite p-5 shadow-lg  flex flex-col gap-4 lg:gap-5 items-start justify-center text-textColor w-full h-full md:h-[25rem] md:w-[26rem] hover:text-mainWhite group'
    >
      <div className='show'>
        <img src={showIcon} alt='' className='show-icon  ' />
        <img src={hideIcon} alt='' className='hide-icon' />
      </div>
      <h3 className='text-[1.5rem] font-semibold'>{heading}</h3>
      <p className='text-[1rem] lg:text-[1.1rem] '>{content}</p>
      <button className='text-mainPurple group-hover:text-mainWhite text-[1.1rem] flex items-center justify-center gap-1 hover:gap-4 font-medium text-lg transition-all duration-500'>
        <span className='font-medium'>Read More</span>
        <span>
          <ArrowRightAltOutlined className='font-bold text-3xl' />
        </span>
      </button>
      <div className='hoverChild'></div>
    </div>
  ));
};

export default ServicesContent;

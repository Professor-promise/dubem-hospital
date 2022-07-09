import React from 'react';
import Utils from '../../shared/Utils';
import graph from '../../images/graph-img-1.png';
import shape_1 from '../../images/shape-1.svg';
import { landingIcons } from '../../shared/data';

const Landing = () => {
  return (
    <div className='flex flex-col space-y-6 items-center justify-center relative top-0 left-0 bg-mainGray shadow-sm'>
      <img
        src={shape_1}
        alt=''
        className='absolute left-0 top-[10%] lg:top-[5%]'
      />
      <Utils
        utilTitle='What we do'
        utilSubHeading='What We Provide for Your Health'
        utilText='Our team are trained and re trained on modern techniques in the
        management of medical, surgical and obstetric emergencies.'
        className='text-lg'
      />
      <img src={graph} alt='' />
      <div className='flex justify-between items-center p-4 flex-col gap-2 lg:flex-row lg:gap-14'>
        {landingIcons?.map(({ id, icon, text }) => (
          <section
            key={id}
            className='flex flex-col items-center justify-center gap-5 p-4'
          >
            <div className='w-[6rem] border  rounded-full h-[6rem] flex items-center justify-center shadow-xl'>
              <img src={icon} alt='' className='object-cover p-1' />
            </div>
            <span className='text-lg font-medium text-textColor'>{text}</span>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Landing;

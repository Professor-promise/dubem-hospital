import React from 'react';
import Utils from '../../shared/Utils';
import DoctorContent from './DoctorContent';
import NewsLetter from './NewsLetter';
import imgBg from '../../images/shape-2.svg';
import imgBg_1 from '../../images/shape-5.svg';

const Doctor = () => {
  return (
    <div id='doctor' className='relative top-[300px] lg:top-2 left-0 lg:mt-0'>
      <img src={imgBg} alt='' className='absolute top-0 right-0' />
      <img src={imgBg_1} alt='' className='absolute bottom-[45%] left-0' />
      <Utils
        utilTitle='Team'
        utilSubHeading='Meet Our Doctors'
        utilText=' We maintain our reputation in the health sector with our experienced medical staff who continuously improve qualified healthcare with an uncompromising focus when it comes to proficiency and academic values.'
        className='px-3'
      />
      <DoctorContent />
      <NewsLetter />
    </div>
  );
};

export default Doctor;

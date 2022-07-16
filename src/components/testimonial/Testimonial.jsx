import React from 'react';
import Utils from '../../shared/Utils';
import TestimonialContent from './TestimonialContent';
import shape_4 from '../../images/shape-4.svg';
import Faq from './Faq';

const Testimonial = () => {
  return (
    <div className='w-full flex flex-col py-10 justify-center relative top-0 left-0'>
      <img src={shape_4} alt='background' className='absolute right-0 top-10' />
      <Utils utilTitle='Testimonial' utilSubHeading='What Our Patients Says' />
      <TestimonialContent />
      <Faq />
    </div>
  );
};

export default Testimonial;

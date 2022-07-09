import React from 'react';
import Utils from '../../shared/Utils';
import TestimonialContent from './TestimonialContent';
import shape_4 from '../../images/shape-4.svg';
import Faq from './Faq';

const Testimonial = () => {
  return (
    <div className='w-full h-full flex flex-col lg:py-10 py-5 justify-center relative'>
      <img src={shape_4} alt='background' className='absolute right-0 top-10' />
      <Utils utilTitle='Testimonial' utilSubHeading='What Our Patients Says' />
      <TestimonialContent />
      <Faq />
    </div>
  );
};

export default Testimonial;

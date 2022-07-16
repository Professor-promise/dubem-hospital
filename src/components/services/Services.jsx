import React from 'react';
import Utils from '../../shared/Utils';
import ServicesContent from './ServicesContent';
import shape_3 from '../../images/shape-3.svg';

const Services = () => {
  return (
    <div
      id='services'
      className='flex flex-col items-center justify-center px-5 py-10 gap-4 relative top-0 left-0 '
    >
      <img src={shape_3} alt='background' className='absolute left-0 top-0' />
      <Utils
        utilTitle='Services'
        utilSubHeading='Our Healthcare Services'
        utilText='We offer quality healthcare services in all fields of Medicine, Surgery, Obstetrics & Gynaecology and Paediatrics with up to date and state of the art facilities to render full evaluation and comprehensive  treatment'
        className='text-[1.11rem]'
      />
      <section className='flex flex-wrap gap-2 lg:gap-8 items-center justify-center'>
        <ServicesContent />
      </section>
    </div>
  );
};

export default Services;

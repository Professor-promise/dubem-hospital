import React from 'react';
import Utils from '../../shared/Utils';
import AppointmentContent from './AppointmentContent';
import shape_7 from '../../images/shape-7.svg';

const Appointment = () => {
  return (
    <div
      className='py-10 lg:py-10 flex items-center flex-col gap-6 lg:px-40 lg:gap-8 border-t relative top-0'
      id='contact'
    >
      <img
        src={shape_7}
        alt='background'
        className='absolute top-20 -left-20'
      />
      <Utils
        utilTitle='Appoinment'
        utilSubHeading='Get Appoinment Now'
        utilText='Let us know and we’ll get started on finding a doctor who is right for you'
        className='px-3 text-lg'
      />
      <AppointmentContent />
    </div>
  );
};

export default Appointment;

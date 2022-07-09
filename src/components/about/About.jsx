import React from 'react';
import Utils from '../../shared/Utils';
import about_img from '../../images/about-img.png';
import shape_2 from '../../images/shape-2.svg';

const About = () => {
  return (
    <div
      className='w-full flex flex-col shadow-md items-center justify-center pb-1 bg-mainWhite p-5 relative left-0 overflow-hidden'
      id='about'
    >
      <img
        src={shape_2}
        alt='background'
        className='absolute right-[-10px] top-2'
      />
      <Utils
        utilTitle='About Us'
        utilSubHeading='Welcome to Our Clinic'
        utilText='Our hospital is made up of like minded health care doctors who have a common goal, delivering quality healthcare in Nigeria.  We believe in team work and that’s why we have a multidisciplinary model to approaching each patient’s care. We have a team of passionate staff who have years of experience within and outside the country who are skilful and truly care about your needs.'
        className='text-[1.11rem]'
      />
      <button className='bg-mainPurple my-3 p-3 text-mainWhite text-xl hover:text-mainPurple hover:bg-mainWhite hover:border-mainPurple hover:border-2 rounded-lg hover:transition ease-in-out duration-300'>
        Learn More
      </button>
      <div className='w-full'>
        <img src={about_img} alt='' />
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import styled from 'styled-components';
import newsBg from '../../images/subscribe-bg.jpg';
import { contactsIcon } from '../../shared/data';
import emergency from '../../images/emergency.svg';
import PhoneCallbackOutlined from '@mui/icons-material/PhoneCallbackOutlined';

const Container = styled.div`
  background: url(${newsBg}) no-repeat;
  background-position: cover;
  margin: 4rem 0;

  position: relative;
  z-index: 0;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .card {
    z-index: 1;
  }
`;

const NewsLetter = () => {
  return (
    <Container className='w-full  '>
      <div className='flex flex-col px-7 gap-[1.2rem] lg:gap-[2rem] py-8 lg:px-40 lg:py-14 lg:w-[65%] card'>
        <h2 className='text-5xl lg:text-[3.7rem] font-medium font-auxFont text-mainWhite'>
          Subscribe Our Newsletter
        </h2>
        <p className='text-xl text-mainWhite'>
          Your privacy is important to us. Submission of this form is subject to
          Our Hospital User Agreement and Privacy Policy
        </p>
        <form className='w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4'>
          <input
            type='text'
            placeholder='Enter Your Email'
            className='px-6 py-5 rounded-md w-full text-xl hover:shadow-md focus-within:shadow-md outline-none'
          />
          <button className='bg-mainPurple px-6 py-5 rounded-lg font-semibold text-mainWhite text-xl cursor-pointer hover:bg-lightPurple outline-none'>
            Subscribe
          </button>
        </form>
        <div className='flex items-start gap-4 font-auxFont'>
          <img src={emergency} alt='' />
          <div className='text-mainPurple text-2xl font-semibold lg:text-4xl gap-1'>
            <h3 className=''>Emergency Medical</h3>
            <p className='text-mainWhite'>Service 24/7</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-start gap-7  '>
          <div className='flex items-center gap-4'>
            <span className='bg-mainPurple rounded-full h-14 w-14 flex items-center justify-center'>
              <PhoneCallbackOutlined className='text-mainWhite h-12 w-12 bg-mainPurple rounded-full p-1' />
            </span>
            <span className='text-2xl lg:text-3xl font-semibold text-mainPurple'>
              +(234)-814-2407-972
            </span>
          </div>
          {contactsIcon?.map((items, index) => (
            <div key={index} className='flex gap-4'>
              {items?.right?.map((item) => (
                <div
                  key={item.id}
                  className=' hover:bg-mainBlack hover:text-mainWhite text-mainBlack cursor-pointer h-14 w-14 bg-mainWhite rounded-full p-1 flex items-center justify-center transition-all duration-700'
                >
                  <a href={item.url}>
                    {<item.Icon className='w-14 h-14 p-2' />}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewsLetter;

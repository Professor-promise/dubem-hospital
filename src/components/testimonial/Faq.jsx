import React from 'react';
import styled from 'styled-components';
import faq_1 from '../../images/faq-img.jpg';
import { faqContent } from '../../shared/data';
import FaqContent from './FaqContent';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  .first {
    position: relative;
    background: url(${faq_1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex: 0.5;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(138, 3, 159, 0.15);
      top: 0;
      left: 0;
    }

    @media screen and (max-width: 768px) {
      background-size: cover;
      background-position: top;
      padding: 100px;
      background-attachment: fixed;
    }
  }

  .second {
    padding: 35px 0;
    /* background: relative; */
    flex: 0.5;
    background: var(--lightPurple);
    display: flex;
    flex-direction: column;
    color: var(--mainWhite);
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
`;

const Faq = () => {
  return (
    <Container>
      <span className='first'></span>
      <div className='second'>
        <section className='w-full lg:w-[80%] lg:px-10 py-14 px-5 flex flex-col gap-6 font-auxFont'>
          <h3 className='text-2xl lg:text-3xl lg:font-bold '>
            Frequently Asked Questions
          </h3>
          <h2 className='text-[2.4rem] lg:text-[2.8rem] font-bold'>
            Get Every Single Answers There if you want
          </h2>

          {faqContent?.map((item) => (
            <FaqContent {...{ item }} key={item.id} />
          ))}
        </section>
      </div>
    </Container>
  );
};

export default Faq;

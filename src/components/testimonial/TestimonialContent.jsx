import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styled from 'styled-components';

// import required modules
import { Pagination } from 'swiper';
import TestimonialCard from './TestimonialCard';
import { testimonialIcons } from '../../shared/data';

const Container = styled.div`
  .swiper {
    width: 90vw;
  }

  .swiper-slide {
    text-align: center;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-pagination {
    position: absolute;
    top: 150px;
    right: 0;
    width: 100%;
    left: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    display: none;
    object-fit: contain;
  }

  @media screen and (min-width: 640px) {
    .swiper-pagination {
      display: flex;
    }
  }

  .swiper-pagination-bullet {
    border-radius: 1rem;
    width: 4rem;
    height: 4.5rem;
    text-align: center;
    background: transparent;
    opacity: 1;
    transition: all 0.8s ease-out 0s;
  }
  .swiper-pagination-bullet-active {
    transform: scale(1.3);
  }
`;

const TestimonialContent = () => {
  const items = [];
  testimonialIcons?.map(({ img }) => items.push(img));
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<img src=${items[index]} class=${className} />`;
    },
  };

  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={pagination}
        navigation={true}
        modules={[Pagination]}
        className='mySwiper'
      >
        {testimonialIcons?.map((item) => (
          <SwiperSlide key={item.id}>
            <TestimonialCard {...{ item }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TestimonialContent;

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import HeroContent from './HeroContent';
import { sliderContent } from '../../shared/data';
import Landing from './Landing';

const Container = styled.div`
  .swiper {
    width: 100%;
    height: calc(100vh - 80px);
  }

  @media screen and (min-width: 640px) {
    .swiper {
      height: calc(100vh - 145px);
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

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

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    height: 1.2rem;
    width: 1.2rem;
    background: var(--mainWhite);
  }

  .swiper-pagination-bullet-active {
    background: var(--mainPurple);
  }
`;

const Hero = () => {
  return (
    <Container id='home'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {sliderContent?.map((item) => (
          <SwiperSlide key={item.id}>
            <HeroContent {...{ item }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Landing />
    </Container>
  );
};
export default Hero;

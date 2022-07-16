// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import DoctorCard from './DoctorCard';
import { doctorsContent } from '../../shared/data';

const Container = styled.div`
  .swiper {
    width: 100%;
    margin-bottom: 4rem;
    /* 
    height: 100%; */
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
    @media screen and (max-width: 640px) {
      margin-bottom: 30px;
    }
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    background: var(--lightPurple);
  }

  .swiper-pagination-bullet-active {
    background: var(--mainPurple);
  }
`;

const DoctorContent = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 35,
            slidesPerGroup: 4,
          },
        }}
        modules={[Pagination]}
        className='mySwiper w-full px-8 lg:w-[85%] py-6 lg:py-10'
      >
        {doctorsContent?.map((item) => (
          <SwiperSlide key={item.id}>
            <DoctorCard {...{ item }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default DoctorContent;

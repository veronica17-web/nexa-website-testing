import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import Helmet from 'react-helmet';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

const MobileCarouselforHomePage = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 4,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <figure className='relative cursor-pointer'>
            <Link to='/book-online-maruti-nexa-car-service/'>
              <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/Nexa+Service+mobile+Hafeezpet.webp' />
            </Link>
            <figcaption className='absolute text-lg -mt-16 text-white px-4'>
              <div className='text-xl'>
                <p>SERVICE</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with revolutionary technology</p>
              </div> */}
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='relative cursor-pointer'>
            <Link to='/maruti-car-insurance'>
              <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Insurance+Mobile+800x800.webp' />
            </Link>
            <figcaption className='absolute text-lg -mt-16 text-white px-4'>
              <div className='text-xl'>
                <p>INSURANCE</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with a firm grip</p>
              </div> */}
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='relative cursor-pointer'>
            <Link to='/maruti-car-finance'>
              <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Finance+Mobile+800x800.webp' />
            </Link>
            <figcaption className='absolute text-lg -mt-16 text-white px-4'>
              <div className='text-xl md-20'>
                <p>FINANCE</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with utmost comfort</p>
              </div> */}
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className='relative cursor-pointer'>
            <Link to='/accessories'>
              <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Accessories+Mobile+800x800.webp' />
            </Link>
            <figcaption className='absolute text-lg -mt-16 text-white px-4'>
              <div className='text-xl'>
                <p>ACCESSORIES</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with a Powerful Persona</p>
              </div> */}
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MobileCarouselforHomePage;

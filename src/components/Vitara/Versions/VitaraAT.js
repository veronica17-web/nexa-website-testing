import Header from '../../../components/Header/Header';
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Extras/styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

import Carousel from '../Extras/Carousel';
import TabNavigation from '../Extras/TabNavigation';

const VitaraAT = () => {
  return (
    <>
      <Header />

      <div className='container mx-auto py-16 space-y-4 rounded'>
        {/* <Carousel /> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          navigation={true}
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
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/9.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/10.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/11.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/12.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/13.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/14.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/15.webp' />
          </SwiperSlide>
        </Swiper>
        <IntelligentElectric />
      </div>
    </>
  );
};

function IntelligentElectric() {
  return (
    <div className='container mx-auto py-16 space-y-4'>
      <p className='font-bold text-4xl text-center'>
        The Grand Vitara with 6-Speed Automatic Transmission
      </p>
      <p className=' text-center tracking-wider font-bold'>
        Rule the city streets
      </p>
      <p className='bg-black h-1 w-60 mx-auto'></p>
      <p className='max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl'>
        A new breed of SUVs has arrived and it’s here to rule every road it
        drives on, efficiently. This is the Advanced Grand Vitara with the
        revolutionary Intelligent Electric Hybrid System.
      </p>
      <br></br>
      <br></br>
      <p className=' text-center tracking-wider font-bold'>
        How Intelligent Electric Hybrid Works?
      </p>
      <div className='flex justify-center'>
        <iframe
          width='1110'
          height='600'
          src='https://www.youtube.com/embed/evDoKmxJJPc'
          title='How does Intelligent Electric Hybrid work?'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>

        <iframe
          width='1110'
          height='600'
          src='https://www.youtube.com/embed/63IME4Vu2DI'
          title='Maruti Suzuki| Smart Hybrid Technology'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1 className=' text-center tracking-wider font-bold'>
          The Grand Vitara with 6-Speed Automatic Transmission
        </h1>

        <p className='max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl'>
          Get in. Drive. Relax. Feel the road fade away as you effortlessly
          cruise and bask in the glory of the majestic views. This is the
          experience of driving the Advanced Grand Vitara with the 6-Speed
          Automatic Transmission. It has steering-mounted Paddle Shifters that
          make every drive more exciting and engaging. Smooth to drive. Fast to
          accelerate. The perfect way to tackle city traffic and to cruise over
          highways.
        </p>
      </div>
      <TabNavigation />
    </div>
  );
}

export default VitaraAT;

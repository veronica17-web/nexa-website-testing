import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Helmet from 'react-helmet';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Extras/styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

import Carousel from '../Extras/Carousel';
import TabNavigation from '../Extras/TabNavigation';
import TabNavigationMT from '../Extras/TabNavigationMT';

const VitaraMT = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Nexa Grand Vitara 5 Speed manual Transmissions Price</title>
        <meta
          name='title'
          content='Nexa Grand Vitara 5 Speed manual Transmissions Price'
        />
        <meta
          name='description'
          content='Nexa Grand Vitara 5 Speed Manual Price Starts at 10.45Lac*. Maruti Suzuki Grand Vitara available in transmission options: Manual, Automatic (TC) and Automatic (CVT). For more info, call now 9848898488.'
        />
        {/* <meta
          name="keywords"
          content="Nexa Ciaz car price, Offers on Nexa Ciaz, Maruti Ciaz mileage, Ciaz Specifications, Nexa ciaz petrol price, Maruti ciaz on road price, Maruti ciaz variants, ciaz images, ciaz mileage, Nexa ciaz price in hyderabad, Maruti ciaz price in hyderabad, ciaz price in hyderabad, ciaz onroad price in hyderabad, offers on ciaz, ciaz offers 2022, new ciaz price, new ciaz price in hyderabad, new ciaz 2022 price, new ciaz 2022 onroad price, ciaz petrol price in hyderabad, ciaz 2022 petrol price in hyderabad"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/the-new-maruti-ciaz/"
        />
        <meta
          property="og:title"
          content="Nexa Ciaz Car on Road Price & Offers in Hyderabad| Saboo Nexa"
        />
        <meta
          property="og:description"
          content="Nexa Ciaz 2022 car price starts at 8.87 lakh, mileage of 26.8 km/l. Get Nexa Ciaz specifications & features. Best offers on Ciaz car, low EMI, low down-payment. Call now 9848898488"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Ciaz.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/the-new-maruti-ciaz/"
        />
        <meta
          property="twitter:title"
          content="Nexa Ciaz Car on Road Price & Offers in Hyderabad| Saboo Nexa"
        />
        <meta
          property="twitter:description"
          content="Nexa Ciaz 2022 car price starts at 8.87 lakh, mileage of 26.8 km/l. Get Nexa Ciaz specifications & features. Best offers on Ciaz car, low EMI, low down-payment. Call now 9848898488"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Ciaz.jpg"
        /> */}
      </Helmet>
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
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/Front+Sliding+Armrest+webp.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/Power+Button+webp.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/Rear+AC+Vents+webp.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/Boot+Space+webp.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/Projector+Headlamps+webp+(1).webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/LED+Tail+Lamps+webp+(1).webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/R17+Dual+Tone+Precision+Cut+Alloy+Wheels+webp+(1).webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/DRLs+webp+(1).webp' />
          </SwiperSlide>
        </Swiper>
        <ManualTransmission />
      </div>
    </>
  );
};

function ManualTransmission() {
  return (
    <div className='container mx-auto py-16 space-y-4'>
      <p className='font-bold text-4xl text-center'>
        The Grand Vitara with Manual Transmission
      </p>
      <p className=' text-center tracking-wider font-bold'>
        Rule with a powerful persona
      </p>
      <p className='bg-black h-1 w-60 mx-auto'></p>
      <p className='max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl'>
        Get behind the steering wheel and take the power in your hands. Because
        there’s more than one way to exert your dominance and rule every road.
        Super-efficient and power-packed, the Advanced Grand Vitara with Manual
        Transmission makes cruising in the city an exhilarating experience. Feel
        the thrill as you shift the gears and take on the turns with ease.
      </p>
      <br></br>
      <br></br>
      <p className=' text-center tracking-wider font-bold'>
        How 5-Speed Manual Transmission Works?
      </p>
      <div className='flex justify-center sm:p-2'>
        <iframe
          className='w-full aspect-video'
          src='https://www.youtube.com/embed/63IME4Vu2DI?controls=0'
          title='How does Intelligent Electric Hybrid work?'
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
          Progressive Smart Hybrid Technology
        </h1>

        <p className='max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl'>
          The Grand Vitara is engineered for better performance and a refined
          driving experience with the Next Generation 1.5L K Series Engine with
          The Progressive Smart Hybrid Technology. It’s integrated starter
          generator, paired with a Li-ion and Lead Acid Battery, helps in
          regenerating braking energy and provides torque assist to the engine
          during acceleration.
        </p>
      </div>
      <TabNavigationMT />
    </div>
  );
}

export default VitaraMT;

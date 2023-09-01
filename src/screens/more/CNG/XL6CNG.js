import React from 'react';
import Header from '../../../components/Header/Header';

// import { products } from '../../constants';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../components/Jimny/Extras/styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';
import OnRoadPrice from '../../../components/utils/OnRoadPrice';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Helmet } from 'react-helmet';
import Features from '../../../components/XL/Features';

const XL6CNG = () => {
  return (
    <>
      <Header col={true} />
      <Helmet>
        <title>
          Nexa XL6 CNG Price in Hyderabad | Maruti XL6 CNG On Road Price in
          Hyderabad
        </title>
        <meta
          name='title'
          content='Nexa XL6 CNG Price in Hyderabad | Maruti XL6 CNG On Road Price in Hyderabad'
        />
        <meta
          name='description'
          content='Nexa XL6 CNG On-Road Price in Hyderabad. Maruti Suzuki XL6 CNG On road Price starts at ₹ 11.29 lakh. For more details about XL6 CNG features, specifications, mileage, colors and images visit our site or call us 98488 98488'
        />
        <meta
          name='keywords'
          content='XL6 CNG on road price, XL6 CNG mileage, XL6 CNG offers & disconuts,XL6 CNG on road price, Maruti XL6 CNG offers, XL6 CNG mileage,Nexa XL6 CNG petrol price, Maruti XL6 CNG on road price, Maruti XL6 CNG variants, XL6 CNG images, XL6 CNG mileage, Nexa XL6 CNG price in hyderabad, Maruti XL6 CNG price in hyderabad, XL6 CNG price in hyderabad, XL6 CNG onroad price in hyderabad, offers on XL6 CNG, XL6 CNG offers 2022, new XL6 CNG price, new XL6 CNG price in hyderabad, new XL6 CNG 2022 price, new XL6 CNG 2022 onroad price, XL6 CNG petrol price in hyderabad, XL6 CNG 2022 petrol price in hyderabad'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboonexa.in/the-xl6/' />
        <meta
          property='og:title'
          content='Nexa XL6 CNG On Road Price in Hyderabad | Maruti XL6 CNG Offers in Hyderabad'
        />
        <meta
          property='og:description'
          content='Nexa XL6 CNG 2022 price in Hyderabad. Maruti Suzuki XL6 CNG on road price starts at ₹ 10.14* lakh. For more details about XL6 CNG features, specifications, mileage, colors and images visit our site or call us 98488 98488'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/the-xl6/'
        />
        <meta
          property='twitter:title'
          content='Nexa XL6 CNG On Road Price in Hyderabad | Maruti XL6 CNG Offers in Hyderabad'
        />
        <meta
          property='twitter:description'
          content='Nexa XL6 2022 price in Hyderabad. Maruti Suzuki XL6 on road price starts at ₹ 10.14* lakh. For more details about XL6 features, specifications, mileage, colors and images visit our site or call us 98488 98488'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg'
        />
      </Helmet>
      {/* <div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-desktop.webp'
          className='w-full object-cover hidden md:block '
          alt='SCNG Banner'
          srcSet=''
        />
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-mobile.webp'
          className='w-full md:hidden block '
          alt='SCNG Banner'
          srcSet=''
        />
      </div> */}
      
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6-cng-banner-mobile.webp')] sm:bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6-cng-banner-desktop.webp')]  bg-cover bg-no-repeat md:h-[40vh] lg:h-[60vh] h-[60vh]">
        <div className='max-w-6xl '>
          <div className='grid sm:grid-cols-2 lg:grid-cols-2'>
            <div className='my-auto mx-5 pt-10 pr-[30]'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Logo-xl6.webp'
                className='p-3 md:ml-20 lg:ml-36'
                alt='title'
              />
              <a
                href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/THE+ALL-NEW+XL6+Brochure.pdf'
                className='p-3 bg-black text-white flex items-center max-w-[200px] md:ml-24 lg:ml-40 mt-5 rounded'
                target='_blank'
                rel='noreferrer'
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
      <OnRoadPrice title={'XL6 CNG'} />
      <div className='text-center font-semibold   my-8 container mx-auto '>
        <div className='text-2xl py-4 pt-8'>
          EXPERIENCE INDULGENCE. RESPONSIBLY.
        </div>


        Take the first step towards a conscious lifestyle with NEXA S-CNG, where
        innovation and intelligence meet to power the future. Designed to go the
        extra mile, the All-New XL6 S-CNG is the premium MPV offering superior
        features with a desire to improve the environment- all culminating in an
        indulgent experience like no other. Now, let your every drive be suave
        and sensible.

      </div>
      <div className='text-center mt-8 -mb-6 container mx-auto '>
        <div className='text-2xl font-semibold py-4 pt-8 '>
          THE ALL-NEW XL6 FEATURES
        </div>
        <div className='font-semibold'>
          The All-New XL6 Is Equipped With Features That Make Your World An
          Indulgent Place.
        </div>
        <div className='container  px-6 md:px-12 lg:px-24 py-2 sm:py-5 '>
          <div className='container mx-auto py-6 space-y-4 rounded'>
            {/* <Carousel /> */}
            <Swiper
              slidesPerView={1}
              spaceBetween={1}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
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
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/XL6-MID-fuel.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/XL6-MID-petrol.webp'
                  alt=''
                  className=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/1170x521-captain-seatsss+webp.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/XL6-Interior.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/XL6-Nozzle.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/classic.webp'
                  alt=''
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* <div className='text-center my-6 container mx-auto pb-6'>
        <div className='text-2xl font-semibold '>REGISTER YOUR INTEREST</div>
        <div className='container  px-6 md:px-12 lg:px-24 py-2 sm:py-5'>
          Register Now To Know All About The Advanced Features Of Grand Vitara
          CNG
        </div>
        <hr className='w-1/5 mx-auto' />
      </div> */}
      <div className='text-2xl text-center font-semibold py-4 pt-10 -mb-14'>
        THE ALL-NEW XL6 S-CNG SPECIFICATIONS
      </div>
      <Features />
    </>
  );
};

export default XL6CNG;

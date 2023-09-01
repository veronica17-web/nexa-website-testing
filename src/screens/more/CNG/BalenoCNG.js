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
import Features from '../../../components/BALENO/Features';

const BalenoCNG = () => {
  return (
    <>
      <Header col={true} />
      <Helmet>
        <title>
          New Nexa Baleno CNG Price in Hyderabad | Maruti Baleno 2023 Price,
          Offers & Discounts
        </title>
        <meta
          name='title'
          content='New Nexa Baleno CNG Price in Hyderabad | Maruti Baleno 2023 Price, Offers & Discounts'
        />
        <meta
          name='description'
          content='Nexa New Baleno On- Road Price in Hyderabad. Maruti Baleno 2023 On Road Price Starts from ₹ 6.49* Lakh. Maruti Baleno is Now Available with Head up Display, Equipped With 6 Airbags, Hill Hold Assist, Speed Alert System. Visit Your Nearest Saboo Nexa Showroom for Nexa Baleno CNG Offers & Discounts. Call now.'
        />
        <meta
          name='keywords'
          content='Nexa Baleno CNG Price, Baleno offers & disconts, Baleno mileage,Nexa Baleno CNG price, Maruti baleno on road price, Maruti baleno variants, baleno images, baleno mileage, Nexa Baleno CNG price in hyderabad, Maruti baleno price in hyderabad, baleno price in hyderabad, baleno onroad price in hyderabad, offers on baleno, baleno offers 2023, new baleno price, new baleno price in hyderabad, new baleno 2023 price, new baleno 2023 onroad price, baleno petrol price in hyderabad, baleno 2023 petrol price in hyderabad, new age baleno, new baleno 2023, baleno 2023 price'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboonexa.in/the-new-maruti-baleno/'
        />
        <meta
          property='og:title'
          content='Nexa Baleno CNG On Road Price in Hyderabad | Maruti Baleno Offers & Discounts'
        />
        <meta
          property='og:description'
          content='New Nexa Baleno CNG 2023 price in Hyderabad. Maruti Baleno on Road price starts from ₹ 6.35* Lakh. Maruti Baleno is now available with 1.2litre DualJet, Dual VVT, BS6 engine with Smart Hybrid tech. Visit your nearest Saboo Nexa showroom for Nexa Baleno CNG offers & discounts. Call now.'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Baleno.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/the-new-maruti-baleno/'
        />
        <meta
          property='twitter:title'
          content='Nexa Baleno CNG On Road Price in Hyderabad | Maruti Baleno Offers & Discounts'
        />
        <meta
          property='twitter:description'
          content='New Nexa Baleno CNG 2023 price in Hyderabad. Maruti Baleno on Road price starts from ₹ 6.35* Lakh. Maruti Baleno is now available with 1.2litre DualJet, Dual VVT, BS6 engine with Smart Hybrid tech. Visit your nearest Saboo Nexa showroom for Nexa Baleno CNG offers & discounts. Call now.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Baleno.jpg'
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
      
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/BALENO-cng-banner-mobile.webp')] sm:bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/BALENO-cng-banner-desktop.webp')]  bg-cover bg-no-repeat md:h-[40vh] lg:h-[60vh] h-[60vh]">
        <div className='max-w-6xl '>
          <div className='grid sm:grid-cols-2 lg:grid-cols-2'>
            <div className='my-auto mx-5 pt-10 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Logo-baleno.webp'
                className='p-3 md:ml-20 lg:ml-36'
                alt='title'
              />
              <a
                href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/The_New_Age_Baleno_Brochure.pdf'
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
      <OnRoadPrice title={'BALENO CNG'} />
      <div className='text-center font-semibold my-8 container mx-auto '>
        <div className='text-2xl  py-4 pt-8'>RESPONSIBLY BOLD</div>
        Future never looked so good. With the NEXA S-CNG, your search for a
        smart and conscious drive finds the final destination. Presenting the
        New Age Baleno S-CNG, now equipped with Maruti Suzuki’s tested and
        reliable S-CNG technology. Now it's your turn to take the road to green
        fuel mobility for a progressive and premium driving experience.
      </div>
      <div className='text-center mt-8 -mb-8 container mx-auto '>
        <div className='text-2xl font-semibold py-4 pt-8 '>THE NEW AGE BALENO FEATURES</div>
        <div className='font-semibold'>
        Convenience Goes Bold
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
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Baleno+airbag.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide >
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/BALENO-Chasis.webp'
                  alt=''
                  className=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Feature-1170x521-Rear-USB-Ctype.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/image.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/SuzukiConnect-2.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Tilt-telescopic.webp'
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
    <Features  />
    </>
  );
};

export default BalenoCNG;

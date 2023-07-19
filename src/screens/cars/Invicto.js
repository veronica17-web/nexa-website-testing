import React, { useState } from 'react';
import Header from '../../components/Header/Header';
// import { Swiper, SwiperSlide } from 'swiper/react';

import { GiBeltBuckles, GiSpeedometer } from 'react-icons/gi';

import { Tab } from '@headlessui/react';

import { toast } from 'react-toastify';

import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import 'swiper/css';

import Helmet from 'react-helmet';
// import { Autoplay, Navigation, Pagination } from 'swiper';

import {
  MdAirlineSeatReclineExtra,
  MdOutlineFileDownload,
} from 'react-icons/md';
// import Carousel from '../../components/Fronx/Extras/Carousel';

import { Autoplay, EffectCoverflow, EffectCreative } from 'swiper';

// const width = window.innerWidth;

const Invicto = () => {
  const [exterior, setExterior] = useState(false);
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Invicto On-Road Price in Hyderabad | Saboo NEXA
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Invicto On-Road Price in Hyderabad | Saboo NEXA'
        />
        <meta
          name='description'
          content='Get the latest on-road price of Maruti Suzuki Invicto in Hyderabad and enjoy a smooth car Buying experience. For more information about Nexa Invicto visit your nearest Saboo Nexa dealership today.'
        />
      </Helmet>
      <Header />
      {/* {width > 425 ? <WebBanner /> : <MobileWebBanner />} */}
      <div>
        <div className='top-0 left-0 w-full h-[90vh] md:h-screen  '>
          <video
            className='w-full h-full object-cover '
            preload='metadata'
            loop
            autoPlay
            playsInline
            muted
            poster='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Header+Banner_Desktop_1500x605.webp'
          >
            <source
              // class='w-30 h-30'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/videos/WEBSITE+mp4.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </div>

      <InvictoCarEnquiry />

      {/* Design Philosophy */}
      <Philosphy />

      {/* Int & Ext Sliders */}
      <div className=''>
        <div className='text-center text-2xl md:text-3xl font-semibold pb-4'>
          Discover Opulence
        </div>
        <div className='flex justify-center  text-xl pb-5 '>
          <div className='pr-2'>
            <button
              className='border-r pr-2'
              onClick={() => setExterior(!exterior)}
            >
              Interior
            </button>
            {!exterior && (
              <div className=' bg-[#163472] h-1 mr-2 pr-2 flex justify-center '>
                <div className='h-2 w-2 -mr-2 bg-[#163472] rounded-md rotate-45 '></div>
              </div>
            )}
          </div>
          <div className='pr-2'>
            <button className=' pr-2' onClick={() => setExterior(!exterior)}>
              Exterior
            </button>
            {exterior && (
              <div className=' bg-[#163472] h-1 mr-2 pr-2 flex justify-center '>
                <div className='h-2 w-2 -mr-2 bg-[#163472] rounded-md rotate-45 '></div>
              </div>
            )}
          </div>
        </div>
        {exterior ? <ExteriorSlider /> : <InteriorSlider />}
      </div>

      {/* Intelligent Electric Hybrid System */}
      <TabNavigationInvictio />

      {/* Benefits of Intelligent Electric Hybrid */}
      <Benefits />

      {/* Color */}
      <InvictoColor />

      <Safety />
      <InvictoCarEnquiry2 />
    </>
  );
};

function InvictoCarEnquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');

  const [method, setMethod] = useState();
  const [loader, setLoader] = useState(false);

  function handleSubmit() {
    setLoader(true);
    axios
      .post('https://saboogroups.com/admin/api/enquiry', {
        name: name,
        email: email,
        phone: phone,
        model: model,
      })
      .then((res) => {
        setMethod('POST');
        toast.success('Enquiry sent successfully');
      })
      .catch((err) => {
        setLoader(false);
        toast.error('Something went wrong!');
        console.log(err);
      });
    setLoader(false);
  }

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }
  return (
    <>
      <div className='py-6 bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Saboo-RKS-Nexa-Price-Banner.webp)]'>
        <div className='container mx-auto space-y-3 lg:px-0 px-5'>
          <h3 className='text-xl font-semibold text-white'>
            Register Now To Know More About Invicto
          </h3>
          <form
            action={
              pattern.test(phone) && phone.length === 10
                ? 'https://crm.zoho.in/crm/WebToLeadForm'
                : '#'
            }
            name='WebToLeads54158000000752015'
            method={method}
            acceptCharset='UTF-8'
          >
            <input
              type='text'
              style={{ display: 'none' }}
              name='xnQsjsdp'
              value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
            />
            <input type='hidden' name='zc_gad' id='zc_gad' value='' />
            <input
              type='text'
              style={{ display: 'none' }}
              name='xmIwtLD'
              value='3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              name='actionType'
              value='TGVhZHM='
            />
            <input
              type='text'
              style={{ display: 'none' }}
              name='returnURL'
              value='https://www.saboonexa.in/thank-you?email=Email'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              id='ldeskuid'
              name='ldeskuid'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              id='LDTuvid'
              name='LDTuvid'
            />
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4'>
              <div>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  placeholder='Name'
                  id='Last_Name'
                  name='Last Name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  placeholder='Email'
                  id='Email'
                  name='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  placeholder='Mobile'
                  value={phone}
                  id='Phone'
                  name='Phone'
                  required
                  minLength='10'
                  maxLength='10'
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(/[^1-9 ]/g, '') &&
                        e.target.value.replace(/ /g, '')
                    )
                  }
                />
                {!pattern.test(phone) && phone.length === 10 ? (
                  <small className='text-red-500'>
                    phone number is invalid
                  </small>
                ) : (
                  ''
                )}
              </div>
              <>
                <select
                  id='LEADCF6'
                  name='LEADCF6'
                  onChange={(e) => setModel(e.target.value)}
                  className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                >
                  <option>Select Model</option>
                  <option value='INVICTO'>Invicto</option>
                </select>
              </>
              <>
                <button
                  type='submit'
                  disabled={
                    pattern.test(phone) && phone.length === 10 ? false : true
                  }
                  onClick={handleSubmit}
                  className='w-full h-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                >
                  {loader ? (
                    <div className='flex items-center justify-center'>
                      <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                      Loading
                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
              </>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function InvictoCarEnquiry2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('INVICTO');

  const [method, setMethod] = useState();
  const [loader, setLoader] = useState(false);

  function handleSubmit() {
    setLoader(true);
    axios
      .post('https://saboogroups.com/admin/api/enquiry', {
        name: name,
        email: email,
        phone: phone,
        model: model,
      })
      .then((res) => {
        setMethod('POST');
        toast.success('Enquiry sent successfully');
      })
      .catch((err) => {
        setLoader(false);
        toast.error('Something went wrong!');
        console.log(err);
      });
    setLoader(false);
  }

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }
  return (
    <>
      <div className='py-6 -mt-20 '>
        <div className='container mx-auto space-y-3 lg:px-0 px-5'>
          <div className='text-center font-semibold text-2xl lg:text-3xl py-4 '>
            Book Your Invicto Now
          </div>
          <form
            action={
              pattern.test(phone) && phone.length === 10
                ? 'https://crm.zoho.in/crm/WebToLeadForm'
                : '#'
            }
            name='WebToLeads54158000000752015'
            method={method}
            acceptCharset='UTF-8'
          >
            <div></div>
            <input
              type='text'
              style={{ display: 'none' }}
              name='xnQsjsdp'
              value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
            />
            <input type='hidden' name='zc_gad' id='zc_gad' value='' />
            <input
              type='text'
              style={{ display: 'none' }}
              name='xmIwtLD'
              value='3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              name='actionType'
              value='TGVhZHM='
            />
            <input
              type='text'
              style={{ display: 'none' }}
              name='returnURL'
              value='https://www.saboonexa.in/thank-you?email=Email'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              id='ldeskuid'
              name='ldeskuid'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              id='LDTuvid'
              name='LDTuvid'
            />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-10'>
              <div>
                <input
                  className='border-b border-black h-10 outline-none px-3  w-full placeholder:text-lg  placeholder:text-gray-400 font-sans  '
                  placeholder='Name'
                  id='Last_Name'
                  name='Last Name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className='border-b border-black h-10 outline-none px-3  w-full placeholder:text-lg  placeholder:text-gray-400 font-sans '
                  placeholder='Email'
                  id='Email'
                  name='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  className='border-b border-black h-10 outline-none px-3  w-full placeholder:text-lg  placeholder:text-gray-400 font-sans  '
                  placeholder='Mobile'
                  value={phone}
                  id='Phone'
                  name='Phone'
                  required
                  minLength='10'
                  maxLength='10'
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(/[^1-9 ]/g, '') &&
                        e.target.value.replace(/ /g, '')
                    )
                  }
                />
                {!pattern.test(phone) && phone.length === 10 ? (
                  <small className='text-red-500'>
                    phone number is invalid
                  </small>
                ) : (
                  ''
                )}
              </div>
              <>
                <select
                  id='LEADCF6'
                  name='LEADCF6'
                  onChange={(e) => setModel(e.target.value)}
                  className='block w-full h-10 py-2 px-2 border-b border-black bg-white  shadow-sm focus:outline-none   sm:text-sm placeholder:text-lg  placeholder:text-gray-600 font-sans '
                >
                  {/* <option defaultChecked>Select Model</option> */}
                  <option value='INVICTO' className=''>
                    Invicto
                  </option>
                </select>
              </>

              <button
                type='submit'
                disabled={
                  pattern.test(phone) && phone.length === 10 ? false : true
                }
                onClick={handleSubmit}
                class='group relative md:col-span-2 h-10 w-full shadow-lg overflow-hidden bg-black text-md rounded-lg border-white '
              >
                <div class='absolute inset-0 w-[0.5px]  bg-white transition-all duration-[500ms]  ease-out group-hover:w-full group-hover:border-b-2 group-hover:border-b-black border border-white'></div>
                <span class='relative text-white group-hover:text-black '>
                  {loader ? (
                    <div className='flex items-center justify-center'>
                      <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                      Loading
                    </div>
                  ) : (
                    'Submit'
                  )}
                </span>
              </button>
            </div>
            <div className='mt-6 container text-xs text-gray-600'>
              <span className='font-semibold'>*Disclaimer:</span> I agree that
              by clicking the ‘Submit’ button , I am explicitly soliciting a
              call and message via whatsapp or any other medium from Saboo RKS
              motors on my ‘Mobile’.
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const ExteriorSlider = () => {
  const [swiper, setSwiper] = useState(null);

  const styles = `
  #app { height: 100% }
  html,
  body {
    position: relative;
    height: 100%;
  }
  
  body {
    font-size: 14px;
    // color: #000;
    margin: 0;
    padding: 0;
  }
.swiper {
  // width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  // margin: 40px
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  // width: 300px;
  
  // height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


`;
  const handleClickSlide = (index) => {
    if (swiper) {
      swiper.slideTo(index); // Go to the clicked slide
    }
  };

  const handleSwiperInit = (swiperInstance) => {
    setSwiper(swiperInstance);
  };
  return (
    <>
      <style>{styles}</style>
      <div className='lg:px-10 bg-[#d1d0d05a] '>
        <Swiper
          effect={'coverflow'}
          // loop={true}
          // grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={-30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          onSwiper={handleSwiperInit}
          // pagination={true}
          modules={[EffectCoverflow, Autoplay]}
          className='rounded-3xl'
        >
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-4+webp.webp'
              alt=''
              onClick={() => handleClickSlide(0)}
            />
          </SwiperSlide>
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-2+jpg.webp'
              alt=''
              onClick={() => handleClickSlide(1)}
            />
          </SwiperSlide>
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-3+jpg.webp'
              alt=''
              onClick={() => handleClickSlide(2)}
            />
          </SwiperSlide>
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-5+webp.webp'
              alt=''
              onClick={() => handleClickSlide(3)}
            />
          </SwiperSlide>
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-5+webp.webp'
              alt=''
              onClick={() => handleClickSlide(4)}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
const InteriorSlider = () => {
  const [swiper, setSwiper] = useState(null);

  const styles = `
  #app { height: 100% }
  html,
  body {
    position: relative;
    height: 100%;
  }
  
  body {
    font-size: 14px;
    // color: #000;
    margin: 0;
    padding: 0;
  }
.swiper {
  // width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  // margin: 40px
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  // width: 300px;
  
  // height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


`;
  const handleClickSlide = (index) => {
    if (swiper) {
      swiper.slideTo(index); // Go to the clicked slide
    }
  };

  const handleSwiperInit = (swiperInstance) => {
    setSwiper(swiperInstance);
  };
  return (
    <>
      <style>{styles}</style>
      <div className='lg:px-10 bg-[#d1d0d05a] '>
        <Swiper
          effect={'coverflow'}
          // loop={true}
          // grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={-30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          onSwiper={handleSwiperInit}
          // pagination={true}
          modules={[EffectCoverflow, Autoplay]}
          className='rounded-3xl'
        >
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/intr-img-3+jpg.webp'
              alt=''
              onClick={() => handleClickSlide(0)}
            />
          </SwiperSlide>
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/intr-img-2+jpg.webp'
              alt=''
              onClick={() => handleClickSlide(1)}
            />
          </SwiperSlide>
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-8+webp.webp'
              alt=''
              onClick={() => handleClickSlide(2)}
            />
          </SwiperSlide>
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-5+webp.webp'
              alt=''
              onClick={() => handleClickSlide(3)}
            />
          </SwiperSlide>
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-6+webp.webp'
              alt=''
              onClick={() => handleClickSlide(4)}
            />
          </SwiperSlide>
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-4+webp.webp'
              alt=''
              onClick={() => handleClickSlide(5)}
            />
          </SwiperSlide>
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/intr-img-1+jpg.webp'
              alt=''
              onClick={() => handleClickSlide(6)}
            />
          </SwiperSlide>
          <SwiperSlide className=' rounded-2xl overflow-hidden border-2 border-gray-200'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-7+webp.webp'
              alt=''
              onClick={() => handleClickSlide(7)}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

function Philosphy() {
  return (
    <div>
      <div className='top-0 left-0 w-full lg:h-[90vh]  py-10 mb-4 relative '>
        <div className='text-center text-2xl md:text-3xl font-semibold pb-5'>
          Design Philosophy
        </div>
        <div className=' md:hidden bg-black font-normal  text-white py-10 px-6 italic'>
          <div className='text-xl pb-6 font-semibold'>
            WELCOME TO THE LEAGUE OF EXTRAORDINARY
          </div>
          Embodying NEXA’s Crafted Futurism Design Language, the INVICTO
          features signature design elements like the NEXTre’ LED Headlamps, LED
          Tail lamps, and the NEXWave Grille with urbane chrome accents.
        </div>

        <video
          className='w-full h-full object-cover pb-6 lg:pb-10'
          preload='metadata'
          loop
          autoPlay
          playsInline
          muted
          poster='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Header+Banner_Desktop_1500x605.webp'
        >
          <source
            // class='w-30 h-30'
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/videos/philoshphyNexa.mp4'
            type='video/mp4'
          />
        </video>
        <div className='absolute top-[50%] bg-gradient-to-r from-black hidden md:block font-normal  text-white py-10 px-6 italic '>
          <div className='text-xl pb-6 font-semibold'>
            WELCOME TO THE LEAGUE OF EXTRAORDINARY
          </div>
          Embodying NEXA’s Crafted Futurism Design Language, the INVICTO <br />
          features signature design elements like the NEXTre’ LED Headlamps,{' '}
          <br />
          LED Tail lamps, and the NEXWave Grille with urbane chrome accents.
        </div>
      </div>
    </div>
  );
}
function TabNavigationInvictio() {
  return (
    <>
      <div className='container mx-auto '>
        <div className='text-center font-semibold text-2xl lg:text-3xl py-4'>
          Intelligent Electric Hybrid System
        </div>
        <div className='text-lg text-center'>
          Real power isn’t loud. It’s subtle. The advanced electric hybrid
          system from Maruti Suzuki is a fully hybrid technology that can drive
          on battery power alone, and operate in fuel efficient zero emissions
          mode. The Intelligent Electric Hybrid can seamlessly switch between
          pure electric, petrol mode & hybrid mode depending on the driving
          situation. A revolutionary solution that makes your travel smooth,
          silent and efficient.
        </div>
      </div>

      <Tab.Group>
        <div className='flex items-center justify-center py-8'>
          <Tab.List className='space-x-1'>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-black text-gray-200 px-4 py-2 outline-none '
                  : 'bg-gray-300 text-black hover:bg-black font-light  hover:text-gray-300 mb-3 px-4 py-2  '
              }
            >
              Electric Drive
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-black text-gray-200 px-4 py-2 outline-none '
                  : 'bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 '
              }
            >
              Hybrid Drive
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-black text-gray-200 px-4 py-2 outline-none'
                  : 'bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 '
              }
            >
              Engine Drive
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-black text-gray-200 px-4 py-2 outline-none '
                  : 'bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 '
              }
            >
              Regenerative Braking
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* Ciaz 360° view  */}

            {/* exterior */}
            <Tab.Panel>
              <ElectricDrive />
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <HybridDrive />
              {/* <HyrbridDrive /> */}
            </Tab.Panel>

            {/* color */}
            <Tab.Panel>
              <EngineDrive />
              {/* <EngineDrive /> */}
            </Tab.Panel>

            <Tab.Panel>
              <RegenerativeBraking />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}

const ElectricDrive = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='bg-white '>
          <div class='gap-1 items-center py-2 px-2 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4'>
            <video class='w-screen' autoplay='autoplay' loop>
              <source
                class='w-30 h-30'
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4'
                type='video/mp4'
              />
            </video>

            <p className='p-2 sm:py-14 text-black md:text-lg font-light  tracking-wide text-center'>
              For low speed cruising, the energy stored in the battery pack is
              utilized to power the electric motor. A truly Electric Drive that
              provides you with immediate acceleration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const HybridDrive = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='bg-white '>
          <div class='gap-1 items-center py-2 px-2 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4'>
            <video class='w-screen' autoplay='autoplay' loop>
              <source
                class='w-30 h-30'
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4'
                type='video/mp4'
              />
            </video>

            <p className='p-2 sm:py-14 text-black md:text-lg font-light  tracking-wide text-center'>
              Gives you optimum performance and spontaneous acceleration using
              the power of both the petrol engine and the battery pack. The
              combined power output provides a powerful driving experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const EngineDrive = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='bg-white '>
          <div class='gap-1 items-center py-2 px-2 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4'>
            <video class='w-screen' autoplay='autoplay' loop>
              <source
                class='w-30 h-30'
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4'
                type='video/mp4'
              />
            </video>

            <p className='p-2 sm:py-14 text-black md:text-lg font-light  tracking-wide text-center'>
              An engine drive leverages the IC engine to help you cruise through
              your journeys while also charging the battery at the same time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const RegenerativeBraking = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='bg-white '>
          <div class='gap-1 items-center py-2 px-2 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4'>
            <video class='w-screen' autoplay='autoplay' loop>
              <source
                class='w-30 h-30'
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4'
                type='video/mp4'
              />
            </video>

            <p className='p-2 sm:py-14 text-black md:text-lg font-light  tracking-wide text-center'>
              A smart solution that maximizes energy efficiency by leveraging
              regenerative braking to recharge the Li-ion battery.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

function Benefits() {
  return (
    <div className='container mx-auto py-6 lg:px-10'>
      <div className='text-center font-semibold text-2xl lg:text-3xl py-4 '>
        Benefits of Intelligent Electric Hybrid
      </div>
      <div className='flex gap-2 md:flex-col'>
        <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-around my-6 pl-2 md:pl-0'>
          <div className='md:h-32 md:w-32 h-20 w-20 rounded-full bg-gradient-to-tr from-gray-300 via-gray-300 flex justify-center items-center'>
            <div className='md:h-28 md:w-28 h-16 w-16 bg-gray-100 rounded-full filter-none shadow-2xl hover:scale-105 '>
              <div className='md:h-28 md:w-28 h-16 w-16 bg-gray-100 rounded-full filter-none flex justify-center items-center'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/benifit-icon1+png.webp'
                  alt=''
                  srcset=''
                  className='mx-auto'
                />
              </div>
              <div className='w-5 h-5 bg-gray-100 mx-auto rotate-45 -mt-3 rounded hidden md:block'></div>
            </div>
          </div>
          <div className='md:h-32 md:w-32 h-20 w-20 rounded-full bg-gradient-to-tr from-gray-300 via-gray-300 flex justify-center items-center'>
            <div className='md:h-28 md:w-28 h-16 w-16 bg-gray-100 rounded-full filter-none shadow-2xl hover:scale-105 '>
              <div className='md:h-28 md:w-28 h-16 w-16 bg-gray-100 rounded-full filter-none flex justify-center items-center'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/benifit-icon2+png.webp'
                  alt=''
                  srcset=''
                  className='mx-auto p-2 md:p-4'
                />
              </div>
              <div className='w-5 h-5 bg-gray-100 mx-auto rotate-45 -mt-3 rounded hidden md:block'></div>
            </div>
          </div>
          <div className='md:h-32 md:w-32 h-20 w-20 rounded-full bg-gradient-to-tr from-gray-300 via-gray-300 flex justify-center items-center'>
            <div className='md:h-28 md:w-28 h-16 w-16 bg-gray-100 rounded-full filter-none shadow-2xl hover:scale-105 '>
              <div className='md:h-28 md:w-28 h-16 w-16 bg-gray-100 rounded-full filter-none flex justify-center items-center'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/benifit-icon3+png.webp'
                  alt=''
                  srcset=''
                  className='mx-auto '
                />
              </div>
              <div className='w-5 h-5 bg-gray-100 mx-auto rotate-45 -mt-3 rounded hidden md:block'></div>
            </div>
          </div>
          <div className='md:h-32 md:w-32 h-20 w-20 rounded-full bg-gradient-to-tr from-gray-300 via-gray-300 flex justify-center items-center'>
            <div className='md:h-28 md:w-28 h-16 w-16 bg-gray-100 rounded-full filter-none shadow-2xl hover:scale-105 '>
              <div className='md:h-28 md:w-28 h-16 w-16 bg-gray-100 rounded-full filter-none flex justify-center items-center'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/benifit-icon4+png.webp'
                  alt=''
                  srcset=''
                  className='mx-auto '
                />
              </div>
              <div className='w-5 h-5 bg-gray-100 mx-auto rotate-45 -mt-3 rounded hidden md:block'></div>
            </div>
          </div>
          <div className='md:h-32 md:w-32 h-20 w-20 rounded-full bg-gradient-to-tr from-gray-300 via-gray-300 flex justify-center items-center'>
            <div className='md:h-28 md:w-28 h-16 w-16 bg-gray-100 rounded-full filter-none shadow-2xl hover:scale-105 '>
              <div className='md:h-28 md:w-28 h-16 w-16 bg-gray-100 rounded-full filter-none flex justify-center items-center'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/benifit-icon5+png.webp'
                  alt=''
                  srcset=''
                  className='mx-auto p-2 md:p-4'
                />
              </div>
              <div className='w-5 h-5 bg-gray-100 mx-auto rotate-45 -mt-3 rounded hidden md:block'></div>
            </div>
          </div>
        </div>
        <div className='flex md:flex-col gap-2 md:gap-1'>
          {/* <div  className="h-2 bg-gray-300 blur-[2px] mt-6" ></div> */}
          <div className='md:h-2 w-2 md:w-full mx-4 md:mx-0 bg-gradient-to-br  md:bg-gradient-to-t from-gray-200  md:shadow rounded flex flex-col md:flex-row justify-around   my-3  '>
            <div className='w-8 h-8 -ml-3 md:ml-0 -mt-3 bg-gray-300 rounded-full flex justify-center items-center'>
              <div className='w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center hover:animate-pulse'>
                <div className='h-2 w-2 rounded-full bg-blue-300 '></div>
              </div>
            </div>
            <div className='w-8 h-8 -ml-3 md:ml-0 -mt-3 bg-gray-300 rounded-full flex justify-center items-center'>
              <div className='w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center hover:animate-pulse'>
                <div className='h-2 w-2 rounded-full bg-blue-300 '></div>
              </div>
            </div>
            <div className='w-8 h-8 -ml-3 md:ml-0 -mt-3 bg-gray-300 rounded-full flex justify-center items-center'>
              <div className='w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center hover:animate-pulse'>
                <div className='h-2 w-2 rounded-full bg-blue-300 '></div>
              </div>
            </div>
            <div className='w-8 h-8 -ml-3 md:ml-0 -mt-3 bg-gray-300 rounded-full flex justify-center items-center'>
              <div className='w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center hover:animate-pulse'>
                <div className='h-2 w-2 rounded-full bg-blue-300 '></div>
              </div>
            </div>
            <div className='w-8 h-8 -ml-3 md:ml-0 -mt-3 bg-gray-300 rounded-full flex justify-center items-center'>
              <div className='w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center hover:animate-pulse'>
                <div className='h-2 w-2 rounded-full bg-blue-300 '></div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-around items-center md:items-start my-3 md:my-6 md:flex-row md:gap-4 '>
            <div className='md:text-center  md:w-1/5 border-b pb-2 md:border-0'>
              <div className='md:text-xl font-semibold  py-2'>
                Better Fuel <br className='hidden md:block' /> Efficiency
              </div>
              <div className='md:font-light'>
                The Hybrid System consumes less fuel and maximizes fuel
                efficiency. Engine uses less fuel when it is revolving slower,
                at a lower RPM.
              </div>
            </div>

            <div className='md:text-center  md:w-1/5 border-b pb-2 md:border-0'>
              <div className='md:text-xl font-semibold  py-2'>
                Lower CO2 <br className='hidden md:block' /> Emissions
              </div>
              <div className='md:font-light'>
                When the electric motor kicks in, the overall load on the petrol
                engine reduces, which leads to lower CO2 emissions and a more
                environment-friendly drive.
              </div>
            </div>
            <div className='md:text-center  md:w-1/5 border-b pb-2 md:border-0'>
              <div className='md:text-xl font-semibold  py-2'>
                No Range <br className='hidden md:block' /> Anxiety
              </div>
              <div className='font-light'>
                The battery charges during cruising and regenerative braking.
                This gives you an extended range as compared to an electric
                vehicle that needs charging at regular intervals.
              </div>
            </div>
            <div className='md:text-center  md:w-1/5 border-b pb-2 md:border-0'>
              <div className='md:text-xl font-semibold   py-2'>
                Enhanced <br className='hidden md:block' /> Performance
              </div>
              <div className='font-light'>
                Enhanced power delivery from the combined output of the petrol
                engine and electric motor delivers smooth and quick
                acceleration.
              </div>
            </div>
            <div className='md:text-center  md:w-1/5'>
              <div className='md:text-xl font-semibold  py-2'>
                Quieter <br className='hidden md:block' /> Driving
              </div>
              <div className='font-light'>
                Minimal engine noise in the EV mode and a smooth switch over
                between petrol and electric will give you a smooth and quiet
                driving experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvictoColor() {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <div className=' mx-auto py-4 '>
      <div className='text-center font-semibold text-2xl lg:text-3xl py-4'>
        Colors
      </div>

      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/background-image-for-color.webp')] bg-cover bg-no-repeat">
        <div className='max-w-4xl mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-2'>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Saboo+RKS_Invicto.pdf'
              className='m-3 p-3 border text-white flex items-center max-w-[200px] mt-8 ml-3 rounded'
              target='_blank'
              rel='noreferrer'
            >
              <MdOutlineFileDownload className='text-xl mr-2 animate-pulse' />
              Download Brochure
            </a>
            <div className='col-span-2'>
              <>
                <div className='ml-auto mr-1 mt-24'>
                  {/* 1. NEXA BLUE (CELESTIAL) */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Blue_810+x+411.webp'
                    alt='NEXA BLUE'
                    className={tabsColors === 1 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 2. STELLAR BRONZE */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/AVANT_GRADE_BRONZE_810+x+411+webp.webp'
                    alt='STELLAR BRONZE'
                    className={tabsColors === 2 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 3. MAJESTIC_SILVER */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/MAJESTIC_SILVER_810+x+411+webp.webp'
                    alt='MAJESTIC SILVER'
                    className={tabsColors === 3 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 4. PLATINUM WHITE */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/PLATINUM_WHITE_810+x+411+webp.webp'
                    alt='PLATINUM_WHITE'
                    className={tabsColors === 4 ? 'flex mx-auto' : 'hidden'}
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <div onClick={() => setTabsColors(1)}>
                    <div className={tabsColors === 1 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#163472] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#163472]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 1
                          ? 'w-6 h-6 bg-[#163472] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(2)}>
                    <div className={tabsColors === 2 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#b2aea9] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#b2aea9]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 2
                          ? 'w-6 h-6 bg-[#b2aea9] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(3)}>
                    <div className={tabsColors === 3 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#B6BABD] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#B6BABD]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 3
                          ? 'w-6 h-6 border bg-[#B6BABD] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(4)}>
                    <div className={tabsColors === 4 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#f9f9f9] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 4
                          ? 'w-6 h-6 bg-[#ffffff] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>
                </div>
                <>
                  <p
                    className={
                      tabsColors === 1
                        ? 'text-center text-[#163472]  w-max mx-auto backdrop-blur-md font-semibold text p-2 my-2'
                        : 'hidden'
                    }
                  >
                    NEXA BLUE (CELESTIAL)
                  </p>

                  <p
                    className={
                      tabsColors === 2
                        ? 'text-center  w-max mx-auto backdrop-blur-md font-semibold text p-2 my-2'
                        : 'hidden'
                    }
                  >
                    STELLAR BRONZE
                  </p>
                  <p
                    className={
                      tabsColors === 3
                        ? 'text-center  w-max mx-auto backdrop-blur-md font-semibold text p-2 my-2'
                        : 'hidden'
                    }
                  >
                    MAJESTIC SILVER
                  </p>
                  <p
                    className={
                      tabsColors === 4
                        ? 'text-center text-white w-max mx-auto backdrop-blur-md font-semibold text p-2 my-2'
                        : 'hidden'
                    }
                  >
                    MYSTIC WHITE
                  </p>
                </>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Safety() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className='container text-center mx-auto  mt-6 '>
        <span className='text-2xl font-semibold'>SAFETY</span>
        <br />
        <span className='text-lg'> Cocooned in Advanced Safety</span>
      </div>
      <div className='text-center font-semibold text-2xl lg:text-3xl py-4 '></div>
      <div className='container mx-auto flex flex-col justify-center items-center relative -mt-10'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/safetyInvicto.webp'
          alt=''
          srcset=''
          className='m-28'
        />

        <div className='absolute left-[62%] top-16  lg:flex group hidden  '>
          <div className='hover:scale-105 flex justify-center items-center transition-colors duration-500 group-hover:bg-black w-20 h-20  border border-black rounded-full'>
            <GiBeltBuckles className='text-4xl group-hover:text-white' />
          </div>
          <div className='w-60 mx-3   group-hover:backdrop-blur-md my-auto duration-500'>
            <div className='font-semibold pb-1 '>
              Seat Belt Pre-Tensioners with force limiters
            </div>

            <div className='hidden group-hover:block font-light'>
              Pre-tensioners restrain the passengers and Force Limiters prevent
              seatbelt-inflicted injury.
            </div>
          </div>
        </div>
        <div className='absolute left-[19%] xl:left-[20%] top-[60%]  lg:flex lg:flex-col md:items-start group hidden  '>
          <div className='hover:scale-105 flex group-hover:bg-black justify-center transition-colors duration-500  items-center  w-20 h-20  border border-black rounded-full'>
            <GiSpeedometer className='text-4xl group-hover:text-white' />
          </div>

          <div className='w-60 mx-3 py-3    group-hover:backdrop-blur-md my-auto duration-500'>
            <div className='font-semibold pb-1 '>ABS with EBD</div>

            <div className='hidden group-hover:block font-light text-sm'>
              Anti-lock Braking System prevents the locking up of the wheels
              when the brakes are applied under heavy loads while EBD ensures an
              efficient and effective braking.
            </div>
          </div>
        </div>
        <div className='absolute right-[26%] bottom-24  lg:flex group hidden items-end  '>
          <div className='hover:scale-105 flex justify-center group-hover:bg-black transition-colors duration-500 items-center  w-20 h-20 border border-black rounded-full '>
            <MdAirlineSeatReclineExtra className='text-4xl group-hover:text-white' />
          </div>
          <div className='w-60 mx-3 py-3   group-hover:backdrop-blur-md my-auto duration-500'>
            <div className='font-semibold pb-1 '>6 Air Bags</div>

            <div className='hidden group-hover:block font-light'>
              6 Air Bags to take the impact before it reaches you.
            </div>
          </div>
        </div>
        <div className='absolute left-[10%]  bottom-[58%]    lg:flex-col md:items-start group hidden lg:flex '>
          <div className='w-60 mx-3 py-3   group-hover:backdrop-blur-md my-auto duration-500'>
            <div className='font-semibold pb-1 '>
              ISOFIX child fix anchorages
            </div>

            <div className='hidden group-hover:block font-light'>
              Standardized international child seat fitting system, for that
              perfect drive with your little ones.
            </div>
          </div>
          <div className='hover:scale-105 flex justify-center group-hover:bg-black transition-colors duration-500 items-center  w-20 h-20 border border-black rounded-full '>
            <MdAirlineSeatReclineExtra className='text-4xl group-hover:text-white' />
          </div>
        </div>

        <div className='h-16 absolute border top-36 right-[34%] border-black hidden lg:block'></div>
        <div className='w-48 absolute border top-52 right-[34%]  border-black hidden lg:block'></div>

        <div className='h-48 absolute border bottom-44 right-[50%] border-black hidden lg:block'></div>
        <div className='w-24 xl:w-32 absolute border  left-[22%] hidden lg:block  border-black'></div>
        <div className='h-16 absolute border top-1/2 left-[22%] border-black hidden lg:block'></div>
        <div className='w-24 lg:w-[12%]  just  absolute border top-[16rem] left-[18%] hidden lg:block  border-black'></div>
        <button
          className='absolute bg-white h-4 w-4 rounded-full flex justify-center lg:hidden items-center top-[45%] animate-pulse'
          onClick={() => setIndex(0)}
        >
          +
        </button>
        <button
          className='absolute bg-white h-4 w-4 rounded-full flex justify-center lg:hidden items-center top-[38%] left-[44%] animate-pulse'
          onClick={() => setIndex(1)}
        >
          +
        </button>
        <button
          className='absolute bg-white h-4 w-4 rounded-full flex justify-center lg:hidden items-center bottom-[50%] left-[25%] animate-pulse '
          onClick={() => setIndex(2)}
        >
          +
        </button>
        <button
          className='absolute bg-white h-4 w-4 rounded-full flex justify-center lg:hidden items-center top-[35%] left-[30%] animate-pulse '
          onClick={() => setIndex(3)}
        >
          +
        </button>
        <div className='absolute lg:hidden bottom-[20%] px-2 backdrop-blur-sm'>
          {index === 0 ? (
            <div>
              <span className='text-lg font-semibold'>
                Seat Belt Pre-Tensioners with force limiters
              </span>
              <br />
              Pre-tensioners restrain the passengers and Force Limiters prevent
              seatbelt-inflicted injury.
            </div>
          ) : index === 1 ? (
            <div>
              <span className='text-lg font-semibold'>6 Air Bags</span>
              <br />6 Air Bags to take the impact before it reaches you.
            </div>
          ) : index === 2 ? (
            <div>
              <span className='text-lg font-semibold'>ABS with EBD</span>
              <br />
              Anti-lock Braking System prevents the locking up of the wheels
              when the brakes are applied under heavy loads while EBD ensures an
              efficient and effective braking.
            </div>
          ) : (
            index === 3 && (
              <div>
                <span className='text-lg font-semibold'>
                  ISOFIX child fix anchorages
                </span>
                <br />
                Standardized international child seat fitting system, for that
                perfect drive with your little ones.
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Invicto;

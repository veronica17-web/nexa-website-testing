import React from 'react';
import { RiStarFill, RiStarHalfFill, RiPhoneFill } from 'react-icons/ri';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';
function NewsLetter() {
  return (
    <>
      <div className='bg-black py-16 mt-24 lg:px-0 md:px-0 px-5'>
        <div className='container mx-auto space-y-6'>
          <p className='text-white text-center text-xl uppercase tracking-wider'>
            <span className='text-3xl'>S</span>ubscribe{' '}
            <span className='text-3xl'>T</span>o{' '}
            <span className='text-3xl'>O</span>ur{' '}
            <span className='text-3xl'>N</span>ewsletter
          </p>
          <div className='flex items-center justify-center'>
            <input
              className='h-10 rounded-l outline-none p-3 w-full max-w-[400px]'
              placeholder='Email Address'
            />
            <button className='p-[0.535rem] bg-red-600 rounded-r w-full max-w-[140px] text-gray-100'>
              Get Notified
            </button>
          </div>
        </div>
      </div>
      <Testimonials />
      <Outlets />
    </>
  );
}

const Testimonials = () => {
  return (
    <div className='container mx-auto py-16 space-y-4'>
      <p className='uppercase font-bold text-4xl text-center'>Testimonials</p>
      <p className='uppercase text-center tracking-wider font-bold'>
        <span className='text-2xl'>W</span>hat{' '}
        <span className='text-2xl'>O</span>ur{' '}
        <span className='text-2xl'>C</span>ustomers{' '}
        <span className='text-2xl'>S</span>ay
      </p>
      <p className='bg-black h-1 w-40 mx-auto'></p>
      <p className='max-w-[940px] text-gray-600 text-center mx-auto text-lg'>
        We Believe that transparency and integrity are important. at saboo RKS
        We employ a sophisticated process to ensure that every review is written
        by a real person, reflecting their real-life experience.
      </p>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>
        <div className='shadow-lg rounded-md py-8 border'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          />
          <p className='uppercase text-center text-lg text-gray-600'>
            JOHN WADDROB
          </p>
          <div className='flex items-center justify-center text-orange-400'>
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
          </div>
          <p className='text-center px-5 text-gray-600 mt-6'>
            "Hi Krishna , It was really a great experience at SABOO RKS NEXA. I
            would also like to appreciate you for your follow up and delivering
            my Car on time. You are really an asset to the company. Keep up the
            Good Work!!!!!. "
          </p>
        </div>
        <div className='shadow-lg rounded-md py-8 border'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          />
          <p className='uppercase text-center text-lg text-gray-600'>
            SRIRAG REDDY.E
          </p>
          <div className='flex items-center justify-center text-orange-400'>
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarHalfFill />
          </div>
          <p className='text-center px-5 text-gray-600 mt-6'>
            "Hi Lateef, I really appriciate you on the dedication towards your
            work, and also suggesting me the best car variant. Once again thank
            you for all the hospitality and service. Regards, Srirag Reddy. E "
          </p>
        </div>
        <div className='shadow-lg rounded-md py-8 border'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          />
          <p className='uppercase text-center text-lg text-gray-600'>
            JHANSI PRIYA
          </p>
          <div className='flex items-center justify-center text-orange-400'>
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
          </div>
          <p className='text-center px-5 text-gray-600 mt-6'>
            "It was a fabulous experience with you. Thanks a lot for the support
            provided by you, on time delivery, info about vehicle & Discounts.
            Good to have a executive like you. All the best for your future
            endeavour. Regards Jhansi Priya "
          </p>
        </div>
      </div>
    </div>
  );
};

const Outlets = () => {
  return (
    <div className='container mx-auto py-16 space-y-4 px-5 sm:px-0'>
      <p className='uppercase font-bold text-4xl text-center'>Outlets</p>
      <p className='uppercase text-center tracking-wider font-bold'>
        <span className='text-2xl'>W</span>hat happening at{' '}
        <span className='text-2xl'>S</span>aboo{' '}
        <span className='text-2xl'>NEXA</span>
      </p>
      <p className='bg-black h-1 w-60 mx-auto'></p>
      <p className='max-w-[940px] text-gray-600 text-center mx-auto text-lg'>
        To provide you with the best Nexa Experience we are located in 2 major
        hotspots of Hyderabad
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <div className='bg-gray-900 text-gray-100 p-10 space-y-2 rounded-md shadow-2xl'>
          <p>Nexa Lumbini</p>
          <p>
            5-9-22/1/B, Shapoorji Towers, Shapoorwadi, Adarsh Nagar, Hyderabad,
            Telangana 500004.
          </p>
          <div className='flex flex-col space-y-2'>
            <a href='tel:9848898488' className='flex items-center'>
              <RiPhoneFill className='mr-2' /> +91 98488 98488
            </a>
            <a href='mailto:info@saboomaruti.in' className='flex items-center'>
              <FaEnvelope className='mr-2' /> info@saboomaruti.in
            </a>
            <a
              href='https://www.google.com/maps/place/NEXA/@17.407435,78.472675,14z/data=!4m5!3m4!1s0x0:0x167869bcabc7428b!8m2!3d17.407435!4d78.4726753?hl=en'
              className='flex items-center'
            >
              <FaArrowRight className='mr-2' /> Direction
            </a>
          </div>
        </div>
        <div className='bg-gray-900 text-gray-100 p-10 space-y-2 rounded-md shadow-2xl'>
          <p>Nexa Jubilee</p>
          <p>
            1-65/5, 6,15 & 16 KKR Square, Phase I Kavuri Hills Madhapur, Post,
            Jubilee Hills, Hyderabad, Telangana 500033.
          </p>
          <div className='flex flex-col space-y-2'>
            <a href='tel:9848898488' className='flex items-center'>
              <RiPhoneFill className='mr-2' /> +91 98488 98488
            </a>
            <a href='mailto:info@saboomaruti.in' className='flex items-center'>
              <FaEnvelope className='mr-2' /> info@saboomaruti.in
            </a>
            <a
              href='https://www.google.com/maps/place/NEXA/@17.439431,78.398485,14z/data=!4m5!3m4!1s0x0:0x1cb759ff5f828d3!8m2!3d17.4394309!4d78.398485?hl=en'
              className='flex items-center'
            >
              <FaArrowRight className='mr-2' /> Direction
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

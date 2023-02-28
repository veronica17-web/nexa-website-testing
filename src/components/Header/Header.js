import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import {
//   BsFacebook,
//   BsTwitter,
//   BsYoutube,
//   BsPinterest,
//   BsInstagram,
// } from "react-icons/bs";
// import { ImLinkedin } from "react-icons/im";
import MainHeader from './MainHeader';

function Header() { 
  return (
    <>
      <TopHeader />
      <MainHeader />
    </>
  );
}

const TopHeader = () => {
  return (
    <div className='container py-3 mx-auto block space-y-3 sm:flex items-center justify-between '>
      <div className='flex items-center space-x-4 justify-center'>
        {/* <a
          href="https://www.facebook.com/saboorksnexa/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://twitter.com/saboorksnexa"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="https://www.youtube.com/channel/UCcX41w_0KU95uunUdNcP8TA?view_as=subscriber"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube />
        </a>
        <a
          href="https://www.linkedin.com/company/saboo-rks-motor-pvt-ltd/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin />
        </a>
        <a
          href="https://in.pinterest.com/rksmaruti/"
          target="_blank"
          rel="noreferrer"
        >
          <BsPinterest />
        </a> */}
        {/* <a
          href="https://www.instagram.com/saboorksnexa/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a> */}
        {/* <div className="flex items-center justify-center space-x-2"> */}
        <Link
          to='/nexa-car-offers-in-hyderabad'
          className='uppercase bg-black text-white px-3 py-1.5 rounded shadow-sm text-sm'
        >
          Offers
        </Link>
        <Link
          to='/book-online-maruti-nexa-car-service/'
          className='uppercase bg-black text-white px-3 py-1.5 rounded shadow-sm text-sm'
        >
          book a Service
        </Link>
        {/* </div> */}
      </div>
      <div className='space-x-3 lg:flex items-center'>
        <div className='flex items-center justify-center space-x-5'>
          <div className='flex items-center space-x-1'>
            <a href='mailto:info@saboomaruti.in'>
              <FaEnvelope />
            </a>
          </div>
          <div className='border text-black h-5 hidden lg:flex space-y-4'></div>
          <div className='flex items-center space-x-1 justify-center sm:justify-start'>
            <a href='tel:9848898488'>
              <FaPhoneAlt size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

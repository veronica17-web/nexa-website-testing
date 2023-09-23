import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsInstagram,
} from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';

const navigation = {
  cars: [
    { name: 'Maruti XL6', to: '/nexa-xl6-on-road-price-in-hyderabad' },

    { name: 'Maruti Ciaz', to: '/nexa-ciaz-on-road-price-in-hyderabad' },
    { name: 'Maruti Baleno', to: '/new-maruti-baleno-price-in-hyderabad' },
    { name: 'Maruti Ignis', to: '/nexa-ignis-on-road-price-in-hyderabad' },
    {
      name: 'Maruti Grand Vitara',
      to: '/grand-vitara-on-road-price-in-hyderabad',
    },
    {
      name: 'Maruti FRONX',
      to: '/maruti-fronx-price-in-hyderabad',
    },
    {
      name: 'Maruti Jimny',
      to: '/maruti-jimny-price-in-hyderabad',
    },
    {
      name: 'Maruti Invicto',
      to: '/maruti-invicto-price-in-hyderabad',
    },
  ],
  corporate: [
    { name: 'About', to: '/about' },
    { name: 'Careers', to: '/career' },
    { name: 'Contact Us', to: '/contact-us' },
    { name: 'Book a service', to: '/book-online-maruti-nexa-car-service/' },
    { name: 'Terms and Conditions', to: '/terms-and-condition' },
    { name: "FAQ's", to: '/' },
    { name: 'Annual Report', to: '/' },
    { name: 'CSR Policy', to: '/' },
  ],
  financeInsurance: [
    // { name: "Nexa Extended Warranty", to: "/" },
    { name: 'Finance', to: '/maruti-car-finance' },
    { name: 'Insurance', to: '/maruti-car-insurance' },
    // { name: "Corporate & Institutional Sales", to: "/" },
  ],

  service: [
    // { name: "Nexa Extended Warranty", to: "/" },
    { name: '24/7 Service', to: '/maruti-suzuki-24/7-service-in-hyderabad' },
  ],
  outlets: [
    {
      name: 'Showrooms',
      to: '/maruti-nexa-showroom-outlets-in-hyderabad',
    },
    {
      name: 'Workshops',
      to: '/maruti-nexa-workshop-outlets-in-hyderabad',
    },
    {
      name: 'Truevalue',
      to: '/maruti-nexa-truevalue-outlets-in-hyderabad',
    },
  ],
};

function Footer() {
  return (
    <>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Saboo-RKS-Nexa-Footer.webp'
        className='w-full mw-full'
        alt='footer'
      />
      {/* Footer section */}
      <div className='bg-[#15151e] pt-16 pb-10 md:px-4 lg:px-0 px-5'>
        <div className='container mx-auto'>
          <div className='grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-6'>
            <div className='lg:col-span-2 md:col-span-2 sm:col-span-1'>
              <img src={require('../../assets/logo.webp')} alt='deva' className='h-10 lg:h-12' />
              <div className='grid grid-rows-2 gap-4'>
                <p className='mt-3 text-gray-300 font-light'>
                  Saboo RKS is Hyderabad’s leading automobile dealership and has
                  been driving growth in domains of automobile sales & service
                  over the last four decades.
                </p>
                <div className='space-x-2'>
                  <a
                    href='mailto:info@saboomaruti.in'
                    className=' bg-[#ed1c24] text-white px-2 sm:px-3 py-1.5 rounded shadow-sm text-sm mt-3'
                  >
                    info@saboomaruti.in
                  </a>

                  <a
                    href='tel:9848898488'
                    className=' bg-[#ed1c24] text-white px-2 sm:px-3 py-1.5 rounded shadow-sm text-sm mt-3 whitespace-nowrap'
                  >
                    +91 98488 98488
                  </a>
                </div>
              </div>
            </div>

            {/* col starts */}
            <div className='text-gray-200 space-y-3'>
              <p>Nexa Cars</p>
              <div className='flex flex-col space-y-3'>
                {navigation.cars.map((item, index) => (
                  <div
                    className='flex border-b pb-2 border-gray-700 items-center text-gray-400 hover:text-gray-200'
                    key={index}
                  >
                    <RiArrowRightSLine />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* col starts */}
            <div className='text-gray-200 space-y-3 '>
              <p>Corporate</p>
              <div className='flex flex-col space-y-3'>
                {navigation.corporate.map((item, index) => (
                  <div
                    className='flex border-b pb-2 border-gray-700 items-center text-gray-400 hover:text-gray-200'
                    key={index}
                  >
                    <RiArrowRightSLine />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* col starts */}
            <div className='text-gray-200 space-y-3'>
              <p>Finance & Insurance</p>
              <div className='flex flex-col space-y-3'>
                {navigation.financeInsurance.map((item, index) => (
                  <div
                    className='flex border-b pb-2 border-gray-700 items-center text-gray-400 hover:text-gray-200'
                    key={index}
                  >
                    <RiArrowRightSLine />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>

              <p>Service</p>
              <div className='flex flex-col space-y-3'>
                {navigation.service.map((item, index) => (
                  <div
                    className='flex border-b pb-2 border-gray-700 items-center text-gray-400 hover:text-gray-200'
                    key={index}
                  >
                    <RiArrowRightSLine />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* col starts */}
            <div className='text-gray-200 space-y-3'>
              <p>Outlets</p>
              <div className='flex flex-col space-y-3'>
                {navigation.outlets.map((item, index) => (
                  <div
                    className='flex border-b pb-2 border-gray-700 items-center text-gray-400 hover:text-gray-200'
                    key={index}
                  >
                    <RiArrowRightSLine />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
              <p>Social Links</p>
              <div className='flex items-center space-x-2 xl:space-x-3'>
                <a
                  href='https://www.facebook.com/saboorksnexa/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsFacebook />
                </a>
                <a
                  href='https://twitter.com/saboorksnexa'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsTwitter />
                </a>
                <a
                  href='https://www.youtube.com/channel/UCcX41w_0KU95uunUdNcP8TA?view_as=subscriber'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsYoutube />
                </a>
                <a
                  href='https://www.linkedin.com/company/rks-nexa/?viewAsMember=true'
                  target='_blank'
                  rel='noreferrer'
                >
                  <ImLinkedin />
                </a>
                <a
                  href='https://in.pinterest.com/rksmaruti/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsPinterest />
                </a>
                <a
                  href='https://www.instagram.com/saboorksnexa/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CopyRight content */}
      <div className='bg-black text-gray-300 pt-3 pb-16 md:py-3'>
        <div className='container mx-auto lg:flex items-center md:space-y-2 lg:justify-between lg:px-0 px-5'>
          <div>
            <div className='flex items-center space-x-2 text-sm'>
              <Link to='/terms-and-condition' className='hover:text-red-500'>
                Terms & Conditions
              </Link>
              <span className='border h-4'></span>
              <Link to='/terms-and-condition' className='hover:text-red-500'>
                Privacy Policy
              </Link>
            </div>
            <p className='text-sm'>
              © {new Date().getFullYear()} All Rights Reserved by RKS Motor Pvt
              Ltd.
            </p>
          </div>
          <p className='text-sm'>
            Powered by{' '}
            <a
              className='hover:text-red-500'
              href='https://broaddcast.com'
              target='_blank'
              rel='noreferrer'
            >
              BroaddCast Business Solutions LLP
            </a>
            .
          </p>
        </div>
      </div>
      
    </>
  );
}

export default Footer;

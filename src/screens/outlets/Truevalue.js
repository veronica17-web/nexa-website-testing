import React from 'react';
import { truevalue } from '../../constants';
import { MdLocalPhone } from 'react-icons/md';
import { FaEnvelope } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

function Truevalue() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Authorised True Value Car Showroom in Hyderabad
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Authorised True Value Car Showroom in Hyderabad'
        />
        <meta
          name='description'
          content='Maruti Suzuki True Value is the best place to buy certified pre-owned cars. SABOO RKS is an Authorised True Value dealer in Hyderabad. For more details call us - 9848898488'
        />
        <meta
          name='keywords'
          content='Maruti Suzuki Nexa truevalue in Hyderabad'
        />
        <meta name='author' content='Broaddcast' />
      </Helmet>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Nexa-Outlet.webp'
        className='max-w-full w-full'
        alt='finance banner'
      />
      <div className='shadow sm:px-0 px-4'>
        <p className='mx-auto container py-4'>
          <Link to='/'>Home</Link> / Truevalue
        </p>
      </div>
      <p className='text-3xl uppercase pt-16 text-center font-bold'>
        True value
      </p>
      <div className='container mx-auto py-16'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 px-5 md:px-0'>
          {truevalue.map((item, index) => (
            <div className='shadow-lg bg-gray-200 rounded mt-10'>
              <div className='space-y-6 px-3 -mt-8 mb-5' key={index}>
                <iframe
                  title='map'
                  className='w-full shadow-lg'
                  src={item.map}
                ></iframe>
                <div className='bg-white shadow-md p-4 text-sm'>
                  <p>{item.title}</p>
                  <p className='font-light'>{item.address}</p>
                  <p className='font-light flex items-center mt-1'>
                    <MdLocalPhone className='mr-2' /> 98488 98488
                  </p>
                  <p className='font-light flex items-center mt-1'>
                    <FaEnvelope className='mr-2' /> info@saboomaruti.in
                  </p>
                  <p className='font-light flex items-center mt-1'>
                    <IoIosPricetags className='mr-2' /> Truevalue
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Truevalue;

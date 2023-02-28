import React from 'react';
import { Link } from 'react-router-dom';

function ServiceFinanceInsu() {
  return (
    <div className='mx-auto container space-y-5 px-5 lg:px-0'>
      <Link to='/'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/home-page-banners/Service+Desktop.webp'
          alt='service center'
          className='max-w-full w-full'
        />
      </Link>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Link to='/'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/home-page-banners/Insurance+Desktop.webp'
              alt='insurance'
              className='max-w-full w-full'
            />
          </Link>
        </div>
        <div>
          <Link to='/'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/home-page-banners/Finance+Desktop.webp'
              alt='Finance'
              className='max-w-full w-full'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceFinanceInsu;

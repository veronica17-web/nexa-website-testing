import React from 'react';
import { Link } from 'react-router-dom';

function ServiceFinanceInsu() {
  return (
    <div className='container px-5 mx-auto space-y-5 lg:px-0'>
      <Link to='/book-online-maruti-nexa-car-service'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp'
          alt='service center'
          className='w-full max-w-full'
        />
      </Link>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Link to='/maruti-car-insurance'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/home-page-banners/Insurance+Desktop.webp'
              alt='insurance'
              className='w-full max-w-full'
            />
          </Link>
        </div>
        <div>
          <Link to='/maruti-car-finance'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/home-page-banners/Finance+Desktop.webp'
              alt='Finance'
              className='w-full max-w-full'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceFinanceInsu;

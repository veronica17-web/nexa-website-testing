import React, { Fragment, useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { products } from '../../constants';

import EnquiryPopup from '../utils/EnquiryPopup';

function Cars() {
  return (
    <div className='container mx-auto px-5 lg:px-0 md:px-3'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
        <div className='space-y-3'>
          <p className='uppercase font-bold text-4xl'>nexa cars</p>
          <p className='uppercase font-bold text-md tracking-wider'>
            What's happening at NEXA
          </p>
          <p className='text-lg font-light'>
            Saboo RKS is the leading Nexa dealer in Hyderabad. Built with
            innovations that stand out with a whole new world of enhanced
            driving experience.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/nexa-all-cars-banner.webp'
            alt='vehicle_banner'
          />
        </div>
      </div>
      <VehicleProducts />
    </div>
  );
}

const VehicleProducts = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');

  return (
    <>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto pb-5'>
        {products.map((item) => (
          <div
            className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
            key={item.id}
          >
            {/* <div
              className="absolute top-2 left-0 ml-5 bg-white rounded-full p-2 z-10 cursor-pointer"
              // onClick={() => setCompareItems([...compareItems, item.name])}
              onClick={() => handleCompare(item.name)}
            >
              <IoShuffleSharp size={22} />
            </div> */}

            {item.price && (
              <div className='absolute top-2 right-0 mr-5 '>
                <p className='flex items-center font-bold'>
                  <BiRupee />
                  {Intl.NumberFormat('en-IN').format(item.price)}*
                </p>
                <p className='font-light'>ex-showroom</p>
              </div>
            )}

            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <img
                  src={item.img}
                  alt={item.name}
                  className='mx-auto product_image'
                />
              </Link>
            </div>
            <div className='flex-auto bg-white'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} className='w-32' alt={item.name} />
                  <div className='flex items-center font-semibold'>
                    <BsArrowDown />
                    <a href={item.brouchure} target='_blank' rel='noreferrer'>
                      Brochure
                    </a>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-3 pb-5'>
                  <Link
                    to={item.explore}
                    className='bg-black hover:bg-white hover:border-black hover:border hover:text-black duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center'
                  >
                    Explore
                  </Link>
                  <button
                    onClick={() => setOpen(true)}
                    className='border border-black  p-2 max-w-[44%] w-full text-center text-sm uppercase'
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EnquiryPopup
        open={open}
        setOpen={setOpen}
        phone={phone}
        setPhone={setPhone}
        title={'Book Now'}
      />
    </>
  );
};

export default Cars;

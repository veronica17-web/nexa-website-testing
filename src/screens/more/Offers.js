import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Slider from '../../components/Home/Slider';
import MobileSlider from '../../components/Home/MobileSlider';

import { offer_products } from '../../constants';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const width = window.innerWidth;

function Offers() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <>
      <Header />
      {width > 425 ? <Slider /> : <MobileSlider />}

      <div className='text-center py-10 space-y-3'>
        <p className='font-bold lg:text-3xl sm:text-xl'>
          SAVE WITH SABOO NEXA OFFERS IN HYDERABAD INDIA
        </p>
        <p>
          Last Chance to buy, before price hike. Limited Period to available
          exciting offers before prices go up
        </p>
        <p>
          Limited period offers till the end of {months[new Date().getMonth()]}{' '}
          {new Date().getFullYear()}.
        </p>
      </div>
      <OfferProducts />
    </>
  );
}

const OfferProducts = () => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 px-5 sm:px-0 gap-4 container mx-auto pb-5'>
      {offer_products.map((item) => (
        <div
          className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
          key={item.name}
        >
          <p className='absolute top-3 -right-7 uppercase text-sm text-center text-white rotate-45 bg-[#ec1b23] py-1 w-28'>
            Offer
          </p>

          <div className=' flex-auto'>
            {' '}
            <img src={item.img} alt={item.name} className='mx-auto' />
          </div>
          <div className='flex-auto bg-white'>
            <div>
              <div className='flex items-center justify-between p-5 '>
                <img src={item.logo} alt={item.name} />
                <p className='uppercase font-bold'>
                  Save up to <br />{' '}
                  <span className='text-red-500'>
                    {item.price}
                    {/* ₹ {Intl.NumberFormat('en-IN').format(item.price)}* */}
                  </span>
                  <div className='text-xs font-thin'>{item.emi}</div>
                </p>
              </div>
              <div className='flex flex-col w-full px-5'>
                <Link
                  to={item.explore}
                  className='bg-black rounded text-white text-center font-bold uppercase py-2'
                >
                  View More Details
                </Link>
                <Link
                  to='/terms-and-condition'
                  className=' rounded text-black text-center font-bold uppercase py-2'
                >
                  *legal disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;

import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Slider from '../../components/Home/Slider';
import MobileSlider from '../../components/Home/MobileSlider';
import Helmet from 'react-helmet';

import { offer_products } from '../../constants';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

// const width = window.innerWidth;

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
      <Helmet>
        <title>Nexa Car Offers in Hyderabad | Saboo NEXA</title>
        <meta
          name='title'
          content='Nexa Car Offers in Hyderabad | Saboo NEXA'
        />
        <meta
          name='description'
          content='Get the best offers on new Maruti Suzuki Nexa cars. Visit your nearest Maruti Suzuki Nexa showromm for more Nexa car offers. Lowest price gurantiee. call now'
        />
        
      </Helmet>

      <Header />
      {/* {width > 425 ? <Slider /> : <MobileSlider />} */}
      <div className='h-16 bg-black lg:h-20'></div>
      <div className='h-1 -mb-2 bg-black'></div>
      <section className='select-none'>
        <div className='hidden sm:block'>
          <Slider />
        </div>
        <div className='sm:hidden'>
          <MobileSlider />
        </div>
      </section>

      <div className='py-10 space-y-3 text-center'>
        <p className='font-bold lg:text-3xl sm:text-xl'>
          SAVE WITH SABOO NEXA OFFERS IN HYDERABAD INDIA
        </p>

        <p>
          Hurry and take advantage of these exciting offers available for a
          limited time until the end of {months[new Date().getMonth()]}{' '}
          {new Date().getFullYear()}.
        </p>
      </div>
      <OfferProducts />
    </>
  );
}

const OfferProducts = () => {
  return (
    <div className='container grid gap-4 px-5 pb-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:px-0'>
      {offer_products.map((item) => (
        <div
          className='relative flex flex-col overflow-hidden border rounded shadow-lg'
          key={item.name}
        >
          <p className='absolute top-3 -right-7 uppercase text-sm text-center text-white rotate-45 bg-[#ec1b23] py-1 w-28'>
            Offer
          </p>

          <div className='flex-auto '>
        
            <img src={item.img} alt={item.name} className='mx-auto' />
          </div>
          <div className='flex-auto bg-white'>
            <div>
              <div className='flex items-center justify-between p-5 '>
                <img src={item.logo} alt={item.name} />
                <div className='font-bold text-center uppercase'>
                  Save up to <br />
                  <span className='text-2xl text-red-500'>
                    {item.price}
                    {/* ₹ {Intl.NumberFormat('en-IN').format(item.price)}* */}
                  </span>
                  <div className='text-xs font-thin'>{item.emi}</div>
                </div>
              </div>
              <div className='flex flex-col w-full px-5'>
                <Link
                  to={item.explore}
                  className='py-2 font-bold text-center text-white uppercase bg-black rounded'
                >
                  View More Details
                </Link>
                <Link
                  to='/terms-and-condition'
                  className='py-2 text-xs font-bold text-center text-black uppercase rounded '
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

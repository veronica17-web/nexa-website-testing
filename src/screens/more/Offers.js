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
      <Helmet>
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
          {/* <meta
          name='keywords'
          content='XL6 on road price, XL6 mileage, XL6 offers & disconuts,xl6 on road price, Maruti xl6 offers, xl6 mileage,Nexa xl6 petrol price, Maruti xl6 on road price, Maruti xl6 variants, xl6 images, xl6 mileage, Nexa xl6 price in hyderabad, Maruti xl6 price in hyderabad, xl6 price in hyderabad, xl6 onroad price in hyderabad, offers on xl6, xl6 offers 2022, new xl6 price, new xl6 price in hyderabad, new xl6 2022 price, new xl6 2022 onroad price, xl6 petrol price in hyderabad, xl6 2022 petrol price in hyderabad'
        /> */}
          {/* <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboonexa.in/the-xl6/' />
        <meta
          property='og:title'
          content='Maruti Suzuki Fronx On-Road Price in Hyderabad | Saboo NEXA'
        />
        <meta
          property='og:description'
          content='Get the latest on-road price of Maruti Suzuki Fronx in Hyderabad and enjoy a smooth car ownership experience. For more information about Nexa Fronx visit your nearest Saboo Nexa dealership today. '
        /> */}
          {/* <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/the-xl6/'
        />
        <meta
          property='twitter:title'
          content='Nexa XL6 On Road Price in Hyderabad | Maruti XL6 Offers in Hyderabad'
        />
        <meta
          property='twitter:description'
          content='Nexa XL6 2022 price in Hyderabad. Maruti Suzuki XL6 on road price starts at ₹ 10.14* lakh. For more details about XL6 features, specifications, mileage, colors and images visit our site or call us 98488 98488'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg'
        /> */}
        </Helmet>
      </Helmet>
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
          Limited period offers for the models 2022 and 2023, till the end of{' '}
          {months[new Date().getMonth()]} {new Date().getFullYear()}.
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
                  className=' rounded text-black text-center font-bold uppercase py-2 text-xs'
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

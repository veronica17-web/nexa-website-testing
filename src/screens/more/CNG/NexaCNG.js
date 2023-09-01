import React, { useState } from 'react';
import Header from '../../../components/Header/Header';

import { BsArrowDown } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import { products } from '../../constants';

import EnquiryPopup from '../../../components/utils/EnquiryPopup';
import TabNavigationCNG from './TabNavigationCNG';

export const cngProducts = [
  {
    id: 1,
    name: 'Grand Vitara',
    price: '1045000',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/GV-logo-204x37+webp.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/thumbnails/gt-thumbnail-cng.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/grand_vitara.pdf',
    explore: '/grand-vitara-cng',
    engineType: 'SMART HYBRID / ELECTRIC HYBRID',
    fuelType: 'PETROL',
    displacement: '1462 cc',
    power: '75.8 @ 6000 / 68 kW @ 5500 rpm',
    torque: '136.8 @ 4400 / 122 Nm @ 4400 - 4800',
    fuelTank: '45 L',
    mileage: '21.11 (MT), 20.58 (AT), 19.38 (AllGrip MT), 27.97 (e-CVT)',
    tranmission: '5MT/ 6AT / e-CVT',
    length: '4345',
    width: '1795',
    height: '1645',
    wheelbase: '2600',
    turningRadius: '5.4',
    frontBrake: 'Ventilated Disc',
    rearBrake: 'Solid Disc',
    frontSuspension: 'MacPherson Strut',
    rearSuspension: 'Torsion Beam',
    seating: '5',
  },

  {
    id: 2,
    name: 'baleno',
    price: '649000',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/newage_baleno_logo.png',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/cng/baleno-cng-thubnail.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/The_New_Age_Baleno_Brochure.pdf',
    explore: '/baleno-cng',
    engineType: 'Advanced K Series Dual Jet / Dual VVT Engine',
    fuelType: 'PETROL',
    displacement: '1197 cc',
    power: '66 @ 6000',
    torque: '113 @ 4400',
    fuelTank: '37',
    mileage: '22.35 (MT), 22.94 (AMT)',
    tranmission: '5MT/5AT',
    length: '3990',
    width: '1745',
    height: '1500',
    wheelbase: '2520',
    turningRadius: '4.85',
    frontBrake: 'Disc',
    rearBrake: 'Drum',
    frontSuspension: 'MacPherson Strut',
    rearSuspension: 'Torsion Beam',
    seating: '5',
  },

  {
    id: 3,
    name: 'XL6',
    price: '1129000',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Logo-XL6.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/cng/xl6-cng-thumbnail.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/THE+ALL-NEW+XL6+Brochure.pdf',
    explore: '/xl6-cng',
    engineType: 'K15C SMART HYBRID',
    fuelType: 'PETROL',
    displacement: '1462 cc',
    power: '75.8 @ 6000',
    torque: '136.8 @ 4400',
    fuelTank: '45 L',
    mileage: '20.97 (MT), 20.27 (AT)',
    tranmission: '5 MT / 6 AT',
    length: '4445',
    width: '1775',
    height: '1755',
    wheelbase: '2740',
    turningRadius: '5.2',
    frontBrake: 'Disc',
    rearBrake: 'Drum',
    frontSuspension: 'MacPherson Strut with Coil Spring',
    rearSuspension: 'Torsion Beam with Coil Spring',
    seating: '6',
  },
];

const NexaCNG = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');
  return (
    <>
      <Header col={true} />
      <Helmet>
        <title>
          Nexa CNG On Road Price| Maruti Suzuki CNG Offers
        </title>
        <meta
          name='title'
          content='Nexa CNG Car On-Road Price, Mileage, Specifications & Offers | Saboo Nexa'
        />
        <meta
          name='description'
          content='Maruti Suzuki Nexa CNG On Road Price in Hyderabad. Nexa CNG Price Starts at 10.45Lac*. Nexa Vitara Comes with Panoramic Sunroof, 6- Air bags, 6-Speed Automatic Transmission. For More Info & Offers Visit Nearest Saboo Nexa Showroom Today or Call Us 9848898488.'
        />
        {/* <meta
          name="keywords"
          content="Nexa Ciaz car price, Offers on Nexa Ciaz, Maruti Ciaz mileage, Ciaz Specifications, Nexa ciaz petrol price, Maruti ciaz on road price, Maruti ciaz variants, ciaz images, ciaz mileage, Nexa ciaz price in hyderabad, Maruti ciaz price in hyderabad, ciaz price in hyderabad, ciaz onroad price in hyderabad, offers on ciaz, ciaz offers 2022, new ciaz price, new ciaz price in hyderabad, new ciaz 2022 price, new ciaz 2022 onroad price, ciaz petrol price in hyderabad, ciaz 2022 petrol price in hyderabad"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/the-new-maruti-ciaz/"
        />
        <meta
          property="og:title"
          content="Nexa Ciaz Car on Road Price & Offers in Hyderabad| Saboo Nexa"
        />
        <meta
          property="og:description"
          content="Nexa Ciaz 2022 car price starts at 8.87 lakh, mileage of 26.8 km/l. Get Nexa Ciaz specifications & features. Best offers on Ciaz car, low EMI, low down-payment. Call now 9848898488"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Ciaz.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/the-new-maruti-ciaz/"
        />
        <meta
          property="twitter:title"
          content="Nexa Ciaz Car on Road Price & Offers in Hyderabad| Saboo Nexa"
        />
        <meta
          property="twitter:description"
          content="Nexa Ciaz 2022 car price starts at 8.87 lakh, mileage of 26.8 km/l. Get Nexa Ciaz specifications & features. Best offers on Ciaz car, low EMI, low down-payment. Call now 9848898488"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Ciaz.jpg"
        /> */}
      </Helmet>
      <div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Cng-banner-desktop.webp'
          className='w-full object-cover hidden md:block '
          alt='SCNG Banner'
          srcSet=''
        />
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Cng-banner-mobile.webp'
          className='w-full md:hidden block '
          alt='SCNG Banner'
          srcSet=''
        />
      </div>
      <div className='text-center  my-8 container mx-auto '>
        <div className='text-2xl font-semibold py-4 pt-8'>
          CREATE. INSPIRE. THE CONSCIOUS WAY.
        </div>
        Make a conscious choice for the environment, zip through the road and
        explore the unknown with NEXA S-CNG, your eco-friendly mobility solution
        - designed to deliver class leading performance and inspire a trend of
        consciousness in the world.
      </div>
      <div className='text-center my-8 container mx-auto '>
        <div className='text-2xl font-semibold py-4 pt-8 '>NEXA CARS</div>
        <div className='container  px-6 md:px-12 lg:px-24 py-2 sm:py-5'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto pb-5'>
            {cngProducts.map((item) => (
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
                    <div className='flex items-center justify-between p-5 rounded'>
                      <img src={item.logo} className='w-32' alt={item.name} />
                      <div className='flex items-center font-semibold'>
                        <BsArrowDown />
                        <a
                          href={item.brouchure}
                          target='_blank'
                          rel='noreferrer'
                        >
                          Brochure
                        </a>
                      </div>
                    </div>
                    <div className='flex items-center justify-center space-x-3 pb-5 '>
                      <Link
                        to={item.explore}
                        className='bg-black hover:bg-white hover:border-black hover:border hover:text-black duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded'
                      >
                        Explore
                      </Link>
                      <button
                        onClick={() => setOpen(true)}
                        className='border border-black  p-2 max-w-[44%] w-full text-center text-sm uppercase rounded animate-pulse'
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
        </div>
        <hr />
      </div>
      <div className='text-center my-8 container mx-auto'>
        <div className='text-2xl font-semibold pt-12 '>Why NEXA S-CNG?</div>
        <div className='container  px-6 md:px-12 lg:px-24 py-2 sm:py-5'>
          <TabNavigationCNG/>
        </div>
      </div>
    </>
  );
};

export default NexaCNG;

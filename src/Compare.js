import React, { useRef } from 'react';
import Header from './components/Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowDown } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { products } from './constants';
import { addToCompare } from './redux/compareSlice';
import { useSelector } from 'react-redux';
import { Autoplay, Navigation } from 'swiper';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Helmet } from 'react-helmet';

function Compare() {
  const dispatch = useDispatch();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handleToCompare = (item) => {
    dispatch(addToCompare(item));
  };

  const compare = useSelector((state) => state.compare);

  return (
    <>
      <Header />
      <Helmet>
        <title>Compare Cars | Nexa Hyderabad | Saboo Nexa</title>
        <meta
          name='title'
          content='Compare Cars | Nexa Hyderabad | Saboo Nexa'
        />
        <meta
          name='description'
          content='Best Nexa Showroom in Hyderabad. Saboo Nexa onde of the leading Nexa car dealers in Hyderabad. '
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
      <p className='text-2xl my-16 text-center font-semibold'>Compare Cars</p>
      <div className='container mx-auto'>
        <Swiper
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className='mySwiper'
        >
          {products.map((item, i) => (
            <SwiperSlide key={i}>
              <div className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'>
                {item.price !== null ? (
                  <div className='absolute top-2 right-0 mr-5 '>
                    <p className='flex items-center font-bold'>
                      <BiRupee />
                      {Intl.NumberFormat('en-IN').format(item.price)}*
                    </p>
                    <p className='font-light'>ex-showroom</p>
                  </div>
                ) : (
                  ''
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
                        <a
                          href={item.brouchure}
                          target='_blank'
                          rel='noreferrer'
                        >
                          Download
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
                        className='border border-black  p-2 max-w-[44%] w-full text-center text-sm uppercase'
                        onClick={() => handleToCompare(item)}
                      >
                        Add to compare
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            ref={navigationPrevRef}
            className='absolute left-3 top-1/2 z-10 bg-gray-400 rounded-full p-3 cursor-pointer'
          >
            <GrFormPrevious />
          </div>
          <div
            ref={navigationNextRef}
            className='absolute right-3 top-1/2 z-10 bg-gray-400 rounded-full p-3 cursor-pointer'
          >
            <GrFormNext />
          </div>
        </Swiper>

        <div className='overflow-x-auto relative shadow-md sm:rounded-lg border border-gray-200 mt-10 p-10'>
          <table className='w-full text-sm text-left text-gray-500 '>
            <thead className='text-xs text-gray-700 uppercase border border-gray-100 bg-gray-50'>
              <tr>
                <th scope='col' className='py-4 px-6'>
                  Vehicle Name
                </th>
                {compare.compareItems?.map((item) => (
                  <th scope='col' className='py-4 px-6'>
                    {item.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Price
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {Intl.NumberFormat('en-IN').format(item.price)}*
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Engine Type
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.engineType}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Displacement
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.displacement}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Power (kw @ RPM)
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.power}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Torque (nm @ RPM)
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.torque}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Fuel Type
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.fuelType}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Fuel Tank Capacity
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.fuelTank}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Mileage
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.mileage}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Length (mm)
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.length}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Width (mm)
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.width}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Height (mm)
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.height}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  WheelBase (mm)
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.wheelbase}
                  </th>
                ))}
              </tr>

              {/* Row */}
              {/* <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  Kerb Weight (kg)
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.name}
                  </th>
                ))}
              </tr> */}

              {/* Row */}
              {/* <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  Gross Vehicle Weight (kg)
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.name}
                  </th>
                ))}
              </tr> */}

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Seating
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.seating}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Front Suspension
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.frontSuspension}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Rear Suspension
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.rearSuspension}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Front Brakes
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.frontBrake}
                  </th>
                ))}
              </tr>

              {/* Row */}
              <tr className='bg-white border-b'>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                >
                  Rear Brakes
                </th>
                {compare.compareItems?.map((item) => (
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {item.rearBrake}
                  </th>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* <div className="grid grid-cols-3 gap-5">
          <div className="space-y-5 mt-20">
            <p className="text-center text-2xl uppercase">Vehicle Title</p>
            <p className="pb-2 border-b">Price</p>
            <p className="pb-2 border-b">Engine Type</p>
            <p className="pb-2 border-b">Power (kw @ RPM)</p>
            <p className="pb-2 border-b">Torque (nm @ RPM)</p>
            <p className="pb-2 border-b">Fuel Type</p>
            <p className="pb-2 border-b">Fuel Tank Capacity</p>
            <p className="pb-2 border-b">Mileage</p>
            <p className="pb-2 border-b">Length (mm)</p>
            <p className="pb-2 border-b">Width (mm)</p>
            <p className="pb-2 border-b">Height (mm)</p>
            <p className="pb-2 border-b">WheelBase (mm)</p>
            <p className="pb-2 border-b">Kerb Weight (kg)</p>
            <p className="pb-2 border-b">Gross Vehicle Weight (kg)</p>
            <p className="pb-2 border-b">Seating</p>
            <p className="pb-2 border-b">Front Suspension</p>
            <p className="pb-2 border-b">Rear Suspension</p>
            <p className="pb-2 border-b">Front Brakes</p>
            <p className="pb-2 border-b">Rear Brakes</p>
          </div>
          <div className="col-span-2">
            <Swiper
              slidesPerView={1}
              loop={false}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              {compare.compareItems?.map((item) => (
                <SwiperSlide key={item.id} className="space-y-5">
                  <div className="space-y-5 col-span-2 mt-20">
                    <p className="text-center text-2xl uppercase">
                      {item.name}
                    </p>
                    <p className="pb-2 border-b">
                      {Intl.NumberFormat("en-IN").format(item.price)}*
                    </p>
                    <p className="pb-2 border-b">{item.engineType}</p>
                    <p className="pb-2 border-b">{item.power}</p>
                    <p className="pb-2 border-b">{item.torque}</p>
                    <p className="pb-2 border-b">{item.fuelType}</p>
                    <p className="pb-2 border-b">{item.fuelTank}</p>
                    <p className="pb-2 border-b">{item.mileage}</p>
                    <p className="pb-2 border-b">{item.length} (mm)</p>
                    <p className="pb-2 border-b">{item.width} (mm)</p>
                    <p className="pb-2 border-b">{item.height} (mm)</p>
                    <p className="pb-2 border-b">{item.wheelbase} (mm)</p>
                    <p className="pb-2 border-b">Kerb Weight (kg)</p>
                    <p className="pb-2 border-b">Gross Vehicle Weight (kg)</p>
                    <p className="pb-2 border-b">{item.seating}</p>
                    <p className="pb-2 border-b">{item.frontSuspension}</p>
                    <p className="pb-2 border-b">{item.rearSuspension}</p>
                    <p className="pb-2 border-b">{item.frontBrake}</p>
                    <p className="pb-2 border-b">{item.rearBrake}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Compare;

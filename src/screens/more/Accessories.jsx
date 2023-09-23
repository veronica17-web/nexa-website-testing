import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import required modules
import { Autoplay, Navigation } from "swiper";
import { accsliders, categoriess } from "../../constants";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import AccessoriesPop from "../../components/utils/AccessoriesPop";
import { useEffect } from "react";

function Accessories() {
  const [select, setSeleted] = useState(0);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [selectedItem, setSeletedItem] = useState({});
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  }, [open]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Nexa Genuine Accessories & Spare Parts in Hyderabad | Saboo NEXA
        </title>
        <meta
          name="title"
          content="Nexa Genuine Accessories & Spare Parts in Hyderabad | Saboo NEXA"
        />
        <meta
          name="description"
          content="Nexa Genuine Accessories & Spare Parts in Hyderabad. Saboo Nexa sell all kind of genuine accessories & spare parts for Maruti Suzuki Nexa cars . Call now 9848898488 for Nexa spare parts."
        />
      </Helmet>
      <Header col={true} />
      <div className="bg-white h-16 lg:h-20 "></div>
      <Swiper
        // spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper -mt-1"
      >
        {accsliders.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={item.img}
              className="max-w-full w-full select-none"
              alt={item.alt}
              width="100px"
              height="100px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="group lg:container mx-auto relative">
        {/* <div className="pt-4 text-2xl md:text-3xl text-center uppercase lg:text-4xl  lg:pt-16 select-none pb-1">
          Browse From Wide Range Of Accessories
        </div> 
        <div className="flex flex-col items-center  pb-6">
          <div className="w-36 bg-black h-0.5 group-hover:w-60 duration-500"></div>
          <div className="w-28 bg-black h-0.5 mt-1"></div>
        </div>*/}

        <div className="pt-4 text-xl md:text-2xl lg:text-3xl text-center  lg:pt-8 select-none pb-6">
          Categories
        </div>
        <div className="flex flex-wrap justify-center border-b py-4 gap-2 sticky top-16 lg:top-[5.26rem] z-10 bg-gray-200  lg:text-lg border-gray-300 ">
          {categoriess.map((x, i) => (
            <div
              key={i}
              className={`cursor-pointer duration-500 transition-colors border-black  select-none px-1 md:px-4 lg:px-6 ${
                select === i
                  ? "text-red-500 underline underline-offset-4 "
                  : "hover:text-red-600 hover:underline hover:underline-offset-4"
              } ${i < categoriess.length - 1 && "border-r"}`}
              onClick={() => {
                setSeleted(i);
                scrollToTop(); // Call the scroll function when the element is clicked
              }}
            >
              {x.filedName}
            </div>
          ))}
        </div>

        {/* Accessories cart */}

        <div
          className={`grid gap-4 pb-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5 ${
            select === 0 ? "block" : "hidden"
          }`}
        >
          {categoriess[0].data.map((item, i) => (
            <div
              className="relative flex flex-col justify-between overflow-hidden border border-gray-200 shadow-lg shadow-gray-200 hover:shadow-gray-300 rounded-lg hover:scale-105 duration-200"
              key={i}
            >
              <div className="flex items-center justify-between m-4 rounded-lg overflow-hidden bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp)] min-h-[30vh] bg-center bg-cover ">
                <img
                  src={item.img}
                  className="w-full h-full rounded-lg "
                  alt={item.name}
                />
                {/* <img src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp" alt="" srcset="" /> */}
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-wrap justify-between items-center gap-2  m-4 ">
                  <div className="text-xl">{item.item}</div>
                  <div className="text-sm">{item.code}</div>
                </div>
                <div className="flex items-center justify-center gap-4 pb-5 mx-4">
                  <div className="w-full py-2  text-left text-xl rounded ">
                    ₹ {item.price}*
                  </div>
                  <button
                    onClick={() => {
                      setSeletedItem(item);
                      setOpen(true);
                    }}
                    className="w-full p-2 text-sm text-center text-white uppercase duration-300 ease-in bg-black border border-black rounded hover:bg-white hover:text-black"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`grid gap-4 pb-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5 ${
            select === 1 ? "block" : "hidden"
          }`}
        >
          {categoriess[1].data.map((item, i) => (
            <div
              className="relative flex flex-col justify-between overflow-hidden border border-gray-200 shadow-lg shadow-gray-200 hover:shadow-gray-300 rounded-lg hover:scale-105 duration-200 "
              key={i}
            >
              <div className="flex items-center justify-between m-4 rounded-lg overflow-hidden bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp)] min-h-[30vh] bg-center bg-cover ">
                <img
                  src={item.img}
                  className="w-full h-full rounded-lg "
                  alt={item.name}
                />
                {/* <img src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp" alt="" srcset="" /> */}
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-wrap justify-between items-center gap-2  m-4 ">
                  <div className="text-xl">{item.item}</div>
                  <div className="text-sm">{item.code}</div>
                </div>
                <div className="flex items-center justify-center gap-4 pb-5 mx-4">
                  <div className="w-full py-2  text-left text-xl rounded ">
                    ₹ {item.price}*
                  </div>
                  <button
                    onClick={() => {
                      setSeletedItem(item);
                      setOpen(true);
                    }}
                    className="w-full p-2 text-sm text-center text-white uppercase duration-300 ease-in bg-black border border-black rounded hover:bg-white hover:text-black"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`grid gap-4 pb-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5 ${
            select === 2 ? "block" : "hidden"
          }`}
        >
          {categoriess[2].data.map((item, i) => (
            <div
              className="relative flex flex-col justify-between overflow-hidden border border-gray-200 shadow-lg shadow-gray-200 hover:shadow-gray-300 rounded-lg hover:scale-105 duration-200"
              key={i}
            >
              <div className="flex items-center justify-between m-4 rounded-lg overflow-hidden bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp)] min-h-[30vh] bg-center bg-cover ">
                <img
                  src={item.img}
                  className="w-full h-full rounded-lg "
                  alt={item.name}
                />
                {/* <img src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp" alt="" srcset="" /> */}
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-wrap justify-between items-center gap-2  m-4 ">
                  <div className="text-xl">{item.item}</div>
                  <div className="text-sm">{item.code}</div>
                </div>
                <div className="flex items-center justify-center gap-4 pb-5 mx-4">
                  <div className="w-full py-2  text-left text-xl rounded ">
                    ₹ {item.price}*
                  </div>
                  <button
                    onClick={() => {
                      setSeletedItem(item);
                      setOpen(true);
                    }}
                    className="w-full p-2 text-sm text-center text-white uppercase duration-300 ease-in bg-black border border-black rounded hover:bg-white hover:text-black"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`grid gap-4 pb-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5 ${
            select === 3 ? "block" : "hidden"
          }`}
        >
          {categoriess[3].data.map((item, i) => (
            <div
              className="relative flex flex-col justify-between overflow-hidden border border-gray-200 shadow-lg shadow-gray-200 hover:shadow-gray-300 rounded-lg hover:scale-105 duration-200"
              key={i}
            >
              <div className="flex items-center justify-between m-4 rounded-lg overflow-hidden bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp)] min-h-[30vh] bg-center bg-cover ">
                <img
                  src={item.img}
                  className="w-full h-full rounded-lg "
                  alt={item.name}
                />
                {/* <img src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp" alt="" srcset="" /> */}
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-wrap justify-between items-center gap-2  m-4 ">
                  <div className="text-xl">{item.item}</div>
                  <div className="text-sm">{item.code}</div>
                </div>
                <div className="flex items-center justify-center gap-4 pb-5 mx-4">
                  <div className="w-full py-2  text-left text-xl rounded ">
                    ₹ {item.price}*
                  </div>
                  <button
                    onClick={() => {
                      setSeletedItem(item);
                      setOpen(true);
                    }}
                    className="w-full p-2 text-sm text-center text-white uppercase duration-300 ease-in bg-black border border-black rounded hover:bg-white hover:text-black"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`grid gap-4 pb-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5 ${
            select === 4 ? "block" : "hidden"
          }`}
        >
          {categoriess[4].data.map((item, i) => (
            <div
              className="relative flex flex-col justify-between overflow-hidden border border-gray-200 shadow-lg shadow-gray-200 hover:shadow-gray-300 rounded-lg hover:scale-105 duration-200"
              key={i}
            >
              <div className="flex items-center justify-between m-4 rounded-lg overflow-hidden bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp)] min-h-[30vh] bg-center bg-cover ">
                <img
                  src={item.img}
                  className="w-full h-full rounded-lg "
                  alt={item.name}
                />
                {/* <img src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp" alt="" srcset="" /> */}
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-wrap justify-between items-center gap-2  m-4 ">
                  <div className="text-xl">{item.item}</div>
                  <div className="text-sm">{item.code}</div>
                </div>
                <div className="flex items-center justify-center gap-4 pb-5 mx-4">
                  <div className="w-full py-2  text-left text-xl rounded ">
                    ₹ {item.price}*
                  </div>
                  <button
                    onClick={() => {
                      setSeletedItem(item);
                      setOpen(true);
                    }}
                    className="w-full p-2 text-sm text-center text-white uppercase duration-300 ease-in bg-black border border-black rounded hover:bg-white hover:text-black"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`grid gap-4 pb-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5 ${
            select === 5 ? "block" : "hidden"
          }`}
        >
          {categoriess[5].data.map((item, i) => (
            <div
              className="relative flex flex-col justify-between overflow-hidden border border-gray-200 shadow-lg shadow-gray-200 hover:shadow-gray-300 rounded-lg hover:scale-105 duration-200"
              key={i}
            >
              <div className="flex items-center justify-between m-4 rounded-lg overflow-hidden bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp)] min-h-[30vh] bg-center bg-cover ">
                <img
                  src={item.img}
                  className="w-full h-full rounded-lg "
                  alt={item.name}
                />
                {/* <img src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp" alt="" srcset="" /> */}
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-wrap justify-between items-center gap-2  m-4 ">
                  <div className="text-xl">{item.item}</div>
                  <div className="text-sm">{item.code}</div>
                </div>
                <div className="flex items-center justify-center gap-4 pb-5 mx-4">
                  <div className="w-full py-2  text-left text-xl rounded ">
                    ₹ {item.price}*
                  </div>
                  <button
                    onClick={() => {
                      setSeletedItem(item);
                      setOpen(true);
                    }}
                    className="w-full p-2 text-sm text-center text-white uppercase duration-300 ease-in bg-black border border-black rounded hover:bg-white hover:text-black"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AccessoriesPop
          open={open}
          setOpen={setOpen}
          phone={phone}
          setPhone={setPhone}
          item={selectedItem}
        />
      </div>

      {/* <h3 className='text-center text-3xl pt-2font-bold'>
        EXPLORE ACCESSORIES BY CATEGORY
      </h3>
      <div className='container mx-auto m-28'>
        <Swiper
          slidesPerView={6}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            {' '}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Car-Wheel.webp'
              className='h-48  md:h-full md:w-68'
              alt='Maruti-Suzuki-Nexa_Jubilee'
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Accessories-Seating.webp'
              className='h-48  md:h-full md:w-68'
              alt='Maruti-Suzuki-Nexa_Jubilee'
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Genuine-Accessories-Kit.webp'
              className='h-48  md:h-full md:w-68'
              alt='Maruti-Suzuki-Nexa_Jubilee'
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Genuine-Accessories-Price-List.webp'
              className='h-48  md:h-full md:w-68'
              alt='Maruti-Suzuki-Nexa_Jubilee'
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Genuine-Accessories-Car-Perfume.webp'
              className='h-48  md:h-full md:w-68'
              alt='Maruti-Suzuki-Nexa_Jubilee'
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Genuine-Accessories-Nexa-Car-Back-Camera.webp'
              className='h-48  md:h-full md:w-68'
              alt='Maruti-Suzuki-Nexa_Jubilee'
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Genuine-Accessories-Kit.webp'
              className='h-48  md:h-full md:w-68'
              alt='Maruti-Suzuki-Nexa_Jubilee'
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h3 className='text-center text-3xl pt-2 font-bold'>
        CAR CABIN PROTECTIVE PARTITION
      </h3>

      <div className='container mx-auto py-16 '>
        <div className='grid md:grid-cols-3 gap-4 px-5'>
          <div>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/saboo-Nexa-car-cabin.jpeg'
              className='h-48  md:h-full md:w-68'
              alt='Maruti-Suzuki-Nexa_Jubilee'
            />
          </div>
          <div className='space-y-4 col-span-2'>
            <p className='text-gray-100'>
              <span className='text-black font-medium'>
                <h3 className='text-xl pt-2 font-bold'>DESCRIPTION</h3>
                <ol>
                  <li className='list-disc list-outside'>
                    {' '}
                    Isolates front and rear car cabin.
                  </li>
                  <li className='list-disc'>
                    {' '}
                    Prevents transfer of droplets within the car due to
                    coughing/sneezing/talking.
                  </li>
                  <li className='list-disc'>
                    {' '}
                    Made of Virgin grade premium Poly Vinyl Chloride material.
                  </li>
                  <li className='list-disc'>
                    {' '}
                    Clear visibility and complete coverage from roof to floor.
                  </li>
                </ol>
                <h3 className='text-xl pt-2 font-bold'>FEATURES AND USAGE</h3>
                <ol>
                  <li className='list-disc list-outside'>
                    {' '}
                    Isolates front and rear car cabin.
                  </li>
                  <li className='list-disc'>
                    {' '}
                    Prevents transfer of droplets within the car due to
                    coughing/sneezing/talking.
                  </li>
                  <li className='list-disc'>
                    {' '}
                    Made of Virgin grade premium Poly Vinyl Chloride material.
                  </li>
                  <li className='list-disc'>
                    {' '}
                    Clear visibility and complete coverage from roof to floor.
                  </li>
                </ol>
                <h3 className='text-xl pt-2 font-bold'>
                  Color:<span className='text-gray-500 '>Transparent</span>
                </h3>
                <h3 className='text-xl pt-2 font-bold'>
                  Quantity :<span className='text-gray-500'>1</span>
                </h3>
                <h3 className='text-xl pt-2 font-bold'>
                  Size:
                  <span className='text-gray-500'>
                    As per car cabin- varies on model level
                  </span>
                </h3>
                <h3 className='text-xl pt-2 font-bold'>
                  Point of Sale:
                  <span className='text-gray-500'>
                    Usage Applicability Chauffer driven vehicles, convenient
                    family outings.
                  </span>
                </h3>
              </span>{' '}
            </p>
          </div>
        </div>
      </div>

      <div className='m-8 mx-auto container w-full'>
        <table className='w-full '>
          <thead className='bg-black text-gray-100'>
            {' '}
            <tr>
              <th className='border border-slate-300 h-12'>S.NO</th>
              <th className='border border-slate-300'>PART NUMBER</th>
              <th className='border border-slate-300'>PART DESCRIPTION</th>
              <th className='border border-slate-300'>MRP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-slate-300 pl-2 h-12'>1</td>
              <td className='border border-slate-300 pl-2'>990J0M999CV-CPB</td>
              <td className='border border-slate-300 pl-2'>
                Car Cabin Protective Partition-Baleno
              </td>
              <td className='border border-slate-300 pl-2'>₹ 799 *</td>
            </tr>
            <tr>
              <td className='border border-slate-300 pl-2 h-12'>2</td>
              <td className='border border-slate-300 pl-2'>990J0M999CV-CP6</td>
              <td className='border border-slate-300 pl-2'>
                Car Cabin Protective Partition-XL6
              </td>
              <td className='border border-slate-300 pl-2'>₹ 799 *</td>
            </tr>
            <tr>
              <td className='border border-slate-300 pl-2 h-12'>3 </td>
              <td className='border border-slate-300 pl-2'>990J0M999CV-CP1</td>
              <td className='border border-slate-300 pl-2'>
                Car Cabin Protective Partition-Ciaz
              </td>
              <td className='border border-slate-300 pl-2'>₹ 799 *</td>
            </tr>
            <tr>
              <td className='border border-slate-300 pl-2 h-12'>4</td>
              <td className='border border-slate-300 pl-2'>990J0M999CV-CP5</td>
              <td className='border border-slate-300 pl-2'>
                Car Cabin Protective Partition-S-Cross
              </td>
              <td className='border border-slate-300 pl-2'>₹ 799 *</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  );
}

export default Accessories;

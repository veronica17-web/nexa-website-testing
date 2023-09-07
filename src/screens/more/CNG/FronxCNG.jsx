import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import "./fronx.css";

// import { products } from '../../constants';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import OnRoadPrice from "../../../components/utils/OnRoadPrice";
import { MdOutlineFileDownload } from "react-icons/md";
import { Helmet } from "react-helmet";

import { Tab } from "@headlessui/react";
import { fronx } from "../../../constants/cars";

const FronxCNG = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Helmet>
        <title>
        Maruti Suzuki Fronx On-Road Price in Hyderabad | Saboo NEXA
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Fronx On-Road Price in Hyderabad | Saboo NEXA"
        />
        <meta
          name="description"
          content="Get the latest on-road price of Maruti Suzuki Fronx in Hyderabad and enjoy a smooth car ownership experience. For more information about Nexa Fronx visit your nearest Saboo Nexa dealership today."
        />
        <meta
          name="keywords"
          content="XL6 CNG on road price, XL6 CNG mileage, XL6 CNG offers & disconuts,XL6 CNG on road price, Maruti XL6 CNG offers, XL6 CNG mileage,Nexa XL6 CNG petrol price, Maruti XL6 CNG on road price, Maruti XL6 CNG variants, XL6 CNG images, XL6 CNG mileage, Nexa XL6 CNG price in hyderabad, Maruti XL6 CNG price in hyderabad, XL6 CNG price in hyderabad, XL6 CNG onroad price in hyderabad, offers on XL6 CNG, XL6 CNG offers 2022, new XL6 CNG price, new XL6 CNG price in hyderabad, new XL6 CNG 2022 price, new XL6 CNG 2022 onroad price, XL6 CNG petrol price in hyderabad, XL6 CNG 2022 petrol price in hyderabad"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboonexa.in/the-xl6/" />
        <meta
          property="og:title"
          content="Nexa XL6 CNG On Road Price in Hyderabad | Maruti XL6 CNG Offers in Hyderabad"
        />
        <meta
          property="og:description"
          content="Nexa XL6 CNG 2022 price in Hyderabad. Maruti Suzuki XL6 CNG on road price starts at ₹ 10.14* lakh. For more details about XL6 CNG features, specifications, mileage, colors and images visit our site or call us 98488 98488"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/the-xl6/"
        />
        <meta
          property="twitter:title"
          content="Nexa XL6 CNG On Road Price in Hyderabad | Maruti XL6 CNG Offers in Hyderabad"
        />
        <meta
          property="twitter:description"
          content="Nexa XL6 2022 price in Hyderabad. Maruti Suzuki XL6 on road price starts at ₹ 10.14* lakh. For more details about XL6 features, specifications, mileage, colors and images visit our site or call us 98488 98488"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg"
        />
      </Helmet>
      <Header />

      {/* <div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-desktop.webp'
          className='w-full object-cover hidden md:block '
          alt='SCNG Banner'
          srcSet=''
        />
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-mobile.webp'
          className='w-full md:hidden block '
          alt='SCNG Banner'
          srcSet=''
        />
      </div> */}
      <div className="pt-20 pb-1 bg-black"></div>
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fornx-cng-mobwebp.webp')] sm:bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng.webp')]  bg-cover bg-no-repeat md:h-[40vh] lg:h-[60vh] h-[60vh] ">
        <div className="max-w-6xl flex items-end h-full ">
          {/* <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Logo-xl6.webp'
                className='p-3 md:ml-20 lg:ml-36'
                alt='title'
              /> */}
          <a
            href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/FRONX+Brochure_Saboo+RKS.6b9c2f109c812f47efb9.pdf"
            className="p-3 h-min bg-white md:bg-black md:text-white flex items-center w-min mb-10 md:mb-20 ml-20 whitespace-nowrap rounded "
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineFileDownload size={20} />
            &nbsp;Download Brochure
          </a>
        </div>
      </div>
      <OnRoadPrice title={"XL6 CNG"} />
      <div className="text-center  my-8 container mx-auto ">
        <div className="text-2xl py-4 pt-8 font-medium">
          Meet the green side to your new drive
        </div>
        <span className="">
          The ultimate blend of style and performance, gets a green streak.
          Experience the thrill of sustainable FRONXING with cutting-edge S-CNG
          technology, delivering optimum power and fuel efficiency. Embrace
          eco-friendly mobility with minimal carbon footprint while enjoying
          unmatched power.
        </span>
      </div>
      <div className="text-center mt-8 -mb-6 container mx-auto ">
        <div className="text-2xl font-semibold pt-4 pb-2 ">FRONX</div>
        <div className="font-medium text-lg">Performance Goes Green.</div>
        <div className="container  px-6 md:px-12 lg:px-24 py-2 sm:py-5 ">
          <div className="container mx-auto py-6 space-y-4 rounded">
            {/* <Carousel /> */}
          
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              speed={1000}
              spaceBetween={2}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className="mySwiper2 h-60"
            >
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/VVT+Engine.webp"
                  alt=""
                />
                <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    Advanced 1.2L K-Series Dual Jet, Dual VVT Engine
                  </span>
                  <br />
                  For those who refuse to compromise, the 1.2L K-Series Dual Jet
                  Dual VVT Engine with Idle Start-Stop technology (ISS) is
                  engineered to offer excellent drive performance and superior
                  fuel-efficiency.
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/Reference.webp"
                  alt=""
                />
                <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    NEXWave GRILLE & STRIKING FRONT FASCIA
                  </span>
                  <br />
                  The stylish and sporty grille is bound to leave everyone in
                  complete awe. It’s signature stye makes it stand out from the
                  crowd.
                </div>
              </SwiperSlide>

              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/FRONX_CNG+Hill+Hold.webp"
                  alt=""
                />
                <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">Hill Hold Assist</span>
                  <br />
                  Prevents your car from rolling backwards while ascending a
                  slope, thereby ensuring that your car descends in a controlled
                  manner.
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/FRONX_CNG+Dashboard.webp"
                  alt=""
                />
                <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/FRONX_CNG+Chassis.webp"
                  alt=""
                />
                <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">Factory Fitted S-CNG</span>
                  <br />
                  Our CNG cylinder is fitted on to the new-generation chassis
                  platform using Ultra and Advanced High Tensile Steels that
                  aids the car to resist deformation. It also comes with a
                  neatly placed fire extinguisher to ensure your safety.
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper-3"
            >
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/VVT+Engine.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/Reference.webp"
                  alt=""
                  className=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/FRONX_CNG+Hill+Hold.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/FRONX_CNG+Dashboard.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/FRONX_CNG+Chassis.webp"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* <div className='text-center my-6 container mx-auto pb-6'>
        <div className='text-2xl font-semibold '>REGISTER YOUR INTEREST</div>
        <div className='container  px-6 md:px-12 lg:px-24 py-2 sm:py-5'>
          Register Now To Know All About The Advanced Features Of Grand Vitara
          CNG
        </div>
        <hr className='w-1/5 mx-auto' />
      </div> */}
      <div className="text-2xl text-center font-medium py-4 pt-10 ">
        FRONX S-CNG SPECIFICATIONS
      </div>
      <div className="max-w-7xl mx-auto py-6 lg:py-20 ">
        <div className="grid md:grid-cols-4 md:space-x-4 lg:space-x-1 gap-4">
          <Tab.Group>
            <div className="col-span-1">
              <p className="p-4 bg-black w-full text-white ml-3 mb-1">
                Features
              </p>
              <Tab.List className="space-x-3">
                {/* Engine */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                      : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                  }
                >
                  <div className="flex items-center p-4 space-x-2">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/engine.png"
                      alt="engine"
                      className="h-5 w-5"
                    />
                    <p>Engine</p>
                  </div>
                </Tab>

                {/* Transmission */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                      : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                  }
                >
                  <div className="flex items-center p-4 space-x-2">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/transmission.png"
                      alt="transmission"
                      className="h-5 w-5"
                    />
                    <p>Transmission</p>
                  </div>
                </Tab>

                {/* Dimensions */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                      : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                  }
                >
                  <div className="flex items-center p-4 space-x-2">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/dimensions.png"
                      alt="dimensions"
                      className="h-5 w-5"
                    />
                    <p>Dimensions</p>
                  </div>
                </Tab>

                {/* Weight */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                      : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                  }
                >
                  <div className="flex items-center p-4 space-x-2">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/weight.png"
                      alt="Weight"
                      className="h-5 w-5"
                    />
                    <p>Weight</p>
                  </div>
                </Tab>

                {/* Brakes */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                      : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                  }
                >
                  <div className="flex items-center p-4 space-x-2">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/brakes.png"
                      alt="Brakes"
                      className="h-5 w-5"
                    />
                    <p>Brakes</p>
                  </div>
                </Tab>

                {/* Suspension */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                      : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                  }
                >
                  <div className="flex items-center p-4 space-x-2">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/suspension.png"
                      alt="Suspension"
                      className="h-5 w-5"
                    />
                    <p>Suspension</p>
                  </div>
                </Tab>

                {/* Tyre Size */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                      : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                  }
                >
                  <div className="flex items-center p-4 space-x-2">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/tyre.png"
                      alt="Tyre Size"
                      className="h-5 w-5"
                    />
                    <p>Tyre Size</p>
                  </div>
                </Tab>

                {/* Fuel Tank */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                      : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                  }
                >
                  <div className="flex items-center p-4 space-x-2">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/fuel.png"
                      alt="Fuel Tank"
                      className="h-5 w-5"
                    />
                    <p>Fuel Tank</p>
                  </div>
                </Tab>

                {/* Seating Capacity */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                      : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                  }
                >
                  <div className="flex items-center p-4 space-x-2">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/seat.png"
                      alt="Seating Capacity"
                      className="h-5 w-5"
                    />
                    <p>Seating Capacity</p>
                  </div>
                </Tab>
              </Tab.List>
            </div>
            <div className="col-span-3 px-3">
              <Tab.Panels>
                {/* Engine */}
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="bg-black p-4 text-gray-300">
                      Specifications
                    </div>
                    <div className="bg-black p-4 text-gray-300">
                      Petrol BS VI
                    </div>
                    {fronx.engine.map((item, index) => (
                      <>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.specs}
                        </div>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className="p-4 bg-black text-gray-200 mt-1.5">
                    *Fuel efficiency as certified by test agency under rule 115
                    of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Transmission */}
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="bg-black p-4 text-gray-300">Body Type</div>
                    <div className="bg-black p-4 text-gray-300">
                      Petrol BS VI
                    </div>
                    {fronx.transmission.map((item, index) => (
                      <>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.body}
                        </div>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className="p-4 bg-black text-gray-200 mt-1.5">
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Dimensions */}
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="bg-black p-4 text-gray-300">Body Type</div>
                    <div className="bg-black p-4 text-gray-300">
                      Petrol BS VI
                    </div>
                    {fronx.dimensions.map((item, index) => (
                      <>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.body}
                        </div>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className="p-4 bg-black text-gray-200 mt-1.5">
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Weight */}
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="bg-black p-4 text-gray-300">Body Type</div>
                    <div className="bg-black p-4 text-gray-300">
                      Petrol BS VI
                    </div>
                    {fronx.weight.map((item, index) => (
                      <>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.body}
                        </div>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className="p-4 bg-black text-gray-200 mt-1.5">
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Brakes */}
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="bg-black p-4 text-gray-300">Body Type</div>
                    <div className="bg-black p-4 text-gray-300">
                      Petrol BS VI
                    </div>
                    {fronx.brakes.map((item, index) => (
                      <>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.body}
                        </div>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className="p-4 bg-black text-gray-200 mt-1.5">
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Suspension */}
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="bg-black p-4 text-gray-300">Body Type</div>
                    <div className="bg-black p-4 text-gray-300">
                      Petrol BS VI
                    </div>
                    {fronx.suspension.map((item, index) => (
                      <>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.body}
                        </div>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className="p-4 bg-black text-gray-200 mt-1.5">
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Tyre Size */}
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="bg-black p-4 text-gray-300">Body Type</div>
                    <div className="bg-black p-4 text-gray-300">
                      Petrol BS VI
                    </div>
                    {fronx.tyre.map((item, index) => (
                      <>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.body}
                        </div>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className="p-4 bg-black text-gray-200 mt-1.5">
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Fuel Tank */}
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="bg-black p-4 text-gray-300">Body Type</div>
                    <div className="bg-black p-4 text-gray-300">
                      Petrol BS VI
                    </div>
                    {fronx.fuel.map((item, index) => (
                      <>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.body}
                        </div>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className="p-4 bg-black text-gray-200 mt-1.5">
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Seating Capacity */}
                <Tab.Panel>
                  <div className="grid grid-cols-2">
                    <div className="bg-black p-4 text-gray-300">Body Type</div>
                    <div className="bg-black p-4 text-gray-300">
                      Petrol BS VI
                    </div>
                    {fronx.seating.map((item, index) => (
                      <>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.body}
                        </div>
                        <div className="bg-gray-100 p-4 text-gray-700">
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className="p-4 bg-black text-gray-200 mt-1.5">
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default FronxCNG;

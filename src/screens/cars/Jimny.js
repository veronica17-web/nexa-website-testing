import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Link } from "react-router-dom";

import Helmet from "react-helmet";
// import { Autoplay, Navigation, Pagination } from 'swiper';
// import OnRoadPrice from "../../components/utils/OnRoadPrice";
import { MdOutlineFileDownload } from "react-icons/md";
// import Carousel from '../../components/Jimny/Extras/Carousel';
import MobileCarousel from "../../components/Jimny/Extras/MobileCarousel";

import AOS from "aos";
import "aos/dist/aos.css";
import { CarComp, CarEnq2, InvictoCarEnquiry2 } from "./Invicto";
import { products } from "../../constants";

const Jimny = () => {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Jimny On-Road Price in Hyderabad | Saboo NEXA
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Jimny On-Road Price in Hyderabad | Saboo NEXA"
        />
        <meta
          name="description"
          content="Get the latest on-road price of Maruti Suzuki Jimny in Hyderabad and enjoy a smooth car ownership experience. For more information about Nexa Fronx visit your nearest Saboo Nexa dealership today."
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

      <Header />
      <VariantPlayer />
      <CarEnq2 title="BOOK YOUR JIMNY NOW" />
      <Variant />

      <JimnyInteriorAndOther />

      <Design />
      {/* <OnRoadPrice title={'Jimny'} /> */}
      {/* {width > 425 ? <Carousel /> : <MobileCarousel />} */}
      <div className="hidden sm:block bg-black text-white pt-2 pb-8">
        <div className="  w-full pt-8 pb-2 text-3xl text-center uppercase  sm:text-4xl md:text-5xl ">
          SAFETY
        </div>
        <div className="text-center text-md lg:text-lg pb-2">
          Your Safety Harness For Every Terrain
        </div>
        <div className="flex h-[75vh]  gap-2 px-4 pt-1">
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3  bg-no-repeat bg-cover bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/1-811x629-AR_SN_JIMNY_HILL+DESCENT+CONTROL+SHOT_V1+copy.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">HILL HOLD ASSIST</span>
              <span className="font-thin tracking-wider">
                Climb like a mountain goat on the steepest roads
              </span>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/2-811x629-AR_SN_JIMNY_HILL+DESCENT+CONTROL+SHOT_V1.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">
                HILL DESCENT CONTROL
              </span>
              <span className="font-thin tracking-wider">
                Take control with the push of a button
              </span>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/3-Jimmy-811x629-1.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">BRAKE LSD</span>
              <span className="font-thin tracking-wider">
                Be the unstoppable force on the most stubborn terrain
              </span>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/4-811x629-AR_AB_BP_JIMNY_6_AIRBAG_SHOT_03_04.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">6 AIRBAGS</span>
              <span className="font-thin tracking-wider">
                The thrill of the ride is only possible with safety on your side
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <MobileCarousel />
      </div>
      <Performance />
      <CarComp details={products[2]} />
      <InvictoCarEnquiry2 title="BOOK YOUR JIMNY NOW" carName="Jimny" />
      {/* <Carousel /> */}
    </>
  );
};

function JimnyInteriorAndOther() {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <div className=" mx-auto  space-y-4 bg-black">
      {/* <p className="font-bold text-4xl text-center">Maruti Suzuki Jimny</p>
      <p className=" text-center tracking-wider font-bold">
        A Story passed down four generations
      </p>
      <p className="bg-black h-1 w-60 mx-auto"></p>
      <p className="max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl">
        The Jimny has been on a long journey down the evolutionary road.
        Selected by the nature for the harshest conditions, it has seen and
        survived the worst. Only getting tougher with experience as it's
        teacher.
      </p> */}
       <div className=" w-full pt-8 pb-2 text-3xl text-center uppercase  sm:text-4xl md:text-5xl text-white">
       COLOURS
      </div>

      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/jimmy-color-bg.webp')] bg-cover bg-no-repeat">
        <div className="max-w-1xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2">
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/Jimny+Brochure_Saboo+RKS.3fe320502cb6720e78de.pdf"
              className="m-3 p-3 bg-black text-gray-200 flex items-center max-w-[200px] ml-3 rounded"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineFileDownload size={10} />
              &nbsp;Download Brochure
            </a>
            <div className="col-span-2">
              <>
                <div className="ml-auto mr-1 mt-24">
                  {/* 1. yellow bluish black roof */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Kinetic_Yellow_Bluish_Black_Roof.webp"
                    alt="KINETIC YELLOW BLUISH BLACK ROOF"
                    className={tabsColors === 1 ? "flex mx-auto" : "hidden"}
                  />

                  {/* 2. sizzling red bluish black roof */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Sizzling_Red_Bluish_Black_Roof.webp"
                    alt="SIZZLING RED WITH BLUISH BLACK ROOF"
                    className={tabsColors === 2 ? "flex mx-auto" : "hidden"}
                  />

                  {/* 3. nexa blue */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Nexa_Blue.webp"
                    alt="NEXA BLUE"
                    className={tabsColors === 3 ? "flex mx-auto" : "hidden"}
                  />

                  {/* 4. bluish black */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Bluish_Black.webp"
                    alt="BLUISH BLACK"
                    className={tabsColors === 4 ? "flex mx-auto" : "hidden"}
                  />
                  {/* 5. sizzling red */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Sizzling_Red.webp"
                    alt="SIZZLING RED"
                    className={tabsColors === 5 ? "flex mx-auto" : "hidden"}
                  />

                  {/* 6. granite gray */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Granite_Gray.webp"
                    alt="GRANITE GRAY"
                    className={tabsColors === 6 ? "flex mx-auto" : "hidden"}
                  />
                  {/* 7. pearl white */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Pearl_Artcic_White.webp"
                    alt="PEARL WHITE"
                    className={tabsColors === 7 ? "flex mx-auto" : "hidden"}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div onClick={() => setTabsColors(1)}>
                    <div className={tabsColors === 1 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/icons/kinetic-yellow-bluish-black-roof+(2).webp')] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#ffffff]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 1
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/icons/kinetic-yellow-bluish-black-roof+(2).webp')] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(2)}>
                    <div className={tabsColors === 2 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/icons/j-red-bluish-black-roof+(1).webp')] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#fcf9f9]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 2
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/icons/j-red-bluish-black-roof+(1).webp')] mr-2 border"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(3)}>
                    <div className={tabsColors === 3 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[#153473] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 3
                          ? "w-6 h-6 bg-[#153473] mr-2 border"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(4)}>
                    <div className={tabsColors === 4 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[#060622] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 4
                          ? "w-6 h-6 border bg-[#060622] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(5)}>
                    <div className={tabsColors === 5 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[#b21511] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 5
                          ? "w-6 h-6 border bg-[#b21511] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(6)}>
                    <div className={tabsColors === 6 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[#494b4f] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#fffefe]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 6
                          ? "w-6 h-6 border bg-[#494b4f] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(7)}>
                    <div className={tabsColors === 7 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[#f9f9f9] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#ffffff]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 7
                          ? "w-6 h-6 bg-[#f9f9f9] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>
                </div>
                <>
                  <p
                    className={
                      tabsColors === 1
                        ? "text-center font-light text-sm my-2 text-white"
                        : "hidden"
                    }
                  >
                    KINETIC YELLOW BLUISH BLACK ROOF
                  </p>

                  <p
                    className={
                      tabsColors === 2
                        ? "text-center font-light text-sm my-2 text-white"
                        : "hidden"
                    }
                  >
                    SIZZLING RED WITH BLUISH BLACK ROOF
                  </p>
                  <p
                    className={
                      tabsColors === 3
                        ? "text-center font-light text-sm my-2 text-white"
                        : "hidden"
                    }
                  >
                    NEXA BLUE
                  </p>
                  <p
                    className={
                      tabsColors === 4
                        ? "text-center font-light text-sm my-2 text-white"
                        : "hidden"
                    }
                  >
                    BLUISH BLACK
                  </p>
                  <p
                    className={
                      tabsColors === 5
                        ? "text-center font-light text-sm my-2 text-white"
                        : "hidden"
                    }
                  >
                    SIZZLING RED
                  </p>
                  <p
                    className={
                      tabsColors === 6
                        ? "text-center font-light text-sm my-2 text-white"
                        : "hidden"
                    }
                  >
                    GRANITE GRAY
                  </p>
                  <p
                    className={
                      tabsColors === 7
                        ? "text-center font-light text-sm my-2 text-white"
                        : "hidden"
                    }
                  >
                    PEARL WHITE
                  </p>
                </>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Variant = () => {
  const [price, setPrice] = useState("12,74,000");
  return (
    <div className="bg-black py-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 md:space-y-0 space-y-3">
          <div className="space-y-3 mx-auto md:mx-0">
            <p className="uppercase text-gray-300">select car Variant</p>
            <select
              name="model"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <option value="12,74,000">ZETA</option>
              <option value="13,69,000">ALPHA(M)</option>
              <option value="13,85,000">ALPHA(D)</option>
              <option value="13,94,000">ZETA 4AT</option>
              <option value="14,89,000">ALPHA(M) 4AT</option>
              <option value="15,05,000">ALPHA(D) 4AT</option>
            </select>
          </div>
          <div className="text-center text-gray-200">
            <p className="text-2xl font-medium">₹ {price}*</p>
            <p className="tracking-wide text-xl pb-1">
              Ex-Showroom Price - Hyderabad
            </p>
            {/* <p className="uppercase text-gray-400 font-bold">Hyderabad</p> */}
            <div className="text-red-200 text-xs font-light">
              <sup>*</sup>Alpha+ & Zeta+ are applicable only for Direct
              Injection engine with Smart Hybrid
            </div>
          </div>
          <div className="mx-auto">
            <p className="text-gray-100 mb-6 text-center">
              You might have pre-approved loan offers
            </p>
            <Link
              to="/maruti-car-finance"
              className="py-2 px-4 bg-white rounded shadow uppercase tracking-wide"
            >
              Check for loan offers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const VariantPlayer = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Define the video source URL based on the browser
  const videoSource = isSafari
    ? "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/Jimny_safari.mov"
    : "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/video/jimny_banner.webm";

  return (
    <div className="top-0 left-0 w-full h-screen relative bg-black ">
      <video
        className="object-cover w-full h-full "
        preload="metadata"
        poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/Jimny_HeaderBanner_1500x634+webp.webp"
        loop
        autoPlay
        playsInline
        muted
      >
        <source
          src={videoSource}
          type={isSafari ? "video/quicktime" : "video/mp4"}
        />
      </video>
      <div className="absolute bottom-40 lg:bottom-24 left-[3%] lg:left-[5%] text-white ">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="500"
          className="text-2xl lg:text-4xl"
        >
          THE NEW
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="500"
          className="text-5xl lg:text-8xl font-serif pb-1 uppercase"
        >
          Jimny
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl mb-2 lg:mb-4 uppercase"
        >
          Crafted for Purity of Function
        </div>
        {/* <Link to="/maruti-invicto-price-in-hyderabad">
            <button
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-duration="1000"
              className="border border-white px-4 py-2 lg:px-8 text-white uppercase"
              onClick={() => setOpen(true)}
            >
              Discover More
            </button>
          </Link> */}
        <a
          href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/Jimny+Brochure_Saboo+RKS.3fe320502cb6720e78de.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="1000"
            className="border border-white px-4 py-2 lg:px-8 text-white uppercase"
          >
            BROCHURE
          </button>
        </a>
      </div>
    </div>
  );
};

const Design = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
  const [exterior, setExterior] = useState(false);

  return (
    <div className="bg-black py-4 ">
      <div className="text-center text-white  container mx-auto ">
        <div className="  w-full pt-8 pb-2 text-3xl text-center uppercase  sm:text-4xl md:text-5xl ">
          DESIGNED FOR PURITY OF FUNCTION
        </div>
        <div className="text-center text-md lg:text-lg">
          The ability to power through the roughest terrains is embedded in the
          Jimny’s DNA. Its simplicity has been instrumental in driving people to
          the extraordinary and back. With stories that have become legends over
          time.
        </div>

        <div className="flex justify-center pb-2 text-xl gap-5 mt-4">
          <div className="">
            <button
              className={`px-4 py-1  border tracking-widest rounded-lg duration-500  ${
                !exterior
                  ? "border-white bg-white text-black "
                  : "border-gray-800 text-gray-500 hover:text-white hover:border-white"
              }`}
              onClick={() => setExterior(false)}
            >
              Exterior
            </button>
          </div>
          <div className="">
            <button
              className={`px-4 py-1  border tracking-widest rounded-lg duration-500 ${
                exterior
                  ? "border-white bg-white text-black"
                  : "border-gray-800 text-gray-500 hover:text-white hover:border-white"
              } `}
              onClick={() => setExterior(true)}
            >
              Interior
            </button>
          </div>
        </div>

        <div className=" py-2 sm:py-5 ">
          <div className=" relative">
            <div className={`${exterior ? "opacity-100" : "opacity-0"}`}>
              <div className=" pb-6 space-y-4 rounded">
                {/* <Carousel /> */}

                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  speed={1000}
                  // spaceBetween={2}
                  slidesPerView={1}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper2 }}
                  modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                  className="mySwiper2 h-28"
                >
                  <SwiperSlide className="">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/1000x500aramjimnyywdperpendicular-designautomatic-gearshotv3.webp"
                        alt="    Design to Evoke a Sense of Balance"
                        className="  relative"
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">
                          Design to Evoke a Sense of Balance
                        </div>
                        <div className="font-light lg:pr-40">
                          Your quest for work-life balance could leave you
                          perched on a steep curve. The Jimny's dashboard and
                          console design forming a virtual T shape, lets you
                          recognise the vehicle's angle on uneven terrains.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="relative">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/1000x500-ar_pk_nexa_jimny_interior_kv_v-1.webp"
                        alt="
                        Sporty Cabin with Scratch-Resistant Surfaces"
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">
                          Sporty Cabin with Scratch-Resistant Surfaces
                        </div>
                        <div className="font-light lg:pr-40">
                          Keep your eyes peeled for a bolt from the blue. The
                          Jimny's scratch-resistant interiors absorb reflections
                          and minimise distractions, helping you focus on the
                          road ahead.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="relative">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/1000x500-ar_pk_nexa_jimny_intuitively-designed-controls_v-2.webp"
                        alt=" Intuitively Designed Controls"
                        className=""
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">
                          Intuitively Designed Controls
                        </div>
                        <div className="font-light lg:pr-40">
                          Add a thrilling background score while navigating that
                          hairpin bend. The Jimny's dials and touch-screen
                          controls are designed for easy operation.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="relative">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/comfortable-seat-design.webp"
                        alt="Comfortable Seat Design"
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">
                          Comfortable Seat Design
                        </div>
                        <div className="font-light lg:pr-40">
                          The adventure will keep you at the edge of your seat -
                          great seats nonetheless. The Jimny's adjustable
                          seating is designed with better shock absorption
                          capacities for your comfort.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="relative">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/professional-utility-kit.webp"
                        alt="  Professional Utility Kit"
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">
                          Professional Utility Kit
                        </div>
                        <div className="font-light lg:pr-40">
                          Discover a whole new side to you, while exploring the
                          unknown. The Jimny's wide rear opening and accessible
                          tool and luggage box let you pack in all you need to
                          nurture a new persona
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="relative">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/1000x500-ar-am-jimny-ywd-smart-play-pro-shot-v1-copy.webp"
                        alt="SmartPlay Pro+"
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">SmartPlay Pro+</div>
                        <div className="font-light lg:pr-40">
                          Going off the grid was never more pleasant. With the
                          intuitively designed infrared 9-inch SmartPlay Pro+ or
                          the 7-inch Smart Play Pro, you can create a vibe
                          befitting the terrain.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper2}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={5}
                  // freeMode={true}
                  // watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper-3  text-white hidden md:block"
                >
                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/1000x500aramjimnyywdperpendicular-designautomatic-gearshotv3.webp"
                        alt="    Design to Evoke a Sense of Balance"
                        className="max-h-24"
                      />
                      <div className=" py-2 ">
                        Design to Evoke a Sense of Balance
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/1000x500-ar_pk_nexa_jimny_interior_kv_v-1.webp"
                        alt="
                        Sporty Cabin with Scratch-Resistant Surfaces"
                        className="max-h-24"
                      />
                      <div className=" py-2 ">
                        Sporty Cabin with Scratch-Resistant Surfaces
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/1000x500-ar_pk_nexa_jimny_intuitively-designed-controls_v-2.webp"
                        alt=" Intuitively Designed Controls"
                        className="max-h-24"
                      />
                      <div className=" py-2 ">
                        Intuitively Designed Controls
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/comfortable-seat-design.webp"
                        alt="Comfortable Seat Design"
                        className="max-h-24"
                      />
                      <div className=" py-2 ">Comfortable Seat Design</div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/professional-utility-kit.webp"
                        alt="  Professional Utility Kit"
                        className="max-h-24"
                      />
                      <div className="py-2 "> Professional Utility Kit</div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/1000x500-ar-am-jimny-ywd-smart-play-pro-shot-v1-copy.webp"
                        alt="SmartPlay Pro+"
                        className="max-h-24"
                      />
                      <div className=" py-2 ">SmartPlay Pro+</div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div
              className={`absolute inset-0 ${
                exterior ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className=" pb-6 space-y-4 rounded">
                {/* <Carousel /> */}

                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  speed={1000}
                  // spaceBetween={2}
                  slidesPerView={1}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                  className="mySwiper2 h-28"
                >
                  <SwiperSlide className="">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/clamshell-bonnet.webp"
                        alt="Clamshell Bonnet"
                        className="  relative"
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">Clamshell Bonnet</div>
                        <div className="font-light lg:pr-40">
                          Be ready for every twist in the trail. Get a
                          wide-angle view of what lies ahead with the Jimny's
                          upright A-pillars and a flat clamshell bonnet
                          structure.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="relative">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/1000x500-ar_sn_nexa_jimny_optimized-bumper_v2.webp"
                        alt="Optimized Bumpers"
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">
                          Optimized Bumpers
                        </div>
                        <div className="font-light lg:pr-40">
                          Obstacles turn adventures into hardcore thrillers.
                          Navigate through them, with the Jimny's angled bumper
                          edges that increase clearance at the wheels.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="relative">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/practical-drip-rail.webp"
                        alt=" Practical Drip Rail"
                        className=""
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">
                          {" "}
                          Practical Drip Rail
                        </div>
                        <div className="font-light lg:pr-40">
                          Finding the perfect ending to your adventure could
                          take days. The Jimny's drip rail, running along the
                          side and rear edges, lets you install roof carriers
                          flexibly, while keeping your head dry when entering
                          and exiting the vehicle.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="relative">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/1000x500-ar_ab_jimny_led_headlamp_with_washer_02-copy.webp"
                        alt="LED Headlamps with Washer"
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">
                          LED Headlamps with Washer
                        </div>
                        <div className="font-light lg:pr-40">
                          Sand, mud, dirt, snow - add a new thrilling chapter to
                          every adventure. The Jimny's iconic LED Headlamps come
                          equipped with washers, to give you a clear view of the
                          path ahead.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="relative">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/alloy.webp"
                        alt="Alloy"
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">Alloy</div>
                        <div className="font-light lg:pr-40">
                          While donning the hat of an off-roader, you want to
                          get in character. The Jimny's bold gun-metal alloys
                          and robust design give it the rugged look, making you
                          feel one with the terrain.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="relative">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/5-slot-chrome-plated-grille.webp"
                        alt="Gunmetal Grey Grille with Chrome Plating"
                      />
                      <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                        <div className="font-medium pb-2">
                          Gunmetal Grey Grille with Chrome Plating
                        </div>
                        <div className="font-light lg:pr-40">
                          The Jimny’s rich off-roading legacy ensures the
                          adventure goes on. Its iconic vertical slit grille,
                          now a gunmetal shade with 5-slot chrome plated
                          openings, is a testament to the fact.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={5}
                  // freeMode={true}
                  // watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper-3  text-white hidden md:block"
                >
                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/clamshell-bonnet.webp"
                        alt="Clamshell Bonnet"
                        className="max-h-24"
                      />
                      <div className=" py-2 ">Clamshell Bonnet</div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/1000x500-ar_sn_nexa_jimny_optimized-bumper_v2.webp"
                        alt="Optimized Bumpers"
                        className="max-h-24"
                      />
                      <div className=" py-2 ">Optimized Bumpers</div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/practical-drip-rail.webp"
                        alt=" Practical Drip Rail"
                        className="max-h-24"
                      />
                      <div className=" py-2 "> Practical Drip Rail</div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/1000x500-ar_ab_jimny_led_headlamp_with_washer_02-copy.webp"
                        alt="LED Headlamps with Washer"
                        className="max-h-24"
                      />
                      <div className=" py-2 ">LED Headlamps with Washer</div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/alloy.webp"
                        alt="Alloy"
                        className="max-h-24"
                      />
                      <div className="py-2 "> Alloy</div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/5-slot-chrome-plated-grille.webp"
                        alt="Gunmetal Grey Grille with Chrome Plating"
                        className="max-h-24"
                      />
                      <div className=" py-2 ">
                        Gunmetal Grey Grille with Chrome Plating
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Performance = () => {
  return (
    <div className="bg-black py-4  overflow-hidden">
      
      <div className="text-center text-white  container mx-auto ">
      <div className="  w-full pt-8 pb-2 text-3xl text-center uppercase  sm:text-4xl md:text-5xl text-white">
        PERFORMANCE
      </div>
        <div className="text-center text-md lg:text-lg mb-6">
          Off-Road Performance, To Conquer Any Fear
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-4 items-center text-white container mx-auto">
        <div className="grid  md:grid-cols-3 px-1 gap-2">
          <img
            src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/brand-persona-variant/1080x420-ar_vk_nexa_jimny-all-grip-pro_v-2.webp"
            alt=" ALL GRIP PRO"
            className="col-span-2 rounded-2xl"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="500"
          />
          <div className="col-span-1 px-1 flex flex-col justify-center ">
            <div className="text-xl lg:text-2xl font-medium mb-2">
              ALL GRIP PRO
            </div>

            <div className="xl:text-lg text-justify">
              Chase every off-roading dream - no matter how far-fetched. The
              Jimny’s proven 4x4 technology with low-range transfer gear gives
              you max torque and traction to conquer the toughest terrain.
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid  md:grid-cols-3 px-1 gap-2">
          <div className="col-span-1 px-1 flex flex-col justify-center ">
            <div className="text-xl lg:text-2xl font-medium mb-2">
              Ladder Frame Chassis
            </div>
            <div className="xl:text-lg text-justify">
              The stories you seek are not for the fainthearted. The Jimny's
              ladder frame structure provides the torsional rigidity required to
              overcome and conquer the most difficult terrain.
            </div>
          </div>
          <img
            src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/brand-persona-variant/1080x420-ar_bp_nexa_jimny_chassis_shot_02.webp"
            alt="Ladder Frame Chassis"
            className="col-span-2 rounded-2xl"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
          />
        </div>

        <div className="grid  md:grid-cols-3 px-1 gap-2">
          <img
            src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/brand-persona-variant/1080x420-ar_bp_nexa_jimny_3_link_suspension_02.webp"
            alt="3-Link Rigid Axle Suspension with Coil Spring"
            className="col-span-2 rounded-2xl"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="500"
          />
          <div className="col-span-1 px-1 flex flex-col justify-center ">
            <div className="text-xl lg:text-2xl font-medium mb-2">
              3-Link Rigid Axle Suspension with Coil Spring
            </div>

            <div className="xl:text-lg text-justify">
              Don't lose the plot even on the deceptively slippery terrain. The
              Jimny's 3-link rigid axle suspension ensures increased tyre
              contact with the surface. So you always stand your ground.
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid  md:grid-cols-3 px-1 gap-2">
          <div className="col-span-1 px-1 flex flex-col justify-center ">
            <div className="text-xl lg:text-2xl font-medium mb-2">
              Engine Performance
            </div>

            <div className="xl:text-lg text-justify">
              All set to unlock a new level of off-roading? The Jimny’s 1.5L
              K15B engine, with its wide RPM range, is designed for unstoppable
              performance.
            </div>
          </div>
          <img
            src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/brand-persona-variant/1080x420-ar_bp_nexa_jimny_engine_03.webp"
            alt="Engine Performance"
            className="col-span-2 rounded-2xl"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="500"
          />
        </div>
      </div>
    </div>
  );
};

export default Jimny;

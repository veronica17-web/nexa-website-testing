import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Helmet from "react-helmet";
// import { Autoplay, Navigation, Pagination } from 'swiper';
// import OnRoadPrice from "../../components/utils/OnRoadPrice";
import {
  MdAirlineSeatReclineExtra,
  MdOutlineFileDownload,
} from "react-icons/md";
// import Carousel from '../../components/Fronx/Extras/Carousel';
import MobileCarousel from "../../components/Fronx/Extras/MobileCarousel";

import AOS from "aos";
import "aos/dist/aos.css";
import { CarComp, CarEnq2, InvictoCarEnquiry2 } from "./Invicto";
import { useRef } from "react";
import { GiBeltBuckles, GiSpeedometer } from "react-icons/gi";
import { products } from "../../constants";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const videoSource = isSafari
  ? "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/Fronx_safari.mov"
  : "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/video/fronx_banner.webm";
const Fronx = () => {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

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

      <div className="relative bg-black">
        <div className="top-0 left-0 w-full h-screen ">
          <video
            className="object-cover w-full h-full "
            preload="metadata"
            poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/webpage-fronx-banner.webp"
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
              PRESENTING
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
              className="text-5xl lg:text-8xl font-serif pb-1 uppercase"
            >
              fronx
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
              className="text-2xl lg:text-5xl mb-2 lg:mb-4 uppercase"
            >
              THE SHAPE OF NEW
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
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/FRONX+Brochure_Saboo+RKS.6b9c2f109c812f47efb9.pdf"
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
      </div>
      <CarEnq2 title="BOOK YOUR FRONX" />
      <Variant />
      <VariantPlayer2 />
      <Technology />
      <FronxInteriorAndOther />
      {/* <OnRoadPrice title={"FRONX"} /> */}
      {/* {width > 425 ? <Carousel /> : <MobileCarousel />} */}
      <div className="hidden sm:block bg-black text-white pt-2 pb-8">
        <div className="  w-full pt-8 pb-2 text-3xl text-center uppercase  sm:text-4xl md:text-5xl ">
          PERFORMANCE
        </div>
        <div className="text-center text-md lg:text-lg pb-2">
          Born To Outperform, In Style
        </div>
        <div className="flex h-[75vh]  gap-2 px-4 pt-1">
          <div className="w-1/5 duration-500 rounded-lg border border-gray-500 hover:w-2/3  bg-no-repeat bg-cover bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-10C_Engine.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/Boosterjet+Logo+png.png"
                alt=""
                className=" w-40"
                srcSet=""
              />
              <span className="font-semibold text-lg">
                1.0L TURBO BOOSTERJET ENGINE
              </span>
              <span className="font-thin tracking-wider">
                Perfect fusion of power and innovation, it accelerates from 0 to
                60 in just 5.3 seconds.
              </span>
            </div>
          </div>
          <div className="w-1/5 duration-500 rounded-lg border border-gray-500 hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-12k_Engine.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">
                ADVANCED 1.2L K-SERIES DUAL JET, DUAL VVT ENGINE
              </span>
              <span className="font-thin tracking-wider">
                Forged for new age performance.
              </span>
            </div>
          </div>
          <div className="w-1/5 duration-500 rounded-lg border border-gray-500 hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-Smart_Hybird.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">
                SMART HYBRID TECHNOLOGY
              </span>
              <span className="font-thin tracking-wider">
                Where smartness and efficiency take shape.
              </span>
            </div>
          </div>
          <div className="w-1/5 duration-500 rounded-lg border border-gray-500 hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-AGS.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">
                6-SPEED AUTOMATIC TRANSMISSION WITH PADDLE SHIFTERS
              </span>
              <span className="font-thin tracking-wider">
                Go through the gears in a new way.
              </span>
            </div>
          </div>
          <div className="w-1/5 duration-500 rounded-lg border border-gray-500 hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-AMT.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">AUTO GEAR SHIFT</span>
              <span className="font-thin tracking-wider">
                Shaped for comfort and convenience.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" sm:hidden">
        <MobileCarousel />
      </div>
      <Safety />
      <CarComp details={products[1]} />
      <InvictoCarEnquiry2 title="BOOK YOUR FRONX NOW" carName="Fronx" />
    </>
  );
};

function FronxInteriorAndOther() {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <div className=" bg-black">
      {/* <p className="font-bold text-4xl text-center">Maruti Suzuki FRONX</p>
      <p className=" text-center tracking-wider font-bold">
        A design philosphy sustained by three unwavering pillars
      </p>
      <p className="bg-black h-1 w-60 mx-auto"></p>
      <p className="max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl">
        Say hello to FRONX, the Shape of New. From a striking, sporty design
        language to technology that ensures your safety, comfort, and
        convenience. Sharp details, intuitive tech, and premium finishes, FRONX
        is uniquely craftedto satisfy the modren sensibilities of NEXA
        customers.
      </p> */}
      <div className=" container mx-auto w-full pt-10 pb-4 text-3xl text-center uppercase  sm:text-4xl md:text-5xl bg-black text-white">
        COLOURS
      </div>

      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/flesh-color-bg.webp')] bg-cover bg-no-repeat">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2">
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/FRONX+Brochure_Saboo+RKS.6b9c2f109c812f47efb9.pdf"
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
                  {/* 1. NEXA BLUE */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-NEXA_Blue.webp"
                    alt="NEXA BLUE"
                    className={tabsColors === 1 ? "flex mx-auto" : "hidden"}
                  />

                  {/* 2. ARCTIC WHITE */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-ARCTIC_WHITE.webp"
                    alt="ARCTIC WHITE"
                    className={tabsColors === 2 ? "flex mx-auto" : "hidden"}
                  />

                  {/* 3. SPLEDING SILVER */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-SPLENDID_SILVER.webp"
                    alt="SPLENDING SILVER"
                    className={tabsColors === 3 ? "flex mx-auto" : "hidden"}
                  />

                  {/* 4. GRANDEUR GREY */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-GRANDEUR_GREY.webp"
                    alt="GRANDEUR GREY"
                    className={tabsColors === 4 ? "flex mx-auto" : "hidden"}
                  />
                  {/* 5. EARTHERN BROWN */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-EARTHERN_BROWN.webp"
                    alt="EARTHERN BROWN"
                    className={tabsColors === 5 ? "flex mx-auto" : "hidden"}
                  />

                  {/* 6. OPPULENT BROWN WITH BLACK */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-DUAL_TONE-OPULENT_RED.webp"
                    alt="OPPULENT BROWN WITH BLACK"
                    className={tabsColors === 6 ? "flex mx-auto" : "hidden"}
                  />
                  {/* 7. EARTHERN BROWN WITH BLACK */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-DUAL_TONE-EARTHERN_BROWN.webp"
                    alt="EARTHERN BROWN WITH BLACK"
                    className={tabsColors === 7 ? "flex mx-auto" : "hidden"}
                  />

                  {/* 8. SPLENDING SILVER WITH BLACK */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-DUAL_TONE-SPLENDID_SILVER.webp"
                    alt="SPLENDING SILVER WITH BLACK"
                    className={tabsColors === 8 ? "flex mx-auto" : "hidden"}
                  />

                  {/* 9. OPPULENT_RED MIDNIGHT BLACK */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-DUAL_TONE-OPULENT_RED.webp"
                    alt="OPPULENT_RED MIDNIGHT BLACK"
                    className={tabsColors === 9 ? "flex mx-auto" : "hidden"}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div onClick={() => setTabsColors(1)}>
                    <div className={tabsColors === 1 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[#163472] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-4 w-4 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#163472]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 1
                          ? "w-6 h-6 bg-[#163472] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(2)}>
                    <div className={tabsColors === 2 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[#f9f9f9] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-4 w-4 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 2
                          ? "w-6 h-6 bg-[#f9f9f9] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(3)}>
                    <div className={tabsColors === 3 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/arctic-white-black.webp')] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-4 w-4 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 3
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/arctic-white-black.webp')] mr-2 border-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(4)}>
                    <div className={tabsColors === 4 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[#282828] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-4 w-4 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#282828]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 4
                          ? "w-6 h-6 border bg-[#282828] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(5)}>
                    <div className={tabsColors === 5 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[#464848] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-4 w-4 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#464848]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 5
                          ? "w-6 h-6 border bg-[#464848] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(6)}>
                    <div className={tabsColors === 6 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[#AC0F0F] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-4 w-4 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#AC0F0F]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 6
                          ? "w-6 h-6 border bg-[#AC0F0F] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(7)}>
                    <div className={tabsColors === 7 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/opulent-red-black.webp')] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-4 w-4 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#AC0F0F]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 7
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/opulent-red-black.webp')] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(8)}>
                    <div className={tabsColors === 8 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[#B6BABD] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-4 w-4 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#B6BABD]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 8
                          ? "w-6 h-6 bg-[#B6BABD] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(9)}>
                    <div className={tabsColors === 9 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/splendid-silver-black.webp')] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-4 w-4 absolute  top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#B6BABD]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 9
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/splendid-silver-black.webp')] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>
                </div>
                <>
                  <p
                    className={
                      tabsColors === 1
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Nexa Blue (Celestial)
                  </p>

                  <p
                    className={
                      tabsColors === 2
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Arctic White
                  </p>
                  <p
                    className={
                      tabsColors === 3
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Splending Silver
                  </p>
                  <p
                    className={
                      tabsColors === 4
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Grandeur Grey
                  </p>
                  <p
                    className={
                      tabsColors === 5
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Earthen Brown
                  </p>
                  <p
                    className={
                      tabsColors === 6
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Oppulent Red
                  </p>
                  <p
                    className={
                      tabsColors === 7
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Earten Brown + Black
                  </p>
                  <p
                    className={
                      tabsColors === 8
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Splendid Silver + Black
                  </p>
                  <p
                    className={
                      tabsColors === 9
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Oppulent Red + Black
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
  const [price, setPrice] = useState("7,46,500");
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
              <option value="7,46,500">SIGMA</option>
              <option value="8,32,500">DELTA</option>
              <option value="8,72,500">DELTA+</option>
              <option value="8,87,500">DELTA AGS</option>
              <option value="9,27,500">DELTA+ AGS</option>

              <option value="9,72,500">DELTA+ MT (SMART HYBRID)</option>
              <option value="10,55,500">ZETA MT (SMART HYBRID) </option>
              <option value="11,47,500">ALPHA(M) MT (SMART HYBRID)</option>
              <option value="11,63,500">ALPHA(D) MT (SMART HYBRID)</option>
              <option value="12,05,500">ZETA AT (SMART HYBRID)</option>
              <option value="12,97,500">ALPHA(M) (SMART HYBRID)</option>
              <option value="13,13,500">ALPHA(D) AT (SMART HYBRID)</option>
            </select>
          </div>
          <div className="text-center text-gray-200">
            <p className="text-2xl font-bold">₹ {price}*</p>
            <p className="tracking-wide text-xl">
              Ex-Showroom Price - Hyderabad
            </p>
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

const VariantPlayer2 = () => {
  const videoRef = useRef(null);
  const [playingSegment, setPlayingSegment] = useState(0);
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the context menu from appearing
  };

  const jumpToTime = (timeInSeconds, segment) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeInSeconds;
      videoRef.current.play();
      setPlayingSegment(segment);
    }
  };
  useEffect(() => {
    if (videoRef.current) {
      const videoNode = videoRef.current; // Capture the current value of videoRef.current
      const handleTimeUpdate = () => {
        const currentTime = videoNode.currentTime;

        if (currentTime >= 0 && currentTime < 1) {
          setPlayingSegment(0);
        } else if (currentTime >= 1 && currentTime < 2) {
          setPlayingSegment(1);
        } else if (currentTime >= 3 && currentTime < 5) {
          setPlayingSegment(2);
        } else if (currentTime >= 5 && currentTime < 7) {
          setPlayingSegment(3);
        } else if (currentTime >= 7 && currentTime < 9) {
          setPlayingSegment(4);
        } else if (currentTime >= 9) {
          setPlayingSegment(5);
        }
      };

      videoNode.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoNode.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <>
      <div className="  w-full pt-10 pb-2 text-3xl text-center uppercase  sm:text-4xl md:text-5xl">
        DESIGN HIGHLIGHTS
      </div>
      <div
        className="top-0 left-0 w-full h-[95vh] relative  "
        onContextMenu={handleContextMenu}
      >
        {/* <div className=" absolute top-2 w-full text-3xl text-center uppercase  sm:text-4xl md:text-5xl">
          DESIGN HIGHLIGHTS
        </div> */}
        <video
          className="w-full h-full object-cover  "
          autoplay="autoplay"
          loop
          muted
          ref={videoRef}
          poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/webpage-fronx-banner.webp"
        >
          <source
            class="w-30 h-30"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/video/fronx_specs.mp4"
            type="video/mp4"
          />
        </video>
        {/* <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/webpage-fronx-mobile-banner-without-book-now.webp"
        alt=""
        className="h-screen w-full sm:hidden"
      /> */}
        <div className="absolute bottom-20 lg:bottom-24   w-full ">
          <div className="hidden md:block container mx-auto bg-[#0000001c] rounded-2xl ">
            <div className="relative">
              <div className="relative flex justify-between  ">
                <div
                  className={`h-4 w-4  z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(0, 0)}
                    className={`bg-[#163472] h-full w-full rounded-full `}
                  ></div>
                </div>
                <div
                  className={`h-4 w-4  z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(1, 1)}
                    className={`bg-[#163472] h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-4 w-4  z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(4, 2)}
                    className={`bg-[#163472] h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-4 w-4  z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(6, 3)}
                    className={`bg-[#163472] h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-4 w-4  z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(8, 4)}
                    className={`bg-[#163472] h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-4 w-4  z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(10, 5)}
                    className={`bg-[#163472] h-full w-full rounded-full`}
                  ></div>
                </div>

                {/* <div
                className={`h-4 w-4  p-1 z-10 cursor-pointer  border-2 border-gray-200 rounded-full absolute duration-500 transition-all  ${
                  playingSegment === 3
                    ? "ml-[132px]"
                    : playingSegment === 2
                    ? "ml-[44px]"
                    : playingSegment === 1
                    ? "mr-[44px]"
                    : playingSegment === 0 && "mr-[132px]"
                }`}
              ></div> */}
              </div>
              <div
                className={`${
                  playingSegment === 0
                    ? "w-[0%]"
                    : playingSegment === 1
                    ? "w-[20%]"
                    : playingSegment === 2
                    ? "w-[40%]"
                    : playingSegment === 3
                    ? "w-[60%]"
                    : playingSegment === 4
                    ? "w-[80%]"
                    : "w-[100%]"
                } h-1 bg-[#163472] duration-500 absolute top-1.5 `}
              ></div>
            </div>
          </div>
        </div>
        {/* <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/webpage-fronx-banner.webp'
        alt=''
      /> */}
        {/* <video class='w-screen' autoplay='autoplay' loop>
        <source
          class='w-30 h-30'
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/video/NEXA+FRONX++05SEC++110123+C2C+MUTE.mp4'
          type='video/mp4'
        />
      </video> */}
      </div>
    </>
  );
};

const Technology = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="bg-black ">
      <div className="text-center text-white  container mx-auto ">
        <div className="  w-full pt-8 pb-2 text-3xl text-center uppercase  sm:text-4xl md:text-5xl ">
          TECHNOLOGY
        </div>
        <div className="text-center text-md lg:text-lg">
          Feature Rich and Future Facing
        </div>
        <div className="     py-2 sm:py-5 ">
          <div className="  pb-6 space-y-4 rounded">
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
                <div className="w-full">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-DASHBOARD.webp"
                    alt="Dual-Tone Plush Interiors"
                    className="  relative"
                  />
                  <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                    <div className="font-medium pb-2">
                      Dual-Tone Plush Interiors
                    </div>
                    <span className="font-light">
                      The lush and spacious dual tone interiors matched with
                      horizontal linear embossed pattern makes you feel like
                      you’re driving in the lap of comfort and grandeur.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-360_screen.webp"
                    alt="360 View Camera"
                  />
                  <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                    <div className="font-medium pb-2">360 View Camera</div>
                    <span className="font-light">
                      Get the best view whether you’re driving or parking with
                      the 360 View Camera that guides you and shows your car
                      from all angles. Giving you convenience and assurance, so
                      that there’s never a second thought.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-Head_Up_Display.webp"
                    alt="Head Up Display"
                    className=""
                  />
                  <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                    <div className="font-medium pb-2">Head Up Display</div>
                    <span className="font-light">
                      Focus on what matters and reduce driving fatigue and with
                      the multiple functions and information like navigation,
                      distance, fuel economy and more that are readily available
                      right before your gaze.
                    </span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="relative">
                <div className="w-full">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-9inch_touch_screen.webp"
                    alt='22.86 cm (9") SmartPlay Pro+ with Surround Sense Powered by ARKAMYS'
                  />
                  <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                    <div className="font-medium pb-2">
                      22.86 cm (9") SmartPlay Pro+ with Surround Sense Powered
                      by ARKAMYS
                    </div>
                    <span className="font-light">
                      Experience superior sound quality powered by ARKAMYS with
                      uninterrupted and intuitive connectivity courtesy Apple
                      CarPlay & Android Auto.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-PADDLE_SHIFTERS.webp"
                    alt=" Paddle Shifters (in AT Only)"
                  />
                  <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                    <div className="font-medium pb-2">
                      Paddle Shifters (in AT Only)
                    </div>
                    <span className="font-light">
                      The steering mounted paddle shifters provide for
                      controlled yet exciting drives, be it smooth acceleration
                      on open roads or quick downshifts to tackle city
                      overtakes. Every gear change is at your fingertips.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-wireless-changing.webp"
                    alt="Wireless Charger"
                  />
                  <div className="md:absolute bottom-4 w-full  text-white text-left px-4 pt-4">
                    <div className="font-medium pb-2">Wireless Charger</div>
                    <span className="font-light">
                      Stay connected 24x7 wherever you go with seamless,
                      wireless charging, so both you and your phone are always
                      powered up.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              // spaceBetween={2}
              slidesPerView={5}
              // freeMode={true}
              // watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper-3  text-white hidden md:block"
            >
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-DASHBOARD.webp"
                    alt="Dual-Tone Plush Interiors"
                    className="max-h-28"
                  />
                  <div className="font-medium py-2 ">
                    Dual-Tone Plush Interiors
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-360_screen.webp"
                    alt="360 View Camera"
                    className="max-h-28"
                  />
                  <div className="font-medium py-2 ">360 View Camera</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-Head_Up_Display.webp"
                    alt="Head Up Display"
                    className="max-h-28"
                  />
                  <div className="font-medium py-2 ">Head Up Display</div>
                </div>
              </SwiperSlide>

              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-9inch_touch_screen.webp"
                    alt='22.86 cm (9") SmartPlay Pro+ with Surround Sense Powered by ARKAMYS'
                    className="max-h-28"
                  />
                  <div className="font-medium py-2 ">
                    22.86 cm (9") SmartPlay Pro+
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-PADDLE_SHIFTERS.webp"
                    alt=" Paddle Shifters (in AT Only)"
                    className="max-h-28"
                  />
                  <div className="font-medium py-2 ">
                    Paddle Shifters (in AT Only)
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-wireless-changing.webp"
                    alt="Wireless Charger"
                    className="max-h-28"
                  />
                  <div className="font-medium py-2 ">Wireless Charger</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

function Safety() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="container mx-auto mt-6 text-center ">
        <div className="pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-8 ">
          SAFETY
        </div>
        <span className="text-md lg:text-lg">
          Reassurance of Safety on Every Drive
        </span>
      </div>
      <div className="py-4 text-2xl font-medium text-center lg:text-3xl "></div>
      <div className="container relative flex flex-col items-center justify-center mx-auto -mt-10">
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/safety_fronx.webp"
          alt=" Reassurance of Safety on Every Drive"
          srcSet=""
          className="m-28"
        />

        <div className="absolute left-[62%] top-16  lg:flex group hidden  ">
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105  cursor-pointer">
            {/* <GiBeltBuckles className="text-4xl group-hover:text-white " /> */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/safety-belt.svg"
              alt=" Seat Belt Pre-Tensioners with force limiters"
              className="scale-[0.6]"
            />
          </div>
          <div className="mx-3 my-auto w-60 group-hover:backdrop-blur-md hidden group-hover:block">
            <div className="pb-1 font-medium ">
              Seat Belt Pre-Tensioners with force limiters
            </div>
            <div className=" font-light ">
              Pre-tensioners restrain the passengers and Force Limiters prevent
              seatbelt-inflicted injury.
            </div>
          </div>
        </div>
        <div className="absolute top-[4%] right-[62%] lg:flex group hidden  ">
          <div className="mx-3 my-auto w-60 group-hover:backdrop-blur-md hidden group-hover:block">
            <div className="pb-1 font-medium ">SUZUKI-TECT BODY</div>
            <div className=" font-light ">
              Suzuki’s Total Effective Control Technology (TECT) concept results
              in effective absorption and dispersion of crash energy. The
              effective use of high-tensile steel for major parts makes the body
              light, strong and safe
            </div>
          </div>
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105  cursor-pointer">
            {/* <GiBeltBuckles className="text-4xl group-hover:text-white " /> */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/repair.svg"
              alt=" Seat Belt Pre-Tensioners with force limiters"
              className="scale-[0.8]"
            />
          </div>
        </div>
        <div className="absolute left-[19%] xl:left-[20%] top-[60%]  lg:flex lg:flex-col md:items-start group hidden  ">
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black">
            <GiSpeedometer className="text-4xl group-hover:text-white" />
          </div>

          <div className="py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md hidden group-hover:block">
            <div className="pb-1 font-medium ">ABS with EBD</div>

            <div className="hidden text-sm font-light group-hover:block">
              Anti-lock Braking System prevents the locking up of the wheels
              when the brakes are applied under heavy loads while EBD ensures an
              efficient and effective braking.
            </div>
          </div>
        </div>
        <div className="absolute left-[47%] bottom-24  lg:flex group hidden items-end  ">
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 ">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/airbag.svg"
              className="scale-[0.6]"
              alt=" 6 Air Bags to take the impact before it reaches you."
            />
          </div>
          <div className="py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md hidden group-hover:block">
            <div className="pb-1 font-medium ">6 Air Bags</div>

            <div className="hidden font-light group-hover:block">
              6 Air Bags to take the impact before it reaches you.
            </div>
          </div>
        </div>
        <div className="absolute left-[10%]  bottom-[58%]    lg:flex-col md:items-start group hidden lg:flex ">
          <div className="py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md hidden group-hover:block">
            <div className="pb-1 font-medium ">ISOFIX child fix anchorages</div>

            <div className="hidden font-light group-hover:block">
              Standardized international child seat fitting system, for that
              perfect drive with your little ones.
            </div>
          </div>
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black ">
            <MdAirlineSeatReclineExtra className="text-4xl group-hover:text-white" />
          </div>
        </div>
        <div className="absolute left-[78%]  bottom-[58%] md:items-start group hidden lg:flex lg:flex-col ">
          <div className="py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-sm hidden group-hover:block ">
            <div className="pb-1 font-medium ">
              FULL FRONTAL IMPACT COMPLIANCE, FRONTAL OFFSET IMPACT COMPLIANCE,
              SIDE IMPACT COMPLIANCE
            </div>

            <div className=" font-light ">
              Successfully tested and in compliance with international safety
              norms
            </div>
          </div>
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black mb-2 ">
            <GiBeltBuckles className="text-4xl group-hover:text-white" />
          </div>
        </div>

        <div className="absolute left-[77%]  top-[45%]  md:items-start group hidden lg:block ">
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105  mb-2 ">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/road.svg"
              className="scale-[0.6]"
              alt="Ensuring safety, not only for the occupants, but pedestrians as
              well"
            />
          </div>
          <div className="py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-sm hidden group-hover:block ">
            <div className="pb-1 font-medium ">
              PEDESTRIAN PROTECTION COMPLIANCE
            </div>
            <div className=" font-light ">
              Ensuring safety, not only for the occupants, but pedestrians as
              well
            </div>
          </div>
        </div>

        <div className="h-16 absolute border top-36 right-[34%] border-black hidden lg:block"></div>
        <div className="w-48 absolute border top-52 right-[34%]  border-black hidden lg:block"></div>

        <div className="h-48 absolute border bottom-44 right-[50%] border-black hidden lg:block"></div>
        <div className="w-24 xl:w-32 absolute border  left-[22%] hidden lg:block  border-black"></div>
        <div className="h-16 absolute border top-1/2 left-[22%] border-black hidden lg:block"></div>
        <div className="h-16 absolute border top-[15%] left-[35%] border-black hidden lg:block"></div>
        <div className="w-24 lg:w-[12%]  just  absolute border top-[16rem] left-[18%] hidden lg:block  border-black"></div>
        <div className="w-10 lg:w-[10%]  just  absolute border top-[16rem] right-[23%] hidden lg:block  border-black"></div>
        <div className="w-10 lg:w-[10%]  just  absolute border top-[22.5rem] right-[23%] hidden lg:block  border-black"></div>

        <button
          className={`absolute ${
            index === 0 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[45%] `}
          onClick={() => setIndex(0)}
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 1 ? "bg-black text-white" : "bg-white animate-pulse"
          }  h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[38%] left-[44%] `}
          onClick={() => setIndex(1)}
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 2 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center bottom-[50%] left-[25%]  `}
          onClick={() => setIndex(2)}
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 3 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[35%] left-[30%] `}
          onClick={() => setIndex(3)}
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 4 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[25%] left-[30%] `}
          onClick={() => setIndex(4)}
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 5 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[40%] right-[35%] `}
          onClick={() => setIndex(5)}
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 6 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center bottom-[48%] right-[20%] `}
          onClick={() => setIndex(6)}
        >
          +
        </button>
        <div className="absolute lg:hidden bottom-[20%] px-2 backdrop-blur-sm">
          {index === 0 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">
                Seat Belt Pre-Tensioners with force limiters
              </span>
              <br />
              Pre-tensioners restrain the passengers and Force Limiters prevent
              seatbelt-inflicted injury.
            </div>
          ) : index === 1 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">6 Air Bags</span>
              <br />6 Air Bags to take the impact before it reaches you.
            </div>
          ) : index === 2 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">
                ABS with EBD
              </span>
              <br />
              Anti-lock Braking System prevents the locking up of the wheels
              when the brakes are applied under heavy loads while EBD ensures an
              efficient and effective braking.
            </div>
          ) : index === 3 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">
                ISOFIX child fix anchorages
              </span>
              <br />
              Standardized international child seat fitting system, for that
              perfect drive with your little ones.
            </div>
          ) : index === 4 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">
                SUZUKI-TECT BODY
              </span>
              <br />
              Suzuki’s Total Effective Control Technology (TECT) concept results
              in effective absorption and dispersion of crash energy. The
              effective use of high-tensile steel for major parts makes the body
              light, strong and safe
            </div>
          ) : index === 5 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">
              FULL FRONTAL IMPACT COMPLIANCE, FRONTAL OFFSET IMPACT COMPLIANCE,
              SIDE IMPACT COMPLIANCE
              </span>
              <br />
              Successfully tested and in compliance with international safety
              norms
            </div>
          ) : (
            index === 6 && (
              <div>
                <span className="font-medium text-md lg:text-lg">
                  PEDESTRIAN PROTECTION COMPLIANCE
                </span>
                <br />
                Ensuring safety, not only for the occupants, but pedestrians as
                well
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Fronx;

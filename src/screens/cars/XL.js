import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ImageViewer from "../../components/XL/ImageViewer";
// import OnRoadPrice from "../../components/utils/OnRoadPrice";
// import Features from "../../components/XL/Features";
import {
  MdAirlineSeatReclineExtra,
  // MdOutlineFileDownload,
} from "react-icons/md";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";

import { Tb360View, TbView360 } from "react-icons/tb";
import { GiBeltBuckles, GiReturnArrow, GiSpeedometer } from "react-icons/gi";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import AOS from "aos";
import "aos/dist/aos.css";
import View360 from "../../components/utils/View360";
import { CarComp, CarEnq2, InvictoCarEnquiry2 } from "./Invicto";
import { products } from "../../constants";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Define the video source URL based on the browser
const videoSource = isSafari
  ? "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/XL6_safari_01.mov"
  : "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/xl6/XL6.webm";

function XL() {
  useEffect(() => {
    let location = window.location.pathname;
    sessionStorage.setItem("car", location);
  }, []);

  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  const [tabsColors, setTabsColors] = useState(1);

  return (
    <>
      <Helmet>
        <title>
          Nexa XL6 Price in Hyderabad | Maruti XL6 On Road Price in Hyderabad
        </title>
        <meta
          name="title"
          content="Nexa XL6 Price in Hyderabad | Maruti XL6 On Road Price in Hyderabad"
        />
        <meta
          name="description"
          content="Nexa XL6 On-Road Price in Hyderabad. Maruti Suzuki XL6 On road Price starts at ₹ 11.29 lakh. For more details about XL6 features, specifications, mileage, colors and images visit our site or call us 98488 98488"
        />
        <meta
          name="keywords"
          content="XL6 on road price, XL6 mileage, XL6 offers & disconuts,xl6 on road price, Maruti xl6 offers, xl6 mileage,Nexa xl6 petrol price, Maruti xl6 on road price, Maruti xl6 variants, xl6 images, xl6 mileage, Nexa xl6 price in hyderabad, Maruti xl6 price in hyderabad, xl6 price in hyderabad, xl6 onroad price in hyderabad, offers on xl6, xl6 offers 2022, new xl6 price, new xl6 price in hyderabad, new xl6 2022 price, new xl6 2022 onroad price, xl6 petrol price in hyderabad, xl6 2022 petrol price in hyderabad"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboonexa.in/the-xl6/" />
        <meta
          property="og:title"
          content="Nexa XL6 On Road Price in Hyderabad | Maruti XL6 Offers in Hyderabad"
        />
        <meta
          property="og:description"
          content="Nexa XL6 2022 price in Hyderabad. Maruti Suzuki XL6 on road price starts at ₹ 10.14* lakh. For more details about XL6 features, specifications, mileage, colors and images visit our site or call us 98488 98488"
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
          content="Nexa XL6 On Road Price in Hyderabad | Maruti XL6 Offers in Hyderabad"
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
      <div className="relative bg-black">
        <div className="top-0 left-0 w-full h-screen ">
          <video
            className="object-cover w-full h-full "
            preload="metadata"
            loop
            autoPlay
            playsInline
            muted
            poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/360/2.webp"
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
              THE ALL NEW
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
              className="pb-1 font-serif text-5xl uppercase lg:text-8xl"
            >
              XL6
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
              className="mb-2 text-2xl uppercase lg:text-5xl lg:mb-4"
            >
              TIME TO INDULGE
            </div>
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/THE+ALL-NEW+XL6+Brochure.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1000"
                className="px-4 py-2 uppercase border hover:text-white hover:bg-black hover:border-black lg:px-8"
              >
                BROCHURE
              </button>
            </a>
          </div>
        </div>
      </div>
      <CarEnq2 title="BOOK YOUR XL6" />
      <Variant />
      <AllNewXL />
      <Vi360 />
      {/* <ImageViewer /> */}
      <Features />
      <Technology />
      <div className="pt-2 text-white bg-black ">
        <div className="w-full pt-10 pb-8 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          COLOURS
        </div>
      </div>
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-Background-Banners/XL6-Banner.webp')] bg-cover bg-no-repeat pt-10 lg:pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            <div className="mx-auto my-auto">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/White_XL6.png"
                className="h-24 my-5"
                alt="title"
              />
              {/* <a
                href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/THE+ALL-NEW+XL6+Brochure.pdf"
                className="p-3 bg-black text-gray-200 flex items-center max-w-[200px]"
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a> */}
            </div>
            <div className="col-span-2">
              <>
                <div className="mt-24 ml-auto mr-32">
                  {/* Nexa Blue */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Nexa-Blue.webp"
                    alt="Nexa-Blue"
                    className={tabsColors === 1 ? "flex mx-auto" : "hidden"}
                  />

                  {/* Opulent-red */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Metallic-Auburn-Red.webp"
                    alt="OPULENT-RED"
                    className={tabsColors === 2 ? "flex mx-auto" : "hidden"}
                  />

                  {/* BRAVE-KHAKI */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Brave-Khaki.webp"
                    alt="BRAVE-KHAKI"
                    className={tabsColors === 3 ? "flex mx-auto" : "hidden"}
                  />

                  {/* GRANDEUR-GREY */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Metallic-Magma-Grey.webp"
                    alt="GRANDEUR-GREY"
                    className={tabsColors === 4 ? "flex mx-auto" : "hidden"}
                  />

                  {/* SPLENDID-SILVER */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Metallic-Premium-Silver.webp"
                    alt="SPLENDID-SILVER"
                    className={tabsColors === 5 ? "flex mx-auto" : "hidden"}
                  />

                  {/* ARCTIC-WHITE */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Arctic-White.webp"
                    alt="ARCTIC-WHITE"
                    className={tabsColors === 6 ? "flex mx-auto" : "hidden"}
                  />

                  {/* DUAL_OPPULENT_RED */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_OPPULENT_RED.webp"
                    alt="DUAL_OPPULENT_RED"
                    className={tabsColors === 7 ? "flex mx-auto" : "hidden"}
                  />

                  {/* DUAL_BRAVE_KHAKI */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_BRAVE_KHAKI.webp"
                    alt="DUAL_BRAVE_KHAKI"
                    className={tabsColors === 8 ? "flex mx-auto" : "hidden"}
                  />

                  {/* DUAL_SPLENDID_SILVER */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_SPLENDID_SILVER.webp"
                    alt="DUAL_SPLENDID_SILVER"
                    className={tabsColors === 9 ? "flex mx-auto" : "hidden"}
                  />
                </div>
                <div className="flex items-center justify-center">
                  {/* Nexa Blue */}
                  <div onClick={() => setTabsColors(1)}>
                    <div className={tabsColors === 1 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[#183f66] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#183f66]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 1
                          ? "w-6 h-6 bg-[#183f66] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  {/* Opulent-red */}
                  <div onClick={() => setTabsColors(2)}>
                    <div className={tabsColors === 2 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[#ae314e] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#ae314e]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 2
                          ? "w-6 h-6 bg-[#ae314e] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  {/* Brave-khaki */}
                  <div onClick={() => setTabsColors(3)}>
                    <div className={tabsColors === 3 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[#4f3f23] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#4f3f23]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 3
                          ? "w-6 h-6 bg-[#4f3f23] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  {/* Grandeur-grey */}
                  <div onClick={() => setTabsColors(4)}>
                    <div className={tabsColors === 4 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[#545454] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#545454]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 4
                          ? "w-6 h-6 bg-[#545454] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  {/* Splendid-silver */}
                  <div onClick={() => setTabsColors(5)}>
                    <div className={tabsColors === 5 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[#afb3b8] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#afb3b8]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 5
                          ? "w-6 h-6 bg-[#afb3b8] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  {/* Arctic white */}
                  <div onClick={() => setTabsColors(6)}>
                    <div className={tabsColors === 6 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[#eeeff0] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className="arrow-dropdown-selected-car border-t-8 border-[#eeeff0]"></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 6
                          ? "w-6 h-6 bg-[#eeeff0] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  {/* Dual Oppulent Red */}
                  <div onClick={() => setTabsColors(7)}>
                    <div className={tabsColors === 7 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/opulent-red-with-midnight-black-roof.png')] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    </div>
                    <p
                      className={
                        tabsColors !== 7
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/opulent-red-with-midnight-black-roof.png')] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  {/* Dual Brave Khaki */}
                  <div onClick={() => setTabsColors(8)}>
                    <div className={tabsColors === 8 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/brave-khak-with-midnight-black-roof.png')] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    </div>
                    <p
                      className={
                        tabsColors !== 8
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/brave-khak-with-midnight-black-roof.png')] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(9)}>
                    <div className={tabsColors === 9 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/splendid-silver-with-midnight-black-roof.png')] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    </div>
                    <p
                      className={
                        tabsColors !== 9
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/splendid-silver-with-midnight-black-roof.png')] mr-2"
                          : "hidden"
                      }
                    ></p>
                  </div>
                </div>
                <>
                  <p
                    className={
                      tabsColors === 1
                        ? "text-center font-semibold text-lg my-2"
                        : "hidden"
                    }
                  >
                    Nexa Blue
                  </p>
                  <p
                    className={
                      tabsColors === 2
                        ? "text-center font-semibold text-lg my-2"
                        : "hidden"
                    }
                  >
                    Oppulent Red
                  </p>
                  <p
                    className={
                      tabsColors === 3
                        ? "text-center font-semibold text-lg my-2"
                        : "hidden"
                    }
                  >
                    Brave Khaki
                  </p>
                  <p
                    className={
                      tabsColors === 4
                        ? "text-center font-semibold text-lg my-2"
                        : "hidden"
                    }
                  >
                    Grandeur Grey
                  </p>
                  <p
                    className={
                      tabsColors === 5
                        ? "text-center font-semibold text-lg my-2"
                        : "hidden"
                    }
                  >
                    Splendid Silver
                  </p>
                  <p
                    className={
                      tabsColors === 6
                        ? "text-center font-semibold text-lg my-2"
                        : "hidden"
                    }
                  >
                    Arctic White
                  </p>
                  <p
                    className={
                      tabsColors === 7
                        ? "text-center font-semibold text-lg my-2"
                        : "hidden"
                    }
                  >
                    Oppulent Red with Midnight Black Roof
                  </p>
                  <p
                    className={
                      tabsColors === 8
                        ? "text-center font-semibold text-lg my-2"
                        : "hidden"
                    }
                  >
                    Brave Khaki with Midnight Black Roof
                  </p>
                  <p
                    className={
                      tabsColors === 9
                        ? "text-center font-semibold text-lg my-2"
                        : "hidden"
                    }
                  >
                    Splendid Silver with Midnight Black Roof
                  </p>
                </>
              </>
            </div>
          </div>
        </div>
      </div>
      <CNGXL6 />
      <Engine />
      {/* <OnRoadPrice title={'XL6'} /> */}
      {/* <Features /> */}
      <Safety />
      <CarComp details={products[7]} />
      <InvictoCarEnquiry2 title="BOOK YOUR XL6" carName="XL6" />
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState("11,56,000");
  return (
    <div className=" bg-opacity-25 text-white bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp')] bg-fixed  bg-black">
    <div className="container mx-auto bg-opacity-10 bg-black py-20">
      <div className="grid space-y-3 md:grid-cols-3 md:space-y-0 ">
        <div className="mx-auto space-y-3 md:mx-0">
          <p className=" uppercase">select car Variant</p>
          <select
            name="model"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm text-black"
          >
            <option value="11,56,000">ZETA</option>
            <option value="12,56,000">ALPHA</option>
            <option value="13,16,000">ALPHA+</option>
            <option value="13,32,000">ALPHA+ (D)</option>
            <option value="12,51,000">ZETA CNG</option>
            <option value="13,06,000">ZETA AT</option>
            <option value="14,06,000">ALPHA AT</option>
            <option value="14,66,000">ALPHA+ AT</option>
            <option value="14,82,000">ALPHA+ AT (D)</option>
          </select>
        </div>
        <div className="text-center ">
          <p className="text-2xl ">₹ {price}*</p>
          <p className="text-xl tracking-wide">Ex-Showroom Price</p>
          <p className="font-medium  uppercase mt-1 text-lg">Hyderabad</p>
        </div>
        <div className="text-center">
          <p className="mb-6 text-center ">
            You might have pre-approved loan offers
          </p>
          <Link
            to="/maruti-car-finance"
            className="px-4 py-2 tracking-wide uppercase  border border-white rounded shadow"
          >
            Check for loan offers
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

const AllNewXL = () => {
  return (
    <div className="px-2 py-4 overflow-hidden ">
      <div className="container mx-auto text-center  ">
        <div className="w-full pt-8 pb-4 text-3xl text-center  uppercase  sm:text-4xl md:text-5xl">
          THE ALL-NEW XL6
        </div>

        <div
          className={`relative mb-4 text-center text-md lg:text-lg lg:mb-8 `}
        >
          HIGHLIGHTS
        </div>
      </div>

      <div className="mx-auto lg:container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className="mySwiper2 h-28 "
        >
          <SwiperSlide className="">
            <div className="relative w-full ">
              <img
                src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/brand-highlights/img4.webp"
                alt=" Ventilated Seats"
                className="relative "
              />
              <div className="bottom-0 w-full p-2 text-xl bg-white bg-opacity-50 md:absolute lg:py-4 lg:text-3xl">
                Ventilated Seats
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="relative w-full  ">
              <img
                src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/brand-highlights/img1.webp"
                alt="360 View Camera"
              />
              <div className="bottom-0 w-full p-2 text-xl bg-white bg-opacity-50 md:absolute lg:py-4 lg:text-3xl">
                360 View Camera
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="relative w-full ">
              <img
                src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/brand-highlights/img2.webp"
                alt="6-Speed AT with Paddle Shifters"
              />
              <div className="bottom-0 w-full p-2 text-xl bg-white bg-opacity-50 md:absolute lg:py-4 lg:text-3xl">
                6-Speed AT with Paddle Shifters
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="relative w-full ">
              <img
                src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/brand-highlights/img3.webp"
                alt="Tyre Pressure Monitoring System"
              />
              <div className="bottom-0 w-full p-2 text-xl bg-white bg-opacity-50 md:absolute lg:py-4 lg:text-3xl">
                Tyre Pressure Monitoring System
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const Vi360 = () => {
  return (
    <>
      <div className="pt-2 text-center  ">
        <div className="w-full pt-10 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:hidden">
          360
          <sup>
            <span className="text-lg">0</span>
          </sup>{" "}
          View
        </div>
        {/* <div>EXPLORE THE ALL-NEW XL6</div> */}
        <div className="pb-4 lg:hidden">
          Take A 360-Degree Tour Around THE ALL-NEW XL6 And Get To Know It
          Better
        </div>
      </div>
      <div className="relative">
        <View360
          path={
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/360"
          }
          count={35}
          format={"webp"}
        />
        <div className="absolute flex-col items-center hidden text-white top-10 left-10 md:flex ">
          <TbView360 className="text-2xl lg:text-5xl animate-pulse" />
          <Tb360View className="text-xl lg:text-4xl" />
        </div>
        <div className="absolute flex-col items-center hidden w-full text-white top-10 lg:flex ">
          <div className="w-full pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
            360
            <sup>
              <span className="text-lg">0</span>
            </sup>{" "}
            View
          </div>
          <div>
            Take A 360-Degree Tour Around THE ALL-NEW XL6 And Get To Know It
            Better
          </div>
        </div>
        <div className="absolute flex flex-col items-center text-white top-1/2 left-10 lg:left-20 ">
          <GiReturnArrow className="text-2xl rotate-180 lg:text-5xl animate-pulse" />
        </div>
        <div className="absolute flex flex-col items-center text-white top-1/2 right-10 lg:right-20 ">
          <GiReturnArrow className="text-2xl lg:text-5xl animate-pulse" />
        </div>
      </div>
    </>
  );
};

const Features = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="bg-black ">
      <div className="container mx-auto text-center text-white ">
        <div className="w-full pt-8 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          FEATURES
        </div>
        <div className="text-center text-md lg:text-lg">
          The All-New XL6 Is Equipped With Features That Make Your World An
          Indulgent Place.
        </div>
        <div className="py-2 sm:py-5">
          <div className="pb-6 space-y-4 rounded ">
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
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-images-cruise-controllll-webp.webp?la=en&hash=8A6E19B154074B4E459BC4565D479C0B"
                    alt=" Cruise Control"
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium"> Cruise Control</div>
                    <div className="font-light lg:pr-40">
                      Find yourself more focused and comfortably indulged in the
                      longest of journeys with Cruise Control.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-cup-holder.webp?la=en&hash=05A798932552988F33F5ABE9CDD21634"
                    alt="Ventilated Cup Holders"
                    className="relative "
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium">
                      Ventilated Cup Holders
                    </div>
                    <div className="font-light lg:pr-40">
                      Indulge in a cool beverage with the Ventilated Cup Holders
                      to keep at an optimum temperature.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-uv-cut-glass.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp"
                    alt="UV Cut Glass"
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium">UV Cut Glass</div>
                    <div className="font-light lg:pr-40">
                      Stay safe from harmful UV rays with the specialised UV Cut
                      Glass in the All-New XL6.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-avn-smartplay.webp?la=en&hash=2A1B179439073E4976EEF63E0CACD094"
                    alt="SmartPlay Pro"
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium"> SmartPlay Pro</div>
                    <div className="font-light lg:pr-40">
                      Indulge yourself in music, navigate easily and do more
                      throughout your journey, comfortably.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-fog-light.webp?la=en&hash=F7D556D2B39A554D68AFF2565BA57850"
                    alt=" LED FOG Lamps"
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium"> LED FOG Lamps</div>
                    <div className="font-light lg:pr-40">
                      Lead the road with LED FOG Lamps that help illuminate your
                      way when there's low visibility.
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-rear-ac-in-second-row.webp?la=en&hash=CDBBC79F92C217DD7E0EDA85E072C1E6"
                    alt="   2nd Row AC "
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium"> 2nd Row AC</div>
                    <div className="font-light lg:pr-40">
                      Indulge from a place of comfort. The 2nd Row AC is where
                      you relax and let your head wander.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-cabin-foot-almp.webp?la=en&hash=D654463F206F942EB9115527B54E2A69"
                    alt="Footlamp Illumination "
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium">
                      Footlamp Illumination
                    </div>
                    <div className="font-light lg:pr-40">
                      The Footlamp Illumination lights up the cabin and sets an
                      indulgent mood.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-puddle-lamp.webp?la=en&hash=5F4C7CC5C8F70C70A0036677E73F72C2"
                    alt="Door Courtsey Lamp"
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium">Door Courtsey Lamp</div>
                    <div className="font-light lg:pr-40">
                      Thoughtful touches like the Door Courtesy Lamp welcome you
                      to an indulgent cabin.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-roof-end-spoiler.webp?la=en&hash=2708479B8F86E95253B004165605FD14"
                    alt="  Backdoor Spoiler "
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium"> Backdoor Spoiler</div>
                    <div className="font-light lg:pr-40">
                      Set a powerful statement with Backdoor Spoiler.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-instrument-cluster-webp.webp?la=en&hash=459C2BC8A7131F8F89BB59D15A0A9A22"
                    alt="  Instrument Cluster"
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium"> Instrument Cluster</div>
                    <div className="font-light lg:pr-40">
                      The multi-information display assists you with a host of
                      information like real-time driving statistics, range, Tyre
                      Pressure Monitoring System, and more.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521--orvm.webp?la=en&hash=655DE0D9F9A2AC0C6E93F9EFE83D2F6A"
                    alt="  Auto ORVMs"
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium"> Auto ORVMs</div>
                    <div className="font-light lg:pr-40">
                      Electrically adjustable and foldable ORVM for an added
                      touch of convenience.
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-captain-seatsss-webp.webp?la=en&hash=CB6232DB60EF72A1E3D21C0D1BB355E9"
                    alt="Captain Seats"
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium"> Captain Seats</div>
                    <div className="font-light lg:pr-40">
                      Indulge in your comfort zone, find yourself cocooned in
                      the remarkably plush Captain Seats.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              // loop={true}
              spaceBetween={10}
              slidesPerView={5}
              // freeMode={true}
              // watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="hidden text-white mySwiper-3 md:block"
            >
              {" "}
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-images-cruise-controllll-webp.webp?la=en&hash=8A6E19B154074B4E459BC4565D479C0B"
                    alt="   Cruise Control"
                    className="max-h-24"
                  />
                  <div className="py-2 "> Cruise Control</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-cup-holder.webp?la=en&hash=05A798932552988F33F5ABE9CDD21634"
                    alt="Ventilated Cup Holders"
                    className="max-h-24"
                  />
                  <div className="py-2 ">Ventilated Cup Holders</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-uv-cut-glass.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp"
                    alt="UV Cut Glass"
                    className="max-h-24"
                  />
                  <div className="py-2 ">UV Cut Glass</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-avn-smartplay.webp?la=en&hash=2A1B179439073E4976EEF63E0CACD094"
                    alt=" SmartPlay Pro"
                    className="max-h-24"
                  />
                  <div className="py-2 "> SmartPlay Pro</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-fog-light.webp?la=en&hash=F7D556D2B39A554D68AFF2565BA57850"
                    alt=" LED FOG Lamps"
                    className="max-h-24"
                  />
                  <div className="py-2 "> LED FOG Lamps</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-rear-ac-in-second-row.webp?la=en&hash=CDBBC79F92C217DD7E0EDA85E072C1E6"
                    alt="   2nd Row AC"
                    className="max-h-24"
                  />
                  <div className="py-2 "> 2nd Row AC</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-cabin-foot-almp.webp?la=en&hash=D654463F206F942EB9115527B54E2A69"
                    alt="Footlamp Illumination"
                    className="max-h-24"
                  />
                  <div className="py-2 "> Footlamp Illumination</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-puddle-lamp.webp?la=en&hash=5F4C7CC5C8F70C70A0036677E73F72C2"
                    alt="Door Courtsey Lamp"
                    className="max-h-24"
                  />
                  <div className="py-2 ">Door Courtsey Lamp</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-roof-end-spoiler.webp?la=en&hash=2708479B8F86E95253B004165605FD14"
                    alt="  Backdoor Spoiler"
                    className="max-h-24"
                  />
                  <div className="py-2 "> Backdoor Spoiler</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-instrument-cluster-webp.webp?la=en&hash=459C2BC8A7131F8F89BB59D15A0A9A22"
                    alt="  Instrument Cluster"
                    className="max-h-24"
                  />
                  <div className="py-2 "> Instrument Cluster</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521--orvm.webp?la=en&hash=655DE0D9F9A2AC0C6E93F9EFE83D2F6A"
                    alt="   Auto ORVMs"
                    className="max-h-24"
                  />
                  <div className="py-2 "> Auto ORVMs</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521-captain-seatsss-webp.webp?la=en&hash=CB6232DB60EF72A1E3D21C0D1BB355E9"
                    alt="   Captain Seats"
                    className="max-h-24"
                  />
                  <div className="py-2 "> Captain Seats</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const Engine = () => {
  return (
    <div className=" py-10">
      <div className="container flex flex-col items-center py-3 mx-auto ">
        <div className="w-full pt-4 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          Engine
        </div>
        <div className="pb-6 text-xl text-center lg:text-2xl">
          Move Ahead In The World With Great Performance​
        </div>

        <div className="flex flex-col flex-wrap mx-auto sm:flex-row lg:container">
          <div className="relative flex justify-center sm:w-1/3">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Engine.webp"
              alt="XL6 Engine"
              className="h-full"
            />
          </div>
          <div className="container relative h-full mx-auto sm:w-2/3 ">
            <div className="px-1 mb-4">
              It is time to indulge in the refined driving experience of the
              All-New XL6 by NEXA. A premium MPV from NEXA, the XL6 embodies an
              imposing stance complemented by unbridled innovation and powerful
              performance with a Next-Gen 1.5L K-Series Dual Jet Dual VVT
              Engine. This petrol engine in the XL6 comes with Progressive Smart
              Hybrid Technology which improves fuel efficiency while also
              enhancing drivability.
            </div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              modules={[FreeMode, Navigation, Autoplay]}
              className="hidden h-full sm:block"
            >
              <SwiperSlide className="swiper-slide">
                <div className="w-full px-4 cursor-pointer  h-[260px] ">
                  <div className="relative w-full px-10 py-4 text-left">
                    <div className="pb-2 font-medium">
                      Powerful Performance That Inspires
                    </div>
                    <div className="text-sm">
                      The New XL6 by NEXA delivers a refined driving experience
                      with the Next-Gen 1.5L K-Series Engine. This 1462 cc
                      Engine in XL6 makes a maximum power of 75.8 kW @ 6000 rpm
                      and peak torque of 136.8 Nm @ 4400 rpm, all the while
                      delivering indulgent performance.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="w-full px-4 cursor-pointer   h-[260px]">
                  <div className="relative w-full px-10 py-4 text-left">
                    <div className="pb-2 font-medium">
                      Progressive Smart Hybrid Technology
                    </div>
                    <div className="text-sm">
                      The All-New NEXA XL6 takes innovation to another level
                      with its Progressive Smart Hybrid Technology. It comes
                      with features like Idle Start Stop to reduce fuel
                      consumption and Torque Assist During Acceleration, thereby
                      improving the overall drivability.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="w-full px-4 cursor-pointer   h-[260px]">
                  <div className="relative w-full px-10 py-4 text-left">
                    <div className="pb-2 font-medium">Impressive Mileage</div>
                    <div className="text-sm">
                      The All-New NEXA XL6 is available with a choice of a
                      5-speed manual and an All-New Advanced 6-Speed Automatic
                      Transmission with Paddle Shifters. Both of these
                      transmissions work seamlessly with The Next Gen 1.5L
                      K-Series Engine in NEXA XL6 by Maruti Suzuki to provide
                      great drivability along with strong mileage figures of
                      20.97* Km/L(MT) and 20.27* Km/L(AT) so that indulgent
                      driving never stops!.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="w-full px-4 cursor-pointer   h-[260px]">
                  <div className="relative w-full px-10 py-4 text-left">
                    <div className="pb-2 font-medium">
                      Driving Convenience That Indulges
                    </div>
                    <div className="text-sm">
                      The NEXA XL6 indulges you effortlessly with the new
                      6-Speed Automatic Transmission trim that comes with
                      Steering-Mounted Paddle Shifters for a more engaging
                      driving experience. Indulgent in its stance, the All-New
                      XL6 is for those who seek new experiences. It’s Time to
                      Indulge in an engaging and refined driving experience.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const Technology = () => {
  return (
    <div className="px-2 py-4 overflow-hidden bg-white text-black">
      <div className="container mx-auto text-center  ">
        <div className="w-full pt-8 pb-2 text-3xl text-center  uppercase sm:text-4xl md:text-5xl">
          TECHNOLOGY
        </div>
        <div className="mb-6 text-center text-md lg:text-lg">
          Powered By Technologically Advanced Features, The All-New XL6 Is As
          Indulgent As It Gets.
        </div>
      </div>

      <div className="mx-auto lg:container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          speed={1000}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className="mySwiper2 md:h-28 "
        >
          <SwiperSlide className="">
            <div className="w-full ">
              <img
                src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/technology/1080x420-smart-hybrid.webp"
                alt="PROGRESSIVE NEXT GENERATION SMART HYBRID TECHNOLOGY"
                className="relative "
              />
              <div className="w-full pt-4 text-left  ">
                <div className="pb-2 font-medium">
                  PROGRESSIVE NEXT GENERATION SMART HYBRID TECHNOLOGY
                </div>
                <div className="font-light lg:pr-40">
                  At the heart of the All-New XL6 lies the Next Generation
                  K-Series 1.5L Engine with the Progressive Smart Hybrid
                  Technology. Its Integrated Starter Generator, paired with a
                  Lithium-ion and a Lead Acid Battery, helps in regenerating
                  braking energy and provides torque assist to the engine during
                  acceleration. So, go out and experience an enhanced drive that
                  is smoother and more indulgent than ever.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-full ">
              <img
                src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/technology/1080x420-ags.webp"
                alt="6-SPEED AT WITH PADDLE SHIFTERS"
                className="relative "
              />
              <div className="w-full pt-4 text-left ">
                <div className="pb-2 font-medium">
                  6-SPEED AT WITH PADDLE SHIFTERS
                </div>
                <div className="text-sm font-light lg:pr-40 md:text-base">
                  Indulge your senses as you feel the surge of power with the
                  new 6-Speed Automatic Transmission with Paddle Shifters. This
                  state-of-the-art transmission provides powerful acceleration
                  with impressively quick shift times via the gearshift paddles
                  on the steering wheel. It’s a drive that leaves you
                  exhilarated and wanting more.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="w-full">
              <img
                src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/technology/1080x420-smartplay.webp"
                alt="SMARTPLAY PRO"
              />
              <div className="w-full pt-4 text-left ">
                <div className="pb-2 font-medium"> SMARTPLAY PRO</div>
                <div className="text-sm font-light lg:pr-40 md:text-base">
                  Indulge yourself in music, navigate easily and do more
                  comfortably through your journeys with the new SmartPlay Pro.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="w-full">
              <img
                src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/technology/1080x420-360-view.webp"
                alt="360 VIEW CAMERA"
              />
              <div className="w-full pt-4 text-left ">
                <div className="pb-2 font-medium"> 360 VIEW CAMERA</div>
                <div className="text-sm font-light lg:pr-40 md:text-base">
                  Experience the ease of driving and parking in tight spaces
                  with the intelligent 360 View Camera.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="w-full ">
              <img
                src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/technology/1080x420-suzuki-connect.webp"
                alt="SUZUKI CONNECT"
              />
              <div className="w-full pt-4 text-left text-white ">
                <div className="pb-2 font-medium">SUZUKI CONNECT</div>
                <div className="text-sm font-light lg:pr-40 md:text-base">
                  The All-New XL6 takes your connected car experience to a whole
                  new level as it comes with in-built Suzuki Connect – Advanced
                  Telematics Solution. So, whether you are driving it or away,
                  you’ll always stay connected to your car. Remotely switch on
                  and control the Air-conditioning system, lock and unlock
                  doors, get real-time status of vehicle movement, security and
                  safety alerts and keep up with your vehicle’s health. The Next
                  Gen Suzuki Connect is also compatible with Alexa Skill and
                  your Smartwatch, keeping you in command of your car. Now
                  that’s how you indulge in comfort.
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const CNGXL6 = () => {
  return (
    <div className="relative pt-8 overflow-hidden  ">
      <div className="w-full pb-3 text-3xl text-center uppercase lg:pt-6 sm:text-4xl md:text-5xl ">
        S-CNG
      </div>
      <div className="container pt-2 pb-4 mx-auto text-xl text-center lg:text-2xl lg:pb-8">
        The All-New XL6 Is Equipped With Features That Make Your World An
        Indulgent Place.
      </div>

      <div className="mx-auto overflow-hidden relative w-full h-full group">
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6-cng-banner-mobile.webp"
          alt="XL6 CNG Mobile Banner "
          className="w-full sm:hidden"
        />
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6-cng-banner-desktop.webp"
          alt="XL6 CNG Desktop Banner"
          className="hidden sm:block w-full -z-10"
        />
        {/* <div className=" z-20 w-full h-full text-black lg:pt-6 -pt-60 sm:-mt-0 xl:-pt-60 ">
            <div className="container p-1 mx-auto ">
              <div className="py-4 text-justify lg:text-left xl:w-2/3 lg:px-4">
                Take the first step towards a conscious lifestyle with NEXA
                S-CNG, where innovation and intelligence meet to power the
                future. Designed to go the extra mile, the All-New XL6 S-CNG is
                the premium MPV offering superior features with a desire to
                improve the environment- all culminating in an indulgent
                experience like no other. Now, let your every drive be suave and
                sensible.
              </div>
              <div className="px-4 py-2 mb-4 text-white bg-black cursor-pointer select-none w-min whitespace-nowrap lg:mx-4">
                <Link to="/xl6-cng">Explore More</Link>
              </div>
            </div>
          </div> */}
        <Link to="/xl6-cng">
          <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex duration-500  justify-center items-center cursor-pointer">
            <div className="text-white">Explore &#8599;</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

// const Design = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="relative py-10 overflow-hidden text-white bg-black lg:pb-14">
//       <div className="w-full pb-3 text-3xl text-center uppercase lg:pt-6 sm:text-4xl md:text-5xl ">
//         <div className="w-full pt-10 pb-8 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
//           Design
//         </div>
//         <div className="container pt-2 pb-4 mx-auto text-xl text-center lg:text-2xl lg:pb-8">
//           It’s Time To Indulge In The World Of Comfort.
//         </div>
//       </div>

//       <div className="px-2 py-2 mx-auto md:px-0 select-none">
//         <div className="grid md:grid-cols-4">
//           <div className="overflow-hidden md:col-span-3">
//             <img
//               src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/imageOptions/FRONT_GRILLE.webp"
//               alt="Bold Front Grille With Sweeping X-Bar Element"
//               className="w-full duration-700 hover:scale-110"
//             />
//           </div>
//           <div className="hidden px-2 mx-auto my-auto space-y-3 tracking-wide md:col-span-1 lg:px-8 md:block">
//             <p className="text-2xl font-medium">
//               Bold Front Grille With Sweeping X-Bar Element
//             </p>
//             <p className="w-full h-0.5 bg-white rounded-full"></p>
//             <p>
//               An imposing front fascia with a sweeping X-bar is designed for
//               those who like to arrive in style.
//             </p>
//           </div>
//         </div>
//         <div className="grid sm:grid-cols-2">
//           <div className="relative">
//             <div className="overflow-hidden">
//               <img
//                 src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/imageOptions/Quad-front-chamber.webp"
//                 alt=" Quad Chamber LED Reflector Headlamps"
//                 className="w-full h-full duration-500 hover:scale-110"
//               />
//             </div>
//             <div className="hidden px-8 py-12 xl:py-20 mx-auto my-auto lg:block">
//               <p className="text-3xl font-medium">
//                 Quad Chamber LED Reflector Headlamps
//               </p>
//               <p className="w-full h-0.5 my-4 bg-white rounded-full "></p>
//               <p>
//                 Reflect true indulgence with the stunning Quad Chamber LED
//                 Reflector Headlamps that brighten up the darkest of nights.
//               </p>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="hidden px-8 py-12 xl:py-20 mx-auto my-auto lg:block">
//               <p className="text-3xl font-medium">
//                 Smoky Grey LED Tail Lamps With Light Guide
//               </p>
//               <p className="w-full h-0.5 my-4 bg-white rounded-full "></p>
//               <p>
//                 The aesthetically designed 3D tail lamps (RCL) with LED lights
//                 guide and smoke gray lens take the indulgent looks of the
//                 All-New XL6 up a notch.
//               </p>
//             </div>
//             <div className="overflow-hidden">
//               <img
//                 src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/imageOptions/LED-tail-Lamps.webp"
//                 alt="Smoky Grey LED Tail Lamps With Light Guide"
//                 className="w-full duration-500 hover:scale-110"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-4">
//           <div className="overflow-hidden md:col-span-3">
//             <img
//               src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/design/1177x751_dashboard.webp?la=en&hash=4F15DCE11871BBFD37303F54B74DC852"
//               alt="Dashboard with Premium Stone Finish"
//               className="w-full duration-700 hover:scale-110"
//             />
//           </div>
//           <div className="hidden px-2 mx-auto my-auto space-y-3 tracking-wide md:col-span-1 lg:px-8 md:block">
//             <p className="text-2xl font-medium">
//               Dashboard with Premium Stone Finish
//             </p>
//             <p className="w-full h-0.5 bg-white rounded-full"></p>
//             <p>
//               Designed to leave you spellbound, the exquisitely sculpted
//               Dashboard with Premium Stone Finish and rich silver accents give
//               elegance a new name.
//             </p>
//           </div>
//         </div>

//         {open && (
//           <>
//             <div className="grid sm:grid-cols-2">
//               <div className="relative">
//                 <div className="overflow-hidden">
//                   <img
//                     src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/imageOptions/ALLOY.webp"
//                     alt="Dual-Tone Machined Finish R-16 Alloy Wheels"
//                     className="w-full h-full duration-500 hover:scale-110"
//                   />
//                 </div>
//                 <div className="hidden px-8 py-12 xl:py-20 mx-auto my-auto lg:block ">
//                   <p className="text-3xl font-medium">
//                     Dual-Tone Machined Finish R-16 Alloy Wheels
//                   </p>
//                   <p className="w-full h-0.5 my-6 bg-white rounded-full "></p>
//                   <p>
//                     Crafted with precision and detail, the Dual-Tone Machined
//                     Finish R-16 Alloy Wheels ensure you make a statement
//                     wherever you go.
//                   </p>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="hidden px-8 py-12 xl:py-20 mx-auto my-auto lg:block absolute top-0 z-10 text-black">
//                   <p className="text-3xl font-medium">Back Door Spoiler</p>
//                   <p className="w-full h-0.5 my-4 bg-black rounded-full "></p>
//                   <p>
//                     Leave a lasting impression with a wide and accentuated look.
//                   </p>
//                 </div>
//                 <div className="overflow-hidden">
//                   <img
//                     src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/design/749x751_roof_end_spoiler.webp?la=en&hash=4B4560031B7BDE81CC7DF39E6BF5D00D"
//                     alt="Back Door Spoiler"
//                     className="w-full duration-500 hover:scale-110 -z-20"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2">
//               <div className="relative">
//                 <div className="overflow-hidden">
//                   <img
//                     src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/design/751x379-side_cladding.webp?la=en&hash=E2B645386937C3E3A33F8393848EE24C"
//                     alt="Skid Plates"
//                     className="w-full h-full duration-500 hover:scale-110"
//                   />
//                 </div>
//                 <div className="hidden px-8 py-12 xl:py-20 mx-auto my-auto lg:block ">
//                   <p className="text-3xl font-medium">Skid Plates</p>
//                   <p className="w-full h-0.5 my-6 bg-white rounded-full "></p>
//                   <p>
//                     Command a strong presence as you drive down the roads in
//                     style with the sturdy new front and rear Skid Plates.
//                   </p>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="hidden px-8 py-12 xl:py-20 mx-auto my-auto lg:block absolute top-0 z-10 text-black">
//                   <p className="text-3xl font-medium">Sporty Roof Rails</p>
//                   <p className="w-full h-0.5 my-4 bg-black rounded-full "></p>
//                   <p>
//                     Travel in style, with the Sporty Roof Rails that stand out
//                   </p>
//                 </div>
//                 <div className="overflow-hidden">
//                   <img
//                     src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/design/749x751_roofrails.webp?la=en&hash=ECF2218A92F609F78FF5F4663E275964"
//                     alt="Sporty Roof Rails
//                 "
//                     className="w-full duration-500 hover:scale-110 -z-20"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-4">
//               <div className="overflow-hidden md:col-span-3">
//                 <img
//                   src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/design/1177x751_interior.webp?la=en&hash=BD1F1BDDB99E9018103ABAF2B9CC90C4"
//                   alt="All-Black Interiors"
//                   className="w-full duration-700 hover:scale-110"
//                 />
//               </div>
//               <div className="hidden px-2 mx-auto my-auto space-y-3 tracking-wide md:col-span-1 lg:px-8 md:block">
//                 <p className="text-2xl font-medium">All-Black Interiors</p>
//                 <p className="w-full h-0.5 bg-white rounded-full"></p>
//                 <p>
//                   Here’s to comfort, that’s ever-evolving. Wrapped in All-Black
//                   Leatherette Upholstery and seats that make even the longest of
//                   journeys feel short, the All-New XL6 is the perfect space for
//                   pure indulgence.
//                 </p>
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2">
//               <div className="relative">
//                 <div className="overflow-hidden">
//                   <img
//                     src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/imageOptions/Quad-front-chamber.webp"
//                     alt="Integrated LED Daytime Running Lamps (DRLs)"
//                     className="w-full h-full duration-500 hover:scale-110"
//                   />
//                 </div>
//                 <div className="hidden px-8 py-12 xl:py-20 mx-auto my-auto lg:block ">
//                   <p className="text-3xl font-medium">
//                     Integrated LED Daytime Running Lamps (DRLs)
//                   </p>
//                   <p className="w-full h-0.5 my-6 bg-white rounded-full "></p>
//                   <p>
//                     The All-New XL6 never ceases to amaze, the Integrated LED
//                     Daytime Running Lamps make sure your presence doesn’t go
//                     unnoticed even on the busiest of roads.
//                   </p>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="hidden px-8 py-12 xl:py-20 mx-auto my-auto lg:block absolute top-0 z-10 text-black">
//                   <p className="text-3xl font-medium">Shark Fin Antenna</p>
//                   <p className="w-full h-0.5 my-4 bg-black rounded-full "></p>
//                   <p>
//                     Let nothing come between you and your favourite radio
//                     broadcast as the Shark Fin Antenna is designed to withstand
//                     extreme weather conditions. Don’t be surprised if people
//                     notice you from afar, as the chrome accentuated roof rails
//                     are hard to miss.
//                   </p>
//                 </div>
//                 <div className="overflow-hidden">
//                   <img
//                     src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/design/749x751_antenna.webp?la=en&hash=04B09E0A21BFAC833543AAB2724D89EF"
//                     alt="Shark Fin Antenna"
//                     className="w-full duration-500 hover:scale-110 -z-20"
//                   />
//                 </div>
//               </div>
//             </div>
//           </>
//         )}

//         <div
//           className="py-3 w-full text-center bg-black mt-8 text-white cursor-pointer border-white border-2 select-none"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? "SEE LESS" : "SEE MORE"}
//         </div>
//       </div>
//     </div>
//   );
// };

function Safety() {
  const [index, setIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="container mx-auto mt-6 text-center ">
        <div className="pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-8 ">
          SAFETY
        </div>
        <span className="text-md lg:text-lg">
          Indulges You with care when It comes to your Safety
        </span>
      </div>
      <div className="py-4 text-2xl font-medium text-center lg:text-3xl "></div>
      <div className="container relative flex flex-col items-center justify-center mx-auto ">
        <img
          src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/safety/xl6-in-glance_897x_573.webp?la=en&hash=FB115A3D106DBFBB9E5E068C0A9FEFC7"
          alt="XL6 Safety Features"
          srcSet=""
          className="scale-[0.8] m-28"
        />

        <div className="absolute left-[62%] top-16  lg:flex group hidden  ">
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full cursor-pointer hover:scale-105">
            {/* <GiBeltBuckles className="text-4xl group-hover:text-white " /> */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/safety-belt.svg"
              alt=" Seat Belt Pre-Tensioners with force limiters"
              className="scale-[0.6]"
            />
          </div>
          <div className="hidden mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block">
            <div className="pb-1 font-medium ">
              Seat Belt Pre-Tensioners with force limiters
            </div>
            <div className="font-light ">
              Pre-tensioners restrain the passengers and Force Limiters prevent
              seatbelt-inflicted injury.
            </div>
          </div>
        </div>
        <div className="absolute top-[4%] right-[62%] lg:flex group hidden  ">
          <div className="hidden mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block">
            <div className="pb-1 font-medium ">SUZUKI-TECT BODY</div>
            <div className="font-light ">
              Suzuki’s Total Effective Control Technology (TECT) concept results
              in effective absorption and dispersion of crash energy. The
              effective use of high-tensile steel for major parts makes the body
              light, strong and safe
            </div>
          </div>
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full cursor-pointer hover:scale-105">
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

          <div className="hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block">
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
          <div className="hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block">
            <div className="pb-1 font-medium ">6 Air Bags</div>

            <div className="hidden font-light group-hover:block">
              6 Air Bags to take the impact before it reaches you.
            </div>
          </div>
        </div>
        <div className="absolute left-[10%]  bottom-[62.5%]    lg:flex-col md:items-start group hidden lg:flex ">
          <div className="hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block">
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
        <div className="absolute left-[78%]  bottom-[62.5%] md:items-start group hidden lg:flex lg:flex-col ">
          <div className="hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-sm group-hover:block ">
            <div className="pb-1 font-medium ">
              FULL FRONTAL IMPACT COMPLIANCE, FRONTAL OFFSET IMPACT COMPLIANCE,
              SIDE IMPACT COMPLIANCE
            </div>

            <div className="font-light ">
              Successfully tested and in compliance with international safety
              norms
            </div>
          </div>
          <div className="flex items-center justify-center w-20 h-20 mb-2 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black ">
            <GiBeltBuckles className="text-4xl group-hover:text-white" />
          </div>
        </div>

        <div className="absolute left-[77%]  top-[40%]  md:items-start group hidden lg:block ">
          <div className="flex items-center justify-center w-20 h-20 mb-2 duration-500 border border-black rounded-full hover:scale-105 ">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/road.svg"
              className="scale-[0.6]"
              alt="Ensuring safety, not only for the occupants, but pedestrians as
              well"
            />
          </div>
          <div className="hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-sm group-hover:block ">
            <div className="pb-1 font-medium ">
              PEDESTRIAN PROTECTION COMPLIANCE
            </div>
            <div className="font-light ">
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
                FULL FRONTAL IMPACT COMPLIANCE, FRONTAL OFFSET IMPACT
                COMPLIANCE, SIDE IMPACT COMPLIANCE
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
      <div className="container mx-auto text-center ">
        <div className="text-center text-md lg:text-lg">
          A Safer World For You And Your Loved Ones
        </div>
        <div className="py-2 sm:py-5">
          <div className="pb-6 space-y-4 rounded ">
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
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521_safety_airbag.webp?la=en&hash=A6455C51ABF0424FF64F21E162269A75"
                    alt="Quad Airbags (Dual Front + Dual Front Seat Side)"
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium">
                      {" "}
                      Quad Airbags (Dual Front + Dual Front Seat Side)
                    </div>
                    <div className="font-light lg:pr-40">
                      Providing cutting edge safety and protection to the
                      occupants in the event of a collision.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521_safety_abs-esp.webp?la=en&hash=4182E33CACEFB62B30922A620CFB0E5A"
                    alt="   Electronic Stability Program"
                    className="relative "
                  />
                  <div className="w-full px-4 pt-4 text-left md:text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium">
                      Electronic Stability Program
                    </div>
                    <div className="font-light lg:pr-40">
                      As a standard fitment, all variants of the All-New XL6
                      comes equipped with the Electronic Stability Program which
                      helps in improved vehicle control and stability.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521_safety_child-seat.webp?la=en&hash=AF5F92DEBA904151346AF7C304E15406"
                    alt=" ISOFIX Child Seat Anchorages"
                  />
                  <div className="w-full px-4 pt-4 text-left md:text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium">
                      ISOFIX Child Seat Anchorages
                    </div>
                    <div className="font-light lg:pr-40">
                      The All-New XL6 comes with ISOFIX Child Seat Anchorages as
                      standard, so that children who require a car seat are
                      strapped in securely.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521_safety_abs.webp?la=en&hash=4114BEC135F78BF75CDD7A84C0BF298F"
                    alt=" ABS with EBD"
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left md:text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium"> ABS with EBD</div>
                    <div className="font-light lg:pr-40">
                      The Anti-Lock Braking (ABS) system on the XL6 prevents the
                      wheels from locking when the brakes are applied with
                      force, and the Electronic Brake Distribution (EBD) works
                      in concert with the ABS to ensure efficient and effective
                      braking.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <div className="w-full lg:px-20">
                  <img
                    src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521_safety_heartect.webp?la=en&hash=03F60ADC206C53DEC100F942688ECA07"
                    alt=" Heartect Platform"
                    className=""
                  />
                  <div className="w-full px-4 pt-4 text-left md:text-white md:absolute bottom-4">
                    <div className="pb-2 font-medium"> Heartect Platform</div>
                    <div className="font-light lg:pr-40">
                      An innovative new-generation chassis platform that uses
                      Ultra and Advanced High Tensile Steels, to help the
                      vehicle resist deformation with precision.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              // loop={true}
              spaceBetween={10}
              slidesPerView={5}
              // freeMode={true}
              // watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="hidden mySwiper-3 md:block"
            >
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521_safety_airbag.webp?la=en&hash=A6455C51ABF0424FF64F21E162269A75"
                    alt="Quad Airbags (Dual Front + Dual Front Seat Side)"
                    className="max-h-28"
                  />
                  <div className="py-2 text-sm">
                    Quad Airbags (Dual Front + Dual Front Seat Side)
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521_safety_abs-esp.webp?la=en&hash=4182E33CACEFB62B30922A620CFB0E5A"
                    alt="   Electronic Stability Program"
                    className="max-h-28"
                  />
                  <div className="py-2 text-sm">
                    {" "}
                    Electronic Stability Program
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521_safety_child-seat.webp?la=en&hash=AF5F92DEBA904151346AF7C304E15406"
                    alt=" ISOFIX Child Seat Anchorages"
                    className="max-h-28"
                  />
                  <div className="py-2 text-sm">
                    {" "}
                    ISOFIX Child Seat Anchorages
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521_safety_abs.webp?la=en&hash=4114BEC135F78BF75CDD7A84C0BF298F"
                    alt="  ABS with EBD"
                    className="max-h-28"
                  />
                  <div className="py-2 text-sm"> ABS with EBD</div>
                </div>
              </SwiperSlide>
              <SwiperSlide classname="cursor-pointer">
                <div>
                  <img
                    src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/xl6/features/1170x521_safety_heartect.webp?la=en&hash=03F60ADC206C53DEC100F942688ECA07"
                    alt="Heartect Platform"
                    className="max-h-28"
                  />
                  <div className="py-2 text-sm">Heartect Platform</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default XL;

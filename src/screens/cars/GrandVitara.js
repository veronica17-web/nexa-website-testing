// import React from 'react'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import OnRoadPrice from "../../components/utils/OnRoadPrice";
import { MdOutlineFileDownload } from "react-icons/md";
import Header from "../../components/Header/Header";
// import ImageViewer from '../../components/Vitara/ImageViewer';
import Helmet from "react-helmet";
import Features from "../../components/Vitara/Features";
// import Carousel from '../../components/Vitara/Extras/Carousel';
import MobileCarousel from "../../components/Vitara/Extras/MobileCarousel";
// import EnquiryPopup from "../../components/utils/EnquiryPopup";

import AOS from "aos";
import "aos/dist/aos.css";
import { CarComp, CarEnq2, InvictoCarEnquiry2 } from "./Invicto";
import { products } from "../../constants";
import { useRef } from "react";

// const width = window.innerWidth;

function GrandVitara() {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <Helmet>
        <title>
          Maruti New Suzuki Grand Vitara On Road Price in Secunderabad,
          Hyderabad & 2022 Offers
        </title>
        <meta
          name="title"
          content=" Maruti New Suzuki Grand Vitara On Road Price in Secunderabad,
          Hyderabad & 2022 Offers"
        />
        <meta
          name="description"
          content="Maruti Suzuki Grand Vitara in Secunderabad & Hyderabad. Best price & offers on Maruti Vitara at Saboo Nexa. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. Maruti Suzuki Vitara Most selling SUV. It’s available in 9 exciting colours, 3 models LXI, VXI, ZXI with 1.5L BS6 Petrol Engine Option. Visit our nearest Saboo Maruti branch to get offers or call us 9848898488."
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
      <Header />
      <VariantPlayer />
      <CarEnq2 title="BOOK YOUR GRAND VITARA" />
      <Variant />
      <SecondVideo />
      <KeyHigh />

      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/vitara-color-banner.webp')] bg-cover bg-no-repeat">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2">
            <div className="my-auto mx-5 pt-10 pr-[30]">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/grand-vitara-logo.webp"
                className="p-2"
                alt="title"
              />
              <a
                href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/grand_vitara.pdf"
                className="p-3 bg-black text-white flex items-center max-w-[200px] ml-3 mt-5 rounded"
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
            <div className="col-span-2">
              <>
                <div className="ml-auto mr-1 mt-24">
                  {/* CELESTIAL BLUE */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/Celestial_blue.webp"
                    alt="CELESTIAL BLUE"
                    className={tabsColors === 1 ? "flex mx-auto" : "hidden"}
                  />

                  {/* ARCTIC WHITE */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/arctic_white.webp"
                    alt="ARCTIC WHITE"
                    className={tabsColors === 2 ? "flex mx-auto" : "hidden"}
                  />

                  {/* ARCTIC WHITE MIDNIGHT BLACK */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/arctic_white_midnight_black.webp"
                    alt="ARCTIC WHITE MIDNIGHT BLACK"
                    className={tabsColors === 3 ? "flex mx-auto" : "hidden"}
                  />

                  {/* CHESTNUT BROWN */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/Chestnut_Brown.webp"
                    alt="CHESTNUT BROWN"
                    className={tabsColors === 4 ? "flex mx-auto" : "hidden"}
                  />

                  {/* GRANDEUR GREY */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/grandeur_grey.webp"
                    alt="GRANDEUR GREY"
                    className={tabsColors === 5 ? "flex mx-auto" : "hidden"}
                  />

                  {/* OPPULENT RED */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/oppulent_red.webp"
                    alt="OPPULENT RED"
                    className={tabsColors === 6 ? "flex mx-auto" : "hidden"}
                  />

                  {/* OPPULENT_RED MIDNIGHT BLACK */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/oppulent_red_midnight_black.webp"
                    alt="OPPULENT_RED MIDNIGHT BLACK"
                    className={tabsColors === 7 ? "flex mx-auto" : "hidden"}
                  />

                  {/* SPLENDID SILVER */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/splendid_silver.webp"
                    alt="SPLENDID SILVER"
                    className={tabsColors === 8 ? "flex mx-auto" : "hidden"}
                  />

                  {/* SPLENDID SILVER MIDNIGHT BLACK */}
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/splendid_silver_midnight_black.webp"
                    alt="SPLENDID SILVER MIDNIGHT BLACK"
                    className={tabsColors === 9 ? "flex mx-auto" : "hidden"}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div onClick={() => setTabsColors(1)}>
                    <div className={tabsColors === 1 ? "relative" : "hidden"}>
                      <p className="w-6 h-6 bg-[#163472] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
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
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
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
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
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
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
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
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
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
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
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
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
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
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
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
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute  top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
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
                    Celestial Blue
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
                    Arctic White with Midnight Black
                  </p>
                  <p
                    className={
                      tabsColors === 4
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Chestnut Brown
                  </p>
                  <p
                    className={
                      tabsColors === 5
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Grandeur Grey
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
                    Oppulent Red with Midnight Black
                  </p>
                  <p
                    className={
                      tabsColors === 8
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Splendid Silver
                  </p>
                  <p
                    className={
                      tabsColors === 9
                        ? "text-center font-light text-sm my-2"
                        : "hidden"
                    }
                  >
                    Splendid Silver with Midnight Black
                  </p>
                </>
              </>
            </div>
          </div>
        </div>
      </div>

      {/* {width > 425 ? <Carousel /> : <MobileCarousel />} */}
      <div className="hidden sm:block">
        <div className="flex h-[60vh] bg-white gap-1 px-2 my-1">
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3  bg-no-repeat bg-cover bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-27-IEH.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">
                INTELLIGENT ELECTRIC HYBRID
              </span>
              <span className="font-thin tracking-wider mb-2">
                Rules with revolutionary technology
              </span>
              <div>
                <Link to="/grand-vitara-features-intelligent-electric-hybrid">
                  <button className="text-normal bg-white text-black duration-300 md:px-2 lg:px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                    KNOW MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-26-Allgrip.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">ALLGRIP</span>
              <span className="font-thin tracking-wider mb-2">
                Rules with a firm grip
              </span>
              <div>
                <Link to="/grand-vitara-allgrip">
                  <button className="text-normal bg-white text-black duration-300 md:px-2 lg:px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                    KNOW MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-32-AT.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">
                6-SPEED AUTOMATIC TRANSMISSION
              </span>
              <span className="font-thin tracking-wider mb-2">
                Rules with utmost comfort
              </span>
              <div>
                <Link to="/grand-vitara-6-speed-automatic-transmission-price">
                  <button className="text-normal bg-white text-black duration-300 md:px-2 lg:px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                    KNOW MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-33-MT.webp')] ">
            <div className="flex flex-col justify-end h-full p-4 text-white ">
              <span className="font-semibold text-lg">
                5-SPEED MANUAL TRANSMISSION
              </span>
              <span className="font-thin tracking-wider mb-2">
                Rules with a powerful persona
              </span>
              <div>
                <Link to="/grand-vitara-5-speed-manual-transmission-price">
                  <button className="text-normal bg-white text-black duration-300 md:px-2 lg:px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                    KNOW MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <MobileCarousel />
      </div>

      {/* <ImageViewer /> */}
      {/* <OnRoadPrice title={"Grand Vitara"} /> */}
      <Features />
      {/* <ImageOptions /> */}
      <CarComp details={products[3]} />
      <InvictoCarEnquiry2
        title="BOOK YOUR GRAND VITARA NOW"
        carName="Grand Vitara"
      />
    </>
  );
}

const VariantPlayer = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Define the video source URL based on the browser
  const videoSource = isSafari
    ? "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/Grand+Vitara_Safari.mov"
    : "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/Grand+vitara.webm";

  return (
    <div className="top-0 left-0 w-full h-screen relative bg-black ">
      <video
        className="object-cover w-full h-full "
        preload="metadata"
        // poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/Jimny_HeaderBanner_1500x634+webp.webp"
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
          THE ADVANCED
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="500"
          className="pb-1 font-serif text-5xl uppercase lg:text-8xl"
        >
          GRAND VITARA
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="1000"
          className="mb-2 text-2xl uppercase lg:text-5xl lg:mb-4"
        >
          THE LEAGUE OF EXTRAORDINARY
        </div>
        <a
          href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/grand_vitara.pdff"
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
  );
};

const Variant = () => {
  const [price, setPrice] = useState("10,70,000");
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
              <option value="10,70,000">SIGMA</option>
              <option value="12,10,000">DELTA</option>
              <option value="13,91,000">ZETA</option>
              <option value="15,41,000">ALPHA</option>
              <option value="15,57,000">ALPHA (DT)</option>
              <option value="13,60,000">DELTA AT</option>
              <option value="15,41,000">ZETA AT</option>
              <option value="16,91,000">ALPHA AT</option>
              <option value="17,07,000">ALPHA AT (DT)</option>
              <option value="16,91,000">ALPHA AWD AG</option>
              <option value="17,07,000">ALPHA AWD AG (DT)</option>
              <option value="18,29,000">ZETA+ ECVT</option>
              <option value="18,45,000">ZETA+ ECVT (DT)</option>
              <option value="19,79,000">ALPHA+ ECVT</option>
              <option value="19,95,000">ALPHA ECVT (DT)</option>
              <option value="13,05,000">DELTA CNG</option>
              <option value="14,86,000">ZETA CNG</option>
            </select>
          </div>
          <div className="text-center text-gray-200">
            <p className="text-2xl font-bold">₹ {price}*</p>
            <p className="tracking-wide text-xl pb-1">
              Ex-Showroom Price - Hyderabad
            </p>

            <div className="text-red-200 text-xs font-light">
              <sup>*</sup>Alpha+ & Zeta+ are applicable only for Intelligent
              Electric Hybrid Variants
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

const SecondVideo = () => {
  return (
    <div className="relative max-h-screen bg-black flex flex-col  ">
      <div className="  py-6 text-center lg:absolute  w-full lg:pt-10   lg:text-white">
        <div className="text-2xl lg:text-3xl font-medium mb-2">
          RULE EVERY ROAD
        </div>
        <div className="">
          Every road is a new story, a new discovery and there is a new breed of
          SUVs that can conquer them all. It is the Advanced Grand Vitara{" "}
          <br className="hidden lg:block" /> and it’s here to Rule Every Road.
        </div>
      </div>
      <video
        className="max-h-screen w-full"
        preload="none"
        autoPlay={true}
        playsInline={true}
        muted={true}
        loop={true}
        poster="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/banner/poster-img.webp"
      >
        <source
          type="video/mp4"
          data-src="//nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-title-video/end-shot-grand-vitara.mp4"
          src="//nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-title-video/end-shot-grand-vitara.mp4"
        />
        <track label="English" kind="captions" srclang="en" src="" default />
      </video>
    </div>
  );
};

const KeyHigh = () => {
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
        } else if (currentTime >= 2 && currentTime < 4) {
          setPlayingSegment(2);
        } else if (currentTime >= 5 && currentTime < 7) {
          setPlayingSegment(3);
        } else if (currentTime >= 8 && currentTime < 9) {
          setPlayingSegment(4);
        } else if (currentTime >= 10 && currentTime < 12) {
          setPlayingSegment(5);
        } else if (currentTime >= 12 && currentTime < 14) {
          setPlayingSegment(6);
        } else if (currentTime >= 14 && currentTime < 16) {
          setPlayingSegment(7);
        } else if (currentTime >= 16 && currentTime < 18) {
          setPlayingSegment(8);
        } else if (currentTime >= 18) {
          setPlayingSegment(9);
        }
      };

      videoNode.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoNode.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      <div className="  w-full pt-10 pb-2 text-3xl text-center uppercase  sm:text-4xl md:text-5xl">
        KEY HIGHLIGHTS
      </div>
    
      <div
        className="top-0 left-0 w-full  md:h-[76vh] relative px-1 "
        onContextMenu={handleContextMenu}
      >
        <video
          className=" md:h-[84%] mx-auto object-cover  rounded-xl overflow-hidden"
          autoplay="autoplay"
          loop
          muted
          ref={videoRef}
          controls
          poster="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/banner/poster-img.webp"
        >
          <source
            class="w-30 h-30"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/Desktop.mp4"
            type="video/mp4"
          />
        </video>
        {/* <video
          className="h-[70%] px-1 sm:hidden mx-auto object-cover  rounded overflow-hidden"
          autoplay="autoplay"
          loop
          muted
          ref={videoRef}
          poster="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/banner/poster-img.webp"
        >
          <source
            class="w-30 h-30"
            src="https://www.nexaexperience.com/slider_html_code/images/Mobile.mp4"
            type="video/mp4"
          />
        </video> */}
        {/* <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/webpage-fronx-mobile-banner-without-book-now.webp"
        alt=""
        className="h-screen w-full sm:hidden"
      /> */}
          <div className="text-white w-full text-center py-4 text-xl lg:text-2xl">
          {playingSegment === 0
            ? "Bold & Expressive Font Fascia"
            : playingSegment === 1
            ? '17" Precision Cut Alloy Wheels'
            : playingSegment === 2
            ? "Ventilated Front Seats"
            : playingSegment === 3
            ? "Digital Multi-Information Display"
            : playingSegment === 4
            ? "Head Up Display"
            : playingSegment === 5
            ? "Smartplay Pro+"
            : playingSegment === 6
            ? "Wireless Charger"
            : playingSegment === 7
            ? "All Black Interior With Champagne Gold Accents"
            : playingSegment === 8
            ? "Panoramic Sunroof"
            : playingSegment === 9 && "LED Stop Lamp"}
        </div>
        <div className="absolute bottom-6   w-full ">
          <div className="hidden md:block container mx-auto bg-[#ffffff39] rounded-2xl ">
            <div className="relative">
              <div className="relative flex justify-between  ">
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(0, 0)}
                    className={`bg-white h-full w-full rounded-full `}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(1, 1)}
                    className={`bg-white h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(2, 2)}
                    className={`bg-white h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(5, 3)}
                    className={`bg-white h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(8, 4)}
                    className={`bg-white h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(10, 5)}
                    className={`bg-white h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(12, 6)}
                    className={`bg-white h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(14, 7)}
                    className={`bg-white h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(16, 8)}
                    className={`bg-white h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(18, 9)}
                    className={`bg-white h-full w-full rounded-full`}
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
                    ? "w-[11.11%]"
                    : playingSegment === 2
                    ? "w-[22.22%]"
                    : playingSegment === 3
                    ? "w-[33.33%]"
                    : playingSegment === 4
                    ? "w-[44.44%]"
                    : playingSegment === 5
                    ? "w-[55.55%]"
                    : playingSegment === 6
                    ? "w-[66.66%]"
                    : playingSegment === 7
                    ? "w-[77.77%]"
                    : playingSegment === 8
                    ? "w-[88.88%]"
                    : "w-[100%]"
                } h-0.5 bg-white duration-500 absolute top-1 `}
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
    </div>
  );
};

// const ImageOptions = () => {
//   return (
//     <div className='container mx-auto px-5 md:px-0'>
//       <div className='grid shadow-lg sm:grid-cols-2 p-8 '>
//         <div>
//           <img
//             src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/vitara-exterior-1.webp'
//             alt='saboo-nexa-ignis-exterior-front-grill'
//             className='w-full'
//           />
//         </div>
//         <div className='my-auto mx-auto space-y-3 p-8'>
//           <p className='text-3xl font-bold '>Sporty Rear</p>
//           <p className='h-1 w-20 bg-black rounded-full '></p>
//           <p>
//             The New Ignis is equipped with a Striking Rear Spoiler and Roof
//             Rails, which enhances the Sporty Look.
//           </p>
//         </div>
//       </div>

//       <div className='grid shadow-lg sm:grid-cols-2 p-8'>
//         <div className='my-auto mx-auto space-y-3 p-5'>
//           <p className='text-3xl font-bold'>Imposing Chrome Grille</p>
//           <p className='h-1 w-20 bg-black rounded-full '></p>
//           <p>
//             Taking the tough look up a notch, the New Ignis is equipped with an
//             Imposing Chrome Grille which leaves a lasting impression.
//           </p>
//         </div>
//         <div>
//           <img
//             src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-back.webp'
//             alt='saboo-nexa-ignis-exterior-back'
//             className='w-full'
//           />
//         </div>
//       </div>

//       <div className='grid shadow-lg sm:grid-cols-2 p-8'>
//         <div>
//           <img
//             src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-side-shot.webp'
//             alt='saboo-nexa-ignis-exterior-side-shot'
//             className='w-full'
//           />
//         </div>
//         <div className='my-auto mx-auto space-y-3 p-8'>
//           <p className='text-3xl font-bold'>High SUV-like Stance</p>
//           <p className='h-1 w-20 bg-black rounded-full '></p>
//           <p>
//             The New Ignis has a high SUV-like Stance which makes it easier to
//             get in and off, coupled with a higher seating that allows a great
//             road visibility.
//           </p>
//         </div>
//       </div>

//       <div className='grid shadow-lg sm:grid-cols-2 p-8'>
//         <div className='my-auto mx-auto space-y-3'>
//           <p className='text-3xl font-bold'>Toughened Exterior</p>
//           <p className='h-1 w-20 bg-black rounded-full '></p>
//           <p>
//             Adding to the toughness, the New Ignis comes with stunning 15”
//             All-Black Alloy Wheels, All-Around Cladding and Sturdy New Front &
//             Rear Skid Plates.
//           </p>
//         </div>
//         <div>
//           <img
//             src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-Toughened.webp'
//             alt='saboo-nexa-ignis-exterior-Toughened'
//             className='w-full'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default GrandVitara;

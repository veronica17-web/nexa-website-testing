// import React from 'react'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OnRoadPrice from "../../components/utils/OnRoadPrice";
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
      <Variant />

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
      <OnRoadPrice title={"Grand Vitara"} />
      <Features />
      {/* <ImageOptions /> */}
    </>
  );
}

const VariantPlayer = () => {
  return (
    <div className="top-0 left-0 w-full h-screen relative bg-black ">
      <video
        className="w-full h-full object-cover "
        autoplay="autoplay"
        loop
        muted
        // poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/Jimny_HeaderBanner_1500x634+webp.webp"
      >
        <source
          class="w-30 h-30"
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/END+SHOT+GRAND+VITARA_1_2+mp4.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute bottom-40 lg:top-[36%] left-[3%] lg:left-[5%] text-white ">
        {/* <div
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
          className="text-5xl lg:text-8xl font-serif pb-1 uppercase"
        >
          GRAND VITARA
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="1000"
          className="text-2xl lg:text-5xl mb-2 lg:mb-4 uppercase"
        >
          RULE EVERY ROAD
        </div> */}
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
          href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/grand_vitara.pdf"
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
            <p className="tracking-wide text-xl">Ex-Showroom Price</p>
            <p className="uppercase text-gray-400 font-bold">Hyderabad</p>
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ImageViewer from "../../components/CIAZ/ImageViewer";
// import OnRoadPrice from "../../components/utils/OnRoadPrice";
// import Features from "../../components/CIAZ/Features";
import {
  MdAirlineSeatReclineExtra,
  MdOutlineFileDownload,
} from "react-icons/md";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { CarComp, CarEnq2, InvictoCarEnquiry2 } from "./Invicto";
import { products } from "../../constants";
import View360 from "../../components/utils/View360";
import { Tb360View, TbView360 } from "react-icons/tb";
import { GiBeltBuckles, GiReturnArrow, GiSpeedometer } from "react-icons/gi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Define the video source URL based on the browser
const videoSource = isSafari
  ? "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/Ciaz_safari.mov"
  : "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/ciaz/Ciaz.webm";

function Ciaz() {
  const [tabsColors, setTabsColors] = useState(1);
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Nexa Ciaz Car Price, Mileage, Specifications & Offers | Saboo Nexa
        </title>
        <meta
          name="title"
          content="Nexa Ciaz Car Price, Mileage, Specifications & Offers | Saboo Nexa"
        />
        <meta
          name="description"
          content="Nexa Ciaz Car Price Starts at 8.99 lakh, Mileage of 26.8 km/l. Get Nexa Ciaz Specifications & Features. Best Offers on Ciaz Car, Low EMI, Low Down-Payment. Call now 9848898488"
        />
        <meta
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
            poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/360/2.jpg"
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
              THE
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
              className="pb-1 font-serif text-5xl uppercase lg:text-8xl"
            >
              Ciaz
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
              className="mb-2 text-2xl uppercase lg:text-5xl lg:mb-4"
            >
              Created to inspire elegance
            </div>
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/Maruti-Suzuki-Ciaz-Broucher.pdf"
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
      <CarEnq2 title="BOOK YOUR CIAZ" />
      <Variant />
      <Feature />
      <div className="pt-2 text-white bg-black ">
        <div className="w-full pt-10 pb-8 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          COLOURS
        </div>
      </div>
      <div className="bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-Background-Banners/Saboo-RKS-Nexa-Ciaz-Car-Background.webp)] bg-cover bg-no-repeat pt-20 lg:pt-32">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2">
            <div className="my-auto mx-auto py-8">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-RKS-Nexa-Ciaz-Title.webp"
                alt="Saboo-RKS-Nexa-Ciaz-Title"
              />
              <a
                href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/Maruti-Suzuki-Ciaz-Broucher.pdf"
                className="p-3 bg-black text-gray-200 flex items-center max-w-[200px] ml-3"
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
            <div>
              <div className="mx-auto">
                {/* Metallic-Dignity-Brown */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/colors/Saboo-Nexa-Ciaz-Colours-Metallic-Dignity-Brown.webp"
                  alt="Saboo-Nexa-Ciaz-Colours-Metallic-Dignity-Brown"
                  className={
                    tabsColors === 1
                      ? "mx-auto lg:mt-10 w-auto lg:h-[300px]"
                      : "hidden"
                  }
                />

                {/* Metallic-Magma-Gray */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/colors/Saboo-Nexa-Ciaz-Colours-Metallic-Magma-Gray.webp"
                  alt="Saboo-Nexa-Ciaz-Colours-Metallic-Magma-Gray"
                  className={
                    tabsColors === 2
                      ? "mx-auto lg:mt-10 w-auto lg:h-[300px]"
                      : "hidden"
                  }
                />

                {/* Metallic-Premium-Silver */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/colors/Saboo-Nexa-Ciaz-Colours-Metallic-Premium-Silver.webp"
                  alt="Saboo-Nexa-Ciaz-Colours-Metallic-Premium-Silver"
                  className={
                    tabsColors === 3
                      ? "mx-auto lg:mt-10 w-auto lg:h-[300px]"
                      : "hidden"
                  }
                />

                {/*Midnight-Black*/}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/colors/Saboo-Nexa-Ciaz-Colours-Midnight-Black.webp"
                  alt="Saboo-Nexa-Ciaz-Colours-Midnight-Black"
                  className={
                    tabsColors === 4
                      ? "mx-auto lg:mt-10 w-auto lg:h-[300px]"
                      : "hidden"
                  }
                />

                {/* Nexa-Blue */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/colors/Saboo-Nexa-Ciaz-Colours-Nexa-Blue.webp"
                  alt="Saboo-Nexa-Ciaz-Colours-Nexa-Blue"
                  className={
                    tabsColors === 5
                      ? "mx-auto lg:mt-10 w-auto lg:h-[300px]"
                      : "hidden"
                  }
                />

                {/* Pearl-Sangria-Red */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/colors/Saboo-Nexa-Ciaz-Colours-Pearl-Sangria-Red.webp"
                  alt="Saboo-Nexa-Ciaz-Colours-Pearl-Sangria-Red"
                  className={
                    tabsColors === 6
                      ? "mx-auto lg:mt-10 w-auto lg:h-[300px]"
                      : "hidden"
                  }
                />

                {/* Pearl-Snow-White */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/colors/Saboo-Nexa-Ciaz-Colours-Pearl-Snow-White.webp"
                  alt="Saboo-Nexa-Ciaz-Colours-Pearl-Snow-White"
                  className={
                    tabsColors === 7
                      ? "mx-auto lg:mt-10 w-auto lg:h-[300px]"
                      : "hidden"
                  }
                />
              </div>
              <div className="flex items-center justify-center mb-3">
                <div onClick={() => setTabsColors(1)}>
                  <div className={tabsColors === 1 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#86654f] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#86654f]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 1 ? "w-6 h-6 bg-[#86654f] mr-2" : "hidden"
                    }
                  ></p>
                </div>
                <div onClick={() => setTabsColors(2)}>
                  <div className={tabsColors === 2 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#72716b] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#72716b]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 2 ? "w-6 h-6 bg-[#72716b] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(3)}>
                  <div className={tabsColors === 3 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#dbdbdb] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#dbdbdb]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 3
                        ? "w-6 h-6 bg-[#dbdbdb] border-2 mr-2"
                        : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(4)}>
                  <div className={tabsColors === 4 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#231f20] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#231f20]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 4 ? "w-6 h-6 bg-[#231f20] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(5)}>
                  <div className={tabsColors === 5 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#183f66] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#183f66]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 5 ? "w-6 h-6 bg-[#183f66] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(6)}>
                  <div className={tabsColors === 6 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#6c1e31] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#6c1e31]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 6 ? "w-6 h-6 bg-[#6c1e31] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(7)}>
                  <div className={tabsColors === 7 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#ffffff] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#ffffff]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 7 ? "w-6 h-6 bg-[#ffffff] mr-2" : "hidden"
                    }
                  ></p>
                </div>
              </div>
              <p
                className={
                  tabsColors === 1
                    ? "text-center font-semibold text-lg my-2"
                    : "hidden"
                }
              >
                Metallic Dignity Brown
              </p>
              <p
                className={
                  tabsColors === 2
                    ? "text-center font-semibold text-lg my-2"
                    : "hidden"
                }
              >
                Metallic Magma Gray
              </p>
              <p
                className={
                  tabsColors === 3
                    ? "text-center font-semibold text-lg my-2"
                    : "hidden"
                }
              >
                Metallic Premium Silver
              </p>
              <p
                className={
                  tabsColors === 4
                    ? "text-center font-semibold text-lg my-2"
                    : "hidden"
                }
              >
                Midnight Black
              </p>
              <p
                className={
                  tabsColors === 5
                    ? "text-center font-semibold text-lg my-2"
                    : "hidden"
                }
              >
                Nexa Blue
              </p>
              <p
                className={
                  tabsColors === 6
                    ? "text-center font-semibold text-lg my-2"
                    : "hidden"
                }
              >
                Pearl Sangria Red
              </p>
              <p
                className={
                  tabsColors === 7
                    ? "text-center font-semibold text-lg my-2"
                    : "hidden"
                }
              >
                Pearl Snow White
              </p>
            </div>
          </div>
        </div>
      </div>
      <Tech />
      <Ci360 />
      {/* <Variant /> */}
      {/* <ImageViewer /> */}
      {/* <OnRoadPrice title={"ciaz"} /> */}
      {/* <Features /> */}
      {/* <ImageOptions /> */}
      <Safety />
      <CarComp details={products[6]} />

      <InvictoCarEnquiry2 title="BOOK YOUR CIAZ" carName="Ciaz" />
    </>
  );
}
const Variant = () => {
  const [price, setPrice] = useState("9,30,000");
  return (
    <div className=" bg-opacity-25 text-white bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp')] bg-fixed  bg-black">
      <div className="container mx-auto bg-opacity-10 bg-black py-20">
        <div className="grid md:grid-cols-3 md:space-y-0 space-y-3">
          <div className="space-y-3 mx-auto md:mx-0">
            <p className="uppercase text-white">select car Variant</p>
            <select
              name="model"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm text-black"
            >
              <option value="9,30,000">SIGMA</option>
              <option value="9,90,000">DELTA</option>
              <option value="10,30,000">ZETA</option>
              <option value="11,09,000">ALPHA </option>
              <option value="11,25,000">ALPHA (D)</option>
              <option value="11,10,000">DELTA AT</option>
              <option value="11,50,000">ZETA AT</option>
              <option value="12,29,000">ALPHA AT</option>
              <option value="12,45,000">ALPHA (D) AT</option>
            </select>
          </div>
          <div className="text-center text-white">
            <p className="text-2xl font-medium">₹ {price}*</p>
            <p className="tracking-wide text-xl">Ex-Showroom Price</p>
            <p className="uppercase text-white ">Hyderabad</p>
          </div>
          <div className="text-center">
            <p className="text-gray-100 mb-6 text-center">
              You might have pre-approved loan offers
            </p>
            <Link
              to="/maruti-car-finance"
              className="py-2 px-4 bg-white rounded shadow uppercase tracking-wide text-black"
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
//     <div className="container mx-auto ">
//       <div className="grid shadow-lg sm:grid-cols-2 p-2 lg:p-8 ">
//         <div>
//           <img
//             src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/key-visual-ciaz1-e1561609099843.webp"
//             alt="key-visual-ciaz1"
//             className="w-full"
//           />
//         </div>
//         <div className="my-auto mx-auto space-y-3  lg:p-8">
//           <p className="text-3xl font-medium ">Design</p>
//           <p className="h-1 w-20 bg-black rounded-full "></p>
//           <p>
//             Thoughtfully crafted and exquisitely designed, the New Ciaz captures
//             your imagination from the moment you set your eyes on its gorgeous
//             front fascia. And continues to enamour you all the way to the rear.
//             It’s a complete charmer that breathes elegance in every move.
//           </p>
//         </div>
//       </div>

//       <div className="grid shadow-lg sm:grid-cols-2 p-2 lg:p-8">
//         <div className="my-auto mx-auto space-y-3 py-2">
//           <p className="text-3xl font-medium">LED Projector Auto Headlamps</p>
//           <p className="h-1 w-20 bg-black rounded-full "></p>
//           <p>
//             The LED Projector auto headlamps with DRLs captivate at first
//             glance.
//           </p>
//         </div>
//         <div className="pb-2">
//           <img
//             src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/headlamps-e1561608366238.webp"
//             alt="headlamps-e1561608366238"
//             className="w-full"
//           />
//         </div>
//       </div>

//       <div className="grid shadow-lg sm:grid-cols-2 p-2 mt-3 lg:p-8">
//         <div>
//           <img
//             src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Back-Lamp.webp"
//             alt="Saboo-Nexa-Ciaz-Exterior-Back-Lamp"
//             className="w-full"
//           />
//         </div>
//         <div className="my-auto mx-auto space-y-3 py-3 lg:p-8 ">
//           <p className="text-3xl font-medium">LED Tail Lamps</p>
//           <p className="h-1 w-20 bg-black rounded-full "></p>
//           <p>Gracefully designed Tail Lamps make heads turn on the streets.</p>
//         </div>
//       </div>

//       <div className="grid shadow-lg sm:grid-cols-2 p-2 lg:p-8 mt-3">
//         <div className="my-auto mx-auto space-y-3 pb-3">
//           <p className="text-3xl font-medium">Luxurious Interiors</p>
//           <p className="h-1 w-20 bg-black rounded-full "></p>
//           <p>Step inside and breathe in the most spacious cabin.</p>
//         </div>
//         <div className="pb-2">
//           <img
//             src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Spacious-Interiors.webp"
//             alt="Saboo-Nexa-Ciaz-Spacious-Interiors"
//             className="w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

const Tech = () => {
  return (
    <>
      <div className="container mx-auto mt-6 text-center ">
        <div className="text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-8  pb-2">
          TECHNOLOGY
        </div>
        <div className="text-md lg:text-lg pb-4">
          Created To Inspire The Future
        </div>
      </div>
      <div className="container mx-auto pb-6">
        <div className="overflow-hidden">
          <img
            src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/technology/ciaz-technology_changed.webp"
            alt="CIAZ TECHNOLOGY"
            className="w-full hover:scale-105 duration-500"
          />
        </div>
        <div className="mt-2 mb-4 grid md:grid-cols-3 gap-1">
          <div className="w-full  text-left col-span-1 md:border-x px-4 hover:bg-[#373737b7] text-lg py-4 duration-500 hover:text-white select-none">
            <div className="pb-2 font-medium">IDLE STOP START</div>
            <div className="font-light ">
              The engine automatically stops when idle and silently starts when
              the optimal conditions are met in manual and automatic
              transmissions. This helps in increasing fuel efficiency.
            </div>
          </div>
          <div className="w-full  text-left col-span-1 md:border-x px-4 hover:bg-[#373737b7] text-lg py-4 duration-500 hover:text-white select-none">
            <div className="pb-2 font-medium">BRAKE ENERGY REGENERATION</div>
            <div className="font-light ">
              Braking charges the special high capacity batteries, which in
              return assist the engine's idle start stop and the torque assist
              functions.
            </div>
          </div>
          <div className="w-full  text-left col-span-1 md:border-x px-4 hover:bg-[#373737b7] text-lg py-4 duration-500 hover:text-white select-none">
            <div className="pb-2 font-medium">TORQUE ASSIST FUNCTION</div>
            <div className="font-light ">
              The energy stored in the Lithium-ion battery assists during
              acceleration. This helps the engine in providing optimal
              acceleration and performance.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Ci360 = () => {
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
          Take A 360 Degree Look Around Ciaz And Get To Know It Better
        </div>
      </div>
      <div className="relative">
        <View360
          path={
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/360"
          }
          count={36}
          format={"jpg"}
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

const Feature = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
  const [exterior, setExterior] = useState(false);

  return (
    <div className="py-4 bg-black ">
      <div className="container mx-auto text-center text-white ">
        <div className="w-full pt-8 pb-2 text-3xl text-center uppercase  sm:text-4xl md:text-5xl">
          FEATURES
        </div>
        <div className="text-center text-md lg:text-lg">
          Advanced Features That Make Driving The Ciaz A Breeze
        </div>

        <div className="flex justify-center gap-5 pb-2 mt-4 text-xl">
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

        <div className="py-2  sm:py-5">
          <div className="relative ">
            {exterior ? (
              <div className={``}>
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
                    thumbs={{ swiper: thumbsSwiper2 }}
                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                    className="mySwiper2 h-28"
                  >
                    <SwiperSlide className="">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/smart-play.webp?la=en&hash=B1145B7577A101CF7AE76A3B9FB90142"
                          alt="SmartPlay Studio"
                          className="relative "
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">
                            SmartPlay Studio
                          </div>
                          <div className="font-light lg:pr-40">
                            Play music, navigate around the city and stay
                            connected. Everything is just a touch away with the
                            SmartPlay Studio.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Cruse-Control.webp"
                          alt="CRUISE CONTROL"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">CRUISE CONTROL</div>
                          <div className="font-light lg:pr-40">
                            Pick any cruising speed over 40 km/h and drive
                            through the highway with unmatched ease.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Tilt-Steering.webp"
                          alt="TILT STEERING"
                          className=""
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">TILT STEERING</div>
                          <div className="font-light lg:pr-40">
                            The steering column features tilt adjustment for
                            your convenience.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Multi-Information-Display.webp"
                          alt="   MULTI-INFORMATION DISPLAY"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">
                            MULTI-INFORMATION DISPLAY
                          </div>
                          <div className="font-light lg:pr-40">
                            Keep a track of your car's vital information such as
                            fuel consumption, energy flow, trip details, driving
                            range and gear shift indicator (MT).
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/start-stop-button/start-stop-button.webp?"
                          alt=" PUSH START-STOP BUTTON"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">
                            PUSH START-STOP BUTTON
                          </div>
                          <div className="font-light lg:pr-40">
                            Touch and go with keyless entry and push start
                            button.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/orvm/orvm.webp?la=en&hash=682BF0F18901DE61C24FA83383519F4D"
                          alt=" ORVM"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium"> ORVM</div>
                          <div className="font-light lg:pr-40">
                            Electrically adjustable and foldable ORVM for
                            greater convenience.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Auto-Ac.webp"
                          alt=" AUTO AC"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium"> AUTO AC</div>
                          <div className="font-light lg:pr-40">
                            Experience a world of comfort with Auto AC.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Ac-Vent.webp"
                          alt="  REAR AC VENT"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium"> REAR AC VENT</div>
                          <div className="font-light lg:pr-40">
                            Rear AC vent for a cool lounge like experience.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Sunshade.webp"
                          alt=" REAR SUNSHADE"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium"> REAR SUNSHADE</div>
                          <div className="font-light lg:pr-40">
                            Enjoy a comfortable drive, even in summers.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Boot-Space.webp"
                          alt="  BOOT SPACE"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium"> BOOT SPACE</div>
                          <div className="font-light lg:pr-40">
                            510 L of boot space for added utility.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Reading-Lamp.webp"
                          alt="REAR READING LAMPS"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">
                            REAR READING LAMPS
                          </div>
                          <div className="font-light lg:pr-40">
                            Rear reading lamps for a comfortable read, on the
                            go.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Automatic-Transmission.webp"
                          alt=" AUTOMATIC TRANSMISSION"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">
                            AUTOMATIC TRANSMISSION
                          </div>
                          <div className="font-light lg:pr-40">
                            Unwind and enjoy your drive as the New Ciaz with
                            Automatic Transmission moves like a dream, giving
                            you a comfortable drive everywhere.
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
                    className="hidden text-white mySwiper-3 md:block"
                  >
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/smart-play.webp?la=en&hash=B1145B7577A101CF7AE76A3B9FB90142"
                          alt=" SmartPlay Studio"
                          className="max-h-24"
                        />
                        <div className="py-2 ">SmartPlay Studio</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Cruse-Control.webp"
                          alt="CRUISE CONTROL"
                          className="max-h-24"
                        />
                        <div className="py-2 ">CRUISE CONTROL</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Tilt-Steering.webp"
                          alt="TILT STEERING"
                          className="max-h-24"
                        />
                        <div className="py-2 ">TILT STEERING</div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Multi-Information-Display.webp"
                          alt="   MULTI-INFORMATION DISPLAY"
                          className="max-h-24"
                        />
                        <div className="py-2 ">MULTI-INFORMATION DISPLAY</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/start-stop-button/start-stop-button.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp"
                          alt=" PUSH START-STOP BUTTON"
                          className="max-h-24"
                        />
                        <div className="py-2 "> PUSH START-STOP BUTTON</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/orvm/orvm.webp"
                          alt=" ORVM"
                          className="max-h-24"
                        />
                        <div className="py-2 "> ORVM</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Auto-Ac.webp"
                          alt=" AUTO AC"
                          className="max-h-24"
                        />
                        <div className="py-2 "> AUTO AC</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Ac-Vent.webp"
                          alt=" REAR AC VENT"
                          className="max-h-24"
                        />
                        <div className="py-2 "> REAR AC VENT</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Sunshade.webp"
                          alt="  REAR SUNSHADE"
                          className="max-h-24"
                        />
                        <div className="py-2 "> REAR SUNSHADE</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Boot-Space.webp"
                          alt="   BOOT SPACE"
                          className="max-h-24"
                        />
                        <div className="py-2 "> BOOT SPACE</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Reading-Lamp.webp"
                          alt="REAR READING LAMPS"
                          className="max-h-24"
                        />
                        <div className="py-2 "> REAR READING LAMPS</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Automatic-Transmission.webp"
                          alt=" AUTOMATIC TRANSMISSION"
                          className="max-h-24"
                        />
                        <div className="py-2 "> AUTOMATIC TRANSMISSION</div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            ) : (
              <div
                className={``}
              >
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
                    {/* <SwiperSlide className="">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/design/desktop/key-visual-ciaz1.webp?la=en&hash=D7685302836FC2D9395341117BFE8028"
                        alt="Ciaz Design"
                        className="relative "
                      />
                      <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                        <div className="pb-2 font-medium">Design</div>
                        <div className="font-light lg:pr-40">
                        Thoughtfully crafted and exquisitely designed, the Ciaz captures your imagination from the moment you set your eyes on its gorgeous front fascia. And continues to enamour you all the way to the rear. It's a complete charmer that breathes elegance in every move.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> */}
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Back-Lamp.webp"
                          alt="LED Tail Lamps"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">LED Tail Lamps</div>
                          <div className="font-light lg:pr-40">
                            Gracefully designed Tail Lamps make heads turn on
                            the streets.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Led-Projector-Head-Lamps.webp"
                          alt="LED Projector Auto Headlamps"
                          className=""
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">
                            LED Projector Auto Headlamps
                          </div>
                          <div className="font-light lg:pr-40">
                            The LED Projector auto headlamps with DRLs captivate
                            at first glance.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Fog-Lamp.webp"
                          alt="Exterior Fog Lamp"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">Fog Lamp</div>
                          <div className="font-light lg:pr-40">
                            enhances visibility in adverse weather conditions
                            like fog, rain, and snow by emitting a low, wide
                            beam of light that reduces glare and illuminates the
                            road immediately in front of the vehicle, improving
                            safety and aesthetics
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Alloy-Wheels.webp"
                          alt="Alloy Wheels"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">Alloy Wheels</div>
                          <div className="font-light lg:pr-40">
                            Alloy wheels for the Ciaz are stylish and
                            lightweight, enhancing both its aesthetics and
                            performance.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                      <div className="w-full lg:px-20">
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Metal-Grille.webp"
                          alt=" Metal Grille"
                        />
                        <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                          <div className="pb-2 font-medium">Metal Grille</div>
                          <div className="font-light lg:pr-40">
                            The Metal Grille featured on the Ciaz sedan adds a
                            touch of sophistication to the car's appearance
                            while providing protection and airflow to the
                            engine.
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
                    className="hidden text-white mySwiper-3 md:block"
                  >
                    {/* <SwiperSlide classname="cursor-pointer">
                    <div>
                      <img
                        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/360/1.jpg"
                        alt="Design"
                        className="max-h-24"
                      />
                      <div className="py-2 ">Design</div>
                    </div>
                  </SwiperSlide> */}
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Back-Lamp.webp"
                          alt="LED Tail Lamps"
                          className="max-h-24"
                        />
                        <div className="py-2 ">LED Tail Lamps</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Led-Projector-Head-Lamps.webp"
                          alt=" LED Projector Auto Headlamps"
                          className="max-h-24"
                        />
                        <div className="py-2 ">
                          LED Projector Auto Headlamps
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Fog-Lamp.webp"
                          alt="Fog Lamp"
                          className="max-h-24"
                        />
                        <div className="py-2 ">Fog Lamp</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Alloy-Wheels.webp"
                          alt="Alloy Wheels"
                          className="max-h-24"
                        />
                        <div className="py-2 "> Alloy Wheels</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide classname="cursor-pointer">
                      <div>
                        <img
                          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Metal-Grille.webp"
                          alt=" Metal Grille"
                          className="max-h-24"
                        />
                        <div className="py-2 ">Metal Grille</div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            )}
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
        <div className="pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-4 ">
          SAFETY
        </div>
        <span className="text-md lg:text-lg">
          Reassurance of Safety on Every Drive
        </span>
      </div>
      <div className="py-4 text-2xl font-medium text-center lg:text-3xl "></div>
      <div className="container relative flex flex-col items-center justify-center mx-auto -mt-10">
        <img
          src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/scross/safety/desktop/ciazcar-image-webp.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp"
          alt=" Ciaz Safety Features"
          srcSet=""
          className="m-28 scale-[0.85]"
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
        <div className="absolute left-[10%]  bottom-[63%]    lg:flex-col md:items-start group hidden lg:flex ">
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
        <div className="absolute left-[78%]  bottom-[63%] md:items-start group hidden lg:flex lg:flex-col ">
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

        <div className="absolute left-[77%]  top-[39%]  md:items-start group hidden lg:block ">
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
    </>
  );
}

export default Ciaz;

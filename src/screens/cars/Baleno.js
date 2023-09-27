import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ImageViewer from "../../components/BALENO/ImageViewer";
// import OnRoadPrice from '../../components/utils/OnRoadPrice';
// import Features from "../../components/BALENO/Features";
import { MdOutlineFileDownload } from "react-icons/md";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CarComp, CarEnq2, InvictoCarEnquiry2 } from "./Invicto";
import { products } from "../../constants";
import View360 from "../../components/utils/View360";
import { Tb360View, TbView360 } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function Baleno() {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Define the video source URL based on the browser
  const videoSource = isSafari
    ? "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/Baleno_safari.mov"
    : "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/baleno/Baleno.webm";

  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <Helmet>
        <title>
          New Nexa Baleno Price in Hyderabad | Maruti Baleno 2022 Price, Offers
          & Discounts
        </title>
        <meta
          name="title"
          content="New Nexa Baleno Price in Hyderabad | Maruti Baleno 2022 Price, Offers & Discounts"
        />
        <meta
          name="description"
          content="Nexa New Baleno On- Road Price in Hyderabad. Maruti Baleno 2022 On Road Price Starts from ₹ 6.49* Lakh. Maruti Baleno is Now Available with Head up Display, Equipped With 6 Airbags, Hill Hold Assist, Speed Alert System. Visit Your Nearest Saboo Nexa Showroom for Nexa Baleno Offers & Discounts. Call now."
        />
        <meta
          name="keywords"
          content="Nexa Baleno Price, Baleno offers & disconts, Baleno mileage,Nexa baleno petrol price, Maruti baleno on road price, Maruti baleno variants, baleno images, baleno mileage, Nexa baleno price in hyderabad, Maruti baleno price in hyderabad, baleno price in hyderabad, baleno onroad price in hyderabad, offers on baleno, baleno offers 2022, new baleno price, new baleno price in hyderabad, new baleno 2022 price, new baleno 2022 onroad price, baleno petrol price in hyderabad, baleno 2022 petrol price in hyderabad, new age baleno, new baleno 2022, baleno 2022 price"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/the-new-maruti-baleno/"
        />
        <meta
          property="og:title"
          content="Nexa Baleno On Road Price in Hyderabad | Maruti Baleno Offers & Discounts"
        />
        <meta
          property="og:description"
          content="New Nexa Baleno 2022 price in Hyderabad. Maruti Baleno on Road price starts from ₹ 6.35* Lakh. Maruti Baleno is now available with 1.2litre DualJet, Dual VVT, BS6 engine with Smart Hybrid tech. Visit your nearest Saboo Nexa showroom for Nexa Baleno offers & discounts. Call now."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Baleno.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/the-new-maruti-baleno/"
        />
        <meta
          property="twitter:title"
          content="Nexa Baleno On Road Price in Hyderabad | Maruti Baleno Offers & Discounts"
        />
        <meta
          property="twitter:description"
          content="New Nexa Baleno 2022 price in Hyderabad. Maruti Baleno on Road price starts from ₹ 6.35* Lakh. Maruti Baleno is now available with 1.2litre DualJet, Dual VVT, BS6 engine with Smart Hybrid tech. Visit your nearest Saboo Nexa showroom for Nexa Baleno offers & discounts. Call now."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Baleno.jpg"
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
            poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/new_baleno/1.webp"
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
              THE NEW AGE
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
              className="pb-1 font-serif text-5xl uppercase lg:text-8xl"
            >
              BALENO
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
              className="mb-2 text-2xl uppercase lg:text-5xl lg:mb-4"
            >
              TECH GOES BOLD
            </div>
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/The_New_Age_Baleno_Brochure.pdf"
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
      <CarEnq2 title="BOOK YOUR Baleno" />
      <Variant />
      <BalenoFeature />
      <Technology />
      <div className="pt-2 text-white bg-black ">
        <div className="w-full pt-10 pb-8 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          COLOURS
        </div>
      </div>
      <div className="bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/Baleno_Banner_Blue.webp)] bg-cover bg-no-repeat bg-center pt-20 overflow-hidden ">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 py-16 lg:py-0">
            <div className="my-auto mx-auto space-y-5 px-8 sm:px-0">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/logobaleno-white-new.webp"
                className="mx-auto"
                alt="title"
              />
              <a
                href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/The_New_Age_Baleno_Brochure.pdf"
                className="p-3 bg-black text-gray-200 flex items-center max-w-[200px] ml-3"
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
            <div className="col-span-2">
              <div className="mx-auto">
                {/* Granite-Grey */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/CelestialBlue.webp"
                  alt="Saboo-Nexa-Baleno-Colours-CelestialBlue"
                  className={
                    tabsColors === 1
                      ? "lg:h-[415px] lg:mt-32 ml-[14%] mr-auto"
                      : "hidden"
                  }
                />

                {/* Nexa-Blue */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/ArticWhite.webp"
                  alt="Saboo-Nexa-Baleno-Colours-NEXA-ArticWhite"
                  className={
                    tabsColors === 2
                      ? "lg:h-[415px] lg:mt-32 ml-[14%] mr-auto"
                      : "hidden"
                  }
                />

                {/* Pearl-Arctic-White */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/SplendidSilver.webp"
                  alt="Saboo-Nexa-Baleno-Colours-SplendidSilver"
                  className={
                    tabsColors === 3
                      ? "lg:h-[415px] lg:mt-32 ml-[14%] mr-auto"
                      : "hidden"
                  }
                />

                {/* Metallic-Auburn */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/GrandeurGrey.webp"
                  alt="Saboo-Nexa-Baleno-Colours-GrandeurGrey"
                  className={
                    tabsColors === 4
                      ? "lg:h-[415px] lg:mt-32 ml-[14%] mr-auto"
                      : "hidden"
                  }
                />

                {/* Premium Silver */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/OpulantRed.webp"
                  alt="Saboo-Nexa-Baleno-Colours-OpulantRed"
                  className={
                    tabsColors === 5
                      ? "lg:h-[415px] lg:mt-32 ml-[14%] mr-auto"
                      : "hidden"
                  }
                />

                {/* brave khaki */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/LuxeBeige.webp"
                  alt="Saboo-Nexa-Baleno-Colours-LuxeBeige"
                  className={
                    tabsColors === 6
                      ? "lg:h-[415px] lg:mt-32 ml-[14%] mr-auto"
                      : "hidden"
                  }
                />
              </div>
              <div className="flex items-center justify-center mb-3">
                <div onClick={() => setTabsColors(1)}>
                  <div className={tabsColors === 1 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#31416d] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#31416d]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 1 ? "w-6 h-6 bg-[#31416d] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(2)}>
                  <div className={tabsColors === 2 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#ffffff] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#ffffff]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 2 ? "w-6 h-6 bg-[#ffffff] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(3)}>
                  <div className={tabsColors === 3 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#afb3b8] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                  </div>
                  <p
                    className={
                      tabsColors !== 3 ? "w-6 h-6 bg-[#afb3b8] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(4)}>
                  <div className={tabsColors === 4 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#545454] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#545454]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 4 ? "w-6 h-6 bg-[#545454] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(5)}>
                  <div className={tabsColors === 5 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#a31326] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#a31326]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 5 ? "w-6 h-6 bg-[#a31326] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(6)}>
                  <div className={tabsColors === 6 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#704e40] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#704e40]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 6 ? "w-6 h-6 bg-[#704e40] mr-2" : "hidden"
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
                Nexa Blue
              </p>
              <p
                className={
                  tabsColors === 2
                    ? "text-center font-semibold text-lg my-2"
                    : "hidden"
                }
              >
                Pearl Arctic White
              </p>
              <p
                className={
                  tabsColors === 3
                    ? "text-center font-semibold text-lg my-2"
                    : "hidden"
                }
              >
                Splendid Silver
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
                Opulent Red
              </p>
              <p
                className={
                  tabsColors === 6
                    ? "text-center font-semibold text-lg my-2"
                    : "hidden"
                }
              >
                Luxie Beige
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Variant /> */}
      {/* <ImageViewer /> */}
      {/* <OnRoadPrice title={'Baleno'} /> */}
      {/* <Features /> */}
      <Bi360 />
      <BalenoSafety />
      <div className="pt-2  ">
        <div className="w-full pt-12 pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          Design
        </div>
      </div>
      <ImageOptions />
      <CarComp details={products[5]} />
      <InvictoCarEnquiry2 title="BOOK YOUR BALENO" carName="Baleno" />
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState("6,61,000");
  return (
    <div className=" bg-opacity-25  bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp')] bg-fixed  bg-black">
      <div className="container mx-auto bg-opacity-10 bg-black py-20 ">
        <div className="grid md:grid-cols-3 md:space-y-0 space-y-3">
          <div className="space-y-3 mx-auto md:mx-0">
            <p className="uppercase text-gray-300">select car Variant</p>
            <select
              name="model"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <option value="6,61,000">SIGMA </option>
              <option value="7,45,000">DELTA</option>
              <option value="8,38,000">ZETA</option>
              <option value="9,33,000">ALPHA </option>
              <option value="8,35,000">DELTA CNG</option>
              <option value="9,28,000">ZETA CNG</option>
              <option value="8,00,000">DELTA AT</option>
              <option value="8,90,000">ZETA AT</option>
              <option value="9,88,000"> ALPHA AT</option>
            </select>
          </div>
          <div className="text-center text-gray-200">
            <p className="text-2xl font-bold">₹ {price}*</p>
            <p className="tracking-wide text-xl">Ex-Showroom Price</p>
            <p className="tracking-wide text-xl">HYDERABAD</p>
          </div>
          <div className="text-center">
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

const ImageOptions = () => {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 ">
        <div className="overflow-hidden cursor-pointer">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-1177x751-exterior-liquid-flow.webp"
            alt="Saboo-Nexa-Maruti-Suzuki-Baleno-Front-Lamp"
            className="w-full hover:scale-105 duration-500"
          />
        </div>
        <div className="my-auto mx-auto space-y-3 py-2 md:p-8">
          <p className="text-3xl  font-medium ">Enhanced Liquid Flow Design</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            The New Age Baleno is a sight to behold. Carrying forward the Liquid
            Flow Aesthetic, it exudes boldness from every curve. Its dynamic
            stance with strong shoulders and sharp character lines flow with
            harmony, from front to back. So, no matter if you see it coming, or
            passing by, you won’t be able to look away.
          </p>
        </div>
      </div>

      <div className="grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 ">
        <div className="my-auto mx-auto space-y-3 p-2">
          <p className="text-3xl  font-medium">NEXWave Grille</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            The signature NEXWave Grille is the first thing you see when you
            look upon the New Age Baleno. And it gets harder to look anywhere
            else. This artistically crafted grille with accentuated chrome
            strips gives Baleno a wider look, making it even more intimidating
            than ever before.
          </p>
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-749x751-grille.webp"
            alt="Saboo-Nexa-Maruti-Suzuki-Baleno-Front-Gril"
            className="w-full hover:scale-105 duration-500"
          />
        </div>
      </div>

      <div className="grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 ">
        <div className="overflow-hidden cursor-pointer">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-751x379-alloy-wheels.webp"
            alt="Saboo-Nexa-Maruti-Suzuki-Baleno-Alloy-Wheel"
            className="w-full hover:scale-105 duration-500"
          />
        </div>
        <div className="my-auto mx-auto space-y-3 p-2">
          <p className="text-3xl  font-medium">
            16-Inch Precision Cut Alloy Wheels
          </p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            They are bold. They are sharp. And they drive the style quotient of
            the New Age Baleno to a whole new level. Even when parked. These new
            16-Inch Precision Cut Alloy Wheels are crafted to perfection and are
            made to stand out.
          </p>
        </div>
      </div>

      <div className="grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 ">
        <div className="my-auto mx-auto space-y-3 p-2">
          <p className="text-3xl  font-medium">Interior Design</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            The New Age Baleno is more than just good looks. It is comfort
            reimagined. So, immerse yourself in the state-of-the-art cabin
            crafted with sleek chrome accentuation with smooth and natural flow
            lines. Bask in the glory of the Dual-tone Interiors with Piano Black
            inserts. And relax in the lap of the comfortable seats with deep
            curves for an indulgent experience like never before.
          </p>
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-1177x751-interior.webp"
            alt="Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp"
            className="w-full hover:scale-105 duration-500"
          />
        </div>
      </div>
      <div className="grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 ">
        <div className="overflow-hidden cursor-pointer">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-749x751-LED-DRLs.webp"
            alt="Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp"
            className="w-full hover:scale-105 duration-500"
          />
        </div>
        <div className="my-auto mx-auto space-y-3 p-2 md:p-8">
          <p className="text-3xl  font-medium">
            NEXTre' LED Rear Combination Lights
          </p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            The New Age Baleno never ceases to bowl you over with its looks.
            Even when viewed from behind. The sharp and stylish NEXTre’ LED Rear
            Combination Lights flow and merge effortlessly with the Liquid Flow
            Aesthetics of the Baleno, adding more flair to its bold looks.
          </p>
        </div>
      </div>
      <div className="grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 ">
        <div className="my-auto mx-auto space-y-3 p-2">
          <p className="text-3xl  font-medium">
            LED Projector Headlamps With NEXTre’ LED DRLs
          </p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            The night is when the New Age Baleno truly comes alive. Driving down
            the beautiful tarmac, the Projector Headlamps with signature NEXTre’
            LED DRLs make a bold impression that is hard to forget. These
            crystal-clear Headlamps and sharp DRLs can brighten up any road. Day
            or night. Moreover, they can detect the lighting conditions around
            you and automatically turn on or off.
          </p>
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-751x379-Rear-lamps.webp"
            alt="Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp"
            className="w-full hover:scale-105 duration-500"
          />
        </div>
      </div>
    </div>
  );
};

const BalenoFeature = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      img: "https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-dual-tone-interior.webp?la=en&hash=501DB529D6892F9E55DEEDBFE6C7D8B0",
      title: "Dual-Tone Interiors",
      body: "The Dual-Tone Interiors in the New Age Baleno provide a premium look to its plush and spacious cabin.",
    },
    {
      img: "https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-cruise-control.webp?la=en&hash=0FE70CFB1EAC1FA30479715D18BF1513",
      title: "Cruise Control",
      body: "The Cruise Control system makes all your long journeys comfortable by letting you pick a cruising speed over 40km/hr.",
    },
    {
      img: "https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-rear-usb-ctype.webp?la=en&hash=0DCD359314C8674C77250987F22347C9",
      title: "Rear USB Type A and Type C Charger",
      body: "Never run out of charge for your gadgets with the best-in-segment Rear USB Type A and Type C fast charging ports.",
    },
    {
      img: "https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-rear-ac-vent.webp?la=en&hash=278DDB105013B8E48433B3D5A2DA28F1",
      title: "Rear AC Vents",
      body: "The New Age Baleno comes with Rear AC Vents for your convenience. Now, stay comfortable even on the hottest of days.",
    },
    {
      img: "https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-entre-armrest.webp?la=en&hash=D09CE4ED95BD94689DE51BE8DA7CD501",
      title: "Center Armrest with Storage",
      body: "Experience a world of comfort with the thoughtfully designed sliding center armrest.",
    },
    {
      img: "https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/tilt-telescopic.webp?la=en&hash=8E9BA2D69D0083E04869365A59E6FB74",
      title: "Tilt and Telescopic Steering",
      body: "The New Age Baleno comes with a Tilt and Telescopic steering that lets you adjust the steering as per your convenience for a comfortable driving experience. What’s more, it also gets enhanced steering returnability and enhanced high-speed straight-line stability.",
    },
    {
      img: "https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/anti-pinch.webp?la=en&hash=4F9EFC023B0420F9459D52DFE4835F22",
      title: "Anti-Pinch Window",
      body: "For your safety, the New Age Baleno comes with a Driver-Side Anti-Pinch Power Window that retracts, whenever it detects an obstacle.",
    },
    {
      img: "https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/boot-space.webp?la=en&hash=AFE4073ADD7D3E4D11DB1271BD61E633",
      title: "Boot Space with 60:40 Rear Split",
      body: "    Make room for excess luggage with rear seat split.",
    },
    {
      img: "https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/uv-cut-glasses_new.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp",
      title: "UV Cut Glass",
      body: "Stay protected from the harmful UV radiations as the New Age Baleno comes with UV Cut Glass windows.",
    },
    {
      img: "https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/bottle-holder.webp?la=en&hash=81F5584FB472B425D9CF576498136C81",
      title: "Bottle Holder",
      body: "Enjoy extra space to store water bottles and stay hydrated during long journeys.",
    },
  ];
  return (
    <div className="bg-black ">
      <div className="container mx-auto text-center text-white ">
        <div className="w-full pt-8 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          FEATURES
        </div>
        <div className="text-center text-md lg:text-lg">
          Convenience Goes Bold
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
              {data.map((x, index) => (
                <SwiperSlide key={index} className="relative">
                  <div className="w-full lg:px-20">
                    <img src={x.img} alt={x.title} className="" />
                    <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                      <div className="pb-2 font-medium">{x.title}</div>
                      <div className="font-light lg:pr-40">{x.body}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
              {data.map((x, index) => (
                <SwiperSlide key={index} classname="cursor-pointer">
                  <div>
                    <img src={x.img} alt={x.title} className="max-h-24" />
                    <div className="py-2 ">{x.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const BalenoSafety = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      img: "https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/baleno_safety_1170x521_2.webp?la=en&hash=94D62D5DB05733A8C55309B51310E4FF",
      title: "Electronic Stability Program      ",
      body: "The New Age Baleno comes equipped with Electronic Stability Program (ESP), which helps in improved vehicle control during cornering, immediate lane changes to avoid obstacles and provides more stability while driving on uneven or broken roads.",
    },
    {
      img: "https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/baleno_safety_1170x521_3.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp",
      title: "6 Airbags",
      body: "For the first time ever, Baleno gets 6 Airbags (Front, Side, and Curtain), that provide advanced safety in the event of a collision.",
    },
    {
      img: "https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/baleno_safety_1170x521_4.webp?la=en&hash=059A548C69A8DCAEEEEE0C0997D858C3",
      title: "ISOFIX Child Seat Anchorages",
      body: "The New Age Baleno comes with ISOFIX Child Seat anchorages, for that perfect drive with your little ones.",
    },
    {
      img: "https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/seat-belt-reminder.webp?la=en&hash=675B76A21894F857DA9A3125BB4F64EE",
      title: "Seat Belt Reminder",
      body: "The New Age Baleno comes with seat belt reminders for the driver and all passengers with an indication and a buzzer. Seat belt reminder comes on unless all rear passenger’s seat belts are fastened irrespective of the presence or absence of passenger.",
    },
    {
      img: "https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/baleno_safety_1170x521_6.webp?la=en&hash=E12B6B687D63F09F377F0C80292FE005",
      title: "Rear Parking Assist Sensors",
      body: "Parking in tough spots is now easier in the New Age Baleno as it is equipped with Rear Parking Assist Sensors.",
    },
    {
      img: "https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/features/safety_banner_7.webp?la=en&hash=E1D3A8A9996A3B51A53C7CDCF865BD07",
      title: "Hill Hold Assist",
      body: "Hill Hold Assist helps the car to not to go back after you leave break and before you accelerate.",
    },
  ];
  return (
    <div className="bg-black ">
      <div className="container mx-auto text-center text-white ">
        <div className="w-full pt-8 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          SAFETY
        </div>
        <div className="text-center text-md lg:text-lg">Safety Goes Bold</div>
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
              {data.map((x, index) => (
                <SwiperSlide key={index} className="relative">
                  <div className="w-full lg:px-20">
                    <img src={x.img} alt={x.title} className="" />
                    <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                      <div className="pb-2 font-medium">{x.title}</div>
                      <div className="font-light lg:pr-40">{x.body}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
              {data.map((x, index) => (
                <SwiperSlide key={index} classname="cursor-pointer">
                  <div>
                    <img src={x.img} alt={x.title} className="max-h-24" />
                    <div className="py-2 ">{x.title}</div>
                  </div>
                </SwiperSlide>
              ))}
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
          Intelligence Goes Bold
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
                src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/technology/technology-1080x420-ags.webp"
                alt="AGS Baleno"
                className="relative "
              />
              <div className="w-full pt-4 text-left  ">
                <div className="pb-2 font-medium">AGS</div>
                <div className="font-light lg:pr-40">
                  The New Age Baleno makes your driving experience smooth and
                  seamless with the 5-speed Auto Gear Shift. It makes your
                  drives refreshing, as it allows you to seamlessly choose
                  between automatic and manual transmission.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-full ">
              <img
                src="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/technology/technology-1080x420-hud.webp"
                alt="Head Up Display"
                className="relative "
              />
              <div className="w-full pt-4 text-left ">
                <div className="pb-2 font-medium">Head Up Display</div>
                <div className="text-sm font-light lg:pr-40 md:text-base">
                  The feel of driving the New Age Baleno is more intuitive and
                  instinctive with the new Head Up Display. Gently rising up in
                  front of you. It’s nothing short of a sensorial thrill. Now
                  you can enjoy driving in the city without taking your eyes off
                  the road. Check turn-by-turn navigation, speed, RPM, AC
                  functions, fuel economy, and warning notifications in colour
                  with multi-display options in your line of sight. You can also
                  adjust the brightness, angle, and view modes of the Head Up
                  Display.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="w-full">
              <img
                src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/technology/technology-1080x420-360-camera-view.webp"
                alt="360 View Camera"
              />
              <div className="w-full pt-4 text-left ">
                <div className="pb-2 font-medium"> 360 View Camera</div>
                <div className="text-sm font-light lg:pr-40 md:text-base">
                  Intelligence is all about knowing what’s around you. And the
                  New Age Baleno lets you see everything around you with the 360
                  View Camera. Experience the ease of driving and parking in
                  tight spaces with multiple view modes (3 each for front and
                  back) like never before. Moreover, the Approaching Object
                  Detection (AOD) up to 8 meters intuitively alerts you when
                  deemed necessary. It also offers 3D views of the complete
                  vehicle surroundings as well. And if that was not all, the
                  steering based dynamic grid-lines smartly pave the way for
                  you, into the spot.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="w-full">
              <img
                src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/technology/technology-1080x420-apple-carplay.webp"
                alt="22.86 CM HD Smartplay Pro+"
              />
              <div className="w-full pt-4 text-left ">
                <div className="pb-2 font-medium">
                  22.86 CM HD Smartplay Pro+
                </div>
                <div className="text-sm font-light lg:pr-40 md:text-base">
                  Intuitive. Instinctive. Intelligent. That’s the experience
                  waiting for you inside the New Age Baleno. Now equipped with
                  the all-new 22.86 Cm Full HD touch Screen Display. It comes
                  with an intuitive user interface with Advanced Voice Assist to
                  offer seamless connectivity. And it also boasts of premium
                  superior acoustic tuning experience “Surround Sense” powered
                  by ARKAMYS. Moreover, you can enjoy wireless connectivity for
                  Android Auto*** & Apple CarPlay****
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="w-full ">
              <img
                src="https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/technology/technology-1080x420-suzuki-connect.webp"
                alt="Next Generation Suzuki Connect"
              />
              <div className="w-full pt-4 text-left  ">
                <div className="pb-2 font-medium">
                  Next Generation Suzuki Connect
                </div>
                <div className="text-sm font-light lg:pr-40 md:text-base">
                  The New Age Baleno is smarter than ever with the Next
                  Generation Suzuki Connect - Advanced Telematics Solution,
                  bringing a host of intelligent features to your fingertips.
                  Remotely access the headlamps, hazard lights, doors, alarm,
                  engine immobiliser as well as monitor your car’s battery
                  health in real-time. It also boasts of a host of safety &
                  security functions along with insightful trip and driving
                  behavior report. This is not all, due to its compatibility
                  with Alexa Skill as well as your smartwatch, the New Age
                  Baleno offers a connected car experience in its true sense.
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const Bi360 = () => {
  return (
    <>
      <div className=" text-center  ">
        <div className="w-full pt-10 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:hidden">
          360
          <sup>
            <span className="text-lg">0</span>
          </sup>{" "}
          View
        </div>
        {/* <div>EXPLORE THE ALL-NEW XL6</div> */}
        <div className="pb-4 lg:hidden">
          Take A 360 Degree Look Around The New Age Baleno And Get To Know It
          Better
        </div>
      </div>
      <div className="relative">
        <View360
          path={
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/new_baleno"
          }
          count={34}
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
            Take A 360 Degree Look Around The New Age Baleno And Get To Know It
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

export default Baleno;

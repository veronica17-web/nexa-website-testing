import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageViewer from "../../components/CIAZ/ImageViewer";
// import OnRoadPrice from "../../components/utils/OnRoadPrice";
import Features from "../../components/CIAZ/Features";
import { MdOutlineFileDownload } from "react-icons/md";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { CarComp, CarEnq2, InvictoCarEnquiry2 } from "./Invicto";
import { products } from "../../constants";

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
      <Header  />
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
      {/* <Variant /> */}
      <ImageViewer />
      {/* <OnRoadPrice title={"ciaz"} /> */}
      <Features />
      <ImageOptions />
      <CarComp details={products[6]} />
      <InvictoCarEnquiry2 title="BOOK YOUR CIAZ" carName="Ciaz" />
    </>
  );
}
const Variant = () => {
  const [price, setPrice] = useState("9,30,000");
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
          <div className="text-center text-gray-200">
            <p className="text-2xl font-bold">₹ {price}*</p>
            <p className="tracking-wide text-xl">Ex-Showroom Price</p>
            <p className="uppercase text-gray-400 font-bold">Hyderabad</p>
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

const ImageOptions = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid shadow-lg sm:grid-cols-2 p-2 lg:p-8 ">
        <div>
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/key-visual-ciaz1-e1561609099843.webp"
            alt="key-visual-ciaz1"
            className="w-full"
          />
        </div>
        <div className="my-auto mx-auto space-y-3  lg:p-8">
          <p className="text-3xl font-medium ">Design</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            Thoughtfully crafted and exquisitely designed, the New Ciaz captures
            your imagination from the moment you set your eyes on its gorgeous
            front fascia. And continues to enamour you all the way to the rear.
            It’s a complete charmer that breathes elegance in every move.
          </p>
        </div>
      </div>

      <div className="grid shadow-lg sm:grid-cols-2 p-2 lg:p-8">
        <div className="my-auto mx-auto space-y-3 py-2">
          <p className="text-3xl font-medium">LED Projector Auto Headlamps</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            The LED Projector auto headlamps with DRLs captivate at first
            glance.
          </p>
        </div>
        <div className="pb-2">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/headlamps-e1561608366238.webp"
            alt="headlamps-e1561608366238"
            className="w-full"
          />
        </div>
      </div>

      <div className="grid shadow-lg sm:grid-cols-2 p-2 mt-3 lg:p-8">
        <div>
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Back-Lamp.webp"
            alt="Saboo-Nexa-Ciaz-Exterior-Back-Lamp"
            className="w-full"
          />
        </div>
        <div className="my-auto mx-auto space-y-3 py-3 lg:p-8 ">
          <p className="text-3xl font-medium">LED Tail Lamps</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>Gracefully designed Tail Lamps make heads turn on the streets.</p>
        </div>
      </div>

      <div className="grid shadow-lg sm:grid-cols-2 p-2 lg:p-8 mt-3">
        <div className="my-auto mx-auto space-y-3 pb-3">
          <p className="text-3xl font-medium">Luxurious Interiors</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>Step inside and breathe in the most spacious cabin.</p>
        </div>
        <div className="pb-2">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Spacious-Interiors.webp"
            alt="Saboo-Nexa-Ciaz-Spacious-Interiors"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Ciaz;

// import React from 'react'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OnRoadPrice from "../../components/utils/OnRoadPrice";
import { MdOutlineFileDownload } from "react-icons/md";
import Header from "../../components/Header/Header";
import ImageViewer from "../../components/Vitara/ImageViewer";
import Helmet from "react-helmet";
import Features from "../../components/Vitara/Features";

function GrandVitara() {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Grand Vitara On Road Price in Hyderabad | Offers on
          Grand Vitara
        </title>
        <meta
          name="title"
          content="Nexa Grand Vitara Car On-Road Price, Mileage, Specifications & Offers | Saboo Nexa"
        />
        <meta
          name="description"
          content="Maruti Suzuki Grand Vitara On Road Price in Hyderabad.  Nexa Grand Vitara A New Breed of SUV from Nexa, with Premium Features, Like Panoramic Sunroof, Alloy Wheels, Digital Multi Information Display, Head Up Display, For More Informatio on Grand Vitara. Call Now"
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
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/background_grand_vitara.webp')] bg-center w-full bg-cover bg-no-repeat">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2">
            <div className="my-auto mx-auto">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/grand-vitara-logo.webp"
                alt="title"
              />
              <a
                href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/grand_vitara.pdf"
                className="p-3 bg-white text-gray-900 flex items-center max-w-[200px] ml-3 mt-5 rounded"
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
            <div>
              <div className="mx-auto">
                {/* Celestial Blue */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_celestial_blue.webp"
                  alt="saboo-nexa-ignis-colours-nexa-blue"
                  className={tabsColors === 1 ? "mx-auto" : "hidden"}
                />

                {/* Arctic-white */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_arctic_white.webp"
                  alt="saboo-nexa-ignis-colours-uptown-red"
                  className={tabsColors === 2 ? "mx-auto" : "hidden"}
                />

                {/* Arctic-White-Midnight black */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_arctic_white_midnight_black.webp"
                  alt="saboo-nexa-ignis-colours-silky-silver"
                  className={tabsColors === 3 ? "mx-auto" : "hidden"}
                />

                {/* Chestnut Brown */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_cave_black.webp"
                  alt="saboo-nexa-ignis-colours-tinsel-blue"
                  className={tabsColors === 4 ? "mx-auto" : "hidden"}
                />

                {/* Grandeur Grey */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_grandeur_grey.webp"
                  alt="saboo-nexa-ignis-colours-glistening-grey"
                  className={tabsColors === 5 ? "mx-auto" : "hidden"}
                />

                {/* Oppulent Red */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_oppulent_red.webp"
                  alt="saboo-nexa-ignis-colours-pearl-arctic-white"
                  className={tabsColors === 6 ? "mx-auto" : "hidden"}
                />
                {/* Oppulent Red Midnight Black */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_oppulent_red_midnight_black.webp"
                  alt="saboo-nexa-ignis-lucent-orange-with-black-roof"
                  className={tabsColors === 7 ? "mx-auto" : "hidden"}
                />
                {/* Splendid silver */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_splendid_silver.webp"
                  alt="saboo-nexa-ignis-tinsel-blue-arctic-white"
                  className={tabsColors === 8 ? "mx-auto" : "hidden"}
                />
                {/* Splendid silver midnight black */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_splendid_silver_midnight_black.webp"
                  alt="saboo-nexa-ignis-tinsel-blue-midnight-black"
                  className={tabsColors === 9 ? "mx-auto" : "hidden"}
                />
              </div>
              <div className="flex items-center justify-center mb-3">
                <div onClick={() => setTabsColors(1)}>
                  <div className={tabsColors === 1 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#163472] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#163472]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 1 ? "w-6 h-6 bg-[#163472] mr-2" : "hidden"
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
                      tabsColors !== 2 ? "w-6 h-6 bg-[#f9f9f9] mr-2" : "hidden"
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
                      tabsColors !== 8 ? "w-6 h-6 bg-[#B6BABD] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(9)}>
                  <div className={tabsColors === 9 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/splendid-silver-black.webp')] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
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
                      ? "text-center font-semibold text-lg my-2 text-gray-100"
                      : "hidden"
                  }
                >
                  Celestial Blue
                </p>
                <p
                  className={
                    tabsColors === 2
                      ? "text-center font-semibold text-lg my-2 text-gray-100"
                      : "hidden"
                  }
                >
                  Arctic White
                </p>
                <p
                  className={
                    tabsColors === 3
                      ? "text-center font-semibold text-lg my-2 text-gray-100"
                      : "hidden"
                  }
                >
                  Arctic White Midnight Black
                </p>
                <p
                  className={
                    tabsColors === 4
                      ? "text-center font-semibold text-lg my-2 text-gray-100"
                      : "hidden"
                  }
                >
                  Chestnut Brown
                </p>
                <p
                  className={
                    tabsColors === 5
                      ? "text-center font-semibold text-lg my-2 text-gray-100"
                      : "hidden"
                  }
                >
                  Grandeur Grey
                </p>
                <p
                  className={
                    tabsColors === 6
                      ? "text-center font-semibold text-lg my-2 text-gray-100"
                      : "hidden"
                  }
                >
                  Oppulent Red
                </p>
                <p
                  className={
                    tabsColors === 7
                      ? "text-center font-semibold text-lg my-2 text-gray-100"
                      : "hidden"
                  }
                >
                  Oppulent Red Midnight Black
                </p>
                <p
                  className={
                    tabsColors === 8
                      ? "text-center font-semibold text-lg my-2 text-gray-100"
                      : "hidden"
                  }
                >
                  Splendid Silver
                </p>
                <p
                  className={
                    tabsColors === 9
                      ? "text-center font-semibold text-lg my-2 text-gray-100"
                      : "hidden"
                  }
                >
                  Splendid Silver Midnight Black
                </p>
              </>
            </div>
          </div>
        </div>
      </div>
      <Variant />
      {/* <ImageViewer /> */}
      <OnRoadPrice title={"Grand Vitara"} />
      <Features />
      {/* <ImageOptions /> */}
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState("-");
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
              <option value="-">GRAND VITARA</option>
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
    <div className="container mx-auto px-5 md:px-0">
      <div className="grid shadow-lg sm:grid-cols-2 p-8 ">
        <div>
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-front-grill.webp"
            alt="saboo-nexa-ignis-exterior-front-grill"
            className="w-full"
          />
        </div>
        <div className="my-auto mx-auto space-y-3 p-8">
          <p className="text-3xl font-bold ">Sporty Rear</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            The New Ignis is equipped with a Striking Rear Spoiler and Roof
            Rails, which enhances the Sporty Look.
          </p>
        </div>
      </div>

      <div className="grid shadow-lg sm:grid-cols-2 p-8">
        <div className="my-auto mx-auto space-y-3 p-5">
          <p className="text-3xl font-bold">Imposing Chrome Grille</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            Taking the tough look up a notch, the New Ignis is equipped with an
            Imposing Chrome Grille which leaves a lasting impression.
          </p>
        </div>
        <div>
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-back.webp"
            alt="saboo-nexa-ignis-exterior-back"
            className="w-full"
          />
        </div>
      </div>

      <div className="grid shadow-lg sm:grid-cols-2 p-8">
        <div>
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-side-shot.webp"
            alt="saboo-nexa-ignis-exterior-side-shot"
            className="w-full"
          />
        </div>
        <div className="my-auto mx-auto space-y-3 p-8">
          <p className="text-3xl font-bold">High SUV-like Stance</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            The New Ignis has a high SUV-like Stance which makes it easier to
            get in and off, coupled with a higher seating that allows a great
            road visibility.
          </p>
        </div>
      </div>

      <div className="grid shadow-lg sm:grid-cols-2 p-8">
        <div className="my-auto mx-auto space-y-3">
          <p className="text-3xl font-bold">Toughened Exterior</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            Adding to the toughness, the New Ignis comes with stunning 15”
            All-Black Alloy Wheels, All-Around Cladding and Sturdy New Front &
            Rear Skid Plates.
          </p>
        </div>
        <div>
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-Toughened.webp"
            alt="saboo-nexa-ignis-exterior-Toughened"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GrandVitara;

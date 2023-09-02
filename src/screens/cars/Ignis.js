// import React from 'react'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageViewer from "../../components/IGNIS/ImageViewer";
import OnRoadPrice from "../../components/utils/OnRoadPrice";
import Features from "../../components/IGNIS/Features";
import { MdOutlineFileDownload } from "react-icons/md";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Ignis() {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <Helmet>
        <title>Nexa Ignis Price & Offers in Hyderabad | Saboo Nexa</title>
        <meta
          name="title"
          content="Nexa Ignis Price & Offers in Hyderabad | Saboo Nexa"
        />
        <meta
          name="description"
          content="Get latest offers on Maruti Ignis.Mruti Ignis On Road Price in Hyderabad. Price starts from Rs.5.35* lakh, Mileage of 24.3 Km/l & available in 4 variants. Call now for Nexa Ignis On Road price."
        />
        <meta
          name="keywords"
          content="Ignis on road price, Maruti Ignis offers, Ignis mileage,Nexa ignis petrol price, Maruti ignis on road price, Maruti ignis variants, ignis images, ignis mileage, Nexa ignis price in hyderabad, Maruti ignis price in hyderabad, ignis price in hyderabad, ignis onroad price in hyderabad, offers on ignis, ignis offers 2022, new ignis price, new ignis price in hyderabad, new ignis 2022 price, new ignis 2022 onroad price, ignis petrol price in hyderabad, ignis 2022 petrol price in hyderabad"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/maruti-ignis/"
        />
        <meta
          property="og:title"
          content="Nexa Ignis On Road Price & Offers in Hyderabad | Saboo Nexa"
        />
        <meta
          property="og:description"
          content="Get latest offers on Maruti Ignis 2022. Price starts from Rs.5.25* lakh, mileage of 24.3 Km/l & available in 4 variants. Call now for Nexa Ignis On-road price."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/maruti-ignis/"
        />
        <meta
          property="twitter:title"
          content="Nexa Ignis On Road Price & Offers in Hyderabad | Saboo Nexa"
        />
        <meta
          property="twitter:description"
          content="Get latest offers on Maruti Ignis 2022. Price starts from Rs.5.25* lakh, mileage of 24.3 Km/l & available in 4 variants. Call now for Nexa Ignis On-road price."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Helmet>
      <Header />
      <div className="relative">
        <div className="top-0 left-0 w-full h-screen ">
          <video
            className="object-cover w-full h-full "
            preload="metadata"
            loop
            autoPlay
            playsInline
            muted
            poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/360/5.jpg"
          >
            <source
              // class='w-30 h-30'
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/ignis/ignis_banner.webm"
              type="video/mp4"
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
              IGNIS
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
              className="mb-2 text-2xl uppercase lg:text-5xl lg:mb-4"
            >
              CREATED TO INSPIRE THE TOUGHNESS IN YOU
            </div>
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/Maruti-Suzuki-Ignis-Broucher.pdf"
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
      <div className="bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-Background-Banners/Saboo-RKS-Nexa-Ignis-Car-Background.webp)] bg-center w-full bg-cover bg-no-repeat pt-20  lg:pt-36">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2">
            <div className="my-auto mx-auto">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-RKS-Nexa-Ignis-Title.webp"
                alt="title"
              />
              <a
                href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/Maruti-Suzuki-Ignis-Broucher.pdf"
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
                {/* Granite-Grey */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/saboo-nexa-ignis-colours-nexa-blue.webp"
                  alt="saboo-nexa-ignis-colours-nexa-blue"
                  className={tabsColors === 1 ? "mx-auto" : "hidden"}
                />

                {/* Nexa-Blue */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/saboo-nexa-ignis-colours-uptown-red.webp"
                  alt="saboo-nexa-ignis-colours-uptown-red"
                  className={tabsColors === 2 ? "mx-auto" : "hidden"}
                />

                {/* Pearl-Arctic-White */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/saboo-nexa-ignis-colours-silky-silver.webp"
                  alt="saboo-nexa-ignis-colours-silky-silver"
                  className={tabsColors === 3 ? "mx-auto" : "hidden"}
                />

                {/* Metallic-Auburn */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/saboo-nexa-ignis-colours-tinsel-blue.webp"
                  alt="saboo-nexa-ignis-colours-tinsel-blue"
                  className={tabsColors === 4 ? "mx-auto" : "hidden"}
                />

                {/* Premium Silver */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/saboo-nexa-ignis-colours-glistening-grey.webp"
                  alt="saboo-nexa-ignis-colours-glistening-grey"
                  className={tabsColors === 5 ? "mx-auto" : "hidden"}
                />

                {/* brave khaki */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/saboo-nexa-ignis-colours-pearl-arctic-white.webp"
                  alt="saboo-nexa-ignis-colours-pearl-arctic-white"
                  className={tabsColors === 6 ? "mx-auto" : "hidden"}
                />
                {/* brave khaki */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/saboo-nexa-ignis-lucent-orange-with-black-roof.webp"
                  alt="saboo-nexa-ignis-lucent-orange-with-black-roof"
                  className={tabsColors === 7 ? "mx-auto" : "hidden"}
                />
                {/* brave khaki */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/saboo-nexa-ignis-tinsel-blue-arctic-white.webp"
                  alt="saboo-nexa-ignis-tinsel-blue-arctic-white"
                  className={tabsColors === 8 ? "mx-auto" : "hidden"}
                />
                {/* brave khaki */}
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/saboo-nexa-ignis-tinsel-blue-midnight-black.webp"
                  alt="saboo-nexa-ignis-tinsel-blue-midnight-black"
                  className={tabsColors === 9 ? "mx-auto" : "hidden"}
                />
              </div>
              <div className="flex items-center justify-center mb-3">
                <div onClick={() => setTabsColors(1)}>
                  <div className={tabsColors === 1 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#183f66] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#183f66]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 1 ? "w-6 h-6 bg-[#183f66] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(2)}>
                  <div className={tabsColors === 2 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#e34c26] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#e34c26]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 2 ? "w-6 h-6 bg-[#e34c26] mr-2" : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(3)}>
                  <div className={tabsColors === 3 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#afaeaf] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#afaeaf] "></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 3
                        ? "w-6 h-6 bg-[#afaeaf] mr-2 border-2"
                        : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(4)}>
                  <div className={tabsColors === 4 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#10a7d5] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#10a7d5]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 4
                        ? "w-6 h-6 border bg-[#10a7d5] mr-2"
                        : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(5)}>
                  <div className={tabsColors === 5 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#828085] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#828085]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 5
                        ? "w-6 h-6 border bg-[#828085] mr-2"
                        : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(6)}>
                  <div className={tabsColors === 6 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[#ffffff] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className="arrow-dropdown-selected-car border-t-8 border-[#ffffff]"></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 6
                        ? "w-6 h-6 border bg-[#ffffff] mr-2"
                        : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(7)}>
                  <div className={tabsColors === 7 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/nexa-orange-with-black-roof.jpg')] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                  </div>
                  <p
                    className={
                      tabsColors !== 7
                        ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/nexa-orange-with-black-roof.jpg')] mr-2"
                        : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(8)}>
                  <div className={tabsColors === 8 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/nexa-blue-with-sivler-roof.jpg')] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                  </div>
                  <p
                    className={
                      tabsColors !== 8
                        ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/nexa-blue-with-sivler-roof.jpg')] mr-2"
                        : "hidden"
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(9)}>
                  <div className={tabsColors === 9 ? "relative" : "hidden"}>
                    <p className="w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/nexa-blue-with-black-roof.jpg')] mr-[10px] border-t border-x"></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                  </div>
                  <p
                    className={
                      tabsColors !== 9
                        ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/colors/nexa-blue-with-black-roof.jpg')] mr-2"
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
                  Lucant Orange
                </p>
                <p
                  className={
                    tabsColors === 3
                      ? "text-center font-semibold text-lg my-2"
                      : "hidden"
                  }
                >
                  Silky Silver
                </p>
                <p
                  className={
                    tabsColors === 4
                      ? "text-center font-semibold text-lg my-2"
                      : "hidden"
                  }
                >
                  Turquoise Blue
                </p>
                <p
                  className={
                    tabsColors === 5
                      ? "text-center font-semibold text-lg my-2"
                      : "hidden"
                  }
                >
                  Glistening Grey
                </p>
                <p
                  className={
                    tabsColors === 6
                      ? "text-center font-semibold text-lg my-2"
                      : "hidden"
                  }
                >
                  Pearl Arctic White
                </p>
                <p
                  className={
                    tabsColors === 7
                      ? "text-center font-semibold text-lg my-2"
                      : "hidden"
                  }
                >
                  Lucent Orange with Midnight Black Roof
                </p>
                <p
                  className={
                    tabsColors === 8
                      ? "text-center font-semibold text-lg my-2"
                      : "hidden"
                  }
                >
                  Nexa Blue with Silver Roof
                </p>
                <p
                  className={
                    tabsColors === 9
                      ? "text-center font-semibold text-lg my-2"
                      : "hidden"
                  }
                >
                  Nexa Blue with Black Roof
                </p>
              </>
            </div>
          </div>
        </div>
      </div>
      <Variant />
      <ImageViewer />
      <OnRoadPrice title={"Ignis"} />
      <Features />
      <ImageOptions />
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState("5,84,000");
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
              <option value="5,84,000">SIGMA</option>
              <option value="6,38,000">DELTA</option>
              <option value="6,96,000">ZETA</option>
              <option value="7,10,000">ZETA(D)</option>
              <option value="7,61,000">ALPHA</option>
              <option value="7,75,000">ALPHA(D)</option>
              <option value="6,93,000">DELTA AGS (M)</option>
              <option value="7,51,000">ZETA AGS (M)</option>
              <option value="8,16,000">ALPHA AGS (M)</option>
              <option value="7,65,000">ZETA AGS (D)</option>

              <option value="8,30,000">ALPHA AGS (D)</option>
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
      <div className="grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 ">
        <div>
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-front-grill.webp"
            alt="saboo-nexa-ignis-exterior-front-grill"
            className="w-full"
          />
        </div>
        <div className="my-auto mx-auto space-y-3 lg:px-8">
          <p className="text-3xl font-medium ">Sporty Rear</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            The New Ignis is equipped with a Striking Rear Spoiler and Roof
            Rails, which enhances the Sporty Look.
          </p>
        </div>
      </div>

      <div className="grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 ">
        <div className="my-auto mx-auto space-y-3 lg:px-8">
          <p className="text-3xl font-medium">Imposing Chrome Grille</p>
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

      <div className="grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 ">
        <div>
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-side-shot.webp"
            alt="saboo-nexa-ignis-exterior-side-shot"
            className="w-full"
          />
        </div>
        <div className="my-auto mx-auto space-y-3 lg:px-8">
          <p className="text-3xl font-medium">High SUV-like Stance</p>
          <p className="h-1 w-20 bg-black rounded-full "></p>
          <p>
            The New Ignis has a high SUV-like Stance which makes it easier to
            get in and off, coupled with a higher seating that allows a great
            road visibility.
          </p>
        </div>
      </div>

      <div className="grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 ">
        <div className="my-auto mx-auto space-y-3 ">
          <p className="text-3xl font-medium">Toughened Exterior</p>
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
export default Ignis;

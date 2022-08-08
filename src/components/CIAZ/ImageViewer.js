import { Tab } from "@headlessui/react";
import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import View360 from "../utils/View360";

function ImageViewer() {
  return (
    <>
      <Tab.Group>
        <div className="flex items-center justify-center py-8">
          <Tab.List className="space-x-1">
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 ml-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              View 360°
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Exterior
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Interior
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Color
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* Ciaz 360° view  */}
            <Tab.Panel>
              <View360
                path={
                  "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/360"
                }
                count={36}
                format={"jpg"}
              />
            </Tab.Panel>

            {/* exterior */}
            <Tab.Panel>
              <Exterior />
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <Interior />
            </Tab.Panel>

            {/* color */}
            <Tab.Panel>
              <Color />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}

const Exterior = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Alloy-Wheels.webp"
            alt="saboo-nexa-ignis-exterior-back"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Back-Lamp.webp"
            alt="Saboo-Nexa-Ciaz-Exterior-Back-Lamp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Fog-Lamp.webp"
            alt="Saboo-Nexa-Ciaz-Exterior-Fog-Lamp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Led-Projector-Head-Lamps.webp"
            alt="Saboo-Nexa-Ciaz-Exterior-Led-Projector-Head-Lamps"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Metal-Grille.webp"
            alt="Saboo-Nexa-Ciaz-Exterior-Metal-Grille"
          />
        </SwiperSlide>
      </Swiper>
      <div className="max-w-7xl mx-auto -mt-14">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Alloy-Wheels.webp"
              alt="saboo-nexa-ignis-exterior-back"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Back-Lamp.webp"
              alt="Saboo-Nexa-Ciaz-Exterior-Back-Lamp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Fog-Lamp.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Rear-Sunshade"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Led-Projector-Head-Lamps.webp"
              alt="Saboo-Nexa-Ciaz-Exterior-Led-Projector-Head-Lamps"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Metal-Grille.webp"
              alt="Saboo-Nexa-Ciaz-Exterior-Metal-Grille"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const Interior = () => {
  const [interiorSwiper, setInteriorSwiper] = useState(null);
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: interiorSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Auto-Ac.webp"
            alt="Saboo-Nexa-Ciaz-Interior-Auto-Ac"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Automatic-Transmission.webp"
            alt="Saboo-Nexa-Ciaz-Interior-Automatic-Transmission"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Boot-Space.webp"
            alt="Saboo-Nexa-Ciaz-Interior-Boot-Space"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Cruse-Control.webp"
            alt="Saboo-Nexa-Ciaz-Interior-Cruse-Control"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Leather-Upholstery.webp"
            alt="Saboo-Nexa-Ciaz-Interior-Leather-Upholstery"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Multi-Information-Display.webp"
            alt="Saboo-Nexa-Ciaz-Interior-Multi-Information-Display"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Ac-Vent.webp"
            alt="Saboo-Nexa-Ciaz-Interior-Rear-Ac-Vent"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Reading-Lamp.webp"
            alt="Saboo-Nexa-Ciaz-Interior-Rear-Reading-Lamp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Sunshade.webp"
            alt="Saboo-Nexa-Ciaz-Interior-Rear-Sunshade"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Tilt-Steering.webp"
            alt="Saboo-Nexa-Ciaz-Interior-Tilt-Steering"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Wooden-Finish-On-Ip.webp"
            alt="Saboo-Nexa-Ciaz-Interior-Wooden-Finish-On-Ip"
          />
        </SwiperSlide>
      </Swiper>
      <div className="max-w-7xl mx-auto -mt-10">
        <Swiper
          onSwiper={setInteriorSwiper}
          spaceBetween={10}
          slidesPerView={8}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Auto-Ac.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Auto-Ac"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Automatic-Transmission.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Automatic-Transmission"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Boot-Space.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Boot-Space"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Cruse-Control.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Cruse-Control"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Leather-Upholstery.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Leather-Upholstery"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Multi-Information-Display.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Multi-Information-Display"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Ac-Vent.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Rear-Ac-Vent"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Reading-Lamp.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Rear-Reading-Lamp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Boot-Space.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Boot-Space"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Tilt-Steering.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Tilt-Steering"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Wooden-Finish-On-Ip.webp"
              alt="Saboo-Nexa-Ciaz-Interior-Wooden-Finish-On-Ip"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const Color = () => {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
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
    </>
  );
};

export default ImageViewer;

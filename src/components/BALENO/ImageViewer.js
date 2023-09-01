import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import { Tb360View, TbView360 } from "react-icons/tb";

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
import { GiReturnArrow } from "react-icons/gi";

function ImageViewer() {
  return (
    <>
      <Tab.Group>
        <div className="flex items-center justify-center py-8">
          <Tab.List className="space-x-1">
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 ml-3 px-4 py-2 rounded shadow"
              }
            >
              View 360°
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow"
              }
            >
              Exterior
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow"
              }
            >
              Interior
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow"
              }
            >
              Color
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* Baleno 360° view  */}
            <Tab.Panel>
              <div className="relative">
                <View360
                  path={
                    "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/new_baleno"
                  }
                  count={34}
                  format={"webp"}
                />
                <div className="text-white absolute top-10 left-10 flex flex-col items-center ">
                  <TbView360 className="text-2xl lg:text-5xl animate-pulse" />
                   <Tb360View className="text-xl lg:text-4xl" />
                </div>
                 <div className="text-white absolute top-1/2 left-10 lg:left-20 flex flex-col items-center ">
                <GiReturnArrow className="text-2xl lg:text-5xl animate-pulse rotate-180" /> 
                </div>
                <div className="text-white absolute top-1/2 right-10 lg:right-20 flex flex-col items-center ">
                <GiReturnArrow className="text-2xl lg:text-5xl animate-pulse" />
                </div>
              </div>
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
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/taillamps.png"
            alt="saboo-nexa-baleno-taillamps"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/BackSideView.png"
            alt="saboo-nexa-baleno-exterior-BackSideView"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/ExteriorSideAngle.png"
            alt="saboo-nexa-baleno-exterior-ExteriorSideAngle"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/FrontGrioll.png"
            alt="saboo-nexa-baleno-exterior-front-grill"
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
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/taillamps.png"
              alt="saboo-nexa-baleno-exterior-back"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/BackSideView.png"
              alt="saboo-nexa-baleno-exterior-BackSideView"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/ExteriorSideAngle.png"
              alt="saboo-nexa-baleno-exterior-ExteriorSideAngle"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/FrontGrioll.png"
              alt="saboo-nexa-baleno-exterior-front-grill"
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
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/interior/Steering.png"
            alt="Saboo-Nexa-_baleno-Interior-Dual-Tone-Dashboard"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/interior/FrontView.png"
            alt="Saboo-Nexa-baleno-Interior-Reverse-Parking-Sensor"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/interior/AirBags.png"
            alt="Saboo-Nexa-baleno-Interior-AirBags"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/interior/Ags_Cruiser.png"
            alt="Saboo-Nexa-baleno-Interior-Spacious-Inside"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/interior/AC-Vents-And-fast-Charging-Post.png"
            alt="Saboo-Nexa-baleno-Interior-AC-Vents-And-fast-Charging-Post"
          />
        </SwiperSlide>
      </Swiper>
      <div className="max-w-7xl mx-auto -mt-10">
        <Swiper
          onSwiper={setInteriorSwiper}
          spaceBetween={10}
          slidesPerView={7}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/interior/Steering.png"
              alt="Saboo-Nexa-_baleno-Interior-Dual-Tone-Dashboard"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/interior/FrontView.png"
              alt="Saboo-Nexa-baleno-Interior-Reverse-Parking-Sensor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/interior/AirBags.png"
              alt="Saboo-Nexa-baleno-Interior-AirBags"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/interior/Ags_Cruiser.png"
              alt="Saboo-Nexa-baleno-Interior-Spacious-Inside"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/interior/AC-Vents-And-fast-Charging-Post.png"
              alt="Saboo-Nexa-baleno-Interior-AC-Vents-And-fast-Charging-Post"
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
      <div className="mx-auto">
        {/* Granite-Grey */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/CelestialBlue.webp"
          alt="Saboo-Nexa-Baleno-Colours-CelestialBlue"
          className={tabsColors === 1 ? "lg:h-[415px] mx-auto" : "hidden"}
        />

        {/* Nexa-Blue */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/ArticWhite.webp"
          alt="Saboo-Nexa-Baleno-Colours-NEXA-ArticWhite"
          className={tabsColors === 2 ? "lg:h-[415px]  mx-auto" : "hidden"}
        />

        {/* Pearl-Arctic-White */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/SplendidSilver.webp"
          alt="Saboo-Nexa-Baleno-Colours-SplendidSilver"
          className={tabsColors === 3 ? "lg:h-[415px]  mx-auto" : "hidden"}
        />

        {/* Metallic-Auburn */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/GrandeurGrey.webp"
          alt="Saboo-Nexa-Baleno-Colours-GrandeurGrey"
          className={tabsColors === 4 ? "lg:h-[415px]  mx-auto" : "hidden"}
        />

        {/* Premium Silver */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/OpulantRed.webp"
          alt="Saboo-Nexa-Baleno-Colours-OpulantRed"
          className={tabsColors === 5 ? "lg:h-[415px]  mx-auto" : "hidden"}
        />

        {/* brave khaki */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/LuxeBeige.webp"
          alt="Saboo-Nexa-Baleno-Colours-LuxeBeige"
          className={tabsColors === 6 ? "lg:h-[415px] mx-auto" : "hidden"}
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
              tabsColors !== 2 ? "w-6 h-6 bg-[#ffffff] mr-2 border" : "hidden"
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
          tabsColors === 1 ? "text-center font-semibold text-lg my-2" : "hidden"
        }
      >
        Nexa Blue
      </p>
      <p
        className={
          tabsColors === 2 ? "text-center font-semibold text-lg my-2" : "hidden"
        }
      >
        Pearl Arctic White
      </p>
      <p
        className={
          tabsColors === 3 ? "text-center font-semibold text-lg my-2" : "hidden"
        }
      >
        Splendid Silver
      </p>
      <p
        className={
          tabsColors === 4 ? "text-center font-semibold text-lg my-2" : "hidden"
        }
      >
        Grandeur Grey
      </p>
      <p
        className={
          tabsColors === 5 ? "text-center font-semibold text-lg my-2" : "hidden"
        }
      >
        Opulent Red
      </p>
      <p
        className={
          tabsColors === 6 ? "text-center font-semibold text-lg my-2" : "hidden"
        }
      >
        Luxie Beige
      </p>
    </>
  );
};

export default ImageViewer;

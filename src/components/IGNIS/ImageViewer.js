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
            {/* Ignis 360° view  */}
            <Tab.Panel>
              <View360
                path={
                  "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/360"
                }
                count={34}
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
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-back.webp"
            alt="saboo-nexa-ignis-exterior-back"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-front-grill.webp"
            alt="saboo-nexa-ignis-exterior-front-grill"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-push-button-start.webp"
            alt="saboo-nexa-ignis-exterior-push-button-start"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-side-shot.webp"
            alt="saboo-nexa-ignis-exterior-side-shot"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-slide-main.webp"
            alt="saboo-nexa-ignis-exterior-slide-main"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-slide-view-main.webp"
            alt="saboo-nexa-ignis-exterior-slide-view-main"
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
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-back.webp"
              alt="saboo-nexa-ignis-exterior-back"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-front-grill.webp"
              alt="saboo-nexa-ignis-exterior-front-grill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-push-button-start.webp"
              alt="saboo-nexa-ignis-exterior-push-button-start"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-side-shot.webp"
              alt="saboo-nexa-ignis-exterior-side-shot"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-slide-main.webp"
              alt="saboo-nexa-ignis-exterior-slide-main"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-slide-view-main.webp"
              alt="saboo-nexa-ignis-exterior-slide-view-main"
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
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Dual-Tone-Dashboard.webp"
            alt="Saboo-Nexa-_Ignis-Interior-Dual-Tone-Dashboard"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Reverse-Parking-Sensor.webp"
            alt="Saboo-Nexa-_Ignis-Interior-Reverse-Parking-Sensor"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Smart-Play-Infotainment-System.webp"
            alt="Saboo-Nexa-_Ignis-Interior-Smart-Play-Infotainment-System"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Spacious-Inside.webp"
            alt="Saboo-Nexa-_Ignis-Interior-Spacious-Inside"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Speedometer.webp"
            alt="Saboo-Nexa-_Ignis-Interior-Speedometer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Steering.webp"
            alt="Saboo-Nexa-_Ignis-Interior-Steering"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-Interior-Auto-Gear-Shift.webp"
            alt="Saboo-Nexa-Interior-Auto-Gear-Shift"
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
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Dual-Tone-Dashboard.webp"
              alt="Saboo-Nexa-_Ignis-Interior-Dual-Tone-Dashboard"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Reverse-Parking-Sensor.webp"
              alt="Saboo-Nexa-_Ignis-Interior-Reverse-Parking-Sensor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Smart-Play-Infotainment-System.webp"
              alt="Saboo-Nexa-_Ignis-Interior-Smart-Play-Infotainment-System"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Spacious-Inside.webp"
              alt="Saboo-Nexa-_Ignis-Interior-Spacious-Inside"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Speedometer.webp"
              alt="Saboo-Nexa-_Ignis-Interior-Speedometer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-_Ignis-Interior-Steering.webp"
              alt="Saboo-Nexa-_Ignis-Interior-Steering"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/interior/Saboo-Nexa-Interior-Auto-Gear-Shift.webp"
              alt="Saboo-Nexa-Interior-Auto-Gear-Shift"
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
              tabsColors !== 3 ? "w-6 h-6 bg-[#afaeaf] mr-2 border-2" : "hidden"
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
              tabsColors !== 4 ? "w-6 h-6 border bg-[#10a7d5] mr-2" : "hidden"
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
              tabsColors !== 5 ? "w-6 h-6 border bg-[#828085] mr-2" : "hidden"
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
              tabsColors !== 6 ? "w-6 h-6 border bg-[#ffffff] mr-2" : "hidden"
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
    </>
  );
};

export default ImageViewer;

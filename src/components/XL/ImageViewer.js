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
import { Tb360View, TbView360 } from "react-icons/tb";
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
            {/* XL6 360° view  */}
            <Tab.Panel>
            <div className="relative">
            <View360
                path={
                  "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/360"
                }
                count={35}
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
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/fog-light.webp"
            alt="Fog-Light"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/roof-end-spoiler.webp"
            alt="roof-end-spoiler"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/ORVM.webp"
            alt="ORVM"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/UV-cut-glass.webp"
            alt="UV-cut-glass"
          />
        </SwiperSlide>
      </Swiper>
      <div className="max-w-7xl mx-auto -mt-14">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/fog-light.webp"
              alt="Fog-Light"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/roof-end-spoiler.webp"
              alt="Exteriors-Side-Mirror"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/ORVM.webp"
              alt="ORVM"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/UV-cut-glass.webp"
              alt="UV-cut-glass"
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
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/interior_1.webp"
            alt="Exteriors-Rail-Roof"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/interior_2.webp"
            alt="Exteriors-Side-Mirror"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/interior_3.webp"
            alt="Exteriors-Slide-main"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/interior_4.webp"
            alt="Exteriors-Slide-Window"
          />
        </SwiperSlide>
      </Swiper>
      <div className="max-w-7xl mx-auto -mt-16">
        <Swiper
          onSwiper={setInteriorSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/interior_1.webp"
              alt="interior_1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/interior_2.webp"
              alt="interior_2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/interior_3.webp"
              alt="interior_3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/interior_4.webp"
              alt="interior_4"
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
        {/* Nexa Blue */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Nexa-Blue.webp"
          alt="Nexa-Blue"
          className={tabsColors === 1 ? "flex mx-auto" : "hidden"}
        />

        {/* Opulent-red */}

        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Metallic-Auburn-Red.webp"
          alt="OPULENT-RED"
          className={tabsColors === 2 ? "flex mx-auto" : "hidden"}
        />

        {/* BRAVE-KHAKI */}

        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Brave-Khaki.webp"
          alt="BRAVE-KHAKI"
          className={tabsColors === 3 ? "flex mx-auto" : "hidden"}
        />

        {/* GRANDEUR-GREY */}

        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Metallic-Magma-Grey.webp"
          alt="GRANDEUR-GREY"
          className={tabsColors === 4 ? "flex mx-auto" : "hidden"}
        />

        {/* SPLENDID-SILVER */}

        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Metallic-Premium-Silver.webp"
          alt="SPLENDID-SILVER"
          className={tabsColors === 5 ? "flex mx-auto" : "hidden"}
        />

        {/* ARCTIC-WHITE */}

        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Arctic-White.webp"
          alt="ARCTIC-WHITE"
          className={tabsColors === 6 ? "flex mx-auto" : "hidden"}
        />

        {/* DUAL_OPPULENT_RED */}

        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_OPPULENT_RED.webp"
          alt="DUAL_OPPULENT_RED"
          className={tabsColors === 7 ? "flex mx-auto" : "hidden"}
        />

        {/* DUAL_BRAVE_KHAKI */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_BRAVE_KHAKI.webp"
          alt="DUAL_BRAVE_KHAKI"
          className={tabsColors === 8 ? "flex mx-auto" : "hidden"}
        />

        {/* DUAL_SPLENDID_SILVER */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_SPLENDID_SILVER.webp"
          alt="DUAL_SPLENDID_SILVER"
          className={tabsColors === 9 ? "flex mx-auto" : "hidden"}
        />
      </div>
      <div className="flex items-center justify-center">
        {/* Nexa Blue */}
        <div onClick={() => setTabsColors(1)}>
          <div className={tabsColors === 1 ? "relative" : "hidden"}>
            <p className="w-6 h-6 mr-[10px] bg-[#183f66] mx-auto border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
            <p className="arrow-dropdown-selected-car border-t-8 border-[#183f66]"></p>
          </div>
          <p
            className={
              tabsColors !== 1 ? "w-6 h-6 bg-[#183f66] mr-2" : "hidden"
            }
          ></p>
        </div>

        {/* Opulent-red */}
        <div onClick={() => setTabsColors(2)}>
          <div className={tabsColors === 2 ? "relative" : "hidden"}>
            <p className="w-6 h-6 mr-[10px] bg-[#ae314e] mx-auto border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
            <p className="arrow-dropdown-selected-car border-t-8 border-[#ae314e]"></p>
          </div>
          <p
            className={
              tabsColors !== 2 ? "w-6 h-6 bg-[#ae314e] mr-2" : "hidden"
            }
          ></p>
        </div>

        {/* Brave-khaki */}
        <div onClick={() => setTabsColors(3)}>
          <div className={tabsColors === 3 ? "relative" : "hidden"}>
            <p className="w-6 h-6 mr-[10px] bg-[#4f3f23] mx-auto border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
            <p className="arrow-dropdown-selected-car border-t-8 border-[#4f3f23]"></p>
          </div>
          <p
            className={
              tabsColors !== 3 ? "w-6 h-6 bg-[#4f3f23] mr-2" : "hidden"
            }
          ></p>
        </div>

        {/* Grandeur-grey */}
        <div onClick={() => setTabsColors(4)}>
          <div className={tabsColors === 4 ? "relative" : "hidden"}>
            <p className="w-6 h-6 mr-[10px] bg-[#545454] mx-auto border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
            <p className="arrow-dropdown-selected-car border-t-8 border-[#545454]"></p>
          </div>
          <p
            className={
              tabsColors !== 4 ? "w-6 h-6 bg-[#545454] mr-2" : "hidden"
            }
          ></p>
        </div>

        {/* Splendid-silver */}
        <div onClick={() => setTabsColors(5)}>
          <div className={tabsColors === 5 ? "relative" : "hidden"}>
            <p className="w-6 h-6 mr-[10px] bg-[#afb3b8] mx-auto border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
            <p className="arrow-dropdown-selected-car border-t-8 border-[#afb3b8]"></p>
          </div>
          <p
            className={
              tabsColors !== 5 ? "w-6 h-6 bg-[#afb3b8] mr-2" : "hidden"
            }
          ></p>
        </div>

        {/* Arctic white */}
        <div onClick={() => setTabsColors(6)}>
          <div className={tabsColors === 6 ? "relative" : "hidden"}>
            <p className="w-6 h-6 mr-[10px] bg-[#eeeff0] mx-auto border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
            <p className="arrow-dropdown-selected-car border-t-8 border-[#eeeff0]"></p>
          </div>
          <p
            className={
              tabsColors !== 6 ? "w-6 h-6 bg-[#eeeff0] mr-2" : "hidden"
            }
          ></p>
        </div>

        {/* Dual Oppulent Red */}
        <div onClick={() => setTabsColors(7)}>
          <div className={tabsColors === 7 ? "relative" : "hidden"}>
            <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/opulent-red-with-midnight-black-roof.png')] mx-auto border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
          </div>
          <p
            className={
              tabsColors !== 7
                ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/opulent-red-with-midnight-black-roof.png')] mr-2"
                : "hidden"
            }
          ></p>
        </div>

        {/* Dual Brave Khaki */}
        <div onClick={() => setTabsColors(8)}>
          <div className={tabsColors === 8 ? "relative" : "hidden"}>
            <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/brave-khak-with-midnight-black-roof.png')] mx-auto border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
          </div>
          <p
            className={
              tabsColors !== 8
                ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/brave-khak-with-midnight-black-roof.png')] mr-2"
                : "hidden"
            }
          ></p>
        </div>

        <div onClick={() => setTabsColors(9)}>
          <div className={tabsColors === 9 ? "relative" : "hidden"}>
            <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/splendid-silver-with-midnight-black-roof.png')] mx-auto border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
          </div>
          <p
            className={
              tabsColors !== 9
                ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/splendid-silver-with-midnight-black-roof.png')] mr-2"
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
          Oppulent Red
        </p>
        <p
          className={
            tabsColors === 3
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Brave Khaki
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
          Splendid Silver
        </p>
        <p
          className={
            tabsColors === 6
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Arctic White
        </p>
        <p
          className={
            tabsColors === 7
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Dual Oppulent Red
        </p>
        <p
          className={
            tabsColors === 8
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Dual Brave Khaki
        </p>
        <p
          className={
            tabsColors === 9
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Dual Splendid Silver
        </p>
      </>
    </>
  );
};

export default ImageViewer;

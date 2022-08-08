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

function ImageViewer() {
  return (
    <>
      <Tab.Group>
        <div className="flex items-center justify-center py-8">
          <Tab.List className="space-x-1">
            {/* <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 ml-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              View 360°
            </Tab> */}
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
            {/* Grand Vitara 360° view  */}
            {/* <Tab.Panel>
              
            </Tab.Panel> */}

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
          <iframe
            allowfullscreen
            title="XL6"
            className="h-[750px] w-full"
            src="https://www.nexaexperience.com/interiorvr.htm?panorama=/dist/assets/images/xl6-interior/xl6_int.webp&preview=//nexaprod.azureedge.net/dist/assets/images/xl6-interior/xl6_int.webp"
          ></iframe>
        </SwiperSlide>
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
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/xl6_Interior.webp"
              alt="xl6_interior"
            />
          </SwiperSlide>
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
        {/* Celestial Blue */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_celestial_blue.webp"
          alt="saboo-nexa-ignis-colours-nexa-blue"
          className={tabsColors === 1 ? "mx-auto h-72" : "hidden"}
        />

        {/* Arctic-white */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_arctic_white.webp"
          alt="saboo-nexa-ignis-colours-uptown-red"
          className={tabsColors === 2 ? "mx-auto h-72" : "hidden"}
        />

        {/* Arctic-White-Midnight black */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_arctic_white_midnight_black.webp"
          alt="saboo-nexa-ignis-colours-silky-silver"
          className={tabsColors === 3 ? "mx-auto h-72" : "hidden"}
        />

        {/* Chestnut Brown */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_cave_black.webp"
          alt="saboo-nexa-ignis-colours-tinsel-blue"
          className={tabsColors === 4 ? "mx-auto h-72" : "hidden"}
        />

        {/* Grandeur Grey */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_grandeur_grey.webp"
          alt="saboo-nexa-ignis-colours-glistening-grey"
          className={tabsColors === 5 ? "mx-auto h-72" : "hidden"}
        />

        {/* Oppulent Red */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_oppulent_red.webp"
          alt="saboo-nexa-ignis-colours-pearl-arctic-white"
          className={tabsColors === 6 ? "mx-auto h-72" : "hidden"}
        />
        {/* Oppulent Red Midnight Black */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_oppulent_red_midnight_black.webp"
          alt="saboo-nexa-ignis-lucent-orange-with-black-roof"
          className={tabsColors === 7 ? "mx-auto h-72" : "hidden"}
        />
        {/* Splendid silver */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_splendid_silver.webp"
          alt="saboo-nexa-ignis-tinsel-blue-arctic-white"
          className={tabsColors === 8 ? "mx-auto h-72" : "hidden"}
        />
        {/* Splendid silver midnight black */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/colors/rangeman_splendid_silver_midnight_black.webp"
          alt="saboo-nexa-ignis-tinsel-blue-midnight-black"
          className={tabsColors === 9 ? "mx-auto h-72" : "hidden"}
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
              tabsColors !== 4 ? "w-6 h-6 border bg-[#282828] mr-2" : "hidden"
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
              tabsColors !== 5 ? "w-6 h-6 border bg-[#464848] mr-2" : "hidden"
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
              tabsColors !== 6 ? "w-6 h-6 border bg-[#AC0F0F] mr-2" : "hidden"
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
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Celestial Blue
        </p>
        <p
          className={
            tabsColors === 2
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Arctic White
        </p>
        <p
          className={
            tabsColors === 3
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Arctic White Midnight Black
        </p>
        <p
          className={
            tabsColors === 4
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Chestnut Brown
        </p>
        <p
          className={
            tabsColors === 5
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Grandeur Grey
        </p>
        <p
          className={
            tabsColors === 6
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Oppulent Red
        </p>
        <p
          className={
            tabsColors === 7
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Oppulent Red Midnight Black
        </p>
        <p
          className={
            tabsColors === 8
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Splendid Silver
        </p>
        <p
          className={
            tabsColors === 9
              ? "text-center font-semibold text-lg my-2"
              : "hidden"
          }
        >
          Splendid Silver Midnight Black
        </p>
      </>
    </>
  );
};

export default ImageViewer;

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
            {/* Scross 360° view  */}
            <Tab.Panel>
            <View360
                path={
                  "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/360"
                }
                count={34}
                format={"png"}
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
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Alloy-Wheel.webp"
            alt="Exterios-Alloy-Wheel"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Slide-Main.webp"
            alt="Exterios-Slide-Main"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Slide-Mirror.webp"
            alt="Exteriors-Slide-Mirror"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Slide-Window.webp"
            alt="Exteriors-Slide-Window"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Top-View.webp"
            alt="Exteriors-Slide-Window"
          />
        </SwiperSlide>
      </Swiper>
      <div className="max-w-7xl mx-auto -mt-24">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Alloy-Wheel.webp"
              alt="Exterios-Alloy-Wheel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Slide-Main.webp"
              alt="Exterios-Slide-Main"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Slide-Mirror.webp"
              alt="Exteriors-Slide-Mirror"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Slide-Window.webp"
              alt="Exteriors-Slide-Window"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Top-View.webp"
              alt="Exteriors-Slide-Window"
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
        {/* <SwiperSlide>
          <iframe
            allowfullscreen
            title="XL6"
            className="h-[700px] w-full"
            src="https://www.nexaexperience.com/interiorvr.htm?panorama=/dist/assets/images/scross-interior/scross_int.webp&preview=//nexaprod.azureedge.net/dist/assets/images/scross-interior/scross_int.webp"
          ></iframe>
        </SwiperSlide> */}
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Adjustable-Telescopic-And-Tilt-Steering.webp"
            alt="Adjustable-Telescopic-And-Tilt-Steering"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Boot-Space.webp"
            alt="Interior-Boot-Space"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Cruise-Control.webp"
            alt="Interior-Cruise-Control"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-multy-Information-System.webp"
            alt="Interior-multy-Information"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Push-Start-Stop.webp"
            alt="Interior-Push-Start-Stop"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Smart-Hybrid.webp"
            alt="Smart-Hybrid"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Smartplay-Infotainment-System.webp"
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
          {/* <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/scross_interior.png"
              alt="scross_interior"
            />
          </SwiperSlide> */}
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Adjustable-Telescopic-And-Tilt-Steering.webp"
              alt="Adjustable-Telescopic-And-Tilt-Steering"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Boot-Space.webp"
              alt="Interior-Boot-Space"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Cruise-Control.webp"
              alt="Interior-Cruise-Control"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-multy-Information-System.webp"
              alt="Interior-multy-Information"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Push-Start-Stop.webp"
              alt="Interior-Push-Start-Stop"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Smart-Hybrid.webp"
              alt="Smart-Hybrid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Smartplay-Infotainment-System.webp"
              alt="Exteriors-Slide-Window"
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
        {/* Nexa-Blue */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/colors/Saboo-Nexa-SCross-Colours-Blue.webp"
          alt="nexa blue"
          className={
            tabsColors === 1 ? "mx-auto w-auto lg:h-[300px]" : "hidden"
          }
        />

        {/* Caffeine Brown */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/colors/Saboo-Nexa-SCross-Colours-Caffeine-Brown.webp"
          alt="Caffeine Brown"
          className={
            tabsColors === 2 ? "mx-auto w-auto lg:h-[300px]" : "hidden"
          }
        />

        {/* Granite Grey */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/colors/Saboo-Nexa-SCross-Colours-Granite-Grey.webp"
          alt="Granite Grey"
          className={
            tabsColors === 3 ? "mx-auto w-auto lg:h-[300px]" : "hidden"
          }
        />

        {/* White */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/colors/Saboo-Nexa-SCross-Colours-Pearl-Arctic-White.webp"
          alt="Pearl Arctic White"
          className={
            tabsColors === 4 ? "mx-auto w-auto lg:h-[300px]" : "hidden"
          }
        />

        {/* Premium Silver */}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/colors/Saboo-Nexa-SCross-Colours-Premium-Silver.webp"
          alt="Premium Silver"
          className={
            tabsColors === 5 ? "mx-auto w-auto lg:h-[300px]" : "hidden"
          }
        />
      </div>
      <div className="flex items-center justify-center mt-2 mb-4">
        {/*  Nexa Blue */}
        <div onClick={() => setTabsColors(1)}>
          <div className={tabsColors === 1 ? "relative" : "hidden"}>
            <p className="w-6 h-6 mr-[10px] bg-[#183f66] border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-[9px] right-0 mx-auto bg-no-repeat bg-center"></span>
            <p className="arrow-dropdown-selected-car border-t-8 border-[#183f66]"></p>
          </div>
          <p
            className={
              tabsColors !== 1 ? "w-6 h-6 bg-[#183f66] mr-2" : "hidden"
            }
          ></p>
        </div>

        {/* Caffeine Brown */}
        <div onClick={() => setTabsColors(2)}>
          <div className={tabsColors === 2 ? "relative" : "hidden"}>
            <p className="w-6 h-6 bg-[#86654f] mr-[10px] border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-[9px] right-0 mx-auto bg-no-repeat bg-center"></span>
            <p className="arrow-dropdown-selected-car border-t-8 border-[#86654f]"></p>
          </div>
          <p
            className={
              tabsColors !== 2 ? "w-6 h-6 bg-[#86654f] mr-2 border-2" : "hidden"
            }
          ></p>
        </div>

        {/* Granite Grey */}
        <div onClick={() => setTabsColors(3)}>
          <div className={tabsColors === 3 ? "relative" : "hidden"}>
            <p className="w-6 h-6 bg-[#72716b] mr-[10px] border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-[9px] right-0 mx-auto bg-no-repeat bg-center"></span>
            <p className="arrow-dropdown-selected-car border-t-8 border-[#72716b]"></p>
          </div>
          <p
            className={
              tabsColors !== 3 ? "w-6 h-6 bg-[#72716b] mr-2" : "hidden"
            }
          ></p>
        </div>

        {/* Pearl Arctic White */}
        <div onClick={() => setTabsColors(4)}>
          <div className={tabsColors === 4 ? "relative" : "hidden"}>
            <p className="w-6 h-6 bg-white mr-[10px] border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-[9px] right-0 mx-auto bg-no-repeat bg-center"></span>
            <p className="arrow-dropdown-selected-car border-t-8 border-white"></p>
          </div>
          <p
            className={
              tabsColors !== 4 ? "w-6 h-6 border bg-white mr-2" : "hidden"
            }
          ></p>
        </div>

        {/* Premium Silver */}
        <div onClick={() => setTabsColors(5)}>
          <div className={tabsColors === 5 ? "relative" : "hidden"}>
            <p className="w-6 h-6 bg-[#879194] mr-[10px] border-t border-x"></p>
            <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-[9px] right-0 mx-auto bg-no-repeat bg-center"></span>
            <p className="arrow-dropdown-selected-car border-t-8 border-[#879194]"></p>
          </div>
          <p
            className={tabsColors !== 5 ? "w-6 h-6 bg-[#879194]" : "hidden"}
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
        Caffeine Brown
      </p>
      <p
        className={
          tabsColors === 3 ? "text-center font-semibold text-lg my-2" : "hidden"
        }
      >
        Granite Grey
      </p>
      <p
        className={
          tabsColors === 4 ? "text-center font-semibold text-lg my-2" : "hidden"
        }
      >
        Pearl Arctic White
      </p>
      <p
        className={
          tabsColors === 5 ? "text-center font-semibold text-lg my-2" : "hidden"
        }
      >
        Premium Silver
      </p>
    </>
  );
};

export default ImageViewer;

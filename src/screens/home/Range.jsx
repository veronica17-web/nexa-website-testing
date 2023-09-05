import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";

import "./Range.css";

const Range = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0); // Initialize with the first slide
  const [but, setBut] = useState(false);
  const [pause, setPause] = useState(false);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const videoRef7 = useRef(null);
  const videoRef8 = useRef(null);

  // const videoRefs = [
  //   videoRef1,
  //   videoRef2,
  //   videoRef3,
  //   videoRef4,
  //   videoRef5,
  //   videoRef6,
  //   videoRef7,
  //   videoRef8,
  // ];

  const NexaData = [
    {
      id: 1,
      name: "Invicto",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/invicto.webp",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Blue_810+x+411.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/2.webp",

      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Invicto_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Invicto_back.webm",

      explore: "/maruti-invicto-price-in-hyderabad",
      videoRef: videoRef1,
    },
    {
      id: 2,
      name: "XL6",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/xl6.webp",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Nexa-Blue.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/xl6_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/xl6_back.webm",
      explore: "/nexa-xl6-on-road-price-in-hyderabad",

      videoRef: videoRef2,
    },
    {
      id: 3,
      name: "Jimny",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/jimny.webp",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Kinetic_Yellow_Bluish_Black_Roof.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/1.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Jimny_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Jimny_back.webm",

      explore: "/maruti-jimny-price-in-hyderabad",
      videoRef: videoRef3,
    },
    {
      id: 4,
      name: "Grand Vitara",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/grand+vitara.webp",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/Celestial_blue.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/GV_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/GV_back.webm",
      explore: "/grand-vitara-on-road-price-in-hyderabad",
      videoRef: videoRef4,
    },

    {
      id: 5,
      name: "Fronx",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/fronx.webp",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-NEXA_Blue.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/3.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/fronx_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/fronx_back.webm",

      explore: "/maruti-fronx-price-in-hyderabad",

      videoRef: videoRef5,
    },
    {
      id: 6,
      name: "Ciaz",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/ciaz.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/1.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/ciaz_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/ciaz_back.webm",
      explore: "/nexa-ciaz-on-road-price-in-hyderabad",
      videoRef: videoRef6,
    },
    {
      id: 7,
      name: "baleno",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/baleno.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/3.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/baleno_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/baleno_back.webm",
      explore: "/new-maruti-baleno-price-in-hyderabad",
      videoRef: videoRef7,
    },

    {
      id: 8,
      name: "ignis",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/ignis.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/4.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/ignis_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/ignis_back.webm",
      explore: "/nexa-ignis-on-road-price-in-hyderabad",
      videoRef: videoRef8,
    },
  ];

  useEffect(() => {
    const videoRefs = [
      videoRef1,
      videoRef2,
      videoRef3,
      videoRef4,
      videoRef5,
      videoRef6,
      videoRef7,
      videoRef8,
    ];

    const playAllVideos = () => {
      videoRefs.forEach((ref) => {
        if (ref.current) {
          ref.current.play();
        }
      });
    };

    if (!but) playAllVideos();
  }, [activeSlideIndex, but]);

  useEffect(() => {
    // When activeSlideIndex changes, set pause to true
    setPause(true);

    // Use setTimeout to set pause to false after 2 seconds
    const timer = setTimeout(() => {
      setPause(false);
    }, 2000);

    // Clean up the timer when the component unmounts or activeSlideIndex changes again
    return () => {
      clearTimeout(timer);
    };
  }, [activeSlideIndex]);

  const timeoutIdRef = useRef(null);

  useEffect(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    timeoutIdRef.current = setTimeout(() => {
      setBut(false);
    }, 2000);

    // Cleanup the timeout if the component unmounts or if play changes
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [but]);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);

    // Check if the last slide is reached
    if (swiper.realIndex === 7) {
    }
  };
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the context menu from appearing
  };

  return (
    <>
      <div
        className="mb-3 bg-black duration-1000  mt-4 select-none  "
        style={{
          backgroundImage: `url(${NexaData[activeSlideIndex].backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onContextMenu={handleContextMenu}
      >
        <div className="duration-1000">
          <div className=" container pt-6 md:pt-20 text-white mx-auto text-center  uppercase text-2xl sm:text-4xl md:text-5xl px-4 py-2">
            An extraordinary model range
          </div>

          <div className="text-center  md:pt-10  flex justify-center -mb-8 md:-mb-2 h-12 md:h-24 ">
            <img
              src={NexaData[activeSlideIndex].logo}
              alt=""
              srcset=""
              className="scale-[0.40] lg:scale-50 opacity-90"
            />
          </div>
        </div>

        <Swiper
          speed={2000}
          slidesPerView={1}
          // loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          allowTouchMove={false}
          initialSlide={0}
          // grabCursor={true}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Autoplay]}
          className="carSlider flex items-center  "
        >
          {NexaData.map((car) => (
            <SwiperSlide key={car.id} className="py-6">
              <Link to={car.explore} className="focus:outline-none">
                <div className=" min-h-40  relative lg:ml-10 xl:ml-20">
                  {/* <video
                    // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Levante2-1-vp9-chrome.webm"
                    src={car.video}
                    loop
                    autoPlay
                    muted
                    className={`slider_car  absolute inset-x-0 top-0    ${
                      but === 1 ? "opacity-100" : "opacity-0"
                    }
                 `}
                  ></video>
                  <video
                    // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Levante2-1-vp9-chrome.webm"
                    src={car.videoBack}
                    loop
                    autoPlay
                    muted
                    className={`slider_car  absolute inset-x-0 top-0    ${
                      but === 2 ? "opacity-100" : "opacity-0"
                    }
                 `}
                  ></video>
                  <video
                    // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Levante2-1-vp9-chrome.webm"
                    src={car.staticVideo}
                    muted
                    className={`slider_car   ${
                      but === 0 ? "opacity-100" : " opacity-0"
                    }`}
                  ></video> */}
                  <video
                    // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Levante2-1-vp9-chrome.webm"
                    src={car.video}
                    ref={car.videoRef}
                    muted
                    className={`slider_car bg-transparent ${
                      !but ? "opacity-100" : "opacity-0"
                    } `}
                  ></video>
                  <video
                    // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Levante2-1-vp9-chrome.webm"
                    src={car.videoBack}
                    // ref={car.videoRef}
                    autoPlay
                    loop
                    muted
                    className={`slider_car absolute inset-x-0 top-0 bg-transparent ${
                      but ? "opacity-100" : "opacity-0"
                    } `}
                  ></video>
                </div>
              </Link>
            </SwiperSlide>
          ))}

          <div
            ref={navigationPrevRef}
            id="playButton"
            className={`absolute left-2 sm:left-10 lg:top-[100px]  md:top-[11.5rem] top-[5.8rem] z-10 duration-500 bg-gray-200 opacity-50 hover:opacity-100 rounded-full p-1.5 sm:p-3 cursor-pointer ${
              pause || activeSlideIndex === 0 ? "hidden" : "block"
            } `}
            onClick={() => setBut(true)}
          >
            <GrFormPrevious className="lg:text-3xl " />
          </div>

          <div
             ref={ navigationNextRef}
            className={`absolute right-2 sm:right-10 lg:top-[100px]  md:top-[11.5rem] top-[5.8rem]  z-10 duration-500 bg-gray-200 opacity-50 hover:opacity-100 rounded-full p-1.5 sm:p-3 cursor-pointer  ${
              pause || activeSlideIndex === 7  ? "hidden" : "block"
            }`}
          >
            <GrFormNext className="lg:text-3xl" />
          </div>
        </Swiper>
        <div className="mb-8 h-10 md:h-20 -mt-24 sm:-mt-32  bg-white flex duration-500"></div>
      </div>
    </>
  );
};

export default Range;

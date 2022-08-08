import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { sliders } from "../../constants";

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper slider-home"
      >
        {sliders.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} className="w-full" alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;

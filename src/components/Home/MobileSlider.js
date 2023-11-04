import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
// import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
// import { mobileSliders } from "../../constants";

function MobileSlider() {
  return (
    <>
      {/* <Swiper
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
        effect='fade'
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='mySwiper slider-home'
      >
        {mobileSliders.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} className='w-full max-w-full' alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <div className="h-[85vh] overflow-hidden">
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/Website_Mobile_Diwali_+Dhanteras_Saboo_RKS_Motor_Maruti_Suzuki_Nexa_Offers.webp"
          // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/Website_Mobile_Navratri_+dussehra_Saboo_RKS_Motor_October_Offers.webp"
          alt="Diwali Dhanteras Saboo RKS Motor Maruti Suzuki Nexa Offers"
          className="w-full h-full sm:hidden"
        />
      </div>
    </>
  );
}

export default MobileSlider;

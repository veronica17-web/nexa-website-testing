import React from "react";
import Header from "../../../components/Header/Header";

// import { products } from '../../constants';

import { Helmet } from "react-helmet";

import "./fronx.css";

// import { products } from '../../constants';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import OnRoadPrice from "../../../components/utils/OnRoadPrice";
import { MdOutlineFileDownload } from "react-icons/md";
import { useState } from "react";

const GrandVitaraCNG = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Helmet>
        <title>Maruti Suzuki Grand Vitara CNG Price</title>
        <meta name="title" content="Maruti Suzuki Grand Vitara CNG Price" />
        <meta
          name="description"
          content="Maruti Suzuki Nexa Grand Vitara CNG On Road Price in Hyderabad. Grand Vitara CNG Price Starts at 17.99Lac*, Comes with Bs6 Petrol Engine, 6 Air Bags. For Best Offers Visit Nearest Saboo Nexa Showroom Today."
        />
        {/* <meta
          name="keywords"
          content="Nexa Ciaz car price, Offers on Nexa Ciaz, Maruti Ciaz mileage, Ciaz Specifications, Nexa ciaz petrol price, Maruti ciaz on road price, Maruti ciaz variants, ciaz images, ciaz mileage, Nexa ciaz price in hyderabad, Maruti ciaz price in hyderabad, ciaz price in hyderabad, ciaz onroad price in hyderabad, offers on ciaz, ciaz offers 2022, new ciaz price, new ciaz price in hyderabad, new ciaz 2022 price, new ciaz 2022 onroad price, ciaz petrol price in hyderabad, ciaz 2022 petrol price in hyderabad"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/the-new-maruti-ciaz/"
          />
          <meta
          property="og:title"
          content="Nexa Ciaz Car on Road Price & Offers in Hyderabad| Saboo Nexa"
          />
          <meta
          property="og:description"
          content="Nexa Ciaz 2022 car price starts at 8.87 lakh, mileage of 26.8 km/l. Get Nexa Ciaz specifications & features. Best offers on Ciaz car, low EMI, low down-payment. Call now 9848898488"
          />
          <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Ciaz.jpg"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
          property="twitter:url"
          content="https://www.saboonexa.in/the-new-maruti-ciaz/"
          />
          <meta
          property="twitter:title"
          content="Nexa Ciaz Car on Road Price & Offers in Hyderabad| Saboo Nexa"
          />
          <meta
          property="twitter:description"
          content="Nexa Ciaz 2022 car price starts at 8.87 lakh, mileage of 26.8 km/l. Get Nexa Ciaz specifications & features. Best offers on Ciaz car, low EMI, low down-payment. Call now 9848898488"
          />
          <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Ciaz.jpg"
        /> */}
      </Helmet>
      <Header />
      {/* <div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-desktop.webp'
          className='w-full object-cover hidden md:block '
          alt='SCNG Banner'
          srcSet=''
        />
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-mobile.webp'
          className='w-full md:hidden block '
          alt='SCNG Banner'
          srcSet=''
        />
      </div> */}
      <div className="pt-20 pb-1 bg-black"></div>
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-mobile.webp')] sm:bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-desktop.webp')]  bg-cover bg-no-repeat md:h-[40vh] lg:h-[60vh] h-[60vh]">
        <div className="max-w-6xl ">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2">
            <div className="my-auto mx-5 pt-10 pr-[30]">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/grand-vitara-logo.webp"
                className="p-3 md:ml-20 lg:ml-36"
                alt="title"
              />
              <a
                href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/grand_vitara.pdf"
                className="p-3 bg-black text-white flex items-center max-w-[200px] md:ml-24 lg:ml-40 mt-5 rounded"
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='text-center my-6 container mx-auto pb-6'>
        <div className='text-2xl font-semibold '>REGISTER YOUR INTEREST</div>
        <div className='container  px-6 md:px-12 lg:px-24 py-2 sm:py-5'>
          Register Now To Know All About The Advanced Features Of Grand Vitara
          CNG
        </div>
        <hr className='w-1/5 mx-auto' />
      </div> */}
      <OnRoadPrice title={"GRAND VITARA"} />
      <div className="text-center  my-8 container mx-auto ">
        <div className="text-2xl  py-4 pt-8 font-medium">RULES CONSCIOUSLY</div>
        Inspired by the future to be conscious for today. The Advanced Grand
        Vitara with S-CNG technology is an SUV like no other. <br /> It's
        crafted for amazing journeys, engineered for the environment, and
        designed to rule every road.
      </div>
      <div className="text-center my-8 container mx-auto ">
        <div className="text-2xl  py-4 pt-8 font-medium">FEATURES</div>
        <div className="">
          Convenient on every road and conscious on every journey, the Advanced
          Grand Vitara with S-CNG comes with new-age features to match your
          lifestyle.
        </div>
        <div className="container  px-6 md:px-12 lg:px-24 py-2 sm:py-5">
          <div className="container mx-auto py-6 space-y-4 rounded">
            {/* <Carousel /> */}
            {/* <Swiper
              slidesPerView={1}
              spaceBetween={1}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 4,
                },
                '@1.50': {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className='mySwiper'
            >
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Ambient+Lighting+webp.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Digital+Instrument+Cluster+webp.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/EV+Mode+webp.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Head+Up+Display+webp.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Panoramic+Sunroof+webp.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Ventilated+Seats+webp.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Wireless+Charger+webp.webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/DRLs+webp+(1).webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/LED+Tail+Lamps+webp+(1).webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Projector+Headlamps+webp+(2).webp'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/R17+Dual+Tone+Precision+Cut+Alloy+Wheels+webp+(1).webp'
                  alt=''
                />
              </SwiperSlide>
            </Swiper> */}
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              speed={1000}
              spaceBetween={2}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className="mySwiper2 h-60"
            >
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Ambient+Lighting+webp.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    Advanced 1.2L K-Series Dual Jet, Dual VVT Engine
                  </span>
                  <br />
                  For those who refuse to compromise, the 1.2L K-Series Dual Jet
                  Dual VVT Engine with Idle Start-Stop technology (ISS) is
                  engineered to offer excellent drive performance and superior
                  fuel-efficiency.
                </div> */}
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Digital+Instrument+Cluster+webp.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    NEXWave GRILLE & STRIKING FRONT FASCIA
                  </span>
                  <br />
                  The stylish and sporty grille is bound to leave everyone in
                  complete awe. It’s signature stye makes it stand out from the
                  crowd.
                </div> */}
              </SwiperSlide>

              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/EV+Mode+webp.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">Hill Hold Assist</span>
                  <br />
                  Prevents your car from rolling backwards while ascending a
                  slope, thereby ensuring that your car descends in a controlled
                  manner.
                </div> */}
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Head+Up+Display+webp.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> */}
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Panoramic+Sunroof+webp.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">Factory Fitted S-CNG</span>
                  <br />
                  Our CNG cylinder is fitted on to the new-generation chassis
                  platform using Ultra and Advanced High Tensile Steels that
                  aids the car to resist deformation. It also comes with a
                  neatly placed fire extinguisher to ensure your safety.
                </div> */}
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Ventilated+Seats+webp.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> */}
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Wireless+Charger+webp.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> */}
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/DRLs+webp+(1).webp"
                  alt=""
                />
                {/* <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> */}
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/LED+Tail+Lamps+webp+(1).webp"
                  alt=""
                />
                {/* <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> */}
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Projector+Headlamps+webp+(2).webp"
                  alt=""
                />
                {/* <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> */}
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/R17+Dual+Tone+Precision+Cut+Alloy+Wheels+webp+(1).webp"
                  alt=""
                />
                {/* <div className="absolute bottom-4 left-0 text-sm text-white">
                  <span className="font-semibold">
                    R17 Dual Tone Precision Cut Alloy Wheels
                  </span>
                  <br />
                  Stand strong and show your dominance with R17 dual tone
                  precision cut alloy wheels.
                </div> */}
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper-3"
            >
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Ambient+Lighting+webp.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Digital+Instrument+Cluster+webp.webp"
                  alt=""
                  className=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/EV+Mode+webp.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Head+Up+Display+webp.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Panoramic+Sunroof+webp.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Ventilated+Seats+webp.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Wireless+Charger+webp.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/DRLs+webp+(1).webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/LED+Tail+Lamps+webp+(1).webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Projector+Headlamps+webp+(2).webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/R17+Dual+Tone+Precision+Cut+Alloy+Wheels+webp+(1).webp"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrandVitaraCNG;

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
          className='hidden object-cover w-full md:block '
          alt='SCNG Banner'
          srcSet=''
        />
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-mobile.webp'
          className='block w-full md:hidden '
          alt='SCNG Banner'
          srcSet=''
        />
      </div> */}
      <div className="pt-20 pb-1 bg-black"></div>
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-mobile.webp')] sm:bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-desktop.webp')]  bg-cover bg-no-repeat  sm:h-[60vh] h-[80vh]">
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
      {/* <div className='container pb-6 mx-auto my-6 text-center'>
        <div className='text-2xl font-semibold '>REGISTER YOUR INTEREST</div>
        <div className='container px-6 py-2 md:px-12 lg:px-24 sm:py-5'>
          Register Now To Know All About The Advanced Features Of Grand Vitara
          CNG
        </div>
        <hr className='w-1/5 mx-auto' />
      </div> */}
      <OnRoadPrice title={"GRAND VITARA"} />
      <div className="container mx-auto my-8 text-center ">
        <div className="py-4 pt-8 text-2xl font-medium">RULES CONSCIOUSLY</div>
        Inspired by the future to be conscious for today. The Advanced Grand
        Vitara with S-CNG technology is an SUV like no other. <br /> It's
        crafted for amazing journeys, engineered for the environment, and
        designed to rule every road.
      </div>
      <div className="container mx-auto my-8 text-center ">
        <GrandVitaraCNGSlider />
      </div>

      {/* <div className="container px-6 py-2 md:px-12 lg:px-24 sm:py-5"> */}
      {/* <div className="container py-6 mx-auto space-y-4 rounded"> */}
      <div>
        <div>
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
          {/* <Swiper
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
                {/* <div className="absolute left-0 text-sm text-white bottom-4">
                  <span className="font-semibold">
                    Advanced 1.2L K-Series Dual Jet, Dual VVT Engine
                  </span>
                  <br />
                  For those who refuse to compromise, the 1.2L K-Series Dual Jet
                  Dual VVT Engine with Idle Start-Stop technology (ISS) is
                  engineered to offer excellent drive performance and superior
                  fuel-efficiency.
                </div> 
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Digital+Instrument+Cluster+webp.webp"
                  alt=""
                />
                {/* <div className="absolute left-0 text-sm text-white bottom-4">
                  <span className="font-semibold">
                    NEXWave GRILLE & STRIKING FRONT FASCIA
                  </span>
                  <br />
                  The stylish and sporty grille is bound to leave everyone in
                  complete awe. It’s signature stye makes it stand out from the
                  crowd.
                </div> 
              </SwiperSlide>

              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/EV+Mode+webp.webp"
                  alt=""
                />
                {/* <div className="absolute left-0 text-sm text-white bottom-4">
                  <span className="font-semibold">Hill Hold Assist</span>
                  <br />
                  Prevents your car from rolling backwards while ascending a
                  slope, thereby ensuring that your car descends in a controlled
                  manner.
                </div> 
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Head+Up+Display+webp.webp"
                  alt=""
                />
                {/* <div className="absolute left-0 text-sm text-white bottom-4">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> 
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Panoramic+Sunroof+webp.webp"
                  alt=""
                />
                {/* <div className="absolute left-0 text-sm text-white bottom-4">
                  <span className="font-semibold">Factory Fitted S-CNG</span>
                  <br />
                  Our CNG cylinder is fitted on to the new-generation chassis
                  platform using Ultra and Advanced High Tensile Steels that
                  aids the car to resist deformation. It also comes with a
                  neatly placed fire extinguisher to ensure your safety.
                </div> 
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Ventilated+Seats+webp.webp"
                  alt=""
                />
                {/* <div className="absolute left-0 text-sm text-white bottom-4">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> 
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Wireless+Charger+webp.webp"
                  alt=""
                />
                {/* <div className="absolute left-0 text-sm text-white bottom-4">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> 
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/DRLs+webp+(1).webp"
                  alt=""
                />
                {/* <div className="absolute left-0 text-sm text-white bottom-4">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> 
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/LED+Tail+Lamps+webp+(1).webp"
                  alt=""
                />
                {/* <div className="absolute left-0 text-sm text-white bottom-4">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> 
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Projector+Headlamps+webp+(2).webp"
                  alt=""
                />
                {/* <div className="absolute left-0 text-sm text-white bottom-4">
                  <span className="font-semibold">
                    Dual-Tone Plush Interiors
                  </span>
                  <br />
                  The lush and spacious dual tone interiors matched with
                  horizontal linear embossed pattern makes you feel like you’re
                  driving in the lap of comfort and grandeur.
                </div> 
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/R17+Dual+Tone+Precision+Cut+Alloy+Wheels+webp+(1).webp"
                  alt=""
                />
                {/* <div className="absolute left-0 text-sm text-white bottom-4">
                  <span className="font-semibold">
                    R17 Dual Tone Precision Cut Alloy Wheels
                  </span>
                  <br />
                  Stand strong and show your dominance with R17 dual tone
                  precision cut alloy wheels.
                </div> 
              </SwiperSlide>
            </Swiper> */}
          {/* <Swiper
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
            </Swiper> */}
        </div>
      </div>
    </>
  );
};

const GrandVitaraCNGSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      img: "https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/1-chassis-with-s-cng.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp",
      title: "Factory fitted CNG System",
      body: "The factory-fitted S-CNG is calibrated to deliver optimum performance, safety, engine durability, convenience, and mileage.",
    },
    {
      img: "https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/midscreenpetrolcng.webp?la=en&hash=608FBE9D027FD87C99A08406ED512593",
      title: "MID Screen – Petrol/CNG (Modes)",
      body: "Keep a track of your vehicle’s Petrol and CNG usage duration on the MID screen.",
    },
    {
      img: "https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/mid-screenfuel-indicator-3.webp?la=en&hash=CCC4119E6CA612206ED773CA21B9CE90",
      title: "MID Screen – Fuel Indicator",
      body: "The fuel indicator lets you track your vehicle’s CNG level while you are on the move.",
    },
    {
      img: "https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/fuel-selector11.webp?la=en&hash=B3BC9658CA3FBBC5E7C216ED675C6601",
      title: "Fuel Change Over Switch",
      body: "The Fuel Change Over Switch lets you shift between petrol and CNG modes seamlessly.",
    },
    {
      img: "https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/dominatingstance4.webp?la=en&hash=C7C838350D8692F3A203FAE11D443912",
      title: "Dominating Stance",
      body: " A true embodiment of NEXA’s Crafted Futurism Design Language, the Grand Vitara sports elements like sharp NEXTre’ DRLs with Projector Headlamps and the premium NEXWave Grille, lending this SUV a dominating stance.",
    },
    {
      img: "https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/commanding-presence5.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp",
      title: "Commanding Presence",
      body: "The Advanced Grand Vitara is a sight to behold with a strong rear design and Signature NEXtre’ Tail Lamps. This is one SUV that holds your attention even from afar.",
    },
    {
      img: "https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/r17-dual-tone-precision-cut-alloy-wheels6.webp?la=en&hash=E87CD6AD3E00B5C1C3A52A3B0A26B58A",
      title: "R17 Dual Tone Precision Cut Alloy Wheels",
      body: "Stand strong and show your dominance with R17 dual tone precision cut alloy wheels.",
    },
    {
      img: "https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/dual-tone-interiorsblackbordeaux7.webp?la=en&hash=A4EDF7255409795EC16D9C27D4B8793D",
      title: "Dual Tone Interiors (Black & Bordeaux)",
      body: "Step into a world that surrounds you in absolute comfort with premium dual-tone interiors.",
    },
    {
      img: "https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/smartplay-pro-infotainment-system8.webp?la=en&hash=DFF11B884AC14E08730541B53E19B3ED",
      title: "SmartPlay Pro+ Infotainment System",
      body: "Liven up your adventures with SmartPlay Pro+ that comes with a 22.86 cm touchscreen display. But that’s not all, the wireless Apple CarPlay and Android Auto ensure endless entertainment and seamless connectivity.",
    },
    {
      img: "https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/auto-ac9.webp?la=en&hash=7218BB864CAA176F1C228CDA28CBC47B",
      title: "Auto AC",
      body: "Set the desired temperature with Automatic Climate Control AC for a comfortable drive.",
    },
    {
      img: "https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/cruise-control10.webp?la=en&hash=D03FF83E016D2359FFAD3D24D9EC479A",
      title: "Cruise Control",
      body: "The Cruise Control feature lets you pick and maintain any cruising speed above 40 km/h for a relax driving experience.",
    },
    {
      img: "https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara-cng/brand-feature/bootspace12.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp",
      title: "Ample Boot Space",
      body: "Now you don’t have to compromise on space even with a CNG cylinder installed. The Grand Vitara has ample boot space for all your needs.",
    },
  ];
  return (
    <div className="">
      <div className="container mx-auto text-center ">
        <div className="py-4 pt-8 text-2xl font-medium">FEATURES</div>
        <div className="">
          Convenient on every road and conscious on every journey, the Advanced
          Grand Vitara with S-CNG comes with new-age features to match your
          lifestyle.
        </div>
        {/* <div className="text-center text-md lg:text-lg">
          Convenience Goes Bold
        </div> */}
        <div className="py-2 sm:pt-5">
          <div className="space-y-4 rounded ">
            {/* <Carousel /> */}

            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              speed={1000}
              // spaceBetween={2}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className="mySwiper2 h-28"
            >
              {data.map((x, index) => (
                <SwiperSlide key={index} className="relative">
                  <div className="w-full lg:px-20">
                    <img src={x.img} alt={x.title} className="" />
                    <div className="w-full px-4 pt-4 text-left md:text-white md:absolute bottom-4">
                      <div className="pb-2 font-medium">{x.title}</div>
                      <div className="font-light lg:pr-40">{x.body}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              // loop={true}
              spaceBetween={10}
              slidesPerView={5}
              // freeMode={true}
              // watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="hidden mySwiper-3 md:block"
            >
              {data.map((x, index) => (
                <SwiperSlide key={index} classname="cursor-pointer">
                  <div>
                    <img src={x.img} alt={x.title} className="max-h-24" />
                    <div className="py-2 ">{x.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrandVitaraCNG;

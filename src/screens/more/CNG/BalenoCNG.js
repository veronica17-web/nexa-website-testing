import React, { useState } from "react";
import Header from "../../../components/Header/Header";

// import { products } from '../../constants';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import OnRoadPrice from "../../../components/utils/OnRoadPrice";
import { MdOutlineFileDownload } from "react-icons/md";
import { Helmet } from "react-helmet";
import Features from "../../../components/BALENO/Features";

const BalenoCNG = () => {
  return (
    <>
      <Helmet>
        <title>
          New Nexa Baleno CNG Price in Hyderabad | Maruti Baleno 2023 Price,
          Offers & Discounts
        </title>
        <meta
          name="title"
          content="New Nexa Baleno CNG Price in Hyderabad | Maruti Baleno 2023 Price, Offers & Discounts"
        />
        <meta
          name="description"
          content="Nexa New Baleno On- Road Price in Hyderabad. Maruti Baleno 2023 On Road Price Starts from ₹ 6.49* Lakh. Maruti Baleno is Now Available with Head up Display, Equipped With 6 Airbags, Hill Hold Assist, Speed Alert System. Visit Your Nearest Saboo Nexa Showroom for Nexa Baleno CNG Offers & Discounts. Call now."
        />
        <meta
          name="keywords"
          content="Nexa Baleno CNG Price, Baleno offers & disconts, Baleno mileage,Nexa Baleno CNG price, Maruti baleno on road price, Maruti baleno variants, baleno images, baleno mileage, Nexa Baleno CNG price in hyderabad, Maruti baleno price in hyderabad, baleno price in hyderabad, baleno onroad price in hyderabad, offers on baleno, baleno offers 2023, new baleno price, new baleno price in hyderabad, new baleno 2023 price, new baleno 2023 onroad price, baleno petrol price in hyderabad, baleno 2023 petrol price in hyderabad, new age baleno, new baleno 2023, baleno 2023 price"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/the-new-maruti-baleno/"
        />
        <meta
          property="og:title"
          content="Nexa Baleno CNG On Road Price in Hyderabad | Maruti Baleno Offers & Discounts"
        />
        <meta
          property="og:description"
          content="New Nexa Baleno CNG 2023 price in Hyderabad. Maruti Baleno on Road price starts from ₹ 6.35* Lakh. Maruti Baleno is now available with 1.2litre DualJet, Dual VVT, BS6 engine with Smart Hybrid tech. Visit your nearest Saboo Nexa showroom for Nexa Baleno CNG offers & discounts. Call now."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Baleno.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/the-new-maruti-baleno/"
        />
        <meta
          property="twitter:title"
          content="Nexa Baleno CNG On Road Price in Hyderabad | Maruti Baleno Offers & Discounts"
        />
        <meta
          property="twitter:description"
          content="New Nexa Baleno CNG 2023 price in Hyderabad. Maruti Baleno on Road price starts from ₹ 6.35* Lakh. Maruti Baleno is now available with 1.2litre DualJet, Dual VVT, BS6 engine with Smart Hybrid tech. Visit your nearest Saboo Nexa showroom for Nexa Baleno CNG offers & discounts. Call now."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Baleno.jpg"
        />
      </Helmet>
      <Header  />
      <div className="h-16 bg-black lg:h-20  "></div>
      <div className="h-1 bg-black  "></div>
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

      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/BALENO-cng-banner-mobile.webp')] sm:bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/BALENO-cng-banner-desktop.webp')]  bg-cover bg-no-repeat  sm:h-[60vh] h-[80vh]">
        <div className="max-w-6xl ">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2">
            <div className="my-auto mx-5 pt-[90%] md:pt-10 ">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Logo-baleno.webp"
                className="p-3 md:ml-20 lg:ml-36"
                alt="title"
              />
              <a
                href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/The_New_Age_Baleno_Brochure.pdf"
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
      <OnRoadPrice title={"BALENO CNG"} />
      <div className="text-center font-semibold my-8 container mx-auto ">
        <div className="text-2xl  py-4 pt-8">RESPONSIBLY BOLD</div>
        Future never looked so good. With the NEXA S-CNG, your search for a
        smart and conscious drive finds the final destination. Presenting the
        New Age Baleno S-CNG, now equipped with Maruti Suzuki’s tested and
        reliable S-CNG technology. Now it's your turn to take the road to green
        fuel mobility for a progressive and premium driving experience.
      </div>
      <BalenoCNGSlider />
      {/* <div className='text-center my-6 container mx-auto pb-6'>
        <div className='text-2xl font-semibold '>REGISTER YOUR INTEREST</div>
        <div className='container  px-6 md:px-12 lg:px-24 py-2 sm:py-5'>
          Register Now To Know All About The Advanced Features Of Grand Vitara
          CNG
        </div>
        <hr className='w-1/5 mx-auto' />
      </div> */}
      <div className="text-2xl text-center font-medium py-4 pt-10 ">
        THE NEW AGE BALENO S-CNG SPECIFICATIONS
      </div>
      <Features />
    </>
  );
};

const BalenoCNGSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Baleno+airbag.webp",
      title: "6 Airbags",
      body: "A perfect balance of smart design and safety, go bold with 6 Airbags (Side and Curtain) that provide advanced protection.",
    },
    {
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/BALENO-Chasis.webp",
      title: "Factory Fitted S-CNG",
      body: "Our CNG cylinder is fitted on the new-generation chassis platform using Ultra and Advanced High Tensile Steels that aids the car to resist deformation. It also comes with a neatly placed fire extinguisher to ensure your safety.",
    },
    {
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Feature-1170x521-Rear-USB-Ctype.webp",
      title: "Rear USB Type A and Type C Charger",
      body: "Never run out of charge for your gadgets with the best-in-segment Rear USB Type A and Type C fast charging ports.",
    },
    {
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/image.webp",
      title: " Rear AC Vents",
      body: " Enjoy a breezy feel even on the hottest days with the Rear AC Vents in the New Age Baleno.",
    },
    {
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Tilt-telescopic.webp",
      title: "Telescopic Steering",
      body: "Experience nimble yet refined driving experience with a Tilt and Telescopic steering that lets you adjust the steering as per your convenience. With enhanced steering returnability and high-speed straight-line stability, drive firmly within your reach.",
    },
    {
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/SuzukiConnect-2.webp",
      title: "Suzuki Connect",
      body: "Get future-ready and keep a track of real-time updates without breaking a sweat with Suzuki Connect. With Nexa S-CNG, now buckle up to enter a whole new world of unique driving experience.",
    },
  ];
  return (
    <div className="">
      <div className="container mx-auto text-center ">
        <div className="text-2xl font-medium py-4 pt-8 ">
          THE NEW AGE BALENO FEATURES
        </div>
        <div className="">Convenience Goes Bold</div>
        {/* <div className="text-center text-md lg:text-lg">
          Convenience Goes Bold
        </div> */}
        <div className="py-2 sm:pt-5">
          <div className=" space-y-4 rounded ">
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
              className="hidden  mySwiper-3 md:block"
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

export default BalenoCNG;

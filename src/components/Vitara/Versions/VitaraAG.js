import Header from '../../../components/Header/Header';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Extras/styles.css';
import Helmet from 'react-helmet';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

import TabNavigationAG from '../Extras/TabNavigationAG';
import TabNavigationAGFeatures from '../Extras/TabNavigationAGFeatures';

const VitaraAG = () => {
  return (
    <>
      <Helmet>
        <title>Nexa Grand Vitara AllGrip On Road Price | Saboo Nexa</title>
        <meta
          name='title'
          content='Nexa Grand Vitara AllGrip On Road Price | Saboo Nexa'
        />
        <meta
          name='description'
          content='Maruti Suzuki Grand Vitara, a new breed of SUV by Nexa. Grand Vitara comes with the new all grip technology.  Maruti NEXA Grand Vitara Alpha AllGrip  price is Rs 16.89 lakh. Book now get amazing deals.'
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
      <Header col={true} />
      <div className='container mx-auto py-16 space-y-4 rounded'>
        {/* <Carousel /> */}
        <Swiper
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
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/Drive+Mode+Selector+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/Panoramic+Sunroof+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/Black+_+Bordeaux+Dual+Tone+Interiors+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/SmartPlay+Pro+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/Projector+Headlamps+webp+(2).webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/LED+Tail+Lamps+webp+(1).webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/R+17+Dual+Tone+Precision+Cut+Alloy+Wheels+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/all-grip/DRLs+webp+(1).webp' alt="" />
          </SwiperSlide>
        </Swiper>
        <IntelligentElectric />
      </div>
    </>
  );
};

function IntelligentElectric() {
  return (
    <div className='container mx-auto py-16 space-y-4'>
      <p className='font-bold text-4xl text-center'>
        The Grand Vitara With AllGrip Select
      </p>
      <p className=' text-center tracking-wider font-bold'>
        Rule every terrain
      </p>
      <p className='bg-black h-1 w-60 mx-auto'></p>
      <p className='max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl'>
        Tackle any terrain and conquer every road. Go beyond the ordinary and
        rule every road. This is the Advanced Grand Vitara, equipped with Suzuki
        AllGrip Select, a legendary four-wheel drive technology from Suzuki.
        Experience different driving styles with a simple push-and-turn dial to
        adjust the electronically controlled four-wheel-drive system as per your
        next adventure
      </p>
      <br></br>
      <br></br>
      <p className=' text-center tracking-wider font-bold'>
        How AllGrip Select Works?
      </p>
      <div className='flex justify-center'>
        <iframe
          className='w-full aspect-video'
          src='https://www.youtube-nocookie.com/embed/63IME4Vu2DI?si=V8xNi8T7AalNkFRI&amp;controls=0&rel=0'
          title='Maruti Suzuki| Smart Hybrid Technology'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
      <br></br>
      <br></br>
      <br></br>
      {/* <div>
        <h1 className=' text-center tracking-wider font-bold'>
          Progressive Smart Hybrid Technology
        </h1>

        <p className='max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl'>
          The Grand Vitara is engineered for better performance and a refined
          driving experience with the Next Generation 1.5L K Series Engine with
          The Progressive Smart Hybrid Technology. It’s integrated starter
          generator, paired with a Li-ion and Lead Acid Battery, helps in
          regenerating braking energy and provides torque assist to the engine
          during acceleration.
        </p>
      </div> */}
      <TabNavigationAG />
      <TabNavigationAGFeatures />
    </div>
  );
}

export default VitaraAG;

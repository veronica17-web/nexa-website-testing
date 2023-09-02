import Header from '../../../components/Header/Header';

import { Swiper, SwiperSlide } from 'swiper/react';
import Helmet from 'react-helmet';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Extras/styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

// import Carousel from '../Extras/Carousel'; alt=""
import TabNavigationMT from '../Extras/TabNavigationMT';

const VitaraAT = () => {
  return (
    <>
      <Helmet>
        <title>Nexa Grand Vitara 6 Speed Automtic Transmissions Price </title>
        <meta
          name='title'
          content='Nexa Grand Vitara 6 Speed Automtic Transmissions Price '
        />
        <meta
          name='description'
          content='Nexa Grand Vitara 6 Speed Automatic Price Starts at 13.40Lac*. Maruti Suzuki Grand Vitara Comes with Panoramic Sunroof, 6- Air bags, 6-Speed Automatic Transmission. For More Info & Offers Visit Nearest Saboo Nexa Showroom Today or Call Us 9848898488.'
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
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-8+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-7+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-6+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-19+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-15+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-14+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-13+webp.webp' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-12+webp.webp' alt="" />
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
        The Grand Vitara with 6-Speed Automatic Transmission
      </p>
      <p className=' text-center tracking-wider font-bold'>
        Rule the city streets
      </p>
      <p className='bg-black h-1 w-60 mx-auto'></p>
      <p className='max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl'>
        A new breed of SUVs has arrived and it’s here to rule every road it
        drives on, efficiently. This is the Advanced Grand Vitara with the
        revolutionary Intelligent Electric Hybrid System.
      </p>
      <br></br>
      <br></br>
      <p className=' text-center tracking-wider font-bold'>
        How Intelligent Electric Hybrid Works?
      </p>
      <div className='flex justify-center'>
        <iframe
          className='w-full aspect-video'
          src='https://www.youtube.com/embed/63IME4Vu2DI?controls=0&rel=0'
          title='Maruti Suzuki | Smart Hybrid Technology'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1 className=' text-center tracking-wider font-bold'>
          The Grand Vitara with 6-Speed Automatic Transmission
        </h1>

        <p className='max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl'>
          Get in. Drive. Relax. Feel the road fade away as you effortlessly
          cruise and bask in the glory of the majestic views. This is the
          experience of driving the Advanced Grand Vitara with the 6-Speed
          Automatic Transmission. It has steering-mounted Paddle Shifters that
          make every drive more exciting and engaging. Smooth to drive. Fast to
          accelerate. The perfect way to tackle city traffic and to cruise over
          highways.
        </p>
      </div>
      <TabNavigationMT />
    </div>
  );
}

export default VitaraAT;

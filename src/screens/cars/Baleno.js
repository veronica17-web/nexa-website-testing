import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageViewer from '../../components/BALENO/ImageViewer';
import OnRoadPrice from '../../components/utils/OnRoadPrice';
import Features from '../../components/BALENO/Features';
import { MdOutlineFileDownload } from 'react-icons/md';
import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Baleno() {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <Helmet>
        <title>
          New Nexa Baleno Price in Hyderabad | Maruti Baleno 2022 Price, Offers
          & Discounts
        </title>
        <meta
          name='title'
          content='New Nexa Baleno Price in Hyderabad | Maruti Baleno 2022 Price, Offers & Discounts'
        />
        <meta
          name='description'
          content='Nexa New Baleno On- Road Price in Hyderabad. Maruti Baleno 2022 On Road Price Starts from ₹ 6.49* Lakh. Maruti Baleno is Now Available with Head up Display, Equipped With 6 Airbags, Hill Hold Assist, Speed Alert System. Visit Your Nearest Saboo Nexa Showroom for Nexa Baleno Offers & Discounts. Call now.'
        />
        <meta
          name='keywords'
          content='Nexa Baleno Price, Baleno offers & disconts, Baleno mileage,Nexa baleno petrol price, Maruti baleno on road price, Maruti baleno variants, baleno images, baleno mileage, Nexa baleno price in hyderabad, Maruti baleno price in hyderabad, baleno price in hyderabad, baleno onroad price in hyderabad, offers on baleno, baleno offers 2022, new baleno price, new baleno price in hyderabad, new baleno 2022 price, new baleno 2022 onroad price, baleno petrol price in hyderabad, baleno 2022 petrol price in hyderabad, new age baleno, new baleno 2022, baleno 2022 price'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboonexa.in/the-new-maruti-baleno/'
        />
        <meta
          property='og:title'
          content='Nexa Baleno On Road Price in Hyderabad | Maruti Baleno Offers & Discounts'
        />
        <meta
          property='og:description'
          content='New Nexa Baleno 2022 price in Hyderabad. Maruti Baleno on Road price starts from ₹ 6.35* Lakh. Maruti Baleno is now available with 1.2litre DualJet, Dual VVT, BS6 engine with Smart Hybrid tech. Visit your nearest Saboo Nexa showroom for Nexa Baleno offers & discounts. Call now.'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Baleno.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/the-new-maruti-baleno/'
        />
        <meta
          property='twitter:title'
          content='Nexa Baleno On Road Price in Hyderabad | Maruti Baleno Offers & Discounts'
        />
        <meta
          property='twitter:description'
          content='New Nexa Baleno 2022 price in Hyderabad. Maruti Baleno on Road price starts from ₹ 6.35* Lakh. Maruti Baleno is now available with 1.2litre DualJet, Dual VVT, BS6 engine with Smart Hybrid tech. Visit your nearest Saboo Nexa showroom for Nexa Baleno offers & discounts. Call now.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Baleno.jpg'
        />
      </Helmet>
      <Header />
      <div className="relative">
        <div className="top-0 left-0 w-full h-screen ">
          <video
            className="object-cover w-full h-full "
            preload="metadata"
            loop
            autoPlay
            playsInline
            muted
            poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/new_baleno/1.webp"
          >
            <source
              // class='w-30 h-30'
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/baleno/Baleno.webm"
              type="video/mp4"
            />
          </video>
          <div className="absolute bottom-40 lg:bottom-24 left-[3%] lg:left-[5%] text-white ">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="500"
              className="text-2xl lg:text-4xl"
            >
              THE NEW AGE
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
              className="pb-1 font-serif text-5xl uppercase lg:text-8xl"
            >
              BALENO
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
              className="mb-2 text-2xl uppercase lg:text-5xl lg:mb-4"
            >
              TECH GOES BOLD
            </div>
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/The_New_Age_Baleno_Brochure.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1000"
                className="px-4 py-2 uppercase border hover:text-white hover:bg-black hover:border-black lg:px-8"
              >
                BROCHURE
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/Baleno_Banner_Blue.webp)] bg-cover bg-no-repeat bg-center pt-20 overflow-hidden '>
        <div className='container mx-auto'>
          <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 py-16 lg:py-0'>
            <div className='my-auto mx-auto space-y-5 px-8 sm:px-0'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/logobaleno-white-new.webp'
                className='mx-auto'
                alt='title'
              />
              <a
                href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/The_New_Age_Baleno_Brochure.pdf'
                className='p-3 bg-black text-gray-200 flex items-center max-w-[200px] ml-3'
                target='_blank'
                rel='noreferrer'
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
            <div className='col-span-2'>
              <div className='mx-auto'>
                {/* Granite-Grey */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/CelestialBlue.webp'
                  alt='Saboo-Nexa-Baleno-Colours-CelestialBlue'
                  className={
                    tabsColors === 1
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />

                {/* Nexa-Blue */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/ArticWhite.webp'
                  alt='Saboo-Nexa-Baleno-Colours-NEXA-ArticWhite'
                  className={
                    tabsColors === 2
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />

                {/* Pearl-Arctic-White */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/SplendidSilver.webp'
                  alt='Saboo-Nexa-Baleno-Colours-SplendidSilver'
                  className={
                    tabsColors === 3
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />

                {/* Metallic-Auburn */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/GrandeurGrey.webp'
                  alt='Saboo-Nexa-Baleno-Colours-GrandeurGrey'
                  className={
                    tabsColors === 4
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />

                {/* Premium Silver */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/OpulantRed.webp'
                  alt='Saboo-Nexa-Baleno-Colours-OpulantRed'
                  className={
                    tabsColors === 5
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />

                {/* brave khaki */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/LuxeBeige.webp'
                  alt='Saboo-Nexa-Baleno-Colours-LuxeBeige'
                  className={
                    tabsColors === 6
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />
              </div>
              <div className='flex items-center justify-center mb-3'>
                <div onClick={() => setTabsColors(1)}>
                  <div className={tabsColors === 1 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#31416d] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#31416d]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 1 ? 'w-6 h-6 bg-[#31416d] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(2)}>
                  <div className={tabsColors === 2 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#ffffff] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#ffffff]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 2 ? 'w-6 h-6 bg-[#ffffff] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(3)}>
                  <div className={tabsColors === 3 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#afb3b8] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                  </div>
                  <p
                    className={
                      tabsColors !== 3 ? 'w-6 h-6 bg-[#afb3b8] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(4)}>
                  <div className={tabsColors === 4 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#545454] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#545454]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 4 ? 'w-6 h-6 bg-[#545454] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(5)}>
                  <div className={tabsColors === 5 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#a31326] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#a31326]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 5 ? 'w-6 h-6 bg-[#a31326] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(6)}>
                  <div className={tabsColors === 6 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#704e40] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#704e40]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 6 ? 'w-6 h-6 bg-[#704e40] mr-2' : 'hidden'
                    }
                  ></p>
                </div>
              </div>
              <p
                className={
                  tabsColors === 1
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Nexa Blue
              </p>
              <p
                className={
                  tabsColors === 2
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Pearl Arctic White
              </p>
              <p
                className={
                  tabsColors === 3
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Splendid Silver
              </p>
              <p
                className={
                  tabsColors === 4
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Grandeur Grey
              </p>
              <p
                className={
                  tabsColors === 5
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Opulent Red
              </p>
              <p
                className={
                  tabsColors === 6
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Luxie Beige
              </p>
            </div>
          </div>
        </div>
      </div>
      <Variant />
      <ImageViewer />
      <OnRoadPrice title={'Baleno'} />
      <Features />
      <ImageOptions />
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState('6,61,000');
  return (
    <div className='bg-black py-8'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-3 md:space-y-0 space-y-3'>
          <div className='space-y-3 mx-auto md:mx-0'>
            <p className='uppercase text-gray-300'>select car Variant</p>
            <select
              name='model'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
            >
              <option value='6,61,000'>SIGMA </option>
                          <option value='7,45,000'>DELTA</option>
                          <option value='8,38,000'>ZETA</option>
                          <option value='9,33,000'>ALPHA </option>
                          <option value='8,35,000'>DELTA CNG</option>
                          <option value='9,28,000'>ZETA CNG</option>
                          <option value='8,00,000'>DELTA AT</option>
                          <option value='8,90,000'>ZETA AT</option>
                          <option value='9,88,000'> ALPHA AT</option>
            </select>
          </div>
          <div className='text-center text-gray-200'>
            <p className='text-2xl font-bold'>₹ {price}*</p>
            <p className='tracking-wide text-xl'>Ex-Showroom Price</p>
            <p className='uppercase text-gray-400 font-bold'>Hyderabad</p>
          </div>
          <div className='mx-auto'>
            <p className='text-gray-100 mb-6 text-center'>
              You might have pre-approved loan offers
            </p>
            <Link
              to='/maruti-car-finance'
              className='py-2 px-4 bg-white rounded shadow uppercase tracking-wide'
            >
              Check for loan offers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageOptions = () => {
  return (
    <div className='container mx-auto px-2 md:px-0'>
       <div className='grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 '>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-1177x751-exterior-liquid-flow.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Front-Lamp'
            className='w-full'
          />
        </div>
        <div className='my-auto mx-auto space-y-3 py-2 md:p-8'>
          <p className='text-3xl  font-medium '>Enhanced Liquid Flow Design</p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>
            The New Age Baleno is a sight to behold. Carrying forward the Liquid
            Flow Aesthetic, it exudes boldness from every curve. Its dynamic
            stance with strong shoulders and sharp character lines flow with
            harmony, from front to back. So, no matter if you see it coming, or
            passing by, you won’t be able to look away.
          </p>
        </div>
      </div>

       <div className='grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 '>
        <div className='my-auto mx-auto space-y-3 p-2'>
          <p className='text-3xl  font-medium'>NEXWave Grille</p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>
            The signature NEXWave Grille is the first thing you see when you
            look upon the New Age Baleno. And it gets harder to look anywhere
            else. This artistically crafted grille with accentuated chrome
            strips gives Baleno a wider look, making it even more intimidating
            than ever before.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-749x751-grille.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Front-Gril'
            className='w-full'
          />
        </div>
      </div>

       <div className='grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 '>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-751x379-alloy-wheels.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Alloy-Wheel'
            className='w-full'
          />
        </div>
        <div className='my-auto mx-auto space-y-3 p-2'>
          <p className='text-3xl  font-medium'>
            16-Inch Precision Cut Alloy Wheels
          </p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>
            They are bold. They are sharp. And they drive the style quotient of
            the New Age Baleno to a whole new level. Even when parked. These new
            16-Inch Precision Cut Alloy Wheels are crafted to perfection and are
            made to stand out.
          </p>
        </div>
      </div>

       <div className='grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 '>
        <div className='my-auto mx-auto space-y-3 p-2'>
          <p className='text-3xl  font-medium'>Interior Design</p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>
            The New Age Baleno is more than just good looks. It is comfort
            reimagined. So, immerse yourself in the state-of-the-art cabin
            crafted with sleek chrome accentuation with smooth and natural flow
            lines. Bask in the glory of the Dual-tone Interiors with Piano Black
            inserts. And relax in the lap of the comfortable seats with deep
            curves for an indulgent experience like never before.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-1177x751-interior.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp'
            className='w-full'
          />
        </div>
      </div>
      <div className='grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 '>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-749x751-LED-DRLs.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp'
            className='w-full'
          />
        </div>
        <div className='my-auto mx-auto space-y-3 p-2 md:p-8'>
          <p className='text-3xl  font-medium'>
            NEXTre' LED Rear Combination Lights
          </p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>
            The New Age Baleno never ceases to bowl you over with its looks.
            Even when viewed from behind. The sharp and stylish NEXTre’ LED Rear
            Combination Lights flow and merge effortlessly with the Liquid Flow
            Aesthetics of the Baleno, adding more flair to its bold looks.
          </p>
        </div>
      </div>
      <div className='grid shadow-lg sm:grid-cols-2 px-2 py-4 md:p-8 '>
        <div className='my-auto mx-auto space-y-3 p-2'>
          <p className='text-3xl  font-medium'>
            LED Projector Headlamps With NEXTre’ LED DRLs
          </p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>
            The night is when the New Age Baleno truly comes alive. Driving down
            the beautiful tarmac, the Projector Headlamps with signature NEXTre’
            LED DRLs make a bold impression that is hard to forget. These
            crystal-clear Headlamps and sharp DRLs can brighten up any road. Day
            or night. Moreover, they can detect the lighting conditions around
            you and automatically turn on or off.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-751x379-Rear-lamps.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp'
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
};
export default Baleno;

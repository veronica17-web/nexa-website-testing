import React, { useState } from 'react';
import Header from '../../components/Header/Header';
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Helmet from 'react-helmet';
// import { Autoplay, Navigation, Pagination } from 'swiper';
import OnRoadPrice from '../../components/utils/OnRoadPrice';
import { MdOutlineFileDownload } from 'react-icons/md';
// import Carousel from '../../components/Jimny/Extras/Carousel';
import MobileCarousel from '../../components/Jimny/Extras/MobileCarousel';

// const width = window.innerWidth;

const Jimny = () => {
  return (
    <>
      <Header />
      <Helmet>
        <Helmet>
          <title>
            Maruti Suzuki Jimny On-Road Price in Hyderabad | Saboo NEXA
          </title>
          <meta
            name='title'
            content='Maruti Suzuki Jimny On-Road Price in Hyderabad | Saboo NEXA'
          />
          <meta
            name='description'
            content='Discover the on-road price of Maruti Suzuki Jimny in Hyderabad for a convenient car ownership experience. Visit your nearesh Saboo Nexa dealer for test drive,  Jimny offers and more information. Call now for Maruti Suzuki Jimny on road price in Hyderabad'
          />
       
        </Helmet>
      </Helmet>
      <VariantPlayer />
      <JimnyInteriorAndOther />
      <OnRoadPrice />
      {/* {width > 425 ? <Carousel /> : <MobileCarousel />} */}
      <div className='hidden sm:block'>
        <div className='flex h-[60vh] bg-white gap-1 px-2 pt-1'>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3  bg-no-repeat bg-cover bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/1-811x629-AR_SN_JIMNY_HILL+DESCENT+CONTROL+SHOT_V1+copy.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              
              <span className='font-semibold text-lg'>
              HILL HOLD ASSIST
              </span>
              <span className='font-thin tracking-wider'>
              Climb like a mountain goat on the steepest roads
              </span>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/2-811x629-AR_SN_JIMNY_HILL+DESCENT+CONTROL+SHOT_V1.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <span className='font-semibold text-lg'>
              HILL DESCENT CONTROL
              </span>
              <span className='font-thin tracking-wider'>
              Take control with the push of a button
              </span>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/3-Jimmy-811x629-1.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <span className='font-semibold text-lg'>
              BRAKE LSD
              </span>
              <span className='font-thin tracking-wider'>
              Be the unstoppable force on the most stubborn terrain
              </span>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/4-811x629-AR_AB_BP_JIMNY_6_AIRBAG_SHOT_03_04.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <span className='font-semibold text-lg'>
              6 AIRBAGS
              </span>
              <span className='font-thin tracking-wider'>
              The thrill of the ride is only possible with safety on your side
              </span>
            </div>
          </div>
          
        </div>
      </div>
      <div className='sm:hidden'>
      <MobileCarousel />
      </div>
      {/* <Carousel /> */}
    </>
  );
};

function JimnyInteriorAndOther() {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <div className=' mx-auto py-4 space-y-4'>
      <p className='font-bold text-4xl text-center'>Maruti Suzuki Jimny</p>
      <p className=' text-center tracking-wider font-bold'>
        A Story passed down four generations
      </p>
      <p className='bg-black h-1 w-60 mx-auto'></p>
      <p className='max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl'>
        The Jimny has been on a long journey down the evolutionary road.
        Selected by the nature for the harshest conditions, it has seen and
        survived the worst. Only getting tougher with experience as it's
        teacher.
      </p>

      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/jimmy-color-bg.webp')] bg-cover bg-no-repeat">
        <div className='max-w-1xl mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-2'>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/Jimny+Brochure_Saboo+RKS.3fe320502cb6720e78de.pdf'
              className='m-3 p-3 bg-black text-gray-200 flex items-center max-w-[200px] ml-3 rounded'
              target='_blank'
              rel='noreferrer'
            >
              <MdOutlineFileDownload size={10} />
              &nbsp;Download Brochure
            </a>
            <div className='col-span-2'>
              <>
                <div className='ml-auto mr-1 mt-24'>
                  {/* 1. yellow bluish black roof */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Kinetic_Yellow_Bluish_Black_Roof.webp'
                    alt='KINETIC YELLOW BLUISH BLACK ROOF'
                    className={tabsColors === 1 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 2. sizzling red bluish black roof */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Sizzling_Red_Bluish_Black_Roof.webp'
                    alt='SIZZLING RED WITH BLUISH BLACK ROOF'
                    className={tabsColors === 2 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 3. nexa blue */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Nexa_Blue.webp'
                    alt='NEXA BLUE'
                    className={tabsColors === 3 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 4. bluish black */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Bluish_Black.webp'
                    alt='BLUISH BLACK'
                    className={tabsColors === 4 ? 'flex mx-auto' : 'hidden'}
                  />
                  {/* 5. sizzling red */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Sizzling_Red.webp'
                    alt='SIZZLING RED'
                    className={tabsColors === 5 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* 6. granite gray */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Granite_Gray.webp'
                    alt='GRANITE GRAY'
                    className={tabsColors === 6 ? 'flex mx-auto' : 'hidden'}
                  />
                  {/* 7. pearl white */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Pearl_Artcic_White.webp'
                    alt='PEARL WHITE'
                    className={tabsColors === 7 ? 'flex mx-auto' : 'hidden'}
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <div onClick={() => setTabsColors(1)}>
                    <div className={tabsColors === 1 ? 'relative' : 'hidden'}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/icons/kinetic-yellow-bluish-black-roof+(2).webp')] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#ffffff]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 1
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/icons/kinetic-yellow-bluish-black-roof+(2).webp')] mr-2"
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(2)}>
                    <div className={tabsColors === 2 ? 'relative' : 'hidden'}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/icons/j-red-bluish-black-roof+(1).webp')] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#fcf9f9]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 2
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/icons/j-red-bluish-black-roof+(1).webp')] mr-2 border"
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(3)}>
                    <div className={tabsColors === 3 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#153473] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 3
                          ? 'w-6 h-6 bg-[#153473] mr-2 border'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(4)}>
                    <div className={tabsColors === 4 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#060622] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 4
                          ? 'w-6 h-6 border bg-[#060622] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(5)}>
                    <div className={tabsColors === 5 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#b21511] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 5
                          ? 'w-6 h-6 border bg-[#b21511] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(6)}>
                    <div className={tabsColors === 6 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#494b4f] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#fffefe]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 6
                          ? 'w-6 h-6 border bg-[#494b4f] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(7)}>
                    <div className={tabsColors === 7 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 mr-[10px] bg-[#f9f9f9] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#ffffff]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 7
                          ? 'w-6 h-6 bg-[#f9f9f9] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>
                </div>
                <>
                  <p
                    className={
                      tabsColors === 1
                        ? 'text-center font-light text-sm my-2 text-white'
                        : 'hidden'
                    }
                  >
                    KINETIC YELLOW BLUISH BLACK ROOF
                  </p>

                  <p
                    className={
                      tabsColors === 2
                        ? 'text-center font-light text-sm my-2 text-white'
                        : 'hidden'
                    }
                  >
                    SIZZLING RED WITH BLUISH BLACK ROOF
                  </p>
                  <p
                    className={
                      tabsColors === 3
                        ? 'text-center font-light text-sm my-2 text-white'
                        : 'hidden'
                    }
                  >
                    NEXA BLUE
                  </p>
                  <p
                    className={
                      tabsColors === 4
                        ? 'text-center font-light text-sm my-2 text-white'
                        : 'hidden'
                    }
                  >
                    BLUISH BLACK
                  </p>
                  <p
                    className={
                      tabsColors === 5
                        ? 'text-center font-light text-sm my-2 text-white'
                        : 'hidden'
                    }
                  >
                    SIZZLING RED
                  </p>
                  <p
                    className={
                      tabsColors === 6
                        ? 'text-center font-light text-sm my-2 text-white'
                        : 'hidden'
                    }
                  >
                    GRANITE GRAY
                  </p>
                  <p
                    className={
                      tabsColors === 7
                        ? 'text-center font-light text-sm my-2 text-white'
                        : 'hidden'
                    }
                  >
                    PEARL WHITE
                  </p>
                </>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const VariantPlayer = () => {
  return (
    <div className=''>
      <video class='w-screen' autoplay='autoplay' loop>
        <source
          class='w-30 h-30'
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/video/JIMNY+1.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  );
};

export default Jimny;

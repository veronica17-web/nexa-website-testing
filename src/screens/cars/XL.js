import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageViewer from '../../components/XL/ImageViewer';
import OnRoadPrice from '../../components/utils/OnRoadPrice';
import Features from '../../components/XL/Features';
import { MdOutlineFileDownload } from 'react-icons/md';
import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';

function XL() {
  useEffect(() => {
    let location = window.location.pathname;
    sessionStorage.setItem('car', location);
  }, []);

  const [tabsColors, setTabsColors] = useState(1);

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Nexa XL6 Price in Hyderabad | Maruti XL6 On Road Price in Hyderabad
        </title>
        <meta
          name='title'
          content='Nexa XL6 Price in Hyderabad | Maruti XL6 On Road Price in Hyderabad'
        />
        <meta
          name='description'
          content='Nexa XL6 On-Road Price in Hyderabad. Maruti Suzuki XL6 On road Price starts at ₹ 11.29 lakh. For more details about XL6 features, specifications, mileage, colors and images visit our site or call us 98488 98488'
        />
        <meta
          name='keywords'
          content='XL6 on road price, XL6 mileage, XL6 offers & disconuts,xl6 on road price, Maruti xl6 offers, xl6 mileage,Nexa xl6 petrol price, Maruti xl6 on road price, Maruti xl6 variants, xl6 images, xl6 mileage, Nexa xl6 price in hyderabad, Maruti xl6 price in hyderabad, xl6 price in hyderabad, xl6 onroad price in hyderabad, offers on xl6, xl6 offers 2022, new xl6 price, new xl6 price in hyderabad, new xl6 2022 price, new xl6 2022 onroad price, xl6 petrol price in hyderabad, xl6 2022 petrol price in hyderabad'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboonexa.in/the-xl6/' />
        <meta
          property='og:title'
          content='Nexa XL6 On Road Price in Hyderabad | Maruti XL6 Offers in Hyderabad'
        />
        <meta
          property='og:description'
          content='Nexa XL6 2022 price in Hyderabad. Maruti Suzuki XL6 on road price starts at ₹ 10.14* lakh. For more details about XL6 features, specifications, mileage, colors and images visit our site or call us 98488 98488'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/the-xl6/'
        />
        <meta
          property='twitter:title'
          content='Nexa XL6 On Road Price in Hyderabad | Maruti XL6 Offers in Hyderabad'
        />
        <meta
          property='twitter:description'
          content='Nexa XL6 2022 price in Hyderabad. Maruti Suzuki XL6 on road price starts at ₹ 10.14* lakh. For more details about XL6 features, specifications, mileage, colors and images visit our site or call us 98488 98488'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg'
        />
      </Helmet>
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-Background-Banners/XL6-Banner.webp')] bg-cover bg-no-repeat pt-20">
        <div className='max-w-6xl mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
            <div className='my-auto mx-auto'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/White_XL6.png'
                className='my-5 h-24'
                alt='title'
              />
              <a
                href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/THE+ALL-NEW+XL6+Brochure.pdf'
                className='p-3 bg-black text-gray-200 flex items-center max-w-[200px]'
                target='_blank'
                rel='noreferrer'
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
            <div className='col-span-2'>
              <>
                <div className='ml-auto mr-32 mt-24'>
                  {/* Nexa Blue */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Nexa-Blue.webp'
                    alt='Nexa-Blue'
                    className={tabsColors === 1 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* Opulent-red */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Metallic-Auburn-Red.webp'
                    alt='OPULENT-RED'
                    className={tabsColors === 2 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* BRAVE-KHAKI */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Brave-Khaki.webp'
                    alt='BRAVE-KHAKI'
                    className={tabsColors === 3 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* GRANDEUR-GREY */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Metallic-Magma-Grey.webp'
                    alt='GRANDEUR-GREY'
                    className={tabsColors === 4 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* SPLENDID-SILVER */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Metallic-Premium-Silver.webp'
                    alt='SPLENDID-SILVER'
                    className={tabsColors === 5 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* ARCTIC-WHITE */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Arctic-White.webp'
                    alt='ARCTIC-WHITE'
                    className={tabsColors === 6 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* DUAL_OPPULENT_RED */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_OPPULENT_RED.webp'
                    alt='DUAL_OPPULENT_RED'
                    className={tabsColors === 7 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* DUAL_BRAVE_KHAKI */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_BRAVE_KHAKI.webp'
                    alt='DUAL_BRAVE_KHAKI'
                    className={tabsColors === 8 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* DUAL_SPLENDID_SILVER */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_SPLENDID_SILVER.webp'
                    alt='DUAL_SPLENDID_SILVER'
                    className={tabsColors === 9 ? 'flex mx-auto' : 'hidden'}
                  />
                </div>
                <div className='flex items-center justify-center'>
                  {/* Nexa Blue */}
                  <div onClick={() => setTabsColors(1)}>
                    <div className={tabsColors === 1 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 mr-[10px] bg-[#183f66] mx-auto border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#183f66]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 1
                          ? 'w-6 h-6 bg-[#183f66] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  {/* Opulent-red */}
                  <div onClick={() => setTabsColors(2)}>
                    <div className={tabsColors === 2 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 mr-[10px] bg-[#ae314e] mx-auto border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#ae314e]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 2
                          ? 'w-6 h-6 bg-[#ae314e] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  {/* Brave-khaki */}
                  <div onClick={() => setTabsColors(3)}>
                    <div className={tabsColors === 3 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 mr-[10px] bg-[#4f3f23] mx-auto border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#4f3f23]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 3
                          ? 'w-6 h-6 bg-[#4f3f23] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  {/* Grandeur-grey */}
                  <div onClick={() => setTabsColors(4)}>
                    <div className={tabsColors === 4 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 mr-[10px] bg-[#545454] mx-auto border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#545454]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 4
                          ? 'w-6 h-6 bg-[#545454] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  {/* Splendid-silver */}
                  <div onClick={() => setTabsColors(5)}>
                    <div className={tabsColors === 5 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 mr-[10px] bg-[#afb3b8] mx-auto border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#afb3b8]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 5
                          ? 'w-6 h-6 bg-[#afb3b8] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  {/* Arctic white */}
                  <div onClick={() => setTabsColors(6)}>
                    <div className={tabsColors === 6 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 mr-[10px] bg-[#eeeff0] mx-auto border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#eeeff0]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 6
                          ? 'w-6 h-6 bg-[#eeeff0] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  {/* Dual Oppulent Red */}
                  <div onClick={() => setTabsColors(7)}>
                    <div className={tabsColors === 7 ? 'relative' : 'hidden'}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/opulent-red-with-midnight-black-roof.png')] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    </div>
                    <p
                      className={
                        tabsColors !== 7
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/opulent-red-with-midnight-black-roof.png')] mr-2"
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  {/* Dual Brave Khaki */}
                  <div onClick={() => setTabsColors(8)}>
                    <div className={tabsColors === 8 ? 'relative' : 'hidden'}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/brave-khak-with-midnight-black-roof.png')] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    </div>
                    <p
                      className={
                        tabsColors !== 8
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/brave-khak-with-midnight-black-roof.png')] mr-2"
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(9)}>
                    <div className={tabsColors === 9 ? 'relative' : 'hidden'}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/splendid-silver-with-midnight-black-roof.png')] mx-auto border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    </div>
                    <p
                      className={
                        tabsColors !== 9
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/splendid-silver-with-midnight-black-roof.png')] mr-2"
                          : 'hidden'
                      }
                    ></p>
                  </div>
                </div>
                <>
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
                    Oppulent Red
                  </p>
                  <p
                    className={
                      tabsColors === 3
                        ? 'text-center font-semibold text-lg my-2'
                        : 'hidden'
                    }
                  >
                    Brave Khaki
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
                    Splendid Silver
                  </p>
                  <p
                    className={
                      tabsColors === 6
                        ? 'text-center font-semibold text-lg my-2'
                        : 'hidden'
                    }
                  >
                    Arctic White
                  </p>
                  <p
                    className={
                      tabsColors === 7
                        ? 'text-center font-semibold text-lg my-2'
                        : 'hidden'
                    }
                  >
                    Oppulent Red with Midnight Black Roof
                  </p>
                  <p
                    className={
                      tabsColors === 8
                        ? 'text-center font-semibold text-lg my-2'
                        : 'hidden'
                    }
                  >
                    Brave Khaki with Midnight Black Roof
                  </p>
                  <p
                    className={
                      tabsColors === 9
                        ? 'text-center font-semibold text-lg my-2'
                        : 'hidden'
                    }
                  >
                    Splendid Silver with Midnight Black Roof
                  </p>
                </>
              </>
            </div>
          </div>
        </div>
      </div>
      <Variant />
      <ImageViewer />
      <OnRoadPrice title={'XL6'} />
      <Features />
      <ImageOptions />
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState('11,56,000');
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
             <option value='11,56,000'>ZETA</option>
                          <option value='12,56,000'>ALPHA</option>
                          <option value='13,16,000'>ALPHA+</option>
                          <option value='13,32,000'>ALPHA+ (D)</option>
                          <option value='12,51,000'>ZETA CNG</option>
                          <option value='13,06,000'>ZETA AT</option>
                          <option value='14,06,000'>ALPHA AT</option>
                          <option value='14,66,000'>ALPHA+ AT</option>
                          <option value='14,82,000'>ALPHA+ AT (D)</option>
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
    <div className='max-w-6xl mx-auto px-2 md:px-0'>
      <div className='grid sm:grid-cols-2'>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/imageOptions/FRONT_GRILLE.webp'
            alt='Infotainment'
            className='w-full'
          />
        </div>
        <div className='my-auto mx-auto px-2 lg:px-8 space-y-3'>
          <p className='text-3xl font-medium'>
            Bold Front Grille With Sweeping X-Bar Element
          </p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>
            An imposing front fascia with a sweeping X-bar is designed for those
            who like to arrive in style.
          </p>
        </div>
      </div>

      <div className='grid mt-2 sm:grid-cols-2 px-2 lg:px-8'>
        <div className='my-auto mx-auto space-y-3 pb-2'>
          <p className='text-3xl font-medium'>
            Quad Chamber LED Reflector Headlamps
          </p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>
            Reflect true indulgence with the stunning Quad Chamber LED Reflector
            Headlamps that brighten up the darkest of nights.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/imageOptions/Quad-front-chamber.webp'
            alt='XL6 Interior Gear'
            className='w-full'
          />
        </div>
      </div>

      <div className='grid mt-2 sm:grid-cols-2 px-2 lg:px-8'>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/imageOptions/LED-tail-Lamps.webp'
            alt='Exteriors Slide Window'
            className='w-full'
          />
        </div>
        <div className='my-auto mx-auto space-y-3 '>
          <p className='text-3xl font-medium'>
            Smoky Grey LED Tail Lamps With Light Guide
          </p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>
            The aesthetically designed 3D tail lamps (RCL) with LED lights guide
            and smoke gray lens take the indulgent looks of the All-New XL6 up a
            notch.
          </p>
        </div>
      </div>

      <div className='grid mt-2 sm:grid-cols-2 px-2 lg:px-8'>
        <div className='my-auto mx-auto  space-y-3'>
          <p className='text-3xl font-medium'>
            Dashboard With Premium Stone Finish
          </p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>
            Designed to leave you spellbound, the exquisitely sculpted dashboard
            with a premium stone finish and rich silver accents give elegance a
            new name.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/xl6_Interior.webp'
            alt='Exteriors Slide main'
            className='w-full'
          />
        </div>
      </div>

      <div className='grid mt-2 sm:grid-cols-2 px-2 lg:px-8'>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/imageOptions/ALLOY.webp'
            alt='Exteriors Slide Window'
            className='w-full'
          />
        </div>
        <div className='my-auto mx-auto space-y-3 '>
          <p className='text-3xl font-medium'>
            Dual-Tone Machined Finish R16 Alloy Wheels
          </p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>
            Crafted with precision and detail, the two-toned machined-finish R
            16 Alloy Wheels ensure you make a statement wherever you go.
          </p>
        </div>
      </div>

      <div className='grid mt-2 sm:grid-cols-2 px-2 lg:px-8'>
        <div className='my-auto mx-auto  space-y-3 pb-2'>
          <p className='text-3xl font-medium'>Back Door Spoiler</p>
          <p className='h-1 w-20 bg-black rounded-full '></p>
          <p>Leave a lasting impression with a wide and accentuated look.</p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/roof-end-spoiler.webp'
            alt='Exteriors Slide main'
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default XL;

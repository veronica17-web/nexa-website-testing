import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

function TabNavigationAGFeatures() {
  return (
    <>
      <Tab.Group>
        <div className='flex items-center justify-center py-8'>
          <Tab.List className='space-x-1'>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-black text-gray-200 px-4 py-2 rounded shadow outline-none'
                  : 'bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none'
              }
            >
              4WD Control
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-black text-gray-200 px-4 py-2 rounded shadow outline-none'
                  : 'bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none'
              }
            >
              Synergetic Vehicle Dynamics Control
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-black text-gray-200 px-4 py-2 rounded shadow outline-none'
                  : 'bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none'
              }
            >
              ESP
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-black text-gray-200 px-4 py-2 rounded shadow outline-none'
                  : 'bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none'
              }
            >
              Powertrain Control
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* Ciaz 360° view  */}

            {/* exterior */}
            <Tab.Panel>
              <AutoMode />
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <SportMode />
              {/* <HyrbridDrive /> */}
            </Tab.Panel>

            {/* color */}
            <Tab.Panel>
              <SnowMode />
              {/* <EngineDrive /> */}
            </Tab.Panel>

            <Tab.Panel>
              {/* <RegenerativeBraking /> */}
              <LockMode />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}

const AutoMode = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div class='flex flex-wrap bg-white justify-center'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/hybrid-02.webp' />
          </div>
          <div className='grid grid-rows-3 grid-flow-col gap-4'>
            <div className='invisible py-4 '>01</div>
            <p className='py-1 font-light text-xl'>
              The Advanced Dual Battery System (Li-ion and Lead Acid) stores the
              energy generated while braking and provides power to the ISG that
              assists during acceleration. It results in a powerful and fuel
              efficient drive.
            </p>
            <div class='invisible py-4 '>03</div>
          </div>
        </div>
      </div>
    </>
  );
};

const SportMode = () => {
  const [interiorSwiper, setInteriorSwiper] = useState(null);
  return (
    <>
      <div class='flex flex-wrap bg-white justify-center'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/hybrid-02.webp' />
          </div>
          <div className='grid grid-rows-3 grid-flow-col gap-4'>
            <div className='invisible py-4 '>01</div>
            <p className='py-1 font-light text-xl'>
              It assists engine power during acceleration using the energy
              stored in the Advanced Dual Battery System.
            </p>
            <div class='invisible py-4 '>03</div>
          </div>
        </div>
      </div>
    </>
  );
};

const SnowMode = () => {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <div class='flex flex-wrap bg-white justify-center'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/hybrid-02.webp' />
          </div>
          <div className='grid grid-rows-3 grid-flow-col gap-4'>
            <div className='invisible py-4 '>01</div>
            <p className='py-1 font-light text-xl'>
              The ISG converts the energy from braking and stores it in the
              Advanced Dual Battery System.
            </p>
            <div class='invisible py-4 '>03</div>
          </div>
        </div>
      </div>
    </>
  );
};
const LockMode = () => {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <div class='flex flex-wrap bg-white justify-center'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <img src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/hybrid-02.webp' />
          </div>
          <div className='grid grid-rows-3 grid-flow-col gap-4'>
            <div className='invisible py-4 '>01</div>
            <p className='py-1 font-light text-xl'>
              The ISG converts the energy from braking and stores it in the
              Advanced Dual Battery System.
            </p>
            <div class='invisible py-4 '>03</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabNavigationAGFeatures;

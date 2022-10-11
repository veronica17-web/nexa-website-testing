import React from 'react';
import { render } from 'react-dom';
import { FullpageAccordion, Panel } from 'react-fullpage-accordion';
import 'react-fullpage-accordion/dist/react-fullpage-accordion.css';
import './styles.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { FaDoorOpen } from 'react-icons/fa';

const Carousel = () => {
  return (
    <div className='App m-2 shadow-2xl rounded-lg'>
      <FullpageAccordion>
        <Panel
          itemId='0'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-27-IEH.webp'
        >
          <p className=''>Rules with revolutionary technology</p>
          <p className='hfont'>
            <a href='/vitaraih' className=' md-10 font-bold text-l text-white'>
              Intelligent Hybrid Electric ϟ
            </a>
          </p>
          <Link to='vitaraih'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
        <Panel
          itemId='1'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-26-Allgrip.webp'
        >
          <p>Rules with a firm grip</p>
          <p>
            <a href='/vitaraag' className='font-bold text-l text-white'>
              All Grip
            </a>
          </p>
          <Link to='/vitaraag'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
        <Panel
          itemId='2'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-32-AT.webp'
        >
          <p>Rules with utmost comfort</p>
          <p>
            <a href='/vitaraat' className='font-bold text-l text-white'>
              6 Speed Automatic
            </a>
          </p>
          <Link to='/vitaraag'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
        <Panel
          itemId='3'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-33-MT.webp'
        >
          <p>Rules with a powerful persona</p>
          <p>
            <a href='/vitaramt' className='font-bold text-l text-white'>
              5 Speed Manual
            </a>
          </p>
          <Link to='/vitaramt'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
      </FullpageAccordion>
    </div>
  );
};

export default Carousel;

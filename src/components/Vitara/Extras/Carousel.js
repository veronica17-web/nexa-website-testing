import React from 'react';
import { render } from 'react-dom';
import { FullpageAccordion, Panel } from 'react-fullpage-accordion';
import 'react-fullpage-accordion/dist/react-fullpage-accordion.css';
import './styles.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { FaDoorOpen } from 'react-icons/fa';

const Carousel = () => {
  return (
    <div className='App m-2 shadow-2xl scale-100 rounded-lg'>
      <FullpageAccordion>
        <Panel
          itemId='0'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-27-IEH.webp'
        >
          <p className=''>Rules with revolutionary technology</p>
          <p className='hfont'>
            <a
              href='/grand-vitara-features-intelligent-electric-hybrid'
              className=' md-10 font-bold text-l text-white'
            >
              Intelligent Hybrid Electric ϟ
            </a>
          </p>
          <Link to='/grand-vitara-features-intelligent-electric-hybrid'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
        <Panel
          itemId='1'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-26-Allgrip.webp'
        >
          <p>Rules with a firm grip</p>
          <p>
            <a
              href='/grand-vitara-allgrip'
              className='hfont font-bold text-l text-white'
            >
              All Grip
            </a>
          </p>
          <Link to='/grand-vitara-allgrip'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
        <Panel
          itemId='2'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-32-AT.webp'
        >
          <p>Rules with utmost comfort</p>
          <p>
            <a
              href='/grand-vitara-6-speed-automatic-transmission-price'
              className='hfont font-bold text-l text-white'
            >
              6 Speed Automatic
            </a>
          </p>
          <Link to='/grand-vitara-6-speed-automatic-transmission-price'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
        <Panel
          itemId='3'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-33-MT.webp'
        >
          <p>Rules with a powerful persona</p>
          <p>
            <a
              href='/grand-vitara-5-speed-manual-transmission-price'
              className='hfont font-bold text-l text-white'
            >
              5 Speed Manual
            </a>
          </p>
          <Link to='/grand-vitara-5-speed-manual-transmission-price'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
      </FullpageAccordion>
    </div>
  );
};

export default Carousel;

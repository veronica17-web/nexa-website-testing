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
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-10C_Engine.webp'
        >
          <p className=''>Shaping exhilarating drives.</p>
          <text className='hfont'>1.0L TURBO BOOSTERJET ENGINE</text>
          <Link to='/' className='invisible'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
        <Panel
          itemId='1'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-12k_Engine.webp'
        >
          <p>Forged for new age performance.</p>
          <text className='hfont'>
            ADVACNED 1.2L K-SERIES DUAL-JET, DUAL VVT ENGINE
          </text>
          <Link to='/' className='invisible'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>

        <Panel
          itemId='2'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-Smart_Hybird.webp'
        >
          <p>Where smartness and efficiency take shape.</p>
          <text className='hfont'>SMART HYBRID TECHNOLOGY</text>
          <Link to='/' className='invisible'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>

        <Panel
          itemId='3'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-AGS.webp'
        >
          <p>Go through the gears in a new way.</p>
          <text className='hfont'>
            6 SPEED AUTOMATIC TRANSMISSION WITH PADDLE SHIFTERS
          </text>
          <Link to='/' className='invisible'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>

        <Panel
          itemId='4'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-AMT.webp'
        >
          <p>Shaped for comfort and convenience.</p>
          <text className='hfont'>AUTO GEAR SHIFT</text>
          <Link to='/' className='invisible'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
      </FullpageAccordion>
    </div>
  );
};

export default Carousel;

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
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/1-811x629-AR_SN_JIMNY_HILL+DESCENT+CONTROL+SHOT_V1+copy.webp'
        >
          <p className=''>Climb like a mountain goat on the steepest roads</p>
          <text className='hfont'>HILL HOLD ASSIST</text>
          <Link to='/' className='invisible'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
        <Panel
          itemId='1'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/2-811x629-AR_SN_JIMNY_HILL+DESCENT+CONTROL+SHOT_V1.webp'
        >
          <p>Take control with the push of a button</p>
          <text className='hfont'>HILL DESCENT CONTROL</text>
          <Link to='/' className='invisible'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
        <Panel
          itemId='2'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/3-Jimmy-811x629-1.webp'
        >
          <p>Be the unstoppable force on the most stubborn terrain</p>
          <text className='hfont'>BRAKE LSD</text>
          <Link to='/' className='invisible'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
        <Panel
          itemId='3'
          background='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/4-811x629-AR_AB_BP_JIMNY_6_AIRBAG_SHOT_03_04.webp'
        >
          <p>
            The thrill of the ride is only possible with safety on your side
          </p>
          <text className='hfont'>6 AIRBAGS</text>
          <Link to='/' className='invisible'>
            <FaDoorOpen size='50px' />
          </Link>
        </Panel>
      </FullpageAccordion>
    </div>
  );
};

export default Carousel;

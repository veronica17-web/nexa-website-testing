import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

function About() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Best Maruti Suzuki Dealer in Hyderabad & Secundrabad | Saboo Nexa
        </title>
        <meta
          name='title'
          content='Best Maruti Suzuki Dealer in Hyderabad & Secundrabad | Saboo Nexa'
        />
        <meta
          name='description'
          content='SABOO Maruti is Hyderabad’s leading automobile dealership and has been driving growth in domains of automobile sales and service over the last four decades. We are extensively spread across the city with four sales outlets, seven workshops, one commercial outlet and two premium car outlets NEXA.'
        />
        <meta
          name='keywords'
          content='Maruti dealers in Hyderabad, Nexa Delaers in Hyderabad, Nexa Cars Hyderabad, Nexa Balneo, Nexa Scross, Nexa Ignis, Nexa Ciaz, Nexa Xl6,Maruti baleno,maruti ciaz, maruti ignis, maruti xl6,maruti scross'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboonexa.in/about-us/' />
        <meta
          property='og:title'
          content='Maruti Suzuki Nexa Car Dealer in Hyderabad & Secunderabad |Saboo Nexa'
        />
        <meta
          property='og:description'
          content='SABOO Maruti is Hyderabad’s leading automobile dealership and has been driving growth in domains of automobile sales and service over the last four decades. We are extensively spread across the city with four sales outlets, seven workshops, one commercial outlet and two premium car outlets NEXA.'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/About-us.webp'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/about-us/'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Nexa Car Dealer in Hyderabad & Secunderabad |Saboo Nexa'
        />
        <meta
          property='twitter:description'
          content='SABOO Maruti is Hyderabad’s leading automobile dealership and has been driving growth in domains of automobile sales and service over the last four decades. We are extensively spread across the city with four sales outlets, seven workshops, one commercial outlet and two premium car outlets NEXA.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/About-us.webp'
        />
      </Helmet>
      <div className='shadow sm:px-0 px-4'>
        <p className='mx-auto container py-4'>
          <Link to='/'>Home</Link> / About
        </p>
      </div>
      <h1 className='text-center text-3xl py-8 font-bold'>ABOUT US</h1>
      <div className='container mx-auto py-16'>
        <div className='grid md:grid-cols-2 px-5 bg-gray-100'>
          <div className='my-48'>
            <p className='text-gray-100'>
              <span className='text-black font-medium leading-loose'>
                Saboo RKS has been at the forefront of Hyderabad's automotive
                industry, driving growth in automobile sales and service for
                over four decades. With a history dating back to 1973, we began
                as a 2-wheeler dealership and have since expanded to include
                4-wheelers, becoming an esteemed Maruti Suzuki dealer in 1997.
                Our extensive reach throughout the city is comprised of five
                sales outlets, nine workshops, four pre-owned vehicle sales
                outlets, one commercial outlet, and two premium NEXA
                dealerships.
              </span>{' '}
            </p>
          </div>
          <div>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Maruti-Suzuki-Nexa_Lumbini.webp'
              className='max-w-full w-full lg:-mt-20'
              alt='Maruti-Suzuki-Nexa_Lumbini'
            />
          </div>
        </div>
      </div>

      <div className='container mx-auto py-16'>
        <div className='grid md:grid-cols-2 gap-4 px-5 bg-gray-100'>
          <div>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Maruti-Suzuki-Nexa_Jubilee.webp'
              className='max-w-full w-full lg:-mt-20'
              alt='Maruti-Suzuki-Nexa_Jubilee'
            />
          </div>
          <div className='space-y-4 my-48'>
            <p className='text-gray-100'>
              <span className='text-black font-medium leading-loose'>
                At RKS MOTOR PVT LTD, we firmly believe in the "Customers for
                Life" philosophy and strive to deliver exceptional value to our
                customers by providing world-class products and services. Our
                skilled and enthusiastic workforce, equipped with cutting-edge
                technology and modern facilities, is dedicated to ensuring your
                complete satisfaction and comfort with each and every
                interaction. Our unwavering commitment to bringing you joy and
                positively impacting your life is a shared vision that drives us
                forward. With a proven track record of outstanding service
                quality and customer satisfaction, we are excited to grow
                alongside the ever-evolving business landscape. We remain agile
                and proactive in anticipating and embracing change, continuously
                reinventing ourselves to meet your needs.
              </span>{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

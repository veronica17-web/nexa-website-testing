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
        <div className='grid md:grid-cols-2 gap-4 px-5 bg-gray-100'>
          <div className='space-y-4 my-48'>
            <p className='text-gray-100'>
              <span className='text-black font-medium'>
                SABOO RKS is Hyderabad’s leading automobile dealership and has
                been driving growth in domains of automobile sales and service
                over the last four decades. We have been into automobile
                business since 1973 and have graduated from 2-wheeler to
                4-wheeler with the prestigious dealership of Maruti Suzuki in
                1997. We are extensively spread across the city with five sales
                outlets, nine workshops, four true value(pre-owned) sales
                outlets, one commercial outlet and two premium car outlets NEXA.
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
              <span className='text-black font-medium'>
                We believe in "Customers for Life" concept and strive to provide
                the best value for money to our customers by offering
                world-class products and services. Our trained and passionate
                workforce, supported by state-of-the-art technology and
                contemporary facilities, is committed to make you feel
                comfortable while suitably addressing your requirements each
                time, every time. At RKS MOTOR PVT LTD, we work relentlessly in
                pursuit of a common goal - to bring joy to you, and touch your
                life in a positive way. With an excellent track record for the
                impeccable quality of our service and customer satisfaction, we
                look forward to growing in a dynamic business environment. We
                also keep up with the need to anticipate and embrace change and
                continuously reinvent ourselves.
              </span>{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

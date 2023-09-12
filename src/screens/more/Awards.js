import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
function Awards() {
  const awards = [
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Maruti-suzuki-nexa-highest-wholesale-growth-runner-up.jpg',
      title: 'Maruti Suzuki Nexa Highest Wholesale Growth Runner-up',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Maruti-suzuki-nexa-one.jpg',
      title: 'Maruti Suzuki Nexa One',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Maruti-suzuki-rm-excellence-award.jpg',
      title: 'Maruti Suzuki RM Excellence Award',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-%20rm-excellence-award.jpg',
      title: 'Nexa RM Excellence Award',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-alpha-dealer-award-2016-2017.jpg',
      title: 'Nexa Alpha Dealer Award 2016-2017',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-award-for-highest-conversion-in-manpower-certification.jpg',
      title: 'Nexa Award for Highest Conversion in Manpower Certification',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-award-for-innovation-and-excellence-2018.jpg',
      title: 'Nexa Award for Innovation and Excellence 2018',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-best-product-launch-award.jpg',
      title: 'Nexa Best Product Launch Award',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-best-product-launch-winner.jpg',
      title: 'Nexa Best Product Launch Winner',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-alpha-dealer-2017.jpg',
      title: 'Nexa Alpha Dealer 2017',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-best-sop.jpg',
      title: 'Nexa Best SOP',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-composite-rating-quarter-winner-hyderabad.jpg',
      title: 'Nexa Composite Rating Quarter Winner (Hyderabad)',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-emerging-outlet-of-the-year.jpg',
      title: 'Nexa Emerging Outlet of the Year',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-highest-certified-manpower.jpg',
      title: 'Nexa Highest Certified Manpower',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-relationship-manager-certification-contest-1st-runnerup.jpg',
      title: 'Nexa Relationship Manager Certification Contest 1st Runner-up',
    },
    {
      imageUrl:
        'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-relationship-manager-certification-winner.jpg',
      title: 'Nexa Relationship Manager Certification Winner',
    },
  ];
  return (
    <>
      <Helmet>
        <title>Awards & Achievements | Nexa Car Dealers in Hyderabad</title>
        <meta
          name='title'
          content='Awards & Achievements | Nexa Car Dealers in Hyderabad'
        />
        <meta
          name='description'
          content="RKS Motor Pvt. Ltd. has won the  'Alpha Award' for 6 times from Maruti Suzuki, based on the performance parameters for the year of 2016-2021."
        />
        <meta name='keywords' content='Nexa Awards, Maruti Awards' />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboonexa.in/' />
        <meta
          property='og:title'
          content='Awards & Achievements | Nexa Car Dealers in Hyderabad'
        />
        <meta
          property='og:description'
          content="RKS Motor Pvt. Ltd. has won the  'Alpha Award' for 6 times from Maruti Suzuki, based on the performance parameters for the year of 2016-2021."
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/About-us.webp'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.saboonexa.in/' />
        <meta
          property='twitter:title'
          content='Awards & Achievements | Nexa Car Dealers in Hyderabad'
        />
        <meta
          property='twitter:description'
          content="RKS Motor Pvt. Ltd. has won the  'Alpha Award' for 6 times from Maruti Suzuki, based on the performance parameters for the year of 2016-2021."
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/About-us.webp'
        />
      </Helmet>
      <Header />
      <div className='bg-black h-[4.1rem] md:hidden'></div>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/maruti-suzuki-awards.webp'
        className='max-w-full w-full'
        alt='finance banner'
      />
      <div className='shadow sm:px-0 px-4'>
        <p className='mx-auto container py-4'>
          <Link to='/'>Home</Link> / Awards
        </p>
      </div>
      <div className='container mx-auto py-16'>
        <div className='grid md:grid-cols-4 gap-8 md:px-0 grid-cols-2 px-5'>
          {awards.map((award, index) => (
            <div
              key={index}
              className='bg-gray-200 h-100  rounded-lg overflow-hidden'
            >
              <img
                src={award.imageUrl}
                alt={award.title}
                className='rounded-lg max-w-full h-auto mx-auto mb-4'
              />
              <p className='text-center pb-3'>{award.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Awards;

import React from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const gallery = [
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2897-1.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2934-2.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2943-3.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2947-4.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2957-5.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2975-6.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2983-7.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_3015-8.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/Vartha-9.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/Minuguru+paper-10.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/Ninadam+paper-11.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/Disha-12.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-1.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-2.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-3.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-4.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-5.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-6.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-7.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-8.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-9.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-10.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-11.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-12.webp',
  },

  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/1.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/2.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/3.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/4.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/5.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/6.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/7.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/8.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/9.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/10.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/11.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/12.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/13.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/14.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/15.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/16.webp',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Maruti-Suzuki-Nexa-XL6.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Maruti-Suzuki-Nexa-XL6--Launch-Inauguration.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki_Nexa-Lumbini-Tanay-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Appreciation.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee-Vinay-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Appreciation.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Hyderabad-Inauguration.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Vinay-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-XL6-Bonthu-Rammohan.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-XL6-Inauguration.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Appreciation.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Celebrations.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Certificate-Appreciation.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Celebrations.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Team.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Team.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-JubileeXL6-Launch-Activities.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch-Celebrations.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch-Happy-Customer.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Celebration.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Celebrations.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Pramod-Sunil.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Vinay-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Vinay-Tany-Madhu-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Team.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Kenichi-Ayukawa-Vinay-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Celebration.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Happy-Customer.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Patel-Pramod.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Tanay-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-XL6-Happy%20-Customer.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch-Bonthu-Rammohan.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Vinay-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Vinay-Saboo-Patel.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Celebrations.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-First-Customer.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Inauguration.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Inauguration-Vinay-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Xl6-Launch.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Activities.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Bonthu-Rammohan.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Celebrations.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Dance-Activities.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Happy-Customer.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Press-Meet.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Vinay-Saboo-Tanay-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Premium-MPV.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Appreciation.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Certificate-Appreciation.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Inauguration.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Vinay-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch-Celebrations.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Happy-Customer.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Activities.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Bonthu-Rammohan.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Dance-Activities.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-XL6-Launch-Bonthu-Rammohan-Vinay-Saboo.jpg',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Team-Kenichi-Ayukawa.jpg',
  },
];

function Gallery() {
  const data = gallery;
  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 12;
  const pageVisited = pageNumber * dataPerPage;
  const displayData = data
    .slice(pageVisited, pageVisited + dataPerPage)
    .slice(0, 12)
    .map((item, i) => <img src={item.img} key={i} alt={item.img} />);

  const pageCount = Math.ceil(data.length / dataPerPage);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Nexa Showroom Images in Hyderabad | Maruti Suzuki Nexa
          Workshop Images
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Nexa Showroom Images in Hyderabad | Maruti Suzuki Nexa Workshop Images '
        />
        <meta
          name='description'
          content='Saboo Nexa authorized Maruti Suzuki Nexa Dealer in Secunderabad & Hyderabad. View latest Showroom, Maruti new car & Workshop images of Saboo Maruti.'
        />
        <meta name='keywords' content='Maruti Suzuki Nexa Showrrom' />
        <meta name='author' content='Broaddcast' />
        <link rel='canonical' href='https://www.saboonexa.in/gallery' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Maruti Suzuki Nexa Showroom in Hyderabad | Maruti Suzuki Nexa Workshop'
        />
        <meta
          property='og:description'
          content='Saboo Nexa authorized Maruti Suzuki Nexa dealer in Secunderabad & Hyderabad. Visit our website for latest showroom updates, New Maruti car images & car service updates.'
        />
        <meta property='og:url' content='https://www.saboonexa.in/gallery/' />
        <meta property='og:site_name' content='Saboo Nexa RKS Motors Pvt Ltd' />
        <meta
          property='og:image'
          itemprop='image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/gallery.jpg'
        />
        <meta property='og:image:width' content='850' />
        <meta property='og:image:height' content='445' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/gallery/'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Nexa Showroom in Hyderabad | Maruti Suzuki Nexa Workshop'
        />
        <meta
          property='twitter:description'
          content='Saboo Nexa authorized Maruti Suzuki Nexa dealer in Secunderabad & Hyderabad. Visit our website for latest showroom updates, New Maruti car images & car service updates.'
        />
        <meta
          name='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/gallery.jpgg'
        />
        <meta name='twitter:creator' content='@rksnexa' />
        <meta name='twitter:site' content='@rksnexa' />
      </Helmet>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Maruti-Suzuki-Nexa-Gallery-Banner.png'
        className='max-w-full w-full'
        alt='Gallery banner'
      />
      <div className='shadow sm:px-0 px-4'>
        <p className='mx-auto container py-4'>
          <Link to='/'>Home</Link> / Gallery
        </p>
      </div>
      <div className='container mx-auto py-16 '>
        <div className='grid md:grid-cols-4 gap-8 md:px-0 grid-cols-2 px-5'>
          {displayData}
        </div>
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={handleChange}
          containerClassName={'paginationButtons'}
          previousLinkClassName={'previousLink'}
          nextLinkClassName={'nextLink'}
          activeClassName={'activePage'}
          disabledClassName={'disabledPage'}
        />
      </div>
    </>
  );
}

export default Gallery;

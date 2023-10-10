import React from "react";
import { useState } from "react";
// import ReactPaginate from "react-paginate";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
// import { Link } from "react-router-dom";

const gallery = [
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/2.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/3.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/4.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/5.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/6.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/7.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/8.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/9.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/10.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/11.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/12.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/13.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2897-1.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2934-2.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2943-3.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2947-4.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2957-5.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2975-6.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2983-7.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_3015-8.webp",
  },
  // {
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/Vartha-9.webp",
  // },
  // {
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/Minuguru+paper-10.webp",
  // },
  // {
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/Ninadam+paper-11.webp",
  // },
  // {
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/Disha-12.webp",
  // },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-1.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-2.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-3.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-4.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-5.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-6.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-7.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-8.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-9.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-10.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-11.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-12.webp",
  },

  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/1.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/2.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/3.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/4.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/5.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/6.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/7.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/8.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/9.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/10.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/11.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/12.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/13.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/14.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/15.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/16.webp",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Maruti-Suzuki-Nexa-XL6.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Maruti-Suzuki-Nexa-XL6--Launch-Inauguration.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki_Nexa-Lumbini-Tanay-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Appreciation.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee-Vinay-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Appreciation.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Hyderabad-Inauguration.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Vinay-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-XL6-Bonthu-Rammohan.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-XL6-Inauguration.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Appreciation.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Celebrations.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Certificate-Appreciation.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Celebrations.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Team.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Team.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-JubileeXL6-Launch-Activities.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch-Celebrations.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch-Happy-Customer.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Celebration.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Celebrations.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Pramod-Sunil.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Vinay-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Vinay-Tany-Madhu-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Team.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Kenichi-Ayukawa-Vinay-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Celebration.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Happy-Customer.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Patel-Pramod.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Tanay-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-XL6-Happy%20-Customer.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch-Bonthu-Rammohan.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Vinay-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Vinay-Saboo-Patel.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Celebrations.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-First-Customer.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Inauguration.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Inauguration-Vinay-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Xl6-Launch.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Activities.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Bonthu-Rammohan.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Celebrations.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Dance-Activities.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Happy-Customer.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Press-Meet.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Vinay-Saboo-Tanay-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Premium-MPV.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Appreciation.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Certificate-Appreciation.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Inauguration.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Vinay-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch-Celebrations.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Happy-Customer.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Activities.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Bonthu-Rammohan.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Dance-Activities.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-XL6-Launch-Bonthu-Rammohan-Vinay-Saboo.jpg",
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Team-Kenichi-Ayukawa.jpg",
  },
];

function Gallery() {
  // const data = gallery;
  // const [pageNumber, setPageNumber] = useState(0);
  const [jTrue, setJTrue] = useState(false);
  const [gvTrue, setGvTrue] = useState(false);
  const [bTrue, setBTrue] = useState(false);
  const [xLTrue, setXLTrue] = useState(false);
  const [oTrue, setOTrue] = useState(false);
  const [sel, setSel] = useState(1);

  // const dataPerPage = 12;
  // const pageVisited = pageNumber * dataPerPage;
  // const displayData = data
  //   .slice(pageVisited, pageVisited + dataPerPage)
  //   .slice(0, 12)
  //   .map((item, i) => <img src={item.img} key={i} alt={item.img} />);

  // const pageCount = Math.ceil(data.length / dataPerPage);

  // const handleChange = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Nexa Showroom Images in Hyderabad | Maruti Suzuki Nexa
          Workshop Images
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Nexa Showroom Images in Hyderabad | Maruti Suzuki Nexa Workshop Images "
        />
        <meta
          name="description"
          content="Saboo Nexa authorized Maruti Suzuki Nexa Dealer in Secunderabad & Hyderabad. View latest Showroom, Maruti new car & Workshop images of Saboo Maruti."
        />
        <meta name="keywords" content="Maruti Suzuki Nexa Showrrom" />
        <meta name="author" content="Broaddcast" />
        <link rel="canonical" href="https://www.saboonexa.in/gallery" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Maruti Suzuki Nexa Showroom in Hyderabad | Maruti Suzuki Nexa Workshop"
        />
        <meta
          property="og:description"
          content="Saboo Nexa authorized Maruti Suzuki Nexa dealer in Secunderabad & Hyderabad. Visit our website for latest showroom updates, New Maruti car images & car service updates."
        />
        <meta property="og:url" content="https://www.saboonexa.in/gallery/" />
        <meta property="og:site_name" content="Saboo Nexa RKS Motors Pvt Ltd" />
        <meta
          property="og:image"
          itemprop="image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/gallery.jpg"
        />
        <meta property="og:image:width" content="850" />
        <meta property="og:image:height" content="445" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/gallery/"
        />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Nexa Showroom in Hyderabad | Maruti Suzuki Nexa Workshop"
        />
        <meta
          property="twitter:description"
          content="Saboo Nexa authorized Maruti Suzuki Nexa dealer in Secunderabad & Hyderabad. Visit our website for latest showroom updates, New Maruti car images & car service updates."
        />
        <meta
          name="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/gallery.jpgg"
        />
        <meta name="twitter:creator" content="@rksnexa" />
        <meta name="twitter:site" content="@rksnexa" />
      </Helmet>
      <Header />
      <div className="bg-black h-[4.1rem] "></div>
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Maruti-Suzuki-Nexa-Gallery-Banner.png"
        className="w-full max-w-full"
        alt="Gallery banner"
      />
      {/* <div className="px-4 shadow sm:px-0">
        <p className="container py-4 mx-auto">
          <Link to="/">Home</Link> / Gallery
        </p>
      </div>
      <div className="container py-16 mx-auto ">
        <div className="grid grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-0">
          {displayData}
        </div>
      
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handleChange}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"previousLink"}
          nextLinkClassName={"nextLink"}
          activeClassName={"activePage"}
          disabledClassName={"disabledPage"}
        />
       
      </div>  */}

      <div className="mb-10 ">
        <div className="container px-2 pt-4 mx-auto text-lg font-medium text-center uppercase lg:px-0 md:justify-start sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl sm:pt-8 lg:pt-10">
          GRAND LAUNCH OF MARUTI SUZUKI
        </div>
        <div className="container flex flex-wrap justify-center gap-2 px-2 pt-1 pb-4 mx-auto text-lg font-medium uppercase lg:px-0 lg:pb-8 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:pt-2">
          <div
            onClick={() => setSel(1)}
            className={`px-1 lg:px-2  border hover:cursor-pointer select-none hover:bg-gray-600 hover:text-white hover:shadow-lg hover:shadow-black border-black  ${
              sel === 1
                ? "bg-gray-600 text-white shadow-lg shadow-black border-gray-700 opacity-100 "
                : " opacity-50"
            }`}
          >
            Jimny
          </div>
          <div
            onClick={() => setSel(2)}
            className={`px-1 lg:px-2 border hover:cursor-pointer select-none hover:bg-gray-600 hover:text-white hover:shadow-lg hover:shadow-black border-black   ${
              sel === 2
                ? "bg-gray-600 text-white shadow-lg shadow-black border-gray-700 opacity-100 "
                : " opacity-50"
            }`}
          >
            Grand Vitara
          </div>
          <div
            onClick={() => setSel(3)}
            className={`px-1 lg:px-2  border hover:cursor-pointer select-none hover:bg-gray-600 hover:text-white hover:shadow-lg hover:shadow-black border-black   ${
              sel === 3
                ? "bg-gray-600 text-white shadow-lg shadow-black border-gray-700 opacity-100 "
                : " opacity-50"
            }`}
          >
            Baleno
          </div>
          <div
            onClick={() => setSel(4)}
            className={`px-1 lg:px-2  border hover:cursor-pointer select-none hover:bg-gray-600 hover:text-white hover:shadow-lg hover:shadow-black border-black   ${
              sel === 4
                ? "bg-gray-600 text-white shadow-lg shadow-black border-gray-700 opacity-100 "
                : " opacity-50"
            }`}
          >
            xl6
          </div>
          <div
            onClick={() => setSel(5)}
            className={`px-1 lg:px-2  border hover:cursor-pointer select-none hover:bg-gray-600 hover:text-white hover:shadow-lg hover:shadow-black border-black   ${
              sel === 5
                ? "bg-gray-600 text-white shadow-lg shadow-black border-gray-700 opacity-100 "
                : " opacity-50"
            }`}
          >
            OTHERS
          </div>

          {/* <div className="text-3xl font-medium uppercase sm:text-4xl md:text-5xl">1</div> */}
        </div>
        {/* Jimny */}
        {sel === 1 && (
          <>
            {/* <div className="container py-2 mx-auto text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl lg:pb-6">
            Maruti SUZUKI JIMNY
          </div> */}
            <div className="container grid grid-cols-2 gap-2 p-2 mx-auto overflow-hidden duration-500 bg-black rounded md:grid-cols-4 group">
              <div className="overflow-hidden col-span-2 min-h-[50vh] md:min-h-full">
                <div className="flex items-center justify-center h-full pl-4 text-3xl font-medium text-left text-white bg-opacity-40 uppercase bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/2.webp)] bg-cover xl:pr-32 py-2  w-full sm:text-4xl md:text-5xl py-auto bg-center cursor-pointer rounded ">
                  GRAND LAUNCH OF SUZUKI JIMNY AT OUR NEXA LUMBINI
                </div>
              </div>
              <div className="grid grid-cols-2 col-span-2 gap-2">
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/11.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/5.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/4.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>

                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
              </div>

              <div className="col-span-1 overflow-hidden rounded ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/3.webp"
                  alt="8"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/7.webp"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2934-2.webp"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/12.webp"
                  alt="7"
                  className=" duration-500 hover:scale-[1.20] "
                />
                {!jTrue && (
                  <div
                    onClick={() => setJTrue(true)}
                    className="absolute inset-0 flex-col items-center justify-center hidden gap-4 text-white duration-700 bg-black bg-opacity-50 rounded group-hover:flex"
                  >
                    <div className="px-4 py-2 bg-black border text-whtie">
                      + View more
                    </div>
                  </div>
                )}
              </div>

              {jTrue && (
                <>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/8.webp"
                      alt="9"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/6.webp"
                      alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/10.webp"
                      alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/9.webp"
                      alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                </>
              )}
            </div>
          </>
        )}

        {/* GRAND VITARA */}
        {sel === 2 && (
          <>
            {/* <div className="container py-2 mx-auto text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl lg:pb-6">
            Maruti SUZUKI GRAND VITARA
          </div> */}
            <div className="container grid grid-cols-2 gap-2 p-2 mx-auto overflow-hidden duration-500 bg-black rounded md:grid-cols-4 group">
              <div className="overflow-hidden col-span-2 min-h-[50vh] md:min-h-full ">
                <div className="flex items-center justify-center h-full pl-4 text-3xl font-medium text-left   uppercase bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-8.webp)] bg-cover xl:pr-32 py-2  w-full sm:text-4xl md:text-5xl py-auto bg-center cursor-pointer rounded text-white ">
                  GRAND LAUNCH OF GRAND VITARA
                </div>
              </div>
              <div className="grid grid-cols-2 col-span-2 gap-2">
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-1.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-4.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-5.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>

                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-6.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-9.webp"
                  alt="15"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-2.webp"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-11.webp"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2947-4.webp"
                  alt="7"
                  className=" duration-500 hover:scale-[1.20] "
                />
                {!gvTrue && (
                  <div
                    onClick={() => setGvTrue(!gvTrue)}
                    className="absolute inset-0 flex-col items-center justify-center hidden gap-4 text-white duration-700 bg-black bg-opacity-50 rounded group-hover:flex"
                  >
                    {/* <div className="text-xl text-white">View More </div> */}
                    <div className="px-4 py-2 bg-black border text-whtie">
                      + View more
                    </div>
                  </div>
                )}
              </div>
              {gvTrue && (
                <>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-7.webp"
                      alt="8"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-3.webp"
                      alt="16"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2943-3.webp"
                      alt="9"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2957-5.webp"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2975-6.webp"
                      alt="11"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2983-7.webp"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_3015-8.webp"
                      alt="13"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-12.webp"
                      alt="14"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                </>
              )}
            </div>
          </>
        )}

        {/* BALENO */}
        {sel === 3 && (
          <>
            {/* <div className="container py-2 mx-auto text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl lg:pb-6">
            Maruti SUZUKI Baleno
          </div> */}
            <div className="container grid grid-cols-2 gap-2 p-2 mx-auto mb-10 overflow-hidden duration-500 bg-black rounded md:grid-cols-4 group">
              <div className="overflow-hidden col-span-2 min-h-[50vh] md:min-h-full">
                <div className="flex items-center justify-center h-full pl-4 text-3xl font-medium text-left text-white bg-opacity-40 uppercase bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/9.webp)] bg-cover xl:pr-32 py-2  w-full sm:text-4xl md:text-5xl py-auto bg-center cursor-pointer rounded ">
                  GRAND LAUNCH OF SUZUKI BALENO AT OUR NEXA LUMBINI
                </div>
              </div>
              <div className="grid grid-cols-2 col-span-2 gap-2">
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/1.webp"
                    alt="1"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/2.webp"
                    alt="2"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/3.webp"
                    alt="3"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>

                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/4.webp"
                    alt="4"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/10.webp"
                  alt="5"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/15.webp"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/12.webp"
                  alt="7"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/5.webp"
                  alt="8"
                  className=" duration-500 hover:scale-[1.20] "
                />
                {!bTrue && (
                  <div
                    onClick={() => setBTrue(true)}
                    className="absolute inset-0 flex-col items-center justify-center hidden gap-4 text-white duration-700 bg-black bg-opacity-50 rounded group-hover:flex"
                  >
                    {/* <div className="text-xl text-white">View More </div> */}
                    <div className="px-4 py-2 bg-black border text-whtie">
                      + View more
                    </div>
                  </div>
                )}
              </div>

              {bTrue && (
                <>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/6.webp"
                      alt="9"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/7.webp"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/8.webp"
                      alt="11"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/11.webp"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/16.webp"
                      alt="13"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-10.webp"
                      alt="14"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/13.webp"
                      alt="15"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/14.webp"
                      alt="16"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                </>
              )}
            </div>{" "}
          </>
        )}

        {/* XL6 */}
        {sel === 4 && (
          <>
            {/* <div className="container py-2 mx-auto text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl lg:pb-6">
            Maruti SUZUKI XL6
          </div> */}
            <div className="container grid grid-cols-2 gap-2 p-2 mx-auto overflow-hidden duration-500 bg-black rounded md:grid-cols-4 group">
              <div className="overflow-hidden col-span-2 min-h-[50vh] md:min-h-full">
                <div className="flex items-center justify-center h-full pl-4 text-3xl font-medium text-left text-white bg-opacity-40 uppercase bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Celebrations.jpg)] bg-cover xl:pr-32 py-2  w-full sm:text-4xl md:text-5xl py-auto bg-center cursor-pointer rounded ">
                  GRAND LAUNCH OF MARUTI SUZUKI XL6
                </div>
              </div>
              <div className="grid grid-cols-2 col-span-2 gap-2">
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Xl6-Launch.jpg"
                    alt="1"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Inauguration.jpg"
                    alt="1"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-XL6-Inauguration.jpg"
                    alt="2"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Maruti-Suzuki-Nexa-XL6--Launch-Inauguration.jpg"
                    alt="3"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Inauguration-Vinay-Saboo.jpg"
                  alt="4"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch-Bonthu-Rammohan.jpg"
                  alt="4"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Vinay-Saboo-Tanay-Saboo.jpg"
                  alt="4"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>

              <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Press-Meet.jpg"
                  alt="4"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />

                {!xLTrue && (
                  <div
                    onClick={() => setXLTrue(true)}
                    className="absolute inset-0 flex-col items-center justify-center hidden gap-4 text-white duration-700 bg-black bg-opacity-50 rounded group-hover:flex"
                  >
                    {/* <div className="text-xl text-white">View More </div> */}
                    <div className="px-4 py-2 bg-black border text-whtie">
                      + View more
                    </div>
                  </div>
                )}
              </div>

              {xLTrue && (
                <>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch.jpg"
                      alt="4"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Bonthu-Rammohan.jpg"
                      alt="9"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-XL6-Bonthu-Rammohan.jpg"
                      alt="9"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Happy-Customer.jpg"
                      alt="9"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>

                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch.jpg"
                      alt="5"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch-Celebrations.jpg"
                      alt="5"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch-Happy-Customer.jpg"
                      alt="6"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-JubileeXL6-Launch-Activities.jpg"
                      alt="7"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Premium-MPV.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-XL6-Launch-Bonthu-Rammohan-Vinay-Saboo.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Bonthu-Rammohan.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>

                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch-Celebrations.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-First-Customer.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Happy-Customer.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Celebrations.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Dance-Activities.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Activities.jpg"
                      alt="11"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Team.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Team.jpg"
                      alt="11"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                </>
              )}
            </div>
          </>
        )}

        {/* OTHERS */}
        {sel === 5 && (
          <>
            {/* <div className="container py-2 mx-auto text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl lg:pb-6">
            Maruti SUZUKI JIMNY
          </div> */}
            <div className="container grid grid-cols-2 gap-2 p-2 mx-auto overflow-hidden duration-500 bg-black rounded md:grid-cols-4 group">
              <div className="overflow-hidden col-span-2 min-h-[50vh] md:min-h-full">
                <div className="flex items-center justify-center h-full pl-4 text-3xl font-medium text-left text-white bg-opacity-40 uppercase bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Inauguration.jpg)] bg-cover xl:pr-32 py-2  w-full sm:text-4xl md:text-5xl py-auto bg-center cursor-pointer rounded ">
                  NEXA showroom Inauguration
                </div>
              </div>
              <div className="grid grid-cols-2 col-span-2 gap-2">
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Vinay-Tany-Madhu-Saboo.jpg"
                    alt="1"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Celebrations.jpg"
                    alt="2"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Pramod-Sunil.jpg"
                    alt="3"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>

                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Vinay-Saboo.jpg"
                    alt="4"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
              </div>

              <div className="col-span-1 overflow-hidden rounded ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Patel-Pramod.jpg"
                  alt="5"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Celebration.jpg"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Tanay-Saboo.jpg"
                  alt="7"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Kenichi-Ayukawa-Vinay-Saboo.jpg"
                  alt="7"
                  className=" duration-500 hover:scale-[1.20] "
                />
                {!oTrue && (
                  <div
                    onClick={() => setOTrue(true)}
                    className="absolute inset-0 flex-col items-center justify-center hidden gap-4 text-white duration-700 bg-black bg-opacity-50 rounded group-hover:flex"
                  >
                    <div className="px-4 py-2 bg-black border text-whtie">
                      + View more
                    </div>
                  </div>
                )}
              </div>

              {oTrue && (
                <>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa.jpg"
                      alt="9"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Happy-Customer.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki_Nexa-Lumbini-Tanay-Saboo.jpg"
                      alt="11"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa.jpg"
                      alt="10"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Vinay-Saboo.jpg"
                      alt="11"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Vinay-Saboo-Patel.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Celebrations.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Appreciation.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Certificate-Appreciation.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Appreciation.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Certificate-Appreciation.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>

                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Appreciation.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Appreciation.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Celebrations.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee-Vinay-Saboo.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>

                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Hyderabad-Inauguration.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Celebration.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Team-Kenichi-Ayukawa.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer h-full w-full"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Team.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-1 overflow-hidden rounded">
                    <img
                      src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini.jpg"
                      alt="12"
                      className=" duration-500 hover:scale-[1.20] cursor-pointer"
                    />
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
      {/* <div className="mb-10 ">
        <div className="container px-2 pt-4 mx-auto text-lg font-medium text-center uppercase lg:px-0 md:justify-start sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
          SABOO NEXA WORLD
        </div>
      </div> */}
      {/* <div className="container grid grid-cols-1 gap-3 mx-auto overflow-hidden duration-500 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden duration-500 rounded shadow-lg cursor-pointer hover:shadow-black "
          >
            <img
              src={image.img}
              alt={image.img}
              className="h-full duration-500 hover:scale-[1.20] cursor-pointer"
            />
          </div>
        ))}
      </div> */}
    </>
  );
}

export default Gallery;

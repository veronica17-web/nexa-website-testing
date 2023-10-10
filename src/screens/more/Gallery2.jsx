import React from "react";
import { useState } from "react";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";



const Gallery2 = () => {
  return (
    <div>
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
    </div>
  );
};

export default Gallery2;

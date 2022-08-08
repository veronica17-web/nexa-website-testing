import React from 'react'
import { workshops } from "../../constants";
import { MdLocalPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import {IoIosPricetags} from 'react-icons/io'
import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

function Workshops() {
  return (
    <>
    <Header />
    <Helmet>
    <title>Maruti Suzuki Nexa workshop in Hyderabad & Secundrabad | Saboo Nexa</title>
    <meta name="title" content="Maruti Suzuki Nexa workshop in Hyderabad & Secundrabad | Saboo Nexa"/>
    <meta name="description" content="Saboo nexa is a leading Maruti Suzuki car dealer in Hyderabad & Secundrabad Telangana. Nexa jubliee Adress 1-65/5, KKR Square, Kavuri Hills, Madhapur, Jubilee hills, Opp - Bantia Furnitures, Hyderabad, Telangana - 500033"/>
    <meta name="keywords" content="Maruti Suzuki Nexa workshop in Hyderabad"/>
    <meta name="author" content="Broaddcast"/>
    </Helmet>
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Nexa-Outlet.webp"
        className="max-w-full w-full"
        alt="finance banner"
      />
      <div className="shadow sm:px-0 px-4">
        <p className="mx-auto container py-4"><Link to='/'>Home</Link> / Workshop</p>
      </div>
      <p className="text-3xl uppercase pt-16 text-center font-bold">Workshop</p>
      <div className="container mx-auto py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 px-5 md:px-0">
          {workshops.map((item, index) => (
            <div className="shadow-lg bg-gray-200 rounded mt-10"> 
              <div className="space-y-6 px-3 -mt-8 mb-5" key={index}>
                <iframe title="map" className="w-full shadow-lg" src={item.map}></iframe>
                <div className="bg-white shadow-md p-4 text-sm">
                  <p>{item.title}</p>
                  <p className="font-light">{item.address}</p>
                  <p className="font-light flex items-center mt-1">
                    <MdLocalPhone className="mr-2" /> 98488 98488
                  </p>
                  <p className="font-light flex items-center mt-1">
                    <FaEnvelope className="mr-2" /> info@saboomaruti.in
                  </p>
                  <p className="font-light flex items-center mt-1">
                    <IoIosPricetags className="mr-2" /> Workshop
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Workshops
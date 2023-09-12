import React from "react";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import { testimonials } from "../../constants";
import { BsQuote } from "react-icons/bs";
import { RiStarFill } from "react-icons/ri";

function Testimonial() {
  return (
    <>
      <Helmet>
        <title>Client Testimonials | Saboo Nexa | RKS Motor</title>
        <meta
          name="title"
          content="Client Testimonials | Saboo Nexa | RKS Motor"
        />
        <meta
          name="description"
          content="Read client reviews of Maruti Suzuki Baleno, Nexa Ignis, Maruti Ciaz, Nexa XL6 & Maruti SCross. Call us 98488 98488 for latest offers on Maruti Nexa cars."
        />
      </Helmet>
      <Header />
      <div className="h-16 lg:h-20 bg-[#15151e]"></div>

      <div className="bg-[#15151e] pb-12 pt-6 ">
        <p className="text-center text-white uppercase text-2xl sm:text-3xl md:text-4xl font-medium">
          Testimonials
        </p>
        <p className="text-gray-100 text-center  tracking-wider mt-1">
          What Customers Say About Us
        </p>
      </div>

      <div className="pt-8 pb-16 container mx-auto space-y-7 px-4 sm:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-6 mt-3">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="shadow-lg shadow-gray-500 rounded-3xl  bg-white hover:bg-gray-200 hover:scale-105 text-black duration-300 cursor-pointer"
            >
              {/* <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          /> */}
              <div className="flex flex-col h-full py-8">
                <div className=" text-4xl ml-10 ">
                  <BsQuote />
                </div>
                <p className="uppercase text-center text-lg ">
                  {item.author}
                </p>
                <div className="flex items-center justify-center text-red-600">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
              
                </div>
                <div className="text-center px-5  mt-6 ">
                  {item.text}
                </div>
                <div className=" text-4xl  rotate-180 mr-10 ">
                  <BsQuote />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
